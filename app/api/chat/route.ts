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
    const { messages }: { messages: Message[] } = await request.json();
    const userMessage = messages.pop();
    if (!messages || !userMessage || userMessage.role !== "user") {
      return NextResponse.json(
        { error: "messages are required in the request body and the last message must be from the user" },
        { status: 400 }
      );
    }

    const chatEngine = await createChatEngine();
    let annotations = userMessage.annotations || messages.reverse().find((msg) => msg.role === "user" && msg.annotations)?.annotations;
    const userMessageContent = convertMessageContent(userMessage.content, annotations);
    const callbackManager = createCallbackManager(vercelStreamData);

    const response = await Settings.withCallbackManager(callbackManager, () => chatEngine.chat({
      message: userMessageContent,
      chatHistory: messages as ChatMessage[],
      stream: true,
    }));

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
      { detail: (error as Error).message },
      { status: 500 }
    );
  } finally {
    clearTimeout(streamTimeout);
  }
}
