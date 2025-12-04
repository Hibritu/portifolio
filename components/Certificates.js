'use client';

import React from 'react';

export default function Certificates() {
  return (
    <section className="md:pt-20 pt-10 md:px-20 px-4 bg-[#111111]  min-h-[90vh] " id="certificates">
      <div className="w-fit">
        <h2 className="text-2xl font-bold text-white pb-2">Certificates</h2>
        <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
          <hr className="border-[3px] border-green-400 w-[20%]" />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        <div className="text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Front end developer libraries</h3>
         
         <img
  src="/images/fcc.jpg"
  alt="Flutter App Development Certificate"
  className="w-100 rounded shadow-lg mx-auto" // sets fixed width
/>

        </div>

        <div className="text-white text-center">
          <h3 className="text-lg font-semibold mb-2">mobile app development</h3>
         
          <img
            src="/images/cer.png"
            alt="Cybersecurity Fundamentals Certificate"
            className="w-100  rounded shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
