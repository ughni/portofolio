// components/sections/home/Hero.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// NAMA FUNGSI DIUBAH MENJADI Hero
export default function Hero() {
  // Teks untuk animasi efek ngetik satu-satu
  const nameText = "M. MUGHNI";
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block" },
  };

  const taglines = [
    "Merancang Arsitektur Web Skalabel & Performa Tinggi",
    "Menerjemahkan Kebutuhan Bisnis menjadi Solusi Software",
    "End-to-End Development dengan React & Laravel",
    "Membangun Sistem yang Aman, Rapi, dan Terstruktur",
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ================= ID CARD AUTO SPIN 360° =================
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* KOLOM KIRI: TEKS & ANIMASI KETIK */}
        <div className="space-y-6 z-10">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase">
            Full Stack Web Developer • Software Engineer
          </p>

          {/* Animasi Ngetik Nama */}
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight h-16 sm:h-20"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {nameText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline 3D yang gonta-ganti otomatis */}
          <div
            className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight h-[72px] sm:h-[84px] flex items-center"
            style={{ perspective: 1000 }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={taglineIndex}
                initial={{ rotateX: 90, opacity: 0, y: 10 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                exit={{ rotateX: -90, opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                style={{ transformOrigin: "50% 50%" }}
              >
                {taglines[taglineIndex]}{" "}
                <span className="text-blue-600">untuk Skala Produksi.</span>
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Full Stack Developer dengan rekam jejak merancang dan membangun
            sistem informasi yang fungsional—mulai dari aplikasi kasir
            terintegrasi (POS) hingga platform manajemen acara. Berpengalaman
            mengubah kompleksitas bisnis menjadi aplikasi web yang efisien dan
            skalabel menggunakan ekosistem React, Next.js, dan Laravel.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
            >
              Lihat Proyek Saya
            </Link>
            
            <Link
              href="https://github.com"
              target="_blank"
              className="px-6 py-3 bg-white text-gray-900 border border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              GitHub
            </Link>
          </div>

          {/* Social Links Bawah */}
          <div className="flex items-center gap-6 pt-8 text-sm font-semibold text-gray-500">
            <Link
              href="https://github.com/ughni"
              className="hover:text-blue-600 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/m-mughni-69b15830b/"
              className="hover:text-blue-600 transition"
            >
              LinkedIn
            </Link>
            <Link
              href="mmughni808@gmail.com"
              className="hover:text-blue-600 transition"
            >
              Email
            </Link>
          </div>
        </div>

        {/* KOLOM KANAN: INTERACTIVE ID CARD (AUTO SPIN) */}
        <div className="flex justify-center lg:justify-end relative pb-10 lg:pb-0">
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            style={{ perspective: 1400 }}
            className="relative w-72 sm:w-80 cursor-grab z-20 group"
          >
            {/* Wrapper yang benar-benar berputar 360° di sumbu Y */}
            <motion.div
              animate={{ rotateY: isDragging ? 0 : 360 }}
              transition={
                isDragging
                  ? { duration: 0.4, ease: "easeOut" }
                  : { duration: 14, repeat: Infinity, ease: "linear" }
              }
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full"
            >
              {/* ===== SISI DEPAN ===== */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 flex flex-col items-center"
              >
                {/* Lubang tali */}
                <div className="w-16 h-3 bg-gray-200 rounded-full mb-6 shadow-inner" />

                {/* Foto Profil - diperbesar */}
                <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-2xl bg-blue-50 border-4 border-white shadow-lg overflow-hidden mb-6 relative pointer-events-none">
                  <Image
                    src="/mughni.png"
                    alt="Foto Profil"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Detail ID */}
                <div className="text-center pointer-events-none">
                  <h3 className="font-extrabold text-2xl text-gray-900 mb-1">
                    M. Mughni
                  </h3>
                  <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">
                    Web Developer
                  </p>

                  <div className="w-full h-px bg-gray-100 my-4" />

                  <div className="grid grid-cols-2 gap-4 text-left w-full mt-2">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">
                        ID No.
                      </p>
                      <p className="text-xs font-mono font-semibold text-gray-800">
                        DEV-2026
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-bold">
                        Access
                      </p>
                      <p className="text-xs font-mono font-semibold text-gray-800">
                        All Areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden bg-gray-100"
              >
                {/* Ganti /id-back.png dengan gambar kamu sendiri di folder public */}
                <Image
                  src="/logoMughni.png"
                  alt="ID Card Belakang"
                  fill
                  className="object-cover py-9 "
                />
              </div>
            </motion.div>

            {/* Hint Teks (Muncul saat hover) */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-400 font-medium bg-white px-4 py-2 rounded-full shadow-sm pointer-events-none whitespace-nowrap">
              Tarik ID Card! 👋
            </div>
          </motion.div>

          {/* Latar belakang dekoratif di belakang ID Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
