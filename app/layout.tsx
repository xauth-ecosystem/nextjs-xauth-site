import type { Metadata } from "next";
import "./globals.css";
import "./fontawesome.css";

import TheNavBar from "@/components/TheNavBar";
import TheFooter from "@/components/TheFooter";

export const metadata: Metadata = {
  title: "XAuth Ecosystem | Professional Identity Management",
  description: "A high-performance modular suite for Minecraft: Bedrock Edition. Providing industry-standard security since 2021.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#020617', color: '#cbd5e1', fontFamily: 'Inter, sans-serif' }}>
        <TheNavBar />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}