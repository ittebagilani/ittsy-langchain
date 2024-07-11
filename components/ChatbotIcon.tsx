"use client";

import React, { useState } from "react";
// import { ChatWindow } from "@/components/ChatWindow";
import { useChat } from "ai/react";
import { ChatInput, ChatMessages } from "./ui/chat";
import { useClientConfig } from "./ui/chat/hooks/use-config";
import Image from "next/image";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { chatAPI } = useClientConfig();
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
    append,
    setInput,
  } = useChat({
    api: chatAPI,
    headers: {
      "Content-Type": "application/json", // using JSON because of vercel/ai 2.2.26
    },
    onError: (error: unknown) => {
      if (!(error instanceof Error)) throw error;
      let message;
      try {
        message = JSON.parse(error.message);
      } catch {
        message = { detail: error.message };
      }
      alert(message.detail);
    },
  });

  return (
    <>
      <div
        className="fixed bottom-4 right-4 bg-[#bdf4c8] p-3 rounded-full shadow-lg cursor-pointer z-50"
        onClick={handleToggle}
      >
        <Image src="/chatbot-icon.png" alt="Chatbot Icon" width={40} height={40} />
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 md:w-[25%] w-[70%] h-[70%] bg-[#122f2d] shadow-2xl rounded-lg flex flex-col z-50">
          <div className="flex justify-between items-center px-2 py-1">
            <h2 className="text-2xl font-normal ml-2 text-[#fcf0d5]">
              Ittsy Agent
            </h2>
            <button className="text-gray-500" onClick={handleToggle}>
              ✕
            </button>
          </div>
          <div className="flex-1 bg-[#fdf6ee] p-4 overflow-y-auto">
            <ChatMessages
              messages={messages}
              isLoading={isLoading}
              reload={reload}
              stop={stop}
              append={append}
            />
          </div>
          <div className="bg-[#122f2d] rounded-lg">
            <ChatInput
              input={input}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              isLoading={isLoading}
              messages={messages}
              append={append}
              setInput={setInput}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotIcon;
