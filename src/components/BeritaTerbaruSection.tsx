
import React from "react";
import HorizontalSlider from "./ui/HorizontalSlider";

const dummyNews = [
  {
    id: 1,
    title: "Koperasi Merah Putih Resmi Berdiri di Provinsi Gorontalo",
    img: "https://berita.gorontaloprov.go.id/wp-content/uploads/2025/06/IMG-20250602-WA0026.jpg",
    summary:
      "Koperasi Merah Putih resmi diluncurkan untuk memperkuat ekonomi desa.",
    date: "2025-06-02",
  },
  {
    id: 2,
    title: "WNA jadi Korban Pencurian, Terduga Pelaku Warga Dungingi",
    img: "https://hargofoto.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2025/04/WNA-Asal-Ukraina-jadi-Korban-Pencurian-Terduga-Pelaku-Warga-Asal-Dungingi.jpg",
    summary:
      "Jalan utama desa selesai dibangun demi kelancaran mobilitas warga.",
    date: "2025-04-01",
  },
  {
    id: 3,
    title: "Gebyar UMKM Gorontalo 2025",
    img: "https://berita.gorontaloprov.go.id/wp-content/uploads/2025/04/IMG-20250428-WA0101.jpg",
    summary:
      "Gebyar UMKM Gorontalo tahun 2025 mencatatkan transaksi sebesar Rp2,04 miliar selama tiga hari pelaksanaan.",
    date: "2025-05-25",
  },
];

const BeritaTerbaruSection = () => (
  <section id="berita" className="mb-10">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-semibold text-red-700">Berita Terbaru</h3>
      <a href="#berita" className="text-red-600 text-sm hover:underline">Lihat Semua</a>
    </div>
    <HorizontalSlider>
      {dummyNews.map((news) => (
        <div
          key={news.id}
          className="w-64 bg-white rounded-xl shadow hover:shadow-lg transition-all border border-gray-200 flex-shrink-0"
        >
          <img
            src={news.img}
            alt={news.title}
            className="w-full h-32 object-cover rounded-t-xl"
          />
          <div className="p-3">
            <div className="text-sm font-bold text-gray-800 mb-1">{news.title}</div>
            <div className="text-xs text-gray-500 mb-1">{news.date}</div>
            <div className="text-xs text-gray-700">{news.summary}</div>
          </div>
        </div>
      ))}
    </HorizontalSlider>
  </section>
);

export default BeritaTerbaruSection;
