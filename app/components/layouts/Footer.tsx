import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* ================= KOLOM 1: BRAND & DESC ================= */}
          <div>
            <Link href="/" className="font-extrabold text-2xl tracking-tight text-gray-900 block mb-1">
              M. <span className="text-blue-600">Mughni</span>
            </Link>
            <p className="text-blue-600 text-sm font-bold tracking-wide uppercase mb-4">
              Full-Stack Developer
            </p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Membangun arsitektur web modern dan solusi digital yang terukur untuk kebutuhan bisnis.
            </p>
          </div>

          {/* ================= KOLOM 2: NAVIGATION ================= */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
              Navigasi
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Beranda</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Tentang</Link>
              <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Proyek</Link>
              <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Pengalaman</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Kontak</Link>
            </nav>
          </div>

          {/* ================= KOLOM 3: SOCIAL ================= */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
              Sosial
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link href="https://github.com/mughni" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/mughni" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2">
                LinkedIn
              </Link>
              <Link href="mailto:mmughni808@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2">
                Email
              </Link>
            </nav>
          </div>
          
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            © 2026 M. Mughni. Hak cipta dilindungi.
          </p>
          <p className="text-sm text-gray-400 font-medium">
            Dirancang & Dibangun di Pekalongan, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}