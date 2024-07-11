import { NextRequest, NextResponse } from "next/server";
import { initObservability } from "@/app/observability";
import { Message, StreamData, StreamingTextResponse } from "ai";
import { ChatMessage, Settings } from "llamaindex";
import { createChatEngine } from "./engine/chat";
import { initSettings } from "./engine/settings";
import { LlamaIndexStream, convertMessageContent } from "./llamaindex-stream";
import { createCallbackManager, createStreamTimeout } from "./stream-helper";

initObservability();
initSettings();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const vercelStreamData = new StreamData();
  const streamTimeout = createStreamTimeout(vercelStreamData);

  try {
    const body = await request.json();
    const { messages }: { messages: Message[] } = body;
    const userMessage = messages.pop();
    if (!messages || !userMessage || userMessage.role !== "user") {
      return NextResponse.json(
        {
          error: "messages are required in the request body and the last message must be from the user",
        },
        { status: 400 }
      );
    }

    const chatEngine = await createChatEngine();

    let annotations = userMessage.annotations;
    if (!annotations) {
      annotations = messages
        .slice()
        .reverse()
        .find((message) => message.role === "user" && message.annotations)
        ?.annotations;
    }

    const userMessageContent = convertMessageContent(userMessage.content, annotations);

    const callbackManager = createCallbackManager(vercelStreamData);

    const response = await Settings.withCallbackManager(callbackManager, () => {
      return chatEngine.chat({
        message: userMessageContent,
        chatHistory: messages as ChatMessage[],
        stream: true,
      });
    });

    const stream = LlamaIndexStream(response, vercelStreamData);

    const readableStream = new ReadableStream({
      async start(controller) {
        const reader = stream.getReader();

        async function read() {
          const { done, value } = await reader.read();
          if (done) {
            controller.close();
            return;
          }
          controller.enqueue(value);
          read();
        }

        read();
      },
    });

    return new StreamingTextResponse(readableStream, {}, vercelStreamData);
  } catch (error) {
    console.error("[LlamaIndex]", error);
    return NextResponse.json(
      {
        detail: (error as Error).message,
      },
      { status: 500 }
    );
  } finally {
    clearTimeout(streamTimeout);
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    chatAPI: process.env.NEXT_PUBLIC_CHAT_API,
    starterQuestions: ["How can I help you?", "Tell me more about it."],
  });
}
