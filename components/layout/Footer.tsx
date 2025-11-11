"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-12 text-center">
      <div className="w-full">
        <small className="text-xs text-gray-500 border-b-1">
          Inspired by Brittany Chiang
        </small>

        <div style={{
          padding:"5px 0"
        }} className="flex flex-col justify-center items-center space-y-4">
          <span className="text-[#64ffda] hover:text-[#64ffda]/80 text-sm transition-colors hover:scale-105 active:scale-95">
            Designed & Built by <strong className="border-b-2 border-dashed"> Alamin Sarker</strong>
          </span>
          <span
            style={{
              paddingBottom: "8px",
            }}
            className="text-[#8892b0] text-sm"
          >
            © {currentYear} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
