"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EducationSection() {
  // State untuk melacak index pendidikan mana yang detailnya sedang terbuka
  const [expandedEducation, setExpandedEducation] = useState<number | null>(
    null,
  );

  const educationHistory = [
    {
      degree: "S1 Teknik Informatika",
      institution: "Institut Teknologi dan Sains NU Pekalongan",
      period: "2024 – Sekarang",
      status: "Mahasiswa Aktif",
      statusColor: "bg-green-50 text-green-700",
      description:
        "Fokus pada pengembangan perangkat lunak, arsitektur web, dan fundamental ilmu komputer.",
      coursework: [
        "Pemrograman Web",
        "Sistem Basis Data",
        "Rekayasa Perangkat Lunak",
        "Struktur Data & Algoritma",
      ],
      experiences: [
        "Mengelola CMS website Himpunan Mahasiswa Informatika (KOMDIGI) untuk publikasi informasi rutin.",
        "Menyusun strategi konten media sosial organisasi untuk menjangkau mahasiswa secara efektif.",
        "Menjalankan fungsi manajerial komunikasi dan administrasi sebagai Humas dan Sekretaris dalam berbagai event kampus.",
      ],
    },
    {
      degree: "Teknik Kendaraan Ringan",
      institution: "SMK Ma'arif NU Kajen",
      period: "2022 – 2024",
      status: "Lulus",
      statusColor: "bg-blue-50 text-blue-700",
      description:
        "Pendidikan menengah kejuruan yang melatih kedisiplinan, pemecahan masalah teknis, dan etos kerja.",
      coursework: [],
      experiences: [],
    },
  ];

  // Fungsi untuk toggle detail
  const toggleEducation = (index: number) => {
    if (expandedEducation === index) {
      setExpandedEducation(null);
    } else {
      setExpandedEducation(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Riwayat <span className="text-blue-600">Pendidikan</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Latar belakang akademis yang mendukung pondasi teknis dan kemampuan
            manajerial saya.
          </p>
        </motion.div>

        {/* ================= TIMELINE / CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationHistory.map((edu, index) => {
            const isExpanded = expandedEducation === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
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
                  onClick={() => toggleEducation(index)}
                >
                  <div className="flex-grow">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors ${isExpanded ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"}`}
                    >
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
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
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                      {edu.institution}
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
                      {edu.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col items-start md:items-end gap-2 pt-1">
                    <span
                      className={`inline-block px-3 py-1 font-bold text-xs rounded-full uppercase tracking-wide ${edu.statusColor}`}
                    >
                      {edu.status}
                    </span>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                      {edu.period}
                    </p>

                    {/* Tombol Toggle */}
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs transition-all duration-300 ${
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
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Bagian Pengalaman (Organisasi/Magang) */}
                          {edu.experiences.length > 0 && (
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
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                                Pengalaman & Organisasi
                              </h4>
                              <ul className="space-y-3">
                                {edu.experiences.map((exp, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-gray-600 text-sm leading-relaxed"
                                  >
                                    <span className="text-blue-500 mr-3 shrink-0 mt-1">
                                      •
                                    </span>
                                    {exp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Bagian Mata Kuliah */}
                          {edu.coursework.length > 0 && (
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                                Mata Kuliah Relevan
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.coursework.map((course, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-blue-50/50 text-blue-700 text-xs font-semibold border border-blue-100/50 rounded-lg cursor-default"
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
