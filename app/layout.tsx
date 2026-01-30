import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/header";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";
import "./globals.css";

const zector = localFont({
  src: "./fonts/Zector.ttf", // Sesuaikan path-nya
  variable: "--font-zector",
  display: "swap", // Penting agar teks muncul dulu sebelum font loading selesai
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nouzhee.my.id"), 
  
  title: {
    default: "Nouzhee — Portfolio Systems",
    template: "%s | Nouzhee",
  },
  description: "Hosting server game anti-lag, murah, dan stabil. Deploy Minecraft, FiveM, dan Node.js dalam hitungan detik. Garansi uptime 99.9% dengan proteksi DDoS bawaan.",
  
  authors: [{ name: "HiddenmyXS", url: "https://nouzhee.my.id" }],
  
};

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
          "bg-gray-950 text-white antialiased min-h-screen flex flex-col selection:bg-sky-500/30 selection:text-sky-200"
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