'use client';

import { useEffect, useState } from 'react';
import { useMounted } from '@/lib/hooks/useMounted';

export default function EmailSidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const mounted = useMounted();

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

  if (!mounted) return null;

  return (
    <aside
      className={`fixed right-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <a
        href="mailto:alamin.sarker4241@gmail.com"
        className="writing-vertical text-[#8892b0] hover:text-[#64ffda] transition-colors   text-sm tracking-wider hover:-translate-y-1 active:scale-95"
        style={{ writingMode: 'vertical-rl' }}
      >
        alamin.sarker4241@gmail.com
      </a>

      {/* Vertical Line */}
      <div className="w-px h-24 bg-[#8892b0]"></div>
    </aside>
  );
}

