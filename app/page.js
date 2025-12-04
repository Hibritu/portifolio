"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatIDo from "../components/WhatIDo";
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div
      className="w-screen h-full overflow-y-scroll bg-gray-900 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8Z3JhcGhpY3MlMjBiYWNrZ3JvdW5kfGVufDB8MHx8fDE3MzUyODE0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080')",
      }}
    >
      <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] mx-auto relative md:px-0 px-4 md:my-10 bg-[#111111] rounded-xl overflow-hidden">
        <Navbar />
        <div className="w-full h-full flex flex-col items-center">
          <HeroSection />
          {/* Main sections rendered on the home page */}
          <main className="w-full">
            <WhatIDo />
            <Skills />
            <Education />
            <Experience />
            <Certificates />
            <Contact />
          </main>
            
       
          {/* Footer */}
          <footer className="w-full mt-12 border-t border-gray-800 py-8 bg-[#0f0f0f]">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm"> 2025 Hibritu Diresss. All rights reserved.</p>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/Hibritu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hibritu-diress-5b5656307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="tel:+251966220058"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  aria-label="Phone"
                  title="Call me"
                >
                  tel:+251966220058
                </a>
                <a
                  href="mailto:diresshibritu@gmail.com"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  aria-label="Email"
                  title="Email me"
                >
                  diresshibritu@gmail.com
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
