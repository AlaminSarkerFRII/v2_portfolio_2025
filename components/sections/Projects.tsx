'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto w-full">
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
            <span className="text-[#64ffda]">03.</span> Some Things I've Built
          </motion.h2>
          <div className="h-px bg-[#233554] mt-3 hidden md:block"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64ffda]/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#ccd6f6]">{project.title}</h3>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                          aria-label="External Link"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-[#8892b0] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs text-[#8892b0] font-mono"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <motion.div
                  className="bg-[#112240] rounded-lg p-8 border border-[#233554]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#64ffda]/10 to-[#233554] rounded-lg flex items-center justify-center">
                    <span className="text-[#64ffda] font-mono text-sm">
                      Project Image
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

