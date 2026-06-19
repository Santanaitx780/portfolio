import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UWIMPUHWE Regis | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications with cutting-edge technologies.",
  keywords: [
    "full stack developer",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "portfolio",
  ],
  authors: [{ name: "UWIMPUHWE Regis" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "UWIMPUHWE Regis | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ParticleNetwork />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
