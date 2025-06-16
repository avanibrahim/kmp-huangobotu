
import React from "react";

const highlightBerita = [
  {
    title: "Pengumuman Musyawarah Desa 2024",
    desc: "Semua warga diundang hadir pada Musyawarah Desa tanggal 25 Juli di Balai Desa.",
  },
  {
    title: "Bantuan Sosial Tahap 2",
    desc: "Pembagian bantuan sosial tahap 2 untuk warga terdampak mulai 10 Juni.",
  },
];

const BeritaDesaSection = () => (
  <section id="highlightberita" className="mb-10">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Pengumuman Kelurahan</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {highlightBerita.map((b) => (
        <div key={b.title} className="bg-red-50 border-l-4 border-red-600 rounded-xl p-4">
          <div className="font-bold text-red-700 mb-1">{b.title}</div>
          <div className="text-sm text-gray-800">{b.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default BeritaDesaSection;
