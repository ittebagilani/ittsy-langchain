"use client";

import { useEffect, useMemo, useState } from "react";

export interface ChatConfig {
  chatAPI?: string;
  starterQuestions?: string[];
}

export function useClientConfig() {
  const API_ROUTE = "/api/chat/config";
  const chatAPI = process.env.NEXT_PUBLIC_CHAT_API;
  const [config, setConfig] = useState<ChatConfig>({
    chatAPI,
  });

  const configAPI = useMemo(() => {
    if (!chatAPI) {
      console.error("Chat API is not defined");
      return API_ROUTE;
    }

    try {
      const backendOrigin = new URL(chatAPI).origin;
      console.log("Backend origin:", backendOrigin); // Logging for debugging
      console.log("API route:", API_ROUTE); // Logging for debugging
      return `${backendOrigin}${API_ROUTE}`;
      
    } catch (error) {
      console.error("Invalid chatAPI URL:", error);
      return API_ROUTE;
    }
  }, [chatAPI]);

  useEffect(() => {
    console.log("Fetching config from:", configAPI); // Logging for debugging
    fetch(configAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log("Config data:", data); // Logging for debugging
        setConfig({ ...data, chatAPI });
      })
      .catch((error) => console.error("Error fetching config", error));
  }, [chatAPI, configAPI]);

  return config;
}
