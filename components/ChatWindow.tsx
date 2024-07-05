'use client';

import { useEffect, useState, useRef, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Message } from "ai";
import { useChat } from "ai/react";

import { ChatMessageBubble } from "@/components/ChatMessageBubble";
import { UploadDocumentsForm } from "@/components/UploadDocumentsForm";
import { IntermediateStep } from "./IntermediateStep";
import Image from "next/image";

const SESSION_STORAGE_KEY = "chatMessages";

interface ChatWindowProps {
  endpoint: string;
  placeholder?: string;
  titleText?: string;
  emoji?: string;
  showIngestForm?: boolean;
  showIntermediateStepsToggle?: boolean;
}

export function ChatWindow({
  endpoint,
  placeholder,
  titleText = "An LLM",
  emoji,
  showIngestForm,
  showIntermediateStepsToggle,
}: ChatWindowProps) {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const [showIntermediateSteps, setShowIntermediateSteps] = useState(false);
  const [intermediateStepsLoading, setIntermediateStepsLoading] =
    useState(false);
  const ingestForm = showIngestForm && <UploadDocumentsForm />;
  const intermediateStepsToggle = showIntermediateStepsToggle && (
    <div>
      <input
        type="checkbox"
        id="show_intermediate_steps"
        name="show_intermediate_steps"
        checked={showIntermediateSteps}
        onChange={(e) => setShowIntermediateSteps(e.target.checked)}
      />
      <label htmlFor="show_intermediate_steps"> Show intermediate steps</label>
    </div>
  );

  const [sourcesForMessages, setSourcesForMessages] = useState<Record<string, any>>({});

  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading: chatEndpointIsLoading,
    setMessages,
  } = useChat({
    api: endpoint,
    onResponse(response) {
      const sourcesHeader = response.headers.get("x-sources");
      const sources = sourcesHeader
        ? JSON.parse(Buffer.from(sourcesHeader, "base64").toString("utf8"))
        : [];
      const messageIndexHeader = response.headers.get("x-message-index");
      if (sources.length && messageIndexHeader !== null) {
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sources,
        });
      }
    },
    streamMode: "text",
    onError: (e) => {
      toast(e.message, {
        theme: "dark",
      });
    },
  });

  // Save messages to session storage whenever they change
  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Load messages from session storage when component mounts
  useEffect(() => {
    const savedMessages = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (chatEndpointIsLoading || intermediateStepsLoading) {
      return;
    }
    if (!showIntermediateSteps) {
      handleSubmit(e);
    } else {
      setIntermediateStepsLoading(true);
      setInput("");
      const messagesWithUserReply = messages.concat({
        id: messages.length.toString(),
        content: input,
        role: "user",
      });
      setMessages(messagesWithUserReply);
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          messages: messagesWithUserReply,
          show_intermediate_steps: true,
        }),
      });
      const json = await response.json();
      setIntermediateStepsLoading(false);
      if (response.status === 200) {
        const responseMessages: Message[] = json.messages;
        const toolCallMessages = responseMessages.filter(
          (responseMessage: Message) => {
            return (
              (responseMessage.role === "assistant" &&
                !!responseMessage.tool_calls?.length) ||
              responseMessage.role === "tool"
            );
          }
        );
        const intermediateStepMessages = [];
        for (let i = 0; i < toolCallMessages.length; i += 2) {
          const aiMessage = toolCallMessages[i];
          const toolMessage = toolCallMessages[i + 1];
          intermediateStepMessages.push({
            id: (messagesWithUserReply.length + i / 2).toString(),
            role: "system" as const,
            content: JSON.stringify({
              action: aiMessage.tool_calls?.[0],
              observation: toolMessage.content,
            }),
          });
        }
        const newMessages = messagesWithUserReply;
        for (const message of intermediateStepMessages) {
          newMessages.push(message);
          setMessages([...newMessages]);
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 + Math.random() * 1000)
          );
        }
        setMessages([
          ...newMessages,
          {
            id: newMessages.length.toString(),
            content: responseMessages[responseMessages.length - 1].content,
            role: "assistant",
          },
        ]);
      } else {
        if (json.error) {
          toast(json.error, {
            theme: "dark",
          });
          throw new Error(json.error);
        }
      }
    }
  }

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e);
    e.target.style.height = "auto"; // Reset height
    e.target.style.height = `${e.target.scrollHeight}px`; // Set height to the scroll height
  };

  return (
    <div
      className="flex flex-col h-full p-4 md:p-2 bg-[#fcf0d5] rounded grow overflow-hidden"
    >
      <h2
        className={`${
          messages.length > 0 ? "" : "hidden"
        } text-2xl text-[#122f2d] font-black text-center py-2`}
      >
        {emoji} {titleText}
      </h2>
      <div
        className="flex flex-col w-full mb-4 overflow-auto flex-grow"
        ref={messageContainerRef}
      >
        {messages.length > 0 &&
          messages.map((m, i) => {
            const sourceKey = i.toString();
            return m.role === "system" ? (
              <IntermediateStep key={m.id} message={m}></IntermediateStep>
            ) : (
              <ChatMessageBubble
                key={m.id}
                message={m}
                aiEmoji={emoji}
                sources={sourcesForMessages[sourceKey]}
              />
            );
          })}
        <div ref={endOfMessagesRef} />
      </div>

      {messages.length === 0 && ingestForm}

      <form onSubmit={sendMessage} className="flex flex-col w-full mt-auto">
        <div className="flex">{intermediateStepsToggle}</div>
        <div className="flex w-full mt-4 ">
          <input
            className="px-2 md:py-3 mr-2 py-4 rounded text-black resize-none overflow-hidden h-12 flex-grow bg-transparent "
            value={input}
            placeholder={placeholder ?? "What services does Ittsy offer?"}
            onChange={handleInputChange}
            autoFocus
          />
          <button
            type="submit"
            className="shrink-0 py-2 bg-[#e8e3c5] rounded w-fit md:px-4 px-4"
          >
            <div
              role="status"
              className={`${
                chatEndpointIsLoading || intermediateStepsLoading ? "" : "hidden"
              } flex justify-center w-fit`}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white animate-spin dark:text-white fill-sky-800"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5533C95.2932 28.8227 92.871 24.3691 89.8167 20.348C85.8452 15.1192 80.8826 10.7232 75.2124 7.55339C69.5422 4.38355 63.2754 2.5469 56.7649 2.13151C51.7644 1.77678 46.7593 2.05054 41.832 2.94208C39.3252 3.38837 37.861 5.91097 38.4981 8.33639C39.1352 10.7618 41.6077 12.1796 44.1299 11.7911C47.7725 11.2324 51.4886 11.0954 55.1346 11.3705C60.2629 11.7359 65.2306 13.278 69.6153 15.9057C73.9999 18.5334 77.7096 22.201 80.3767 26.6436C82.5893 30.1018 84.2413 33.8895 85.3028 37.889C86.0286 40.2471 88.5423 41.6781 90.9676 41.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
            <div
              className={`${
                chatEndpointIsLoading || intermediateStepsLoading ? "hidden" : ""
              }`}
            >
              <Image src="/send.png" alt="send button" width={20} height={20} className="text-white"/>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
