"use client"

import Image from "next/image";
import HeaderCommunity from "../components/header-community";
import { useState, useEffect } from "react";

export default function CommunityComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  }, []);

  const slides = [
    {
      image: "./picture/picture-1.jpg",
      description: "Description for image 1."
    },
    {
      image: "./picture/picture-2.JPG",
      description: "Description for image 2."
    },
    {
      image: "./picture/picture-3.jpg",
      description: "Description for image 3."
    },
    {
      image: "./picture/picture-4.jpg",
      description: "Description for image 4."
    },
    {
      image: "./picture/picture-5.png",
      description: "Description for image 5."
    },
    {
      image: "./picture/picture-6.png",
      description: "Description for image 6."
    },
    {
      image: "./picture/picture-7.JPG",
      description: "Description for image 7."
    },
    {
      image: "./picture/picture-8.jpg",
      description: "Description for image 8."
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
      <div className="relative w-full h-screen overflow-hidden group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-300 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className={`transition-opacity duration-500 ease-in-out object-cover ${
              loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-6 sm:p-12 md:p-28 max-w-full w-full sm:w-3/4 md:w-1/2 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold style-inter text-transparent mb-2 [-webkit-text-stroke:2px_white] [text-stroke:2px_white]">
                  The Fountaine Project Cosplay
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mt-4">
                  Fontaine adalah salah satu dari tujuh wilayah utama di dunia Teyvat dalam game Genshin Impact buatan HoYoverse. Fontaine dikenal sebagai “Nation of Justice” atau Negeri Keadilan, dan dipimpin oleh Archon Hydro, yaitu Furina (Focalors).
                </p>
                {/*<a
                  href="/community/genesis"
                  role="button"
                  aria-label="View more details about The Fountaine Project Cosplay"
                  className="inline-block mt-5 px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-white text-white font-medium rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-white/10"
                >
                  View More Details
                </a>*/}
                <p className="text-xs sm:text-sm md:text-lg text-white/90 mt-4">Project Photo Session 12 Oktober 2025</p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/30 to-transparent text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2">←</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/30 to-transparent text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <span className="absolute right-4 top-1/2 -translate-y-1/2">→</span>
        </button>
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-9 h-1 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}