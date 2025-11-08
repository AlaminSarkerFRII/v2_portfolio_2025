'use client';

import { Mail, Download } from 'lucide-react';
import { resumePath } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-6">
          <p className="text-[#64ffda] font-mono text-lg">
            04. What's Next?
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6]">
            Get In Touch
          </h2>
          
          <p className="text-[#8892b0] text-lg leading-relaxed max-w-md mx-auto">
            I&apos;m currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll try my best
            to get back to you!
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:alamin.sarker4241@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors hover:scale-105 hover:-translate-y-0.5 active:scale-95"
            >
              <Mail size={18} />
              Say Hello
            </a>
            <a
              href={resumePath}
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/20 transition-colors hover:scale-105 hover:-translate-y-0.5 active:scale-95"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

