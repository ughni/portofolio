"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const coreSkills = [
    "React.js",
    "Next.js",
    "Laravel",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "REST API",
    "Git/GitHub",
  ];

  const supportingSkills = [
    "Node.js",
    "Express.js",
    "Supabase",
    "Bootstrap",
    "Postman",
    "VS Code",
  ];

  // Konfigurasi Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Keterampilan <span className="text-blue-600">Teknis</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Penjelasan rinci tentang susunan teknologi yang saya gunakan,
            dioptimalkan untuk menghasilkan aplikasi web yang skalabel dan
            fungsional.
          </p>
        </motion.div>

        {/* ================= CORE SKILLS (Hijau/Biru Utama) ================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900">
              Teknologi Utama
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-white text-gray-800 font-bold text-sm md:text-base rounded-xl border-2 border-blue-100 shadow-sm hover:shadow-md hover:border-blue-600 hover:text-blue-600 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= SUPPORTING SKILLS (Kuning/Abu Elegan) ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <h3 className="text-2xl font-bold text-gray-900">
              Alat & Teknologi Pendukung
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {supportingSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 bg-white text-gray-600 font-medium text-sm rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-amber-400 hover:text-amber-600 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
