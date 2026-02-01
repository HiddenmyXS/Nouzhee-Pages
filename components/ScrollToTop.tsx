"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <AnimatePresence>
  {isVisible && (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <div className="fixed bottom-8 right-8 z-50 group">
            {/* Layer Belakang (Aksen Cyber) */}
            <motion.div
              initial={{ opacity: 0, x: 10, y: 10 }}
              animate={{ opacity: 1, x: 5, y: 5 }}
              exit={{ opacity: 0, x: 10, y: 10 }}
              className="absolute inset-0 border-2 border-sky-900/50 bg-sky-500/10 translate-x-1.5 translate-y-1.5"
            />

            {/* Layer Utama (Tombol) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className={cn(
                "relative flex items-center justify-center",
                "p-3 w-12 h-12",
                "bg-black border-2 border-sky-500",
                "text-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]",
                "hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] hover:bg-sky-500 hover:text-black",
                "transition-all duration-200 ease-out",
                "clip-path-cyber" // Opsional: Tambahkan utility clip-path jika ingin sudut terpotong
              )}
              aria-label="Scroll to top"
            >
              {/* Garis Dekorasi Sudut */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-50" />
              
              <ArrowUp className="w-6 h-6 stroke-[3px] relative z-10" />
            </motion.button>
          </div>
        </TooltipTrigger>
        
        <TooltipContent 
          side="left" 
          className="bg-black border-2 border-sky-500 text-sky-400 font-mono text-[10px] uppercase tracking-tighter px-2 py-1 rounded-none shadow-[4px_4px_0px_0px_rgba(14,165,233,1)]"
        >
          <p>System.Ascend_</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )}
</AnimatePresence>
  );
}