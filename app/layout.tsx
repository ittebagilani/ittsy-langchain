// app/layout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { ChatWindow } from "@/components/ChatWindow"; // Ensure the correct path

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo2.png" />
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
        <div className="chatbot-container">
          <ChatWindow
            endpoint="/api/chat" // Update this endpoint to your chat API endpoint
            placeholder="Type your message..."
            titleText="Itsty Chatbot"
            emoji="🤖"
            showIngestForm={true}
            showIntermediateStepsToggle={true}
          />
        </div>
      </body>
    </html>
  );
}
