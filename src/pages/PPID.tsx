
import React from "react";
import Navbar from "@/components/Navbar";
import FooterKersik from "@/components/Footer";
import PPIDCategoryCard from "@/components/PPID/PPIDCategoryCard";
import PPIDInfoCard from "@/components/PPID/PPIDInfoCard";
import { Button } from "@/components/ui/button";

const lastUpdate = "2 tahun yang lalu";

// Data dummy untuk daftar informasi publik
const infoPublikList = [
  {
    title: "Laporan Realisasi APBDesa 2023",
    type: "Informasi Berkala",
    date: "12 Januari 2024",
    downloads: 18,
    docUrl: "#"
  },
  {
    title: "Peraturan Desa tentang Keterbukaan Data",
    type: "Informasi Setiap Saat",
    date: "21 Agustus 2022",
    downloads: 34,
    docUrl: "#"
  },
  {
    title: "Notulensi Rapat Penanggulangan Darurat Banjir",
    type: "Informasi Serta Merta",
    date: "10 Februari 2022",
    downloads: 12,
    docUrl: "#"
  }
];

const PPID = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-100 flex flex-col font-sans">
    <Navbar />
    <main className="pt-24 max-w-5xl mx-auto w-full flex flex-col gap-14 pb-16 px-2 sm:px-8 animate-fade-in">
      {/* Judul & deskripsi */}
      <section className="mb-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-700 mb-3 drop-shadow tracking-tight">
          PPID
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-7 max-w-2xl">
          PPID (Pejabat Pengelola Informasi dan Dokumentasi) adalah pejabat yang bertanggung jawab dalam pengelolaan, pendokumentasian, dan pelayanan informasi publik di Desa. Peran utamanya memastikan keterbukaan informasi agar masyarakat dapat mengakses data secara mudah, cepat, dan transparan sesuai peraturan perundang-undangan.
        </p>
        <a href="https://ppid.kemendesa.go.id/dasar-hukum" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-2 border-red-700 text-red-700 font-bold shadow hover:bg-red-700 hover:text-white px-5 py-2 rounded-xl text-base md:text-lg"
          >
            Dasar Hukum PPID
          </Button>
        </a>
      </section>
      {/* Section Kategori kartu */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <PPIDCategoryCard icon="file" title="Informasi Secara Berkala" />
          <PPIDCategoryCard icon="clock" title="Informasi Serta Merta" />
          <PPIDCategoryCard icon="globe" title="Informasi Setiap Saat" />
        </div>
      </section>
      {/* Seksi Informasi Publik Terbaru */}
      <section>
        <header className="flex flex-col mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 tracking-wide mb-1">Informasi Publik Terbaru</h2>
          <span className="text-xs text-gray-500">Update terakhir {lastUpdate}</span>
        </header>
        <div className="flex flex-col gap-2">
          {infoPublikList.map((info, idx) => (
            <PPIDInfoCard
              key={idx}
              title={info.title}
              type={info.type}
              date={info.date}
              downloads={info.downloads}
              docUrl={info.docUrl}
            />
          ))}
        </div>
      </section>
    </main>
    <FooterKersik />
  </div>
);

export default PPID;
