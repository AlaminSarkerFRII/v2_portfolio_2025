'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20" suppressHydrationWarning>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          className="grid md:grid-cols-[auto_1fr] gap-8 items-start mb-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-[#ccd6f6] font-mono whitespace-nowrap">
            <span className="text-[#64ffda]">02.</span> Where I&apos;ve Worked
          </h2>
          <div className="h-px bg-[#233554] mt-3 hidden md:block"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-[200px_1fr] gap-8"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Tab List */}
          <div className="flex md:flex-col items-start gap-y-8 overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[#233554]">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-mono whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-colors ${
                  activeTab === index
                    ? 'border-[#64ffda] text-[#64ffda] bg-[#112240]/50'
                    : 'border-transparent text-[#8892b0] hover:text-[#64ffda] hover:bg-[#112240]/30'
                } ${index > 0 ? 'md:mt-4' : ''}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div 
            key={activeTab} 
            className="transition-opacity duration-300"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {experiences[activeTab] && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#ccd6f6]">
                    {experiences[activeTab].position}{' '}
                    <a
                      href={experiences[activeTab].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:underline inline-flex items-center gap-1"
                    >
                      @ {experiences[activeTab].company}
                      <ExternalLink size={16} />
                    </a>
                  </h3>
                  <p className="text-sm text-[#8892b0] font-mono mt-1">
                    {experiences[activeTab].range}
                  </p>
                  <p className="text-sm text-[#8892b0] mt-1">
                    {experiences[activeTab].location}
                  </p>
                </div>
                <ul className="space-y-2">
                  {experiences[activeTab].descriptions.map((desc, index) => (
                    <li
                      key={index}
                      className="text-[#8892b0] flex items-start before:content-['▹'] before:text-[#64ffda] before:mr-3 before:mt-1"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

