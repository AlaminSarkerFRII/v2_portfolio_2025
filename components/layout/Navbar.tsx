"use client";

import { useState, useEffect, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks, resumePath } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted after initial render to avoid hydration mismatch
    startTransition(() => {
      setMounted(true);
    });
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run after mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? "bg-[#0a192f]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
          <div className="flex items-center justify-between gap-12 h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-[#64ffda] font-mono hover:scale-105 transition-transform"
            >
              <span className="text-[#64ffda]">A</span>
              <span className="text-[#8892b0]">S</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 items-center justify-center space-x-8 font-mono text-sm tracking-wide">
              {navLinks.map((link, index) => {
                const isActive = mounted && activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-sm px-2 py-1 font-mono transition-colors ${
                      isActive
                        ? "text-[#64ffda]"
                        : "text-[#8892b0] hover:text-[#64ffda]"
                    }`}
                    suppressHydrationWarning
                  >
                    <span className="text-[#64ffda]">0{index + 1}.</span>
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#64ffda]"></span>
                    )}
                  </a>
                );
              })}
              <a
                href={resumePath}
                download
                className="px-6 py-2 text-sm font-mono border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#64ffda] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-64 bg-[#112240] shadow-2xl md:hidden"
          >
            <div className="flex flex-col items-start p-8 space-y-6 mt-16">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-mono ${
                      isActive ? "text-[#64ffda]" : "text-[#8892b0]"
                    }`}
                  >
                    <span className="text-[#64ffda]">0{index + 1}.</span>
                    {link.name}
                  </a>
                );
              })}
              <a
                href={resumePath}
                download
                className="block w-full px-4 py-2 text-sm font-mono border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
