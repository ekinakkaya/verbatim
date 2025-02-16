"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0B0B0D] text-white font-sans px-6">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#151517,#0B0B0D)] opacity-70"></div>

      {/* Hero Section - Mobile First */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen text-center z-10">
        
        {/* Scrolling Marquee */}
        <div className="overflow-hidden w-full absolute top-10">
          <div className="flex space-x-6 text-sm sm:text-lg font-light uppercase opacity-10 tracking-wider animate-marquee">
            {Array(10).fill("PERFECTIONISM KILLS GROWTH.").map((text, idx) => (
              <span key={idx} className="px-6">{text}</span>
            ))}
          </div>
        </div>

        {/* Main Headline - Mobile Optimized */}
        <h1 className={`text-5xl sm:text-7xl font-extrabold relative leading-[1.1] tracking-tight transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-white">Effort</span>  
          <span className="inline-block w-3 sm:w-6"></span> {/* Space Between */}
          <span className="relative text-gray-300 inline-block">
            Over Error.
            <span className="absolute left-0 bottom-0 h-[3px] bg-[#C8A856] w-0 animate-underline"></span>
          </span>
        </h1>

        {/* Subtext - Perfectly Balanced for Mobile */}
        <p className={`mt-4 text-lg sm:text-xl text-gray-400 max-w-md sm:max-w-lg tracking-wide leading-relaxed transition-opacity duration-1000 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`}>
          Learn anything. Master everything. <br className="hidden sm:block" />
          A smarter way to retain <span className="whitespace-nowrap">knowledge.</span>
        </p>

        {/* Call-to-Action Button - Bigger for Mobile */}
        <button className={`mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-semibold text-lg sm:text-xl rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-md transition-opacity duration-1000 delay-400 ${loaded ? "opacity-100" : "opacity-0"}`}>
          Get Started
        </button>
      </section>

      {/* Features Section - Mobile First */}
      <section className="py-20 sm:py-32 px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-6 sm:mb-8 tracking-tight">Learn Smarter, Not Harder.</h2>
        <p className="text-gray-400 max-w-md sm:max-w-lg mx-auto leading-relaxed text-base sm:text-lg">
          Study <span className="text-white">French</span>, <span className="text-white">Biology</span>, <span className="text-white">Engineering</span>. 
          Master your craft with **spaced repetition** and AI-powered learning.
        </p>
      </section>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-underline {
          animation: underline 1.2s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
