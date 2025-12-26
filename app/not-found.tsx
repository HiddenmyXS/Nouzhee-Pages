"use client"

import React, { useState, useEffect } from 'react';
import FuzzyText from '@/components/FuzzyText';
import { Home } from 'lucide-react';
import Header from './components/header';

const Aurora = ({ colorStops = ["#24102F", "#4B1E6A", "#8C5CFF"], blend = 0.6, amplitude = 1.0, speed = 1.0 }) => {
  const [c1, c2, c3] = colorStops;
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="aurora-layer" />
      <style jsx>{`
        .aurora-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 40% 30%, ${c1} 0%, transparent 40%),
            radial-gradient(ellipse at 75% 10%, ${c2} 0%, transparent 45%),
            radial-gradient(ellipse at 20% 80%, ${c3} 0%, transparent 45%);
          background-blend-mode: screen;
          opacity: ${blend};
          filter: blur(${60 * amplitude}px);
          transform-origin: center;
          animation: aurora ${20 / Math.max(speed, 0.001)}s ease-in-out infinite;
        }

        @keyframes aurora {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(${10 * amplitude}%, ${5 * amplitude}%) scale(${1 + 0.1 * amplitude}); }
          50% { transform: translate(${-5 * amplitude}%, ${10 * amplitude}%) scale(${1 - 0.1 * amplitude}); }
          75% { transform: translate(${5 * amplitude}%, ${-5 * amplitude}%) scale(${1 + 0.05 * amplitude}); }
        }
      `}</style>
    </div>
  );
};

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  }, []);

  return (
    <main className={`flex flex-col items-center justify-center bg-slate-900 w-full min-h-screen transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} relative`}>
    <Header/>
      <div className="w-full h-full absolute inset-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-12 text-center">
        <div className="mb-8">
          <FuzzyText
            baseIntensity={0.2} 
            hoverIntensity={0.23} 
            enableHover={true}
          >404</FuzzyText>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 max-w-2xl">
          Not Found / Missing Page
        </h1>
        <p className='text-white font-semibold text-xl'>Ooops halaman yang anda cari tidak ditemukan.....</p>
        <a
          href="/"
          role="button"
          aria-label="View more details about The Fountaine Project Cosplay"
          className="inline-flex items-center mt-5 px-4 py-2 gap-3 sm:px-6 sm:py-3 bg-transparent border-2 border-white text-white font-medium rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-white/10"
        >
          <Home size={20}/>
          <span>Back to home</span>
        </a>
        
      </div>
    </main>
  );
}