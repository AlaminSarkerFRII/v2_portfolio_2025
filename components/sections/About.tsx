"use client";

import { useRef } from "react";
import Image from "next/image";

import profileImage from "@/app/assets/my_image.jpg";

export default function About() {
  const ref = useRef(null);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Python",
    "Django",
    "Zustand",
    "TanstackQuery",
    "TailwindCSS",
    "Docker",
    "MySQL",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <h2 className="text-3xl font-bold text-[#ccd6f6] font-mono whitespace-nowrap">
            <span className="text-[#64ffda]">01.</span> About Me
          </h2>
          <div className="h-px bg-[#233554] mt-3 hidden md:block"></div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="space-y-4 text-[#8892b0]">
              <p>
                Hello! I&apos;m Alamin, a Frontend Focused Software Engineer
                based in Dhaka, Bangladesh. I enjoy creating scalable,
                functional, and pixel-perfect applications that live on the
                internet, whether that be websites, SaaS platforms, or anything
                in between.
              </p>
              <p>
                My goal is to always build products that provide pixel-perfect,
                performant experiences. I&apos;m passionate about writing clean,
                maintainable code, optimizing performance, and following best
                practices. I&apos;ve successfully improved application load
                times by up to 40% and enhanced user engagement through
                efficient code-splitting and caching strategies.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>

            {/* Skills List */}

            <div className="relative w-full">
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg opacity-20"></div>
              <div className="relative p-6 bg-[#112240]/50 rounded-lg">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[#8892b0] font-mono text-sm before:content-['▹'] before:text-[#64ffda] before:mr-2 before:mt-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 group">
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 transform translate-x-4 translate-y-4"></div>

            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[#64ffda]/30">
              <Image
                src={profileImage}
                alt="Alamin Sarker"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
