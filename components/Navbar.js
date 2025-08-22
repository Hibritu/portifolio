"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#111111] shadow-lg w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="lg:text-xl md:text-lg text-sm font-bold text-gray-700 select-none">
               {["P", "O", "R", "T", "F", "O", "L", "I", "O"].map((letter, idx) => (
  <span
    key={idx}
    className="px-1 bg-green-400 rounded-full animate-ping"
    style={{
      animationDelay: `${1.9 + idx * 0.1}s`,
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    }}
  >
    {letter}
  </span>
))}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <a href="#about" className="text-green-400 hover:text-green-400">
                About
              </a>
              <a href="/details/whatIDo" className="text-gray-400 hover:text-green-400">
             Work
              </a>
     <a href="/details/education" className="text-gray-400 hover:text-green-400">Education</a>
     <a href="/details/skills" className="text-gray-400 hover:text-green-400">skills</a>

<a href="/details/experience" className="text-gray-400 hover:text-green-400">Experience</a>
<a href="/details/certificates" className="text-gray-400 hover:text-green-400">Certificates</a>
<a href="/details/contact" className="text-gray-400 hover:text-green-400">Contact</a>




            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                aria-label="Open mobile menu"
                onClick={() => setMobileMenuOpen(true)}
                className="text-green-400 hover:text-green-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </>
  );
}
