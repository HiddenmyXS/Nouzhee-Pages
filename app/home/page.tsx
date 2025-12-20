"use client";

import Header from "../components/header"
import { useState, useEffect } from "react";
import Aurora from '@/components/Aurora';

export default function HomeComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);;

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  
  },[]);
  
return (
    <main className={`flex flex-col items-center justify-center bg-accent-foreground w-full h-screen transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Header />
            <link rel="icon" href="/logos.svg" sizes="any" />
                <div className="w-full h-screen relative bg-gradient-to-r from-slate-900/60 to-transparent">
                    <Aurora
                        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
                        <h1 className="text-6xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
                        <p className="text-xl text-white mb-8">Showcasing my projects and skills</p>
                    </div>
                </div>
    </main>
  );
}