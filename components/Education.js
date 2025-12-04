'use client';

import React from 'react';


export default function Education() {
  return (
    <section className="md:pt-28 pt-10 md:px-24 px-4 bg-[#111111]  min-h-[90vh]" id="education">
      <div className="w-fit">
        <h2 className="text-2xl font-bold text-white pb-2">Education</h2>
        <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
          <hr className="border-[3px] border-green-400 w-[60%]" />
        </div>
      </div>

      <ul className="space-y-6 mt-8">
        <li className="flex gap-4 items-start">
         
          <div className="text-white">
            <h3 className="text-lg font-semibold">I am currently pursuing a B.Sc. in Software Engineering student</h3>
            <p className="text-sm text-gray-400">Bahir Dar University (2021–2025)</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
