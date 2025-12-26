"use client";

import Image from "next/image";
import Header from "@/app/components/header";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState, useEffect } from "react";

export default function HomeComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(fadeInTimer);
  }, []);

  const slides = [
    {
      image: "./galleries/gallery-1.JPG",
      description: "Di mulai awal cosplayku pada tahun 2023. adalah momen yang tak terlupakan ketika aku mengenakan kostum pertamaku dan merasakan kegembiraan menjadi karakter favoritku. Perjalanan ini baru saja dimulai, dan aku sangat bersemangat untuk menjelajahi dunia cosplay lebih dalam lagi. Aku menjadi Wanderer alias Scaramouche dari game Genshin Impact yang sangat aku sukai. dari sinilah aku memulai perjalananku di dunia cosplay. mendapatkan banyak pengalaman berharga dan bertemu dengan banyak teman baru yang memiliki minat yang sama."
    },
    {
      image: "./galleries/gallery-2.jpg",
      description: "Description for image 2. Add your text here."
    },
    {
      image: "./galleries/gallery-3.jpg",
      description: "Description for image 3. Add your text here."
    },
    {
      image: "./picture/picture.jpg",
      description: "Description for image 4. Add your text here."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className={`flex flex-col items-center justify-center gap-6 w-full transition-opacity duration-1000 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <link rel="icon" href="/logos.svg" sizes="any" />
      <Header/>
      <div className="relative w-full h-66 flex items-center justify-center">
        <Image
          src="./nav-community.JPG"
          alt="Community background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <TypingAnimation className="text-white text-2xl md:text-4xl font-semibold">
        Gallery of Nouzhee
          </TypingAnimation>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
        Journey from cosplay 2023 to now
          </p>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden group">
        <div className="w-full flex items-center justify-center py-12">
          <div className="relative w-full max-w-5xl px-4">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2" />
        {[
          { image: slides[0].image, title: "Cosplay Start", desc: slides[0].description, date: "November 2023", icon: "🎨", color: "bg-blue-600" },
          { image: slides[1].image, title: "First Meetup", desc: slides[1].description, date: "January 2024", icon: "👥", color: "bg-purple-600" },
          { image: slides[2].image, title: "Convention", desc: slides[2].description, date: "April 2024", icon: "🎪", color: "bg-pink-600" },
          { image: slides[3].image, title: "Gallery Showcase", desc: slides[3].description, date: "August 2024", icon: "⭐", color: "bg-yellow-600" },
          { image: slides[4].image, title: "Gallery Showcase", desc: slides[4].description, date: "December 2024", icon: "⭐", color: "bg-yellow-600" }
        ].map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
          <div key={idx} className="relative mb-12 md:mb-20">
        <div className={`absolute left-1/2 -translate-x-1/2 top-6 md:top-10 w-4 h-4 rounded-full ${item.color} border-4 border-white z-10 flex items-center justify-center text-xs`}>
          {item.icon}
        </div>
        <div className={`md:grid md:grid-cols-2 md:items-start gap-6 w-full ${isLeft ? "md:text-left" : "md:text-right"}`}>
          <div className={`${isLeft ? "order-1" : "order-2 md:col-start-2"} md:pr-6 flex justify-center md:justify-end`}>
            <button
          type="button"
          onClick={() => setOpenImage(item.image)}
          aria-label={`Open ${item.title} image`}
          className="relative w-full max-w-xs md:max-w-sm cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110"
            >
          <div className="relative w-full aspect-video bg-gray-200">
            <Image 
              src={item.image} 
              alt={item.title} 
              fill 
              className="object-cover transition-transform duration-300" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900/30 transition-opacity duration-300">
            <div className="rounded-full p-3 items-center justify-center flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
              </svg>
              <p className="items-center justify-center text-white">Click to zoom</p>
            </div>
          </div>
            </button>
          </div>
          <div className={`${isLeft ? "order-2 md:col-start-2 md:pl-6" : "order-1 md:col-start-1 md:pl-6"} flex flex-col justify-center`}>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            <span className="mt-3 inline-block text-xs text-gray-500">{item.date}</span>
          </div>
        </div>
          </div>
          );
        })}
          </div>
        </div>
      </div>
      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview modal"
        >
          <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center" 
        onClick={(e) => e.stopPropagation()}
          >
        <button
          type="button"
          onClick={() => setOpenImage(null)}
          className="absolute -top-10 -right-10 md:top-2 md:right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-20 transition-colors"
          aria-label="Close image preview"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="relative w-full h-auto">
          <Image 
            src={openImage} 
            alt="Preview" 
            width={1500}
            height={1000}
            className="w-full h-auto object-contain rounded-lg" 
            priority
          />
        </div>
          </div>
        </div>
      )}
    <script lang="ts">
      {`/* This script block intentionally left blank; state/handlers are defined in component scope below. */`}
    </script>
    </main>
  );
}