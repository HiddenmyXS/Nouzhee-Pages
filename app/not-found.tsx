"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MoveLeft, Terminal, TriangleAlertIcon } from "lucide-react";

export default function NotFound() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Simulasi waktu booting sistem
    const timer = setTimeout(() => setIsBooted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const cyberPop = (delay: string) => 
    `transition-all duration-75 ${delay} ${
      isBooted 
      ? 'opacity-100 scale-100 blur-0' 
      : 'opacity-0 scale-110 blur-sm'
    }`;

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col items-center justify-center text-white font-sans">
      <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isBooted ? 'opacity-20' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1f1f1f 1px, transparent 1px),
              linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 0.8; }
          5% { opacity: 0.4; }
          10% { opacity: 0.9; }
          100% { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 0.2s ease-in-out;
        }
        .sketchy-shape {
          border-radius: 2% 98% 1% 99% / 99% 2% 98% 1%;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center">
        <div className={`relative group bottom-6 ${cyberPop('delay-[100ms]')} ${isBooted && 'animate-flicker'}`}>
            <div className="absolute inset-0 bg-red-800 border border-cyan-500/20 translate-x-2 translate-y-2 transition-transform duration-300" />
            <div className="relative px-8 py-4 bg-red-900 border border-white/20 flex items-center gap-3">
                <TriangleAlertIcon size={18} className="text-red-100 animate-pulse" />
                <span className="uppercase tracking-[0.2em] font-bold text-sm">Debug Error : 404 </span>
            </div>
        </div>

        <div className={`relative group mb-8 ${cyberPop('delay-[300ms]')}`}>
            <span className="absolute inset-0 text-[10rem] sm:text-[14rem] font-black text-cyan-500/10 translate-x-3 translate-y-3 italic select-none">
                404
            </span>
            <h1 className="relative text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter text-white drop-shadow-2xl italic select-none">
                404
            </h1>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-500/30 -rotate-2 blur-sm"></div>
        </div>

        <div className={`flex flex-col items-center gap-2 mb-12 ${cyberPop('delay-[450ms]')}`}>
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-[0.3em] mb-2 uppercase">
                <Terminal size={14} className="animate-pulse" />
                <span>Error: Protocol_Not_Found</span>
            </div>
            <p className="text-gray-400 font-light text-center max-w-xs sm:max-w-md leading-relaxed">
                The character or terminal path you are looking for has been <span className="text-white italic">de-materialized</span> or moved to another sector.
            </p>
        </div>

        <Link href="/" className={`relative group ${cyberPop('delay-[600ms]')}`}>
            <div className="absolute inset-0 bg-cyan-900/20 border border-cyan-500/20 translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            <div className="relative px-8 py-4 bg-black border border-white/20 flex items-center gap-3 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
                <MoveLeft size={18} className="text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                <span className="uppercase tracking-[0.2em] font-bold text-sm">Return to Sector 01</span>
            </div>
        </Link>

      </div>

      <div className={`absolute bottom-8 text-[12px] font-mono text-gray-300 tracking-widest uppercase transition-all duration-75 delay-[800ms] ${isBooted ? 'opacity-50' : 'opacity-0'}`}>
        Status: 404 // Nouzhee_System_Core
      </div>

    </main>
  );
}