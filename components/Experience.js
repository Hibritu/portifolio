'use client';

import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  return (
    <section className="md:pt-20 pt-10 md:px-20 px-4 bg-[#111111]" id="experience">
      <div className="w-fit">
        <h2 className="text-2xl font-bold text-white pb-2">Experience</h2>
        <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
          <hr className="border-[3px] border-green-400 w-[20%]" />
        </div>
      </div>

      <div className="space-y-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <FaBriefcase className="text-3xl text-green-400 mt-1" />
            <div className="text-white ml-4">
              <h3 className="text-xl font-semibold">
                Experience – <span className="text-gray-300">Ewneet Comnication p.l.c  </span>
              </h3>
              <p className="text-sm text-gray-400 mb-1">june 2024 – August 2024</p>
              <p className="text-gray-300">
                Built responsive mobile and web apps using <span className="font-medium text-white">next.js</span> and{' '}
                <span className="font-medium text-white">Laravel</span>. Gained hands-on experience in full-stack development and agile workflows.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaBriefcase className="text-3xl text-green-400 mt-1" />
            <div className="text-white ml-4">
              <h3 className="text-xl font-semibold">
                Experience – <span className="text-gray-300">INSA  </span>
              </h3>
              <p className="text-sm text-gray-400 mb-1">February 2024 – March 2024</p>
              <p className="text-gray-300">
                Built responsive mobile and web apps using <span className="font-medium text-white">Flutter</span> and{' '}
                <span className="font-medium text-white">express</span>. Gained hands-on experience in full-stack development and agile workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
