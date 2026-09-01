import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar"; 
import Footer from "./components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | M Mughni",
  description: "Web Developer Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} pt-16`}>
        {/* Navbar dirender di sini */}
        <Navbar />
        {/* Konten halaman lainnya */}
        {children}
        <Footer/>w
      </body>
    </html>
  );
}