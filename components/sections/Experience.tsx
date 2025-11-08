'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[auto_1fr] gap-8 items-start mb-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-[#ccd6f6] font-mono whitespace-nowrap"
          >
            <span className="text-[#64ffda]">02.</span> Where I've Worked
          </motion.h2>
          <div className="h-px bg-[#233554] mt-3 hidden md:block"></div>
        </motion.div>

        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[#233554]">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-mono whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-colors ${
                  activeTab === index
                    ? 'border-[#64ffda] text-[#64ffda] bg-[#112240]/50'
                    : 'border-transparent text-[#8892b0] hover:text-[#64ffda] hover:bg-[#112240]/30'
                }`}
                whileHover={{ x: activeTab === index ? 0 : 2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-[#8892b0] flex items-start before:content-['▹'] before:text-[#64ffda] before:mr-3 before:mt-1"
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

