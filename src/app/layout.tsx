import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import LoadingProvider from "@/components/common/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Websozo | Modern Digital Web Agency",
  description: "Websozo helps businesses build modern, fast, and professional websites. We focus on performance, clean UI design, and scalable development.",
  keywords: ["web development", "next.js", "react", "wordpress", "ecommerce", "portfolio", "digital agency", "websozo"],
  authors: [{ name: "Abdul Rafay" }],
  openGraph: {
    title: "Websozo | Modern Digital Web Agency",
    description: "Build your dream website with Websozo. Fast, modern, and professional web solutions.",
    type: "website",
    url: "https://websozo.com",
    siteName: "Websozo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-cyan-300`}
      >
        <LoadingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
