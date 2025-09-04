import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CogniAI – AI-Powered Data Analytics Platform",
  description: "Turn raw data into actionable insights — instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
