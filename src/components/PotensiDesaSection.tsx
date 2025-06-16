
import React from "react";

const potensi = [
  {
    title: "Pertanian",
    img: "https://static.wixstatic.com/media/b041f3_ba81e91448b3483483820ac60600bdac~mv2.jpg/v1/fill/w_1000,h_664,al_c,q_85,usm_0.66_1.00_0.01/b041f3_ba81e91448b3483483820ac60600bdac~mv2.jpg",
  },
  {
    title: "UMKM & Kerajinan",
    img: "https://cdn.antaranews.com/cache/1200x800/2024/02/28/CC307A45-563A-4CC0-88D2-FA8E51F7FED2.jpeg",
  },
  {
    title: "Pariwisata",
    img: "https://www.masterplandesa.com/wp-content/uploads/2020/11/Sumber-gambar-iroko.jpg",
  },
  {
    title: "Sumber Daya Alam",
    img: "https://dokar.kendalkab.go.id/upload/berita/1636434354WhatsApp%20Image%202021-11-09%20at%2012.40.25.jpeg",
  },
];

const PotensiDesaSection = () => (
  <section id="potensi" className="mb-10">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Potensi Kelurahan</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {potensi.map((p) => (
        <div key={p.title} className="flex flex-col items-center bg-white shadow border border-gray-200 rounded-xl p-3 hover:border-red-300 transition">
          <img src={p.img} alt={p.title} className="w-24 h-16 rounded object-cover mb-2" />
          <span className="font-bold text-gray-700 text-sm">{p.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default PotensiDesaSection;
