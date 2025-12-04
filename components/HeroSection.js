import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function HeroSection() {
  const roles = [
    "Full‑stack developer",
    "Backend developer",
    "Frontend developer",
    "Mobile app developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="w-full relative top-10 pb-20 bg-[#111111]">
      <div className="lg:px-16 px-8 flex sm:flex-row flex-col flex-col-reverse gap-6 justify-center items-center">
        <div className="sm:text-left text-center text-white max-w-2xl">
          <h4 className="sm:text-2xl text-3xl font-semibold w-fit bg-gray-900/40 p-3 rounded-lg">
            My name is{" "}
            <span className="text-green-500 sm:text-2xl text-xl font-serif">Hibritu Diresss</span>
          </h4>
          <h4 className="sm:text-3x2  text-3xl font-semibold w-fit bg-gray-900/40 p-3 rounded-lg">
          I am {" "}
          <span className="mt-4  text-green-500 sm:text-5xl text-3xl font-extrabold leading-tight" aria-live="polite">
            {roles[roleIndex]}
          </span>
          </h4>

          <p className="mt-4 text-lg text-gray-300">
            Full‑stack developer crafting responsive, accessible, and scalable products with
            Next.js, Node.js (Express), Laravel, and Flutter.
          </p>
          <div className="mt-6 flex items-center gap-6 sm:justify-start justify-center" aria-label="Social links">
            <a
              href="https://github.com/Hibritu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-90 transition-opacity"
            >
              <FaGithub className="text-3xl text-green-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/hibritu-diress-5b5656307/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-90 transition-opacity"
            >
              <FaLinkedin className="text-3xl text-green-400" />
            </a>
            
          </div>
          <div className="mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
            <a href="/details/contact">
              <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-green-500 hover:bg-green-600 transition">
                Contact Me
              </button>
            </a>

            <a href="/api/download" download="Hibr_Diresss_CV.pdf">
  <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-yellow-500 hover:bg-yellow-600 transition">
    Download CV
  </button>
</a>

          </div>
          
          {/* Social links under hero */}
          
        </div>
        <div className="relative md:w-40 sm:w-48 w-36 group">
  <div className="pointer-events-none absolute -inset-4 rounded-[3rem] blur-2xl bg-gradient-to-tr from-green-400/25 via-emerald-300/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
  <div className="pointer-events-none absolute -inset-2 rounded-[3rem] border border-green-400/30 [mask-image:radial-gradient(circle,transparent_58%,black)] animate-[spin_20s_linear_infinite]"></div>
  <img
    className="relative z-8 w-full h-auto sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-[3rem] outline outline-[.25rem] outline-green-400/40 shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:-rotate-[0.5deg] animate-float"
    src="/images/hibr.jpg"
    alt="Hibritu Diresss"
    loading="eager"
    decoding="async"
  />
  

</div>
        
      </div>
    </section>
  );
}
