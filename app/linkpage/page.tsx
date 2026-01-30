"use client";

import Header from "../../components/header"
import { useState, useEffect } from "react";
import { SiGithub, SiInstagram, SiStackoverflow, SiX, SiLinux, SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays";
import { Highlighter } from "@/components/ui/highlighter";
import { Terminal, ShieldCheck } from "lucide-react";

export default function LinktreeComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(fadeInTimer);
  }, []);

  const socialLinks = [
    { name: "Instagram", icon: <SiInstagram size={18} />, url: "https://instagram.com/nouzhee_", color: "border-pink-500/50" },
    { name: "Twitter / X", icon: <SiX size={18} />, url: "https://x.com/HiddenmyX", color: "border-blue-400/50" },
    { name: "Whatsapp Channel", icon: <SiWhatsapp size={18} />, url: "https://whatsapp.com/channel/0029VbBgWjeAe5VoAJ9oqI0B", color: "border-green-500/50" },
    { name: "GitHub", icon: <SiGithub size={18} />, url: "https://github.com/HiddenmyXS", color: "border-white/50" },
    { name: "Stack Overflow", icon: <SiStackoverflow size={18} />, url: "https://stackoverflow.com/users/19090033/hiddenmy", color: "border-orange-500/50" },
    { name: "Linux.org", icon: <SiLinux size={18} />, url: "https://www.linux.org/members/hiddenmy.133500", color: "border-yellow-500/50" },
  ];

  return (
    <main className={`flex flex-col items-center justify-center bg-[#050505] w-full min-h-screen transition-opacity duration-1000 ease-in-out overflow-x-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <link rel="icon" href="/logos.svg" sizes="any" />
      
      <div className="fixed inset-0 z-0">
        <LightRays />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center py-20 px-4">
        <Header />
        <div className="flex flex-col items-center space-y-4 mb-10 mt-10">
          <div className="relative group">
            <div className="absolute inset-0 border border-cyan-500/30 bg-cyan-500/10 translate-x-2 translate-y-2 rounded-full blur-sm" />
            <img
              className="relative border-2 border-white/20 rounded-full w-32 h-32 object-cover transition-transform duration-500 group-hover:scale-105"
              src="./picture/1.jpg"
              alt="Profile Picture"
            />
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 italic border border-white/20 transform rotate-12">
              CODE: 86
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              @Nouzhee
            </h1>
            <div className="flex items-center justify-center gap-2 text-cyan-500 font-mono text-[10px] tracking-[0.3em] uppercase mt-1">
              <ShieldCheck size={12} />
              Verified_User_Core
            </div>
          </div>

          <p className="text-zinc-400 font-light text-center max-w-sm leading-relaxed">
            Seorang{" "}
            <Highlighter action="underline" color="#FF9800">
              Senior Programmer
            </Highlighter>{" "}
            yang suka{" "}
            <Highlighter action="highlight" color="#5D84B0">
              Cosplay
            </Highlighter>
          </p>
          <h2 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase bg-white/5 px-3 py-1 border border-white/10">
            Specialist Flutter / Android App Developer
          </h2>
        </div>
        <div className="flex flex-col space-y-6 w-full max-w-[340px]">
          {socialLinks.map((link, idx) => (
            <Link href={link.url} key={idx} className="relative group">
              <div className={`absolute inset-0 bg-black border ${link.color} translate-x-1.5 translate-y-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1`}/>
              <div className="relative px-6 py-3 bg-zinc-900 border border-white/10 flex items-center justify-between transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0">
                <div className="flex items-center space-x-4">
                  <span className="text-white/40 group-hover:text-cyan-400 transition-colors">{link.icon}</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-white/80 group-hover:text-white">{link.name}</span>
                </div>
                <Terminal size={14} className="opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
        <footer className="mt-16 text-center space-y-2 opacity-40">
          <div className="h-[1px] w-20 bg-white/20 mx-auto mb-4" />
          <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            Shortlink Made by <a href="https://github.com/HiddenmyXS" className="text-cyan-500 hover:text-white transition-colors underline">HiddenmyXS</a>
          </p>
          <p className="text-[9px] font-mono text-zinc-500">© 2025 // PROTOCOL_READY_86</p>
        </footer>
      </div>

      <style jsx>{`
        .sketchy-shape {
          border-radius: 2% 98% 1% 99% / 99% 2% 98% 1%;
        }
      `}</style>
    </main>
  );
}