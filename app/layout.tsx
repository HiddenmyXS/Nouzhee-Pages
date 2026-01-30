import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/header";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";
import "./globals.css";

const zector = localFont({
  src: "./fonts/Zector.ttf",
  variable: "--font-zector",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          zector.className,
          "bg-gray-950 text-white antialiased min-h-screen flex flex-col selection:text-sky-200"
        )}
      >
        <Navbar />
        
        <main className="grow relative overflow-x-hidden">
          {children}
        </main>
        
        <ScrollToTop />
      </body>
    </html>
  );
}