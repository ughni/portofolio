"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const tasks = [
    "Menerjemahkan kebutuhan bisnis klien menjadi arsitektur aplikasi web yang fungsional dan terukur.",
    "Merancang dan mengimplementasikan antarmuka pengguna (UI) yang responsif serta logika backend yang aman.",
    "Melakukan integrasi API dan perancangan database (MySQL/Supabase) untuk memastikan efisiensi aliran data.",
    "Mengeksekusi proses debugging, optimalisasi performa, dan pemeliharaan kode secara berkala.",
    "Mengelola komunikasi proyek secara transparan dari tahap analisis kebutuhan (requirements) hingga peluncuran (deployment).",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "Supabase",
  ];

  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Pengalaman <span className="text-blue-600">Profesional</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Rekam jejak praktis saya dalam memberikan solusi teknologi untuk
            kebutuhan bisnis nyata.
          </p>
        </motion.div>

        {/* ================= EXPERIENCE CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Aksen visual di pojok kiri atas */}
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Freelance Web Developer
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Fastwork & Projects.co.id
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-bold text-sm rounded-full mb-2">
                Berbasis Proyek
              </span>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                2026 – Sekarang
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Bertanggung jawab penuh atas siklus pengembangan aplikasi web (SDLC)
            klien, mulai dari perancangan arsitektur, penulisan kode, hingga
            optimasi performa untuk memastikan target bisnis tercapai.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Bagian What I Do */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Tanggung Jawab Teknis
              </h4>
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 text-sm leading-relaxed"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
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
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bagian Technologies */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                Teknologi & Ekosistem
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-semibold border border-gray-200 rounded-lg shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
