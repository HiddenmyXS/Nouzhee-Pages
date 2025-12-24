"use client";

import Header from "../components/header"
import { useState, useEffect } from "react";
import { SiGithub, SiInstagram, SiStackoverflow, SiX, SiLinux, SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays";
import { Highlighter } from "@/components/ui/highlighter"

export default function LinktreeComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  
  },[]);
  
return (
  <main className={`flex flex-col items-center justify-center bg-accent-foreground w-full h-screen transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <div className="relative w-full h-screen bg-gray-950/60">
    <link rel="icon" href="/logos.svg" sizes="any" />
      <Header />
      <LightRays />
        <div className="items-center justify-center flex flex-col mt-40 space-y-2">
        <img
          className="border border-zinc-400 rounded-full w-34 h-34 object-cover animate-in fade-in zoom-in duration-1000 delay-100"
          src="./picture/1.jpg"
          alt="Profile Picture"/>
        <h1 className="text-4xl font-medium text-white animate-in fade-in duration-1000 delay-200">Nouzhee</h1>
        <p className="text-zinc-100 font-semibold text-center px-4">
          Seorang{" "}
          <Highlighter action="underline" color="#FF9800">
          Senior Programmer
          </Highlighter>{" "}
          yang suka{" "}
          <Highlighter action="highlight" color="#5D84B0">
          Cosplay
          </Highlighter>{" "}
        </p>
        <h2 className="w-full text-sm text-center mt-0 text-zinc-100 font-semibold animate-in fade-in duration-1000 delay-400">Specialist Flutter / Android App Developer</h2>
        <div className="flex flex-col space-y-4 mt-2 w-85 font-semibold animate-in fade-in zoom-in-10 duration-1000 delay-500">
          {/* Instagram Links */}
          <Link href="https://instagram.com/nouzhee_">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <div className="flex items-center justify-center space-x-2">
            <SiInstagram size={20} />
            <span>Instagram</span>
            </div>
          </button>
          </Link>
          {/* Twitter/X Links */}
          <Link href="https://x.com/HiddenmyX">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <div className="flex items-center justify-center space-x-2">
            <SiX size={20} />
            <span>Twitter / X</span>
            </div>
          </button>
          </Link>
          {/* Whatsapp Channel Links */}
          <Link href="https://whatsapp.com/channel/0029VbBgWjeAe5VoAJ9oqI0B">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <div className="flex items-center justify-center space-x-2">
            <SiWhatsapp size={20} />
            <span>Whatsapp Channel</span>
            </div>
          </button>
          </Link>
          {/* Github Links */}
          <Link href="https://github.com/HiddenmyXS">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <div className="flex items-center justify-center space-x-2">
            <SiGithub size={20} />
            <span>GitHub</span>
            </div>
          </button>
          </Link>
          {/* StackOverflow Links */}
          <Link href="https://stackoverflow.com/users/19090033/hiddenmy">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <div className="flex items-center justify-center space-x-2">
            <SiStackoverflow size={20} />
            <span>Stack Overflow</span>
            </div>
          </button>
          </Link>
          {/* Linux Foundation Links */}
          <Link href="https://www.linux.org/members/hiddenmy.133500">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <div className="flex items-center justify-center space-x-2">
            <SiLinux size={20} />
            <span>Linux.org</span>
            </div>
          </button>
          </Link>
          <h2 className="w-full text-sm text-center text-zinc-300 mt-4 font-medium">Shortlink Made by <a href="https://github.com/HiddenmyXS" className="text-blue-500/80 font-semibold mr-3">HiddenmyXS</a></h2>
          <h4 className="w-full text-xs text-center text-zinc-400 font-medium">© 2025 All Rights Reserved.</h4>
        </div>
      </div>
    </div>
  </main>
  );
}