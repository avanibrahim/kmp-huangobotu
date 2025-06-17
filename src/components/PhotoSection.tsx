
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image:
      "/image/bgmp.png",
    title: "Selamat Datang",
    subtitle: "Website Resmi Kelurahan Huangobotu",
    desc: "Portal informasi dan layanan publik serta Program Koperasi Merah Putih.",
    // Bisa ditambah elemen lain (statistik, badge, dst)
  },
  {
    image:
      "/image/bginfo.jpg",
    title: "Transparansi Pengelolaan Kelurahan",
    subtitle: "Data, Layanan, dan Kegiatan Terbaru",
    desc: "Pantau perkembangan secara terbuka dan akuntabel.",
  },
];

const statDummy = [
  { label: "Kunjungan Hari Ini", value: 4 },
  { label: "Pengaduan", value: 0 },
];

export default function PhotoSection() {
  const [idx, setIdx] = React.useState(0);

  const handlePrev = () => setIdx((idx) => (idx - 1 + slides.length) % slides.length);
  const handleNext = () => setIdx((idx) => (idx + 1) % slides.length);

  return (
    <section className="relative mb-6 w-full max-w-full min-h-[240px] md:min-h-[340px] lg:min-h-[420px] rounded-xl overflow-hidden bg-gray-200">
      <img
        src={slides[idx].image}
        alt={slides[idx].title}
        loading="lazy"
        className="w-full h-[240px] md:h-[340px] lg:h-[420px] object-cover object-center pointer-events-none select-none transition-all duration-300"
        draggable={false}
      />
      {/* Overlay, content, shadow */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-10 text-white bg-black/30">
        <div className="max-w-xl text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-1">
      {slides[idx].title}
        </h1>
        <h2 className="text-lg md:text-2xl font-bold mb-1">{slides[idx].subtitle}</h2>
            <p className="text-xs md:text-base text-gray-100">{slides[idx].desc}</p>
        </div>
      </div>
      {/* Panah navigasi */}
      <button
        aria-label="Sebelumnya"
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition md:left-4 z-10"
        onClick={handlePrev}
      >
        <ArrowLeft size={28} />
      </button>
      <button
        aria-label="Selanjutnya"
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition md:right-4 z-10"
        onClick={handleNext}
      >
        <ArrowRight size={28} />
      </button>
      {/* Statistik/info kiri bawah 
      <div className="absolute left-2 bottom-2 flex flex-col sm:flex-row gap-2">
        {statDummy.map((stat) => (
          <div key={stat.label} className="flex items-center bg-white/80 px-3 py-1 rounded-lg text-xs md:text-sm font-semibold text-red-700 shadow backdrop-blur">
            {stat.label === "Kunjungan Hari Ini" ? (
              <svg className="w-4 h-4 mr-1 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x={3} y={4} width={18} height={18} rx={2} /><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
            ) : (
              <svg className="w-4 h-4 mr-1 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/><circle cx={12} cy={7} r={4}/></svg>
            )}
            {stat.value} <span className="ml-1 hidden sm:inline">{stat.label}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
}
