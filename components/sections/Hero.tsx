'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { resumePath } from '@/lib/data';
import { useMounted } from '@/lib/hooks/useMounted';

export default function Hero() {
  const mounted = useMounted();
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.p 
            className="text-[#64ffda] font-mono text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-[#ccd6f6]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Alamin Sarker.
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-[#8892b0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I build scalable web applications.
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl text-[#8892b0] text-lg leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I&apos;m a Frontend Focused Software Engineer with 3+ years of expertise in developing scalable, 
            functional, and pixel-perfect frontend applications using ReactJS, NextJS, TypeScript/JavaScript, 
            and State management. Proficient in Python, Docker-based deployments, and actively seeking 
            opportunities to contribute to innovative projects.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors hover:scale-105 active:scale-95"
            >
              Check out my work!
            </a>
            <a
              href={resumePath}
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/20 transition-colors hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        
        {mounted && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <motion.button
              onClick={scrollToAbout}
              className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
              aria-label="Scroll to about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={24} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

