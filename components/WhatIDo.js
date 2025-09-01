import { FiCode, FiLayout, FiArchive, FiSmartphone, FiBriefcase, FiGlobe, FiExternalLink } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

export default function WhatIDo() {
  // Add any number of screenshots here (files in public/images)
  const screenshots = [
    "/images/m2.jpg",
    "/images/fc.jpg",
    "/images/s1.jpg",
    "/images/s2.jpg",
    "/images/s3.jpg",
  ];
  const screenshots1 = [
    "/images/re1.png",
    "/images/re2.png",
    "/images/re3.png",
    "/images/re4.png",
    "/images/re5.png",
  ];

  return (
    <section className="md:pt-20 pt-10 md:px-20 px-2" id="what-i-do">
      <div className="w-fit">
        <h2 className="text-2xl font-bold text-white pb-2">Work </h2>
        <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
          <hr className="border-[3px] border-green-400 w-[20%]" />
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {/* 1 */}
        <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40 overflow-hidden">
          <span className="sm:text-5xl text-3xl text-green-400"><FiCode /></span>

          <div className="flex flex-col gap-2 w-full min-w-0">
            <h3 className="text-xl font-semibold text-white">Web Development</h3>
            <p className="text-gray-400">
              Crafting responsive and intuitive websites tailored to your unique
              needs using cutting-edge technologies.
            </p>

            {/* Restaurant Management System - screenshots gallery (full image, no crop) */}
            <h4 className="mt-2 text-sm font-semibold text-white">Restaurant Management System</h4>
            <div
              className="mt-1 -mx-2 px-1 overflow-x-auto no-scrollbar scroll-smooth"
              aria-label="Restaurant Management System screenshots gallery"
            >
              <div className="flex snap-x snap-mandatory gap-0 sm:gap-4">
                
                {screenshots1.map((src, i) => (
                  <div
                    key={i}
                    className="snap-center snap-always shrink-0 min-w-full h-80 sm:w-72 sm:h-80 flex items-center justify-center bg-black/20 rounded border border-gray-700 p-2"
                  >
                    <img
                      src={src}
                      alt={`App screen ${i + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <h4 className="text-sm font-semibold text-white">Projects</h4>
              <ul className="mt-1 text-sm text-gray-300 space-y-1 list-disc list-inside">
                <li>
                  <a href="#" className="hover:text-green-400 inline-flex items-center gap-2">
                    Restaurant Management System
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 inline-flex items-center gap-3">
                    Sofi website 
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 inline-flex items-center gap-3">
                    Ewnet communication Internship apply system  
                  </a>
                </li>
                                  <li>
                  <a href="#" className="hover:text-green-400 inline-flex items-center gap-2">
                    create and verify certeficate system 
                  </a>
                </li>
              </ul>
              <ul className="mt-2 text-sm text-gray-300">
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 inline-flex items-center gap-2"
                >
                   <FiExternalLink />
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
          <span className="sm:text-5xl text-3xl text-green-400"><FiLayout /></span>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">moblie app</h3>
            <p className="text-gray-400">
              Designing accessible, scalable components and delightful
              experiences with flutter with provider state managment.
            </p>
          </div>
                <div className="mt-3">
              <h4 className="text-sm font-semibold text-white">Projects</h4>
              <ul className="mt-1 text-sm text-gray-300 space-y-1 list-disc list-inside">
                <li>
                  <a href="#" className="hover:text-green-400 inline-flex items-center gap-2">
                    Rental asset system app
                  </a>
                </li>
                                <li>
                  <a href="#" className="hover:text-green-400 inline-flex items-center gap-2">
                    News app
                  </a>
                </li>
                </div>
        </div>

        {/* 3 */}
        <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
          <span className="sm:text-5xl text-3xl text-green-400"><FiArchive /></span>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">
              API Integration
            </h3>
            <p className="text-gray-400">
              Robust REST integrations, auth, caching, and error handling for
              reliable, high‑performance apps.
            </p>
          </div>
        </div>
        <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
          <span className="sm:text-5xl text-3xl text-green-400"><FiArchive /></span>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">
            payment  Integration
            </h3>
            <p className="text-gray-400">
              payment integration with chapa
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
          <span className="sm:text-5xl text-3xl text-green-400"><FiSmartphone /></span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">Mobile Apps</h3>
            <p className="text-gray-400">
              Cross‑platform Flutter apps with native performance and clean architecture.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
          <span className="sm:text-5xl text-3xl text-green-400"><FiBriefcase /></span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">Backend & DevOps</h3>
            <p className="text-gray-400">
              Node.js & Laravel APIs, databases, postgres, mongoDB, Mysql, logging, and monitoring.
            </p>
          </div>
        </div>


 <div className="flex sm:gap-4 gap-2 p-4 rounded-lg border border-gray-700 bg-gray-900/40">
          <span className="sm:text-5xl text-3xl text-green-400"><FiLayout /></span>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">UI/UX Engineering</h3>
            <p className="text-gray-400">
              Designing accessible, scalable components and delightful
              experiences with Tailwind, Headless UI, and motion.
            </p>
          </div>
        </div>
        

     
        
      </div>
    </section>
  );
}
