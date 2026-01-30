"use client";

import { useState, useEffect } from "react";
import ClientWrapping from "@/components/ClientWrapping";
import TextType from '@/components/TextType';
import { Github, Copy, Check } from "lucide-react";
import { BsStackOverflow } from "react-icons/bs";
import { ImTux } from "react-icons/im";
import { SiAndroidstudio, SiAsus, SiCodeblocks, SiIntel, SiIntellijidea, SiJetbrains, SiLaravel, SiMsi, SiReplit, SiServerfault, SiSnapdragon, SiSqlite, SiVsco, SiVscodium } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaFlutter } from "react-icons/fa6";

export default function HomeComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const [copied, setCopied] = useState(false);
  const websiteUrl = "https://nouzhee.my.id";

  const handleCopy = () => {
  navigator.clipboard.writeText(websiteUrl);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(fadeInTimer);
  }, []);

  return (
    <main className={`relative w-full h-screen overflow-hidden`}>
      <ClientWrapping>
      <style jsx>{`
        .bg-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .sketchy-border {
          border-radius: 4% 95% 6% 95% / 95% 4% 92% 5%;
        }
      `}</style>


      <div className="absolute inset-0 z-0">
        <img
          src="./20.jpg"
          alt="Cosplay Portfolio"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-grain mix-blend-overlay pointer-events-none z-20" />
      </div>

      <div className="relative z-30 w-full h-full flex flex-col lg:flex-row">       
       <div className="w-full lg:w-[42%] h-full relative flex flex-col justify-center px-10 lg:px-16">    
        <div className="absolute inset-y-0 -left-10 w-[115%] bg-black/70 backdrop-blur-sm border-r border-white/5 transform -skew-x-6 origin-top shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col">
            <div className="mb-4 lg:absolute lg:-top-16 lg:left-0">
                <span className="text-[16px] lg:text-[20px] uppercase tracking-[0.5em] text-gray-400 font-mono opacity-60">
                  // Portfolio_Systems.v2
                </span>
            </div>

            <div className="relative z-10">
                <div className="mb-2">
                    <TextType
                        className="text-4xl sm:text-6xl font-black text-white leading-none mb-4"
                        text={["Hello! _", "Im Nouzhee _", "Developer _", "Cosplayer _", "See Ya! _"]}
                        typingSpeed={80}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="|" 
                    />
                </div>
                
                <p className="text-md sm:text-base text-gray-300 max-w-md mb-8 font-light leading-relaxed border-l border-white/20 pl-4">
                  Combining the precision of <span className="text-white">Mobile Development</span> with the creativity of <span className="text-cyan-400">Cosplay Art</span>.
                </p>

                <div className="relative group max-w-[440px]"> 
                  <div className="absolute inset-0 border border-white/5 bg-black/40 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                    <div className="relative bg-white/[0.03] border border-white/10 p-8 backdrop-blur-md shadow-2xl border-s-4 border-s-cyan-500/50 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-6">
                        <p className="text-[14px] uppercase tracking-[0.3em] text-cyan-400/100 font-extralight">
                          Skill Experience
                        </p>
                        <div className="h-[1px] w-12 bg-white/10"/>
                      </div>
                      <div className="grid grid-cols-5 gap-y-6 gap-x-4">
                        <IconMini icon={<Github />}/>
                        <IconMini icon={<BsStackOverflow />}/>
                        <IconMini icon={<ImTux />}/>
                        <IconMini icon={<SiAndroidstudio />}/>
                        <IconMini icon={<FaFlutter />} color="text-cyan-400"/>
                        <IconMini icon={<TbBrandFirebase />} color="text-yellow-500"/>
                        <IconMini icon={<GrReactjs />} color="text-blue-400"/>
                        <IconMini icon={<SiLaravel />} color="text-red-500"/>
                        <IconMini icon={<SiSqlite />}/>
                      </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-500/50"/>
                  </div>
                </div>

                <div className="relative group max-w-[440px] top-5 font-mono"> 
                  {/* Layer 1: Shadow Box (Tetap ada untuk kedalaman) */}
                  <div className="absolute inset-0 border border-white/5 bg-black/40 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />               
                  {/* Layer 2: Hard-Terminal Container */}
                  <div className="relative bg-[#020202] border border-cyan-500/30 p-0 backdrop-blur-md shadow-2xl border-s-4 border-s-cyan-500/50 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 overflow-hidden">
                    {/* Terminal Title Bar (Black Solid) */}
                    <div className="bg-cyan-500/10 border-b border-cyan-500/20 px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/20 border border-cyan-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/20 border border-cyan-500/50" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold">
                          root@nouzhee:~
                        </span>
                      </div>
                      
                      {/* Action Copy */}
                      <button 
                        onClick={handleCopy}
                        className="text-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                      >
                        {copied ? (
                          <Check size={12} className="text-green-400" />
                        ) : (
                          <Copy size={12} />
                        )}
                        <span className="text-[9px] uppercase font-bold">{copied ? 'Done' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 space-y-4 relative bg-white/[0.03]">
                      {/* Scanline Effect Overlay */}
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_4px,3px_100%]" />

                      {/* Lines of Code */}
                      <div className="relative z-0 space-y-1 text-sm">
                        <div className="flex gap-2">
                          <span className="text-cyan-500/50 underline">visitor</span>
                          <span className="text-white/40">@</span>
                          <span className="text-cyan-500">terminal:</span>
                          <span className="text-white/40">~$</span>
                          <span className="text-white">fetch --website-link</span>
                        </div>
                        
                        <div className="py-2 px-3 bg-cyan-500/5 border-l border-cyan-500/30 text-cyan-400/90 italic text-xs break-all">
                          {websiteUrl}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <span className="text-cyan-500/50 underline">visitor</span>
                          <span className="text-white/40">@</span>
                          <span className="text-cyan-500">terminal:</span>
                          <span className="text-white/40">~$</span>
                          <span className="text-white animate-pulse">_</span>
                        </div>
                      </div>

                      {/* Skills Sub-Section (Mini Icons) */}
                      <div className="pt-4 border-t border-cyan-500/10">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-1 bg-cyan-500" />
                          <span className="text-[9px] uppercase tracking-widest text-cyan-500/60 font-bold">Loaded_Modules</span>
                        </div>
                        <div className="grid grid-cols-5 gap-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                          <IconMini icon={<SiCodeblocks />}/>
                          <IconMini icon={<SiReplit />}/>
                          <IconMini icon={<SiVscodium />}/>
                          <IconMini icon={<SiJetbrains />}/>
                          <IconMini icon={<SiIntellijidea />}/>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Decorative Tag */}
                    <div className="absolute bottom-0 right-0 bg-cyan-500 text-black text-[9px] font-black px-2 py-0.5 tracking-tighter uppercase italic translate-y-0 group-hover:-translate-y-1 transition-transform">
                      Unit_86_Online
                    </div>
                  </div>
                  </div>
                </div>          
            </div>
        </div>

        
        <div className="hidden lg:flex lg:w-[58%] h-full items-end justify-end p-12 pointer-events-none">
            <div className="text-white/10 text-9xl font-black select-none rotate-90 translate-x-20">
               // NOUZHEE
            </div>
        </div>

      </div>
       </ClientWrapping>
    </main>
  );
}

type IconMiniProps = {
    icon: React.ReactNode;
    color?: string;
};

function IconMini({ icon, color = "text-white" }: IconMiniProps) {
    return (
        <div className={`w-5 h-5 sm:w-6 sm:h-6 ${color} opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 flex items-center justify-center`}>
            {icon}
        </div>
    )
}