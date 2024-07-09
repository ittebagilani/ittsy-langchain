// app/layout.tsx
// import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
// import { ChatWindow } from "@/components/ChatWindow"; // Ensure the correct path
import ChatbotIcon from "@/components/ChatbotIcon";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <div className="chatbot-container">
          <ChatbotIcon />
        </div>
      </body>
    </html>
  );
}
