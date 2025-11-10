"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState, useCallback } from "react";

type ProjectMediaProps = {
  title: string;
  images: string[];
};

function ProjectMedia({ title, images }: ProjectMediaProps) {
  const safeImages = useMemo(
    () => images.filter(Boolean),
    [images]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesCount = safeImages.length;

  const normalizeIndex = useCallback(
    (index: number) => {
      if (imagesCount === 0) return 0;
      const mod = index % imagesCount;
      return mod >= 0 ? mod : mod + imagesCount;
    },
    [imagesCount]
  );

  const currentIndex = normalizeIndex(activeIndex);
  const hasMultipleImages = imagesCount > 1;

  const handlePrev = () => {
    if (imagesCount === 0) return;
    setActiveIndex((prev) => normalizeIndex(prev - 1));
  };

  const handleNext = () => {
    if (imagesCount === 0) return;
    setActiveIndex((prev) => normalizeIndex(prev + 1));
  };

  if (safeImages.length === 0) {
    return (
      <div className="bg-[#112240] rounded-lg p-2 border border-[#233554] hover:scale-105 transition-transform overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-[#64ffda]/10 to-[#233554] rounded-lg relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#64ffda] text-sm">
              Project Image
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#112240] rounded-lg p-2 border border-[#233554] hover:scale-105 transition-transform overflow-hidden relative">
      <div className="aspect-video bg-gradient-to-br from-[#64ffda]/10 to-[#233554] rounded-lg relative overflow-hidden">
        {safeImages.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            className="absolute inset-0"
            initial={false}
            animate={{
              x: `${(index - currentIndex) * 100}%`,
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.95,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ pointerEvents: index === currentIndex ? "auto" : "none" }}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-[#0a192f]/70 p-2 text-[#64ffda] hover:bg-[#0a192f]/90 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-[#0a192f]/70 p-2 text-[#64ffda] hover:bg-[#0a192f]/90 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {safeImages.map((_, dotIndex) => (
              <button
                key={`dot-${dotIndex}`}
                type="button"
                onClick={() => setActiveIndex(dotIndex)}
                className={`h-2 w-2 rounded-full transition-all ${
                  dotIndex === currentIndex
                    ? "bg-[#64ffda] scale-110"
                    : "bg-[#64ffda]/40 hover:bg-[#64ffda]/70"
                }`}
                aria-label={`Go to image ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
                <div
                  style={{
                    padding: "8px 8px",
                  }}
                  className="relative bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64ffda]/50 transition-colors group-hover:scale-[1.02]"
                >
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
                      <li key={tech} className="text-xs text-[#8892b0]  ">
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
                <ProjectMedia
                  title={project.title}
                  images={
                    project.images && project.images.length > 0
                      ? project.images
                      : project.image
                      ? [project.image]
                      : []
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
