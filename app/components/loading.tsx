"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LightRays } from "@/components/ui/light-rays";

export default function LoadingPage() {
  const [dots, setDots] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev + 1) % 5);
    }, 200);

    const fadeOut = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    const redirect = setTimeout(() => {
      router.push("/home");
    }, 2900);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(fadeOut);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <main className={`flex flex-col items-center justify-center bg-accent-foreground w-full h-screen transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
       <link rel="icon" href="/logos.svg" sizes="any" />
        <div className="relative w-full h-screen bg-gray-950/60 flex flex-col items-center justify-center">
        <LightRays />
          {/* Logo */}
          <Image
          src="./logos.svg"
          alt="Genesis Logo"
          width={120}
          height={120}
          priority
          className={`transition-transform duration-500 ${
            isVisible ? 'scale-100' : 'scale-95'
          }`}
          />

          {/* Loading dots */}
          <div className={`flex gap-2 items-center mt-8 transition-transform duration-500 ${
          isVisible ? 'scale-100' : 'scale-95'
          }`}>
          {[...Array(4)].map((_, index) => (
            <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index <= dots ? "bg-gray-200 scale-100" : "bg-gray-100 scale-75"
            }`}
            />
          ))}
          </div>
        </div>
    </main>
  );
}