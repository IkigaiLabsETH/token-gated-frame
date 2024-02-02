import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppConfig } from "./AppConfig";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-8">{children}</main>
        <footer className="prose">
          <p className="p-10">
            <Link
              target="_blank"
              className="link"
              href="https://warpcast.com/julien51.eth/0xa5390f5a"
            >
              Demo
            </Link>{" "}
            |{" "}
            <Link
              target="_blank"
              className="link"
              href="https://github.com/unlock-protocol/token-gated-frame"
            >
              Source code
            </Link>{" "}
            | <span>Built by Unlock Labs, with ❤️ for Farcaster!</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
