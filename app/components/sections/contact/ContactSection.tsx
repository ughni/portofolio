"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  const contactLinks = [
    {
      name: "Email",
      value: "mmughni808@gmail.com",
      href: "mailto:mmughni808@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      ),
      color: "text-red-500",
      bgHover: "hover:bg-red-50",
      borderHover: "hover:border-red-200"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/mughni",
      href: "https://www.linkedin.com/in/m-mughni-69b15830b/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
      color: "text-blue-700",
      bgHover: "hover:bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      name: "GitHub",
      value: "github.com/mughni",
      href: "https://github.com/mughni",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      ),
      color: "text-gray-900",
      bgHover: "hover:bg-gray-100",
      borderHover: "hover:border-gray-300"
    },
    {
      name: "WhatsApp",
      value: "+62 877-3878-4178",
      href: "https://wa.me/6287738784178",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0a12 12 0 00-8.484 20.485L0 24l3.653-3.327A11.95 11.95 0 0011.944 24a12 12 0 0012-12 12 12 0 00-12-12zm6.262 17.334c-.267.753-1.529 1.455-2.099 1.517-.534.059-1.235.184-3.92-1.04-3.23-1.472-5.309-4.786-5.466-5.006-.157-.22-1.306-1.745-1.306-3.332 0-1.587.828-2.373 1.121-2.673.292-.301.637-.376.845-.376.21 0 .419.004.598.013.203.01.474-.082.74.56.292.705.992 2.427 1.08 2.61.088.183.146.398.037.618-.108.22-.163.357-.326.549-.163.193-.343.435-.49.57-.162.152-.331.32-.143.642.188.322.836 1.382 1.787 2.235 1.232 1.1 2.26 1.433 2.585 1.587.325.154.516.128.711-.093.195-.22 .836-.976 1.059-1.311.223-.335.446-.279.74-.171.293.108 1.849.873 2.163 1.03.314.157.524.235.6.368.077.132.077.77-.19 1.523z"/></svg>
      ),
      color: "text-green-600",
      bgHover: "hover:bg-green-50",
      borderHover: "hover:border-green-200"
    }
  ];

  return (
    <section id="contact" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* ================= HEADER & CTA TEXT ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-4xl mb-4 block">🚀</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Mari Bangun Sesuatu yang <span className="text-blue-600">Luar Biasa</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Saya terbuka untuk peluang kerja sama profesional, proyek freelance, maupun posisi full-time. Mari diskusikan bagaimana saya dapat berkontribusi pada tim dan bisnis Anda.
          </p>
        </motion.div>

        {/* ================= CONTACT LINKS GRID ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
        >
          {contactLinks.map((contact, index) => (
            <Link 
              key={index}
              href={contact.href}
              target="_blank"
              className={`flex items-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 ${contact.bgHover} ${contact.borderHover} group`}
            >
              <div className={`p-3 bg-gray-50 rounded-xl mr-4 ${contact.color} group-hover:bg-white transition-colors`}>
                {contact.icon}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{contact.name}</p>
                <p className="text-gray-900 font-semibold truncate max-w-[200px]">{contact.value}</p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* ================= MAIN CTA BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="mailto:mmughni808@gmail.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-xl shadow-blue-600/30 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
          >
            Mulai Diskusi
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}