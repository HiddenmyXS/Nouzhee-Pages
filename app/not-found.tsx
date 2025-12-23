"use client"

import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import Header from './components/header';

// Blinking text animation component (Magic UI inspired)
const BlinkingText = ({ children, className = "" }) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span className={`transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-30'} ${className}`}>
      {children}
    </span>
  );
};

// Aurora background effect component
const Aurora = ({ colorStops = ["#3A29FF", "#FF94B4", "#FF3232"], blend = 0.5, amplitude = 1.0, speed = 0.5 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${colorStops[0]}, transparent 50%), 
                       radial-gradient(ellipse at 80% 10%, ${colorStops[1]}, transparent 50%),
                       radial-gradient(ellipse at 20% 80%, ${colorStops[2]}, transparent 50%)`,
          filter: 'blur(60px)',
          animation: 'aurora 20s ease-in-out infinite',
        }}
      />
      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10%, 5%) scale(1.1); }
          50% { transform: translate(-5%, 10%) scale(0.9); }
          75% { transform: translate(5%, -5%) scale(1.05); }
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
      {/* Aurora Background Effect */}
      <div className="w-full h-full absolute inset-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-12 text-center">
        {/* 404 Error with Blinking Animation */}
        <div className="mb-8">
          <BlinkingText className="text-8xl md:text-9xl font-black text-white tracking-tight">
            404
          </BlinkingText>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl">
          Tidak menemukan halaman yang anda cari
        </h1>

        {/* Call to Action Button */}
        <a
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
        >
          <Home size={20} />
          <span>Kembali ke halaman beranda</span>
        </a>
      </div>
    </main>
  );
}