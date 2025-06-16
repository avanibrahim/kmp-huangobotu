
import React from "react";
import Navbar from "@/components/Navbar";
import FooterKersik from "@/components/Footer";
import { Construction } from "lucide-react";

const Monitoring = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main className="flex-1 flex flex-col items-center justify-center pt-20 pb-12 px-4">
      <Construction className="w-16 h-16 text-orange-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Monitoring</h1>
      <p className="text-lg text-gray-500 mb-6">
        Halaman Monitoring sedang dalam pengembangan.<br />Coming Soon / 404 Not Found.
      </p>
      <a
        href="/"
        className="text-red-700 hover:underline font-semibold transition"
      >
        Kembali ke Beranda
      </a>
    </main>
    <FooterKersik />
  </div>
);

export default Monitoring;
