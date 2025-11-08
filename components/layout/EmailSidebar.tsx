'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function EmailSidebar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      setIsVisible(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40"
    >
      <motion.a
        href="mailto:alamin.sarker4241@gmail.com"
        className="writing-vertical text-[#8892b0] hover:text-[#64ffda] transition-colors font-mono text-sm tracking-wider"
        style={{ writingMode: 'vertical-rl' }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        alamin.sarker4241@gmail.com
      </motion.a>

      {/* Vertical Line */}
      <div className="w-px h-24 bg-[#8892b0]"></div>
    </motion.aside>
  );
}

