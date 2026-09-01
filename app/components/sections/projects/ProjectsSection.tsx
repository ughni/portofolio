"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsSection() {
  // State untuk melacak index project mana yang detailnya sedang terbuka
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Sistem Informasi Kas Masyarakat Desa",
      role: "Full-Stack Developer",
      isClientProject: true, // Ini untuk desa, jadi hitungannya klien/pengguna nyata
      description:
        "Aplikasi berbasis web untuk membantu pengurus desa mengelola pencatatan keuangan dan memonitor arus transaksi kas secara digital, transparan, dan terstruktur.",
      features: [
        "Autentikasi Aman",
        "Manajemen CRUD Keuangan",
        "Rekapitulasi Transaksi",
        "Dashboard Statistik",
        "Manajemen Database",
      ],
      whatIDid:
        "Merancang arsitektur database, membangun sistem autentikasi, dan mengimplementasikan seluruh operasi CRUD untuk pencatatan keuangan menggunakan Next.js dan Supabase.",
      techStack: ["Next.js", "Tailwind CSS", "Supabase"],
      links: {
        demo: "#", // Jangan lupa ganti kalau udah ada link live-nya
        github: "https://github.com/mughni",
      },
    },
    {
      title: "EventKu - Platform Manajemen Acara",
      role: "Full-Stack Developer",
      isClientProject: true,
      description:
        "Platform manajemen acara yang memfasilitasi penyelenggara dalam otomatisasi registrasi peserta, check-in instan via QR Code, dan pembuatan sertifikat massal.",
      features: [
        "Manajemen Event",
        "Registrasi Peserta",
        "Check-in via QR Code",
        "Auto-Generate Sertifikat",
        "Dashboard Panitia",
      ],
      whatIDid:
        "Membangun frontend aplikasi, mengintegrasikan backend dengan Supabase, serta merancang logika untuk pembuatan QR Code dan sertifikat otomatis.",
      techStack: ["Next.js", "Tailwind CSS", "Supabase"],
      links: {
        demo: "#",
        github: "https://github.com/mughni",
      },
    },
    {
      title: "Aplikasi POS (Point of Sales) Terintegrasi",
      role: "Full-Stack Developer",
      isClientProject: true,
      description:
        "Aplikasi kasir berbasis web yang dirancang untuk mempercepat proses pencatatan transaksi penjualan harian dan efisiensi manajemen stok produk secara real-time.",
      features: [
        "Autentikasi Multi-Role",
        "Manajemen Inventaris",
        "Pemrosesan Transaksi",
        "Pencarian Cerdas",
        "Dashboard Pendapatan",
      ],
      whatIDid:
        "Mengembangkan logika pemrosesan penjualan, membangun sistem pencarian dan paginasi data berskala besar, serta merancang dashboard admin.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "https://github.com/mughni",
      },
    },
    {
      title: "Pricing Regulator App",
      role: "Full-Stack Developer",
      isClientProject: true,
      description:
        "Aplikasi internal perusahaan untuk membantu klien menganalisis data, mengelola, dan menentukan strategi penetapan harga produk secara sistematis dan terpusat.",
      features: [
        "Analisis Data Harga",
        "Manajemen Produk",
        "Kalkulasi Otomatis",
        "Sistem Pelaporan",
        "Antarmuka Responsif",
      ],
      whatIDid:
        "Menerjemahkan kebutuhan bisnis klien menjadi logika kalkulasi dalam kode, memastikan performa aplikasi cepat, dan membangun antarmuka yang intuitif.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "https://github.com/mughni",
      },
    },
  ];

  // Fungsi untuk toggle detail
  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null); // Tutup jika yang di-klik adalah yang sedang terbuka
    } else {
      setExpandedProject(index); // Buka yang baru
    }
  };

  return (
    <section id="projects" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Proyek <span className="text-blue-600">Terpilih</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Kumpulan proyek nyata yang telah saya bangun, membuktikan kemampuan
            saya dalam memecahkan masalah bisnis melalui kode yang fungsional.
          </p>
        </motion.div>

        {/* ================= PROJECT LIST ================= */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative bg-white border rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  isExpanded
                    ? "border-blue-200 shadow-lg ring-1 ring-blue-50"
                    : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
                }`}
              >
                {/* Highlight bar di sebelah kiri */}
                <div
                  className={`absolute left-0 top-8 bottom-8 w-1 rounded-r-lg transition-all duration-300 ${isExpanded ? "bg-blue-600 opacity-100" : "bg-gray-200 opacity-0 group-hover:opacity-100"}`}
                />

                {/* ================= BAGIAN ATAS (RINGKASAN YANG SELALU TERLIHAT) ================= */}
                <div
                  className="flex flex-col md:flex-row md:items-start justify-between gap-6 cursor-pointer"
                  onClick={() => toggleProject(index)}
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className={`text-2xl font-bold transition-colors ${isExpanded ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"}`}
                      >
                        {project.title}
                      </h3>
                      {project.isClientProject && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide rounded-full">
                          Proyek Klien
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
                      {project.role}
                    </p>

                    {/* Tech Stack Pindah ke Atas agar langsung terlihat */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium border border-gray-200 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tombol Toggle View Details */}
                  <div className="shrink-0 pt-2">
                    <button
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        isExpanded
                          ? "bg-blue-50 text-blue-700"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {isExpanded ? "Tutup Detail" : "Lihat Detail"}
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-600" : "text-gray-500"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ================= BAGIAN BAWAH (DETAIL YANG BISA DI-TOGGLE) ================= */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-6 border-t border-gray-100">
                        {/* Deskripsi Lengkap */}
                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          {/* Key Features */}
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                              Fitur Utama
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-gray-600 text-sm"
                                >
                                  <span className="text-blue-500 mr-2 shrink-0">
                                    •
                                  </span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What I Did */}
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              Apa yang Saya Lakukan
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                              {project.whatIDid}
                            </p>
                          </div>
                        </div>

                        {/* Tombol Links */}
                        <div className="flex items-center gap-4 pt-4">
                          {project.links.demo && (
                            <Link
                              href={project.links.demo}
                              target="_blank"
                              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
                            >
                              Visit Live Demo
                            </Link>
                          )}
                          {project.links.github && (
                            <Link
                              href={project.links.github}
                              target="_blank"
                              className="px-6 py-2.5 border border-gray-300 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              View Source
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
