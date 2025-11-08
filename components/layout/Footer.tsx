'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] hover:text-[#64ffda]/80 font-mono text-sm transition-colors hover:scale-105 active:scale-95"
          >
            Designed & Built by Alamin Sarker
          </a>
          <p className="text-[#8892b0] text-sm font-mono">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

