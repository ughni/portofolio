"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek bayangan saat scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // Fungsi khusus untuk scroll mulus & menghindari tertutup navbar
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Otomatis tutup menu HP saat diklik
    
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Offset 80px menyesuaikan tinggi navbar (h-20)
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-lg border-b border-gray-100" 
        : "bg-white shadow-sm border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ================= LOGO ================= */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="font-extrabold text-2xl tracking-tight text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
              MUGHNI<span className="text-gray-800">.</span>
            </a>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Beranda</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Tentang</a>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Teknologi</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Proyek</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Pengalaman</a>

            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
              Kontak
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">Beranda</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">Tentang</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">Teknologi</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">Proyek</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">Pengalaman</a>
          
          <div className="px-3 pt-4">
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block w-full text-center px-5 py-3 rounded-xl bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors shadow-md cursor-pointer">
              Mulai Diskusi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}