"use client";

import Header from "../components/header"
import type { Metadata } from "next";
import { useState, useEffect } from "react";
import TextType from '@/components/TextType';
import { Github, GithubIcon } from "lucide-react";
import { BsStackOverflow } from "react-icons/bs";
import { ImTux } from "react-icons/im";
import { SiAndroidstudio, SiLaravel, SiSqlite } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { TbBrandFirebase, TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaFlutter } from "react-icons/fa6";

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
          <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/3.jpg"
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
                    A Junior Programmer with favorite hobbies cosplay and tech guy
                  </p>
                  <div className="relative inline-flex items-center justify-center gap-4">
                    <a>
                      <GithubIcon
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <BsStackOverflow
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <ImTux
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <SiAndroidstudio
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <FaFlutter
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <TbBrandFirebase
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <SiSqlite
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <GrReactjs
                      className="text-white w-7 h-7"
                    />
                    </a>

                    <a>
                      <SiLaravel
                      className="text-white w-7 h-7"
                    />
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}