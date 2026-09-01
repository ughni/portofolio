"use client";

import { motion } from "framer-motion";

export default function OrganizationSection() {
  const responsibilities = [
    "Contributed to organizational activities, particularly documentation and communication needs.",
    "Served as a documentation team member responsible for event photography.",
    "Coordinated the Public Relations team for a campus event.",
    "Served as secretary for a campus event focused on aftermovie production.",
  ];

  return (
    <section id="" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Organization & <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            My active involvement in campus organizations, focusing on communication, documentation, and event management.
          </p>
        </motion.div>

        {/* ================= ORGANIZATION CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          {/* Aksen visual di pojok kiri atas - menggunakan warna sedikit berbeda (Indigo) agar tidak monoton */}
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Himpunan Mahasiswa Teknik Informatika</h3>
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                Department of Communication & Digital (Komdigi) — Member
              </div>
            </div>
            
            <div className="text-left md:text-right">
              {/* Jangan lupa ganti [Periode] ini dengan rentang tahun yang sesuai */}
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">
                [Periode]
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Roles & Responsibilities
            </h4>
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start text-gray-600 text-base leading-relaxed">
                  <svg className="w-5 h-5 text-indigo-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
}