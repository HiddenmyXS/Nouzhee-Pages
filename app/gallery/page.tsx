"use client";

import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState, useEffect } from "react";
import { Camera, Cpu, Sparkles, X } from "lucide-react";

export default function GalleryComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(fadeInTimer);
  }, []);

  const timelineItems = [
    { 
      image: "/galleries/gallery-1.JPG", 
      title: "Cosplay Start", 
      desc: "Dimulai awal cosplayku pada tahun 2023. Perjalanan menjadi Wanderer (Scaramouche) yang tak terlupakan.", 
      date: "NOV_2023", 
      icon: <Cpu size={14} />, 
      color: "border-cyan-500" 
    },
    { 
      image: "/galleries/gallery-2.jpg", 
      title: "First Meetup", 
      desc: "Terjun ke dunia cosplay yang luas. Bertemu teman-teman positive vibes dan mulai membangun sirkel.", 
      date: "JAN_2024", 
      icon: <Sparkles size={14} />, 
      color: "border-purple-500" 
    },
    { 
      image: "/picture/master.jpg", 
      title: "Convention Era", 
      desc: "Lagi malas ketik, nanti di update kok :)", 
      date: "APR_2024", 
      icon: <Camera size={14} />, 
      color: "border-red-500" 
    },
  ];

  return (
    <main className={`min-h-screen bg-[#050505] text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <link rel="icon" href="/logos.svg" sizes="any" />
      <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/nav-community.JPG"
          alt="Community background"
          fill
          className="object-cover opacity-40 scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute -bottom-10 -left-10 w-[120%] h-32 bg-[#050505] transform -rotate-2 z-20" />
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-block py-1 px-3 border border-cyan-500/30 rounded-full bg-cyan-900/20 text-cyan-400 text-[10px] font-mono tracking-[0.3em] mb-4">
             // ARCHIVE_DATABASE
          </div>
            <div className="flex items-center justify-center mb-2">
               <TypingAnimation className="text-white text-4xl md:text-6xl font-black tracking-tighter">
                GALLERY_OF_NOUZHEE
                </TypingAnimation>
            </div>
          <p className="mt-3 text-gray-400 font-mono text-xs tracking-widest uppercase">
            &gt; Journey from cosplay 2023 to present_
          </p>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent transform -translate-x-1/2 hidden md:block z-0" />

        {timelineItems.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-32 ${isLeft ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2 p-4 flex justify-center z-10">
                <div className="relative group cursor-pointer" onClick={() => setOpenImage(item.image)}>
                    <div className={`absolute inset-0 border ${item.color} bg-black/60 translate-x-3 translate-y-3 sketchy-shape z-0`} />
                    <div className="relative w-[320px] h-[180px] overflow-hidden border border-white/10 bg-gray-900 sketchy-shape z-10">
                        <Image src={item.image} alt={item.title} fill unoptimized className="object-cover opacity-80 group-hover:opacity-100" />
                    </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 hidden md:flex items-center justify-center z-30">
                <div className={`absolute inset-0 ${item.color.replace('border', 'bg')}/20 blur-xl rounded-full`} />
                <div className={`relative w-10 h-10 border-2 ${item.color} bg-black rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,1)]`}>
                  <div className="-rotate-45 text-white drop-shadow-[0_0_5px_white]">
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className={`w-full md:w-1/2 p-4 z-10 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                <div className="relative">
                    <span className="text-cyan-500 font-mono text-[10px] tracking-widest">{item.date}</span>
                    <h3 className="text-2xl font-black italic text-white mb-2 uppercase">{item.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs md:max-w-sm inline-block">{item.desc}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      {openImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all animate-in fade-in duration-300" onClick={() => setOpenImage(null)}>
          <div className="relative w-full max-w-5xl group" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white/50 hover:text-red-500 flex items-center gap-2 transition-colors font-mono text-xs uppercase"
              onClick={() => setOpenImage(null)}
            >
              Close_Terminal <X size={16} />
            </button>
            <div className="relative border border-white/20 p-1 bg-white/5">
                <Image src={openImage} alt="Preview" width={1200} height={800} className="w-full h-auto object-contain" priority />
                {/* Decorative corner borders */}
                <div className="absolute-top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
                <div className="absolute-bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-cyan-500" />
            </div>
          </div>
        </div>
      )}
      <div className="py-20 text-center opacity-20 pointer-events-none">
          <span className="text-8xl font-black tracking-tighter">NOUZHEE_ARCHIVE</span>
      </div>
    </main>
  );
}