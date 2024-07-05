'use client';

import React, { useState } from "react";
import { ChatWindow } from "@/components/ChatWindow";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Ittsy Chatbot
      </h1>
    </div>
  );

  return (
    <>
      <div
        className="fixed bottom-4 right-4 bg-blue-500 p-3 rounded-full shadow-lg cursor-pointer z-50"
        onClick={handleToggle}
      >
        <img src="/chatbot-icon.png" alt="Chatbot Icon" className="w-10 h-10" />
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-[#fcf0d5] shadow-2xl rounded-lg flex flex-col z-50">
          <div className="flex justify-between items-center p-2 border-b border-gray-300">
            <h2 className="text-lg font-bold text-[#0c1f1e]">Message Us</h2>
            <button className="text-gray-500" onClick={handleToggle}>
              ✕
            </button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            <ChatWindow
              endpoint="api/chat/retrieval_agents"
              titleText="Ittsy AI"
              placeholder="How can I help you?"
            //   emptyStateComponent={InfoCard}
              showIngestForm={false} // Ensure the upload form is visible
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotIcon;
