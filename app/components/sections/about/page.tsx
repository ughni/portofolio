"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  // Data dalam Bahasa Indonesia
  const whatIDo = [
    {
      icon: "💻",
      title: "Frontend Engineering",
      description:
        "Membangun antarmuka pengguna (UI) yang interaktif, responsif, dan memiliki performa tinggi menggunakan ekosistem React dan Next.js.",
    },
    {
      icon: "⚙️",
      title: "Backend & Arsitektur API",
      description:
        "Merancang struktur database yang efisien dan membangun RESTful API yang aman dan terukur menggunakan Laravel dan MySQL.",
    },
    {
      icon: "🧩",
      title: "System Problem-Solving",
      description:
        "Mendiagnosis bug, melakukan refactoring kode, dan mengoptimalkan performa aplikasi untuk memastikan sistem berjalan tanpa hambatan.",
    },
    {
      icon: "🤝",
      title: "Kolaborasi & Integrasi",
      description:
        "Berkomunikasi secara transparan dengan klien untuk menerjemahkan kebutuhan bisnis mereka menjadi spesifikasi teknis yang jelas.",
    },
  ];

  // Variabel Animasi: Fade in & Slide Up (berjalan otomatis)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type:"spring" as const, stiffness: 100 },
    },
  };

  return (
    <main id="about" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Blob Bergerak Otomatis (Warna Biru) */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HEADER */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Tentang <span className="text-blue-600">Saya</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Merancang arsitektur web yang solid, skalabel, dan berorientasi pada
            tujuan bisnis.
          </p>
        </motion.div>

        {/* ABOUT ME - Layout Dua Kolom (Responsif) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 bg-white p-8 rounded-3xl shadow-lg border border-blue-100">
            <p>
              Saya adalah Full-Stack Web Developer yang terbiasa menangani
              siklus pengembangan perangkat lunak dari hulu ke hilir. Fokus
              utama saya adalah menerjemahkan alur bisnis yang kompleks menjadi
              aplikasi web yang responsif dan mudah digunakan.
            </p>
            <p>
              Melalui pengalaman profesional menangani berbagai klien freelance,
              saya telah merancang sistem informasi terintegrasi—mulai dari
              aplikasi Point of Sales (POS), platform registrasi acara, hingga
              manajemen tagihan—menggunakan ekosistem React, Next.js, Laravel,
              MySQL, dan Supabase.
            </p>
            <p>
              Saya sangat berorientasi pada penulisan kode yang bersih (clean
              code) dan efisiensi sistem. Tujuan saya adalah membantu perusahaan
              mengefisiensikan operasional mereka melalui teknologi digital yang
              tepat guna.
            </p>
          </div>
          {/* Kartu Statistik Melayang (Otomatis) */}
          <motion.div
            className="bg-blue-600 p-8 rounded-3xl text-white w-full h-full flex flex-col justify-center shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-5xl mb-4">🚀</div>
            <div className="text-4xl font-bold mb-2">2+ Tahun</div>
            <div className="text-blue-100 mb-6">
              Pengalaman Praktis Industri
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-blue-50 mt-1">Proyek Selesai</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-blue-50 mt-1">
                  Teknologi Digunakan
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* WHAT I DO SECTION */}
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Apa yang <span className="text-blue-600">Saya Lakukan</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatIDo.map((item, index) => (
              // Kartu dengan animasi naik-turun otomatis (delay berbeda)
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg relative overflow-hidden group"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {/* Garis gradien biru di bawah kartu */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-b-2xl" />

                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
