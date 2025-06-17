import React from "react";
import HorizontalSlider from "./ui/HorizontalSlider";

const dummyNews = [
  {
    id: 1,
    title: "Koperasi Merah Putih Resmi Berdiri di Provinsi Gorontalo Utara",
    img: "https://berita.gorontaloprov.go.id/wp-content/uploads/2025/06/IMG-20250602-WA0026.jpg",
    summary:
      "Koperasi Merah Putih resmi diluncurkan untuk memperkuat ekonomi desa.",
    date: "2025-06-02",
    url: "https://berita.gorontaloprov.go.id/2025/06/02/koperasi-merah-putih-resmi-berdiri-di-gorontalo-utara/",
  },
  {
    id: 2,
    title: "Menteri dan Wamen PDTT Disambut Adat Mopitilolo",
    img: "https://berita.gorontaloprov.go.id/wp-content/uploads/2025/06/IMG-20250617-WA0016.jpg",
    summary:
      "Menteri dan Wakil Menteri Desa dan Pembangunan Daerah Tertinggal, Yandri Susanto dan Ahmad Riza Patria.",
    date: "2025-06-17",
    url: "https://berita.gorontaloprov.go.id/2025/06/17/menteri-dan-wamen-pdtt-disambut-adat-mopotilolo-di-gorontalo/",
  },
  {
    id: 3,
    title: "Gebyar UMKM Gorontalo 2025 Catatkan Transaksi Rp2,04 Miliar",
    img: "https://berita.gorontaloprov.go.id/wp-content/uploads/2025/04/IMG-20250428-WA0101.jpg",
    summary:
      "Gebyar UMKM Gorontalo tahun 2025 mencatatkan transaksi sebesar Rp2,04 miliar selama tiga hari pelaksanaan.",
    date: "2025-04-29",
    url: "https://berita.gorontaloprov.go.id/gebyar-umkm-gorontalo-2025",
  },
  {
    id: 4,
    title: "Gorontalo Kini Punya 727 Kopdes Merah Putih",
    img: "https://asset-2.tstatic.net/gorontalo/foto/bank/images/KOPERASI-MERAH-PUTIHIII.jpg",
    summary:
      "Gorontalo kini memiliki 727 Koperasi Desa Merah Putih yang siap memberdayakan ekonomi lokal.",
    date: "2025-06-11",
    url: "https://gorontalo.tribunnews.com/2025/06/11/gorontalo-kini-punya-727-kopdes-merah-putih-aparat-desa-dan-keluarga-dilarang-jadi-pengurus",
  },
];

const BeritaTerbaruSection = () => (
  <section id="berita" className="mb-10">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-semibold text-red-700">Berita Terbaru</h3>
      <a href="#berita" className="text-red-600 text-sm hover:underline"></a>
    </div>
    <HorizontalSlider>
      {dummyNews.map((news) => (
        <a
          key={news.id}
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      ))}
    </HorizontalSlider>
  </section>
);

export default BeritaTerbaruSection;