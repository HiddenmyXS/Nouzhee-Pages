"use client";

import Header from "../components/header"
import { useState, useEffect } from "react";
import TextType from '@/components/TextType';
import { Github } from "lucide-react";
import { BsStackOverflow } from "react-icons/bs";
import { ImTux } from "react-icons/im";
import { SiAndroidstudio, SiLaravel, SiSqlite } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaFlutter } from "react-icons/fa6";

export default function HomeComponent() {
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="w-full h-screen relative overflow-hidden">
             
            <div className="absolute inset-0">
              <img
                src="./picture/picture-1.jpg"
                alt="Portfolio preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(5, 5, 5, 0.75) 30%, rgba(10, 10, 10, 0.5) 55%, rgba(10, 10, 10, 0.35) 80%, rgba(10, 10, 10, 0) 100%)'
              }}
            />

            <div className="relative z-10 w-full h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-8">
                <div className="max-w-lg text-left">
                  <TextType
                    className="text-5xl sm:text-6xl font-bold text-white mb-4"
                    text={["Hello!", "I`m Nouzhee", "Favorite Hobbies Cosplay and Programming", "See Ya!"]}
                    typingSpeed={95}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|" 
                  />
                  <p className="text-lg sm:text-xl text-white mb-8">
                    A Senior Programmer at Mobile Development with favorite hobbies cosplay and tech guy
                  </p>
                    <div className="relative inline-flex flex-wrap items-center justify-center gap-4">
                    <a aria-label="GitHub" className="p-1">
                      <Github className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="Stack Overflow" className="p-1">
                      <BsStackOverflow className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="Tux" className="p-1">
                      <ImTux className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="Android Studio" className="p-1">
                      <SiAndroidstudio className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="Flutter" className="p-1">
                      <FaFlutter className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="Firebase (brand)" className="p-1">
                      <TbBrandFirebase className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="SQLite" className="p-1">
                      <SiSqlite className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="React" className="p-1">
                      <GrReactjs className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>

                    <a aria-label="Laravel" className="p-1">
                      <SiLaravel className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </main>
  );
}