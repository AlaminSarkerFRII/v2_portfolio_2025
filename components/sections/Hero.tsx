"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { resumePath } from "@/lib/data";
import { useMounted } from "@/lib/hooks/useMounted";

export default function Hero() {
  const mounted = useMounted();
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16 relative"
      suppressHydrationWarning
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <p className="text-[#64ffda] font-mono text-lg">Hi, my name is</p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6]">
            Alamin Sarker.
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0]">
            I build scalable web applications.
          </h2>

          <p className="max-w-2xl text-[#8892b0] text-lg leading-relaxed mt-6">
            I&apos;m a Frontend Focused Software Engineer with 3+ years of
            expertise in developing scalable, functional, and pixel-perfect
            frontend applications using ReactJS, NextJS, TypeScript/JavaScript,
            and State management. Proficient in Python, Docker-based
            deployments, and actively seeking opportunities to contribute to
            innovative projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono text-base font-semibold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#64ffda]/20 hover:shadow-[#64ffda]/40"
            >
              Check out my work!
            </a>
            <a
              href={resumePath}
              download
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#64ffda] to-[#52d4c0] text-[#0a192f] rounded font-mono text-base font-semibold border-2 border-[#64ffda] hover:from-[#52d4c0] hover:to-[#64ffda] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#64ffda]/30 hover:shadow-[#64ffda]/50"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {mounted && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <motion.button
              onClick={scrollToAbout}
              className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
              aria-label="Scroll to about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={24} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
