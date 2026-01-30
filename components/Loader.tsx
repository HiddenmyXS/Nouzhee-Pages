"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{ willChange: "opacity" }}
          className="fixed inset-0 flex items-center justify-center bg-[#050505] z-[9999] overflow-hidden touch-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="absolute inset-0 z-0 opacity-30">
            <div 
              className="absolute inset-0 animate-[grid-move_20s_linear_infinite]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #1f1f1f 1px, transparent 1px),
                  linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/60 to-[#050505]" />
          </div>
          <div className="absolute top-10 left-10 flex flex-col gap-1 opacity-40">
            <span className="text-6xl font-black text-white/20 tracking-tighter">#8625</span>
            <div className="h-[2px] w-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-300 tracking-[0.4em]">UNIT_ACTIVATION</span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/20" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
              <div className="absolute inset-0 opacity-20 grayscale blur-[2px] scale-110">
                <Image src="/logos.svg" alt="Logo BG" fill className="object-contain" />
              </div>
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Image src="/logos.svg" alt="ZeroCloud Logo" fill className="object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              </motion.div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] mb-2 animate-pulse">
                    LOADING_SYSTEM_ARCHIVE
                </div>
                <div className="w-48 h-[4px] bg-white/5 overflow-hidden relative">
                    <motion.div 
                        className="absolute inset-y-0 left-0 bg-cyan-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>
            </div>
          </div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col text-[8px] font-mono text-white/10 gap-2 select-none">
            {[...Array(8)].map((_, i) => (
                <span key={i}>0x00FF{Math.floor(Math.random()*999)}</span>
            ))}
          </div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default Loader;