"use client";

import Image from "next/image";
import HeaderCommunity from "@/app/components/header-community";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState, useEffect } from "react";

export default function HomeComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(fadeInTimer);
  }, []);

  const slides = [
    {
      image: "/1.png",
      description: "Description for image 1. Add your text here."
    },
    {
      image: "/2.png",
      description: "Description for image 2. Add your text here."
    },
    {
      image: "/3.jpg",
      description: "Description for image 3. Add your text here."
    },
    {
      image: "/4.png",
      description: "Description for image 4. Add your text here."
    },
    {
      image: "/5.jpg",
      description: "Description for image 5. Add your text here."
    },
    {
      image: "/6.jpg",
      description: "Description for image 6. Add your text here."
    },
    {
      image: "/7.jpg",
      description: "Description for image 7. Add your text here."
    },
    {
      image: "/8.jpg",
      description: "Description for image 8. Add your text here."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className={`flex flex-col items-center justify-center gap-6 w-full transition-opacity duration-1000 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <HeaderCommunity />
      <div className="relative w-full h-66 flex items-center justify-center">
        <Image
          src="/nav-community.jpg"
          alt="Community background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <TypingAnimation className="text-white text-2xl md:text-4xl font-semibold">
        The Fountaine Project Cosplay
          </TypingAnimation>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
        Project Photo Session 12 Oktober 2025
          </p>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden group">

      </div>
    </main>
  );
}