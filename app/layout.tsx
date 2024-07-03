// app/layout.tsx
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo2.png" />
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GQXTEC13ZE"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GQXTEC13ZE');
          `}
        </Script> */}
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
        {/* <ChatWindow /> */}
      </body>
    </html>
  );
}
