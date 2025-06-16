
import React from "react";
import { User2, Eye } from "lucide-react";

const newsList = [
  {
    title: "MUSDES PERTANGGUNGJAWABAN BUMDESA",
    image: "/lovable-uploads/e6f8d2c9-c84b-4cdb-af79-9e65f0cb8ba6.png",
    date: "22 May 2025",
    views: 184,
    admin: "Administrator",
    summary:
      "Kersik, 21 Mei 2025 – Pemerintah Desa Kersik menggelar Musyawarah Desa (Musdes) untuk membahas laporan pertanggungjawaban Badan Usaha Milik Desa...",
  },
  {
    title: "Makkela Kela, Pererat hubungan antar warga",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    date: "05 Sep 2024",
    views: 1702,
    admin: "Administrator",
    summary:
      '"Makkela Kela" adalah sebuah tradisi makan bersama yang dilakukan oleh masyarakat Desa Kersik. Acara ini merupakan bentuk perayaan kebersamaan...',
  },
  {
    title: "Pemerintah Desa Kersik Gelar Pelatihan untuk Anggota Linmas",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    date: "05 Sep 2024",
    views: 1062,
    admin: "Administrator",
    summary:
      "Kersik – Pemerintah Desa Kersik baru-baru ini menyelenggarakan pelatihan intensif bagi anggota Perlindungan Masyarakat (Linmas) desa. Kegiatan ini...",
  },
];

const BeritaDesa = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 pb-10">
      <div className="max-w-screen-xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Berita Desa</h1>
        <p className="text-lg text-gray-700 mb-8">
          Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Kersik
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src={item.image}
                alt={item.title}
              />
              <div className="flex-1 flex flex-col p-6 pb-5">
                <div className="font-bold text-[1.15rem] text-gray-800 mb-2 leading-tight uppercase">
                  {item.title}
                </div>
                <div className="text-gray-600 text-sm mb-5">{item.summary}</div>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <div className="flex flex-col gap-1 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <User2 className="w-4 h-4" />
                      <span>{item.admin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span> Dilihat {item.views.toLocaleString()} kali</span>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold text-xs flex items-center leading-none shadow-lg min-w-[82px] justify-center">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaDesa;
