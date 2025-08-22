"use client";

import { SiLaravel, SiNodedotjs, SiExpress, SiFlutter, SiNextdotjs } from "react-icons/si";
import { useState, useEffect } from "react";

export default function Skills() {
  const radius = 120; // px
  const size = 320; // container size
  const skills = [
    { name: "Laravel", Icon: SiLaravel },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express", Icon: SiExpress },
    { name: "Flutter", Icon: SiFlutter },
    { name: "Next.js", Icon: SiNextdotjs },
  ];

  const colorClass = {
    "Laravel": "text-[#FF2D20]",
    "Node.js": "text-[#5FA04E]",
    "Express": "text-white",
    "Flutter": "text-[#54C5F8]",
    "Next.js": "text-white",
  };

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <section className={`w-full py-6 bg-[#111111] text-white flex flex-col items-center`}>
      <h2 className="text-xl sm:text-4xl font-extrabold text-center">
        Skills
      </h2>
     
      <div className="mt-10 relative flex items-center justify-center"
           style={{ width: size, height: size }}>
        {/* Rotating ring */}
        <div
          className={`absolute inset-0 rounded-full border border-green-500/30 ${startAnimation ? 'animate-spin-slow' : ''}`}
          aria-hidden
        />

        {/* Icons arranged in a circle */}
        {skills.map((s, idx) => {
          const angle = (360 / skills.length) * idx;
          const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
          return (
            <div
              key={s.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ transform }}
            >
              <div className="flex flex-col items-center gap-2">
                <s.Icon
                  className={`drop-shadow-[0_0_8px_rgba(16,185,129,0.35)] ${colorClass[s.name]}`}
                  size={40}
                  aria-label={s.name}
                  title={s.name}
                  suppressHydrationWarning
                />
                <span className="text-xs text-gray-300">{s.name}</span>
              </div>
            </div>
          );
        })}

        {/* Center dot */}
        <div className="w-3 h-3 rounded-full bg-green-400/80 animate-spin-slow" />
      </div>
    </section>
  );
}
