"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const scrollToSection = () => {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0B0B0D] text-white font-sans">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#151517,#0B0B0D)] opacity-70"></div>

      {/* Hero Section - Mobile First */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen text-center z-10">
        {/* Scrolling Marquee */}
        <div className="overflow-hidden w-full absolute top-10">
          <div className="flex space-x-6 text-sm sm:text-lg font-light uppercase opacity-10 tracking-wider animate-marquee">
            {Array(10)
              .fill("PERFECTIONISM KILLS GROWTH.")
              .map((text, idx) => (
                <span key={idx} className="px-6">
                  {text}
                </span>
              ))}
          </div>
        </div>

        {/* Main Headline - Mobile Optimized */}
        <span className="text-amber-300 text-7xl font-extrabold sm:text-9xl mb-16">
          Verbatim
        </span>
        <h1
          className={`text-4xl sm:text-7xl font-extrabold relative leading-[1.0] tracking-tight transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white">Effort</span>
          <span className="inline-block w-3 sm:w-6"></span>
          <span className="relative text-gray-300 inline-block">
            Over Error.
            <span className="absolute left-0 bottom-0 h-[3px] bg-[#C8A856] w-0 animate-underline"></span>
          </span>
        </h1>

        {/* Subtext - Perfectly Balanced for Mobile */}
        <p
          className={`mt-4 text-2xl sm:text-4xl text-gray-400 max-w-md sm:max-w-xl tracking-wide leading-relaxed transition-opacity duration-1000 delay-200 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Verbatim is the language (or anything) studying app that unlocks your
          memory.
        </p>

        {/* Call-to-Action Button - Scrolls to Section */}
        <button
          onClick={scrollToSection}
          className={`mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-semibold text-lg sm:text-xl rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-md transition-opacity duration-1000 delay-400 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Get Started
        </button>
      </section>

      {/* About Section - Second Page */}
      <section
        id="about-section"
        className="py-24 sm:py-32 px-6 text-center bg-[#101014] bg-stone-950 w-full min-h-screen flex flex-col justify-center"
      >
        <h2 className="text-4xl sm:text-7xl font-semibold text-white mb-6 sm:mb-8 tracking-tight">
          The Smartest Way to Learn.
        </h2>

        <p className="text-gray-400 max-w-lg sm:max-w-2xl mx-auto leading-relaxed text-xl sm:text-3xl">
          Verbatim is a spaced repetition flashcard app designed for language
          learning, science, and any subject you want to master. Our advanced
          learning system helps you retain knowledge longer and improve
          efficiency with AI-assisted study techniques.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-amber-300 text-black font-semibold text-lg rounded-full hover:bg-amber-400 transition duration-300 transform hover:scale-105 shadow-md">
            Download the App
          </button>
          <button className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-md">
            Use on Browser
          </button>
        </div>
      </section>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        @keyframes underline {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        .animate-underline {
          animation: underline 1.2s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
