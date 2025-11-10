"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
      suppressHydrationWarning
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          className="grid md:grid-cols-[auto_1fr] gap-8 items-start mb-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#ccd6f6]   whitespace-nowrap">
            <span className="text-[#64ffda]">03.</span> Some Things I&apos;ve
            Built
          </h2>
          <div className="h-px bg-[#233554] mt-3 hidden md:block"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <div
                className={`relative group ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64ffda]/50 transition-colors group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#ccd6f6]">
                      {project.title}
                    </h3>
                    {(project.github || project.external) && (
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
                    )}
                  </div>
                  <p className="text-[#8892b0] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs text-[#8892b0]  "
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <div className="bg-[#112240] rounded-lg p-2 border border-[#233554] hover:scale-105 transition-transform overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-[#64ffda]/10 to-[#233554] rounded-lg relative overflow-hidden">
                    {project?.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#64ffda]   text-sm">
                          Project Image
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
