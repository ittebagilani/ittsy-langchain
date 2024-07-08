import { initObservability } from "@/app/observability";
import { Message, StreamData, StreamingTextResponse } from "ai";
import { ChatMessage, Settings } from "llamaindex";
import { NextRequest, NextResponse } from "next/server";
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
        .find((message) => message.role === "user" && message.annotations)?.annotations;
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

    return new StreamingTextResponse(stream, {}, vercelStreamData);
  } catch (error) {
    console.error("[LlamaIndex] Error:", error);

    if (error instanceof Error) {
      console.error("[LlamaIndex] Error message:", error.message);
      console.error("[LlamaIndex] Error stack:", error.stack);
    } else {
      console.error("[LlamaIndex] Unknown error type:", error);
    }

    return NextResponse.json(
      {
        detail: (error as Error).message,
      },
      {
        status: 500,
      }
    );
  } finally {
    clearTimeout(streamTimeout);
  }
}
