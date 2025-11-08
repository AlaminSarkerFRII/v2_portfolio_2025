'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Python',
    'Django',
    'Zustand',
    'TanstackQuery',
    'TailwindCSS',
    'Docker',
    'MySQL',
    'MongoDB',
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[auto_1fr] gap-8 items-start"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-[#ccd6f6] font-mono whitespace-nowrap"
          >
            <span className="text-[#64ffda]">01.</span> About Me
          </motion.h2>
          <div className="h-px bg-[#233554] mt-3 hidden md:block"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-4 text-[#8892b0]">
            <p>
              Hello! I'm Alamin, a Frontend Focused Software Engineer based in Dhaka, Bangladesh. 
              I enjoy creating scalable, functional, and pixel-perfect applications that live on 
              the internet, whether that be websites, SaaS platforms, or anything in between.
            </p>
            <p>
              My goal is to always build products that provide pixel-perfect, performant experiences. 
              I'm passionate about writing clean, maintainable code, optimizing performance, and 
              following best practices. I've successfully improved application load times by up to 40% 
              and enhanced user engagement through efficient code-splitting and caching strategies.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg opacity-20"></div>
            <div className="relative p-6 bg-[#112240]/50 rounded-lg">
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-[#8892b0] font-mono text-sm before:content-['▹'] before:text-[#64ffda] before:mr-2"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

