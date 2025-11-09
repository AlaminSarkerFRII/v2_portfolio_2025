'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Hide sidebar if near bottom of page
      setIsVisible(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.3 }}
      className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40"
    >
      {/* Social Links */}
      <div className="flex flex-col gap-8 space-y-4">
        {socialLinks.map((link, index) => {
          const Icon = iconMap[link.icon.toLowerCase()];
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={link.name}
            >
              {Icon && <Icon size={20} />}
            </motion.a>
          );
        })}
      </div>

      {/* Vertical Line */}
      <div className="w-px h-24 bg-[#8892b0]"></div>
    </motion.aside>
  );
}

