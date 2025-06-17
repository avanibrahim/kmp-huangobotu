import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Globe,
  Youtube,
  X
} from "lucide-react";

const logoUrl = "/lovable-uploads/logoprov.png";

// WhatsApp: contoh nomor
const pengaduanWA = "6282291325909";
const pengaduanMsg = encodeURIComponent("Halo Admin Desa, saya ingin melakukan pengaduan.");
const pengaduanHref = `https://wa.me/${pengaduanWA}?text=${pengaduanMsg}`;

const FooterKersik = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Simulasi jumlah pengunjung
  useEffect(() => {
    const simulateVisitorCount = () => {
      const randomCount = Math.floor(Math.random() * 1000) + 1; // Simulasi jumlah pengunjung antara 1-1000
      setVisitorCount(randomCount);
    };

    simulateVisitorCount();
  }, []);

  return (
    <footer className="relative w-full bg-[#b90d16] text-white mt-16 pt-10 pb-16 font-quicksand">
      <div className="max-w-7xl mx-auto px-3 lg:px-7 flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
       {/* LOGO & ALAMAT */}
<div className="flex flex-col md:flex-row items-start gap-4 min-w-[260px] max-w-xs">
  <img
    src={logoUrl}
    alt="Logo Pemerintah Kelurahan Huangobotu"
    className="w-28 h-28"
  />
  <div>
    <div className="font-bold text-lg mb-1">Kelurahan Huangobotu</div>
    <div className="text-sm leading-relaxed text-white/95">
      Jalan Apel,<br />
      Kelurahan Huangobotu, Kecamatan Dungingi,<br />
      Kota Gorontalo<br />
      Provinsi Gorontalo, 96137
    </div>
  </div>
</div>
        {/* HUBUNGI */}
        <div className="flex-1 min-w-[170px]">
          <div className="font-bold text-lg mb-2">Hubungi Kami</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>0813-XXX-XXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>huangobotu@mail.go.id</span>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com/" className="hover:text-gray-800" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/" className="hover:text-gray-800" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.kukarkab.go.id/" className="hover:text-gray-800" target="_blank" rel="noreferrer" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/" className="hover:text-gray-800" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://x.com/" className="hover:text-gray-800" target="_blank" rel="noreferrer" aria-label="X">
                <X className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
        {/* NOMOR TELEPON PENTING */}
        <div className="flex-1 min-w-[170px]">
          <div className="font-bold text-lg mb-2">Nomor Telepon Penting</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:6281234567890" className="underline hover:text-yellow-100">Nama/Perangkat Desa</a>
            </li>
            <li>
              <a href="tel:6281223456789" className="underline hover:text-yellow-100">Nama/Perangkat Desa</a>
            </li>
          </ul>
        </div>
        {/* JELAJAHI */}
        <div className="flex-1 min-w-[170px]">
          <div className="font-bold text-lg mb-2">Jelajahi</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://kemendesa.go.id" className="underline hover:text-yellow-100" target="_blank" rel="noopener noreferrer">Website Kemendesa</a></li>
            <li><a href="https://kemendagri.go.id" className="underline hover:text-yellow-100" target="_blank" rel="noopener noreferrer">Website Kemendagri</a></li>
            <li><a href="https://gorontaloprov.go.id/" className="underline hover:text-yellow-100" target="_blank" rel="noopener noreferrer">Pemerintahan Prov Gorontalo</a></li>
            <li><a href="https://cekdptonline.kpu.go.id/" className="underline hover:text-yellow-100" target="_blank" rel="noopener noreferrer">Cek DPT Online</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-white text-base font-medium opacity-95">
        © 2025 Powered by PT Itelvore Nusantara
      </div>

      {/* Navbar Bottom */}
<div
  className="
    fixed bottom-0 left-0 w-full z-50
    border-gray-200 shadow-md
    flex justify-around items-center py-2
    md:hidden
  "
>
  {/* Tombol Pengaduan */}
  <a
  href={pengaduanHref}
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed right-4 bottom-4 z-50
    px-4 py-2 flex items-center gap-2
    rounded-md bg-red-700 border border-white text-white hover:bg-red-800 hover:border-white shadow-md
    font-semibold text-sm transition
    backdrop-blur-sm
  "
  style={{
    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)"
  }}
  aria-label="Pengaduan WhatsApp"
>
  <span>
    <img
      src="/icons/pengaduan.png"
      alt="WhatsApp Logo"
      className="w-5 h-5"
    />
  </span>
  <span className="font-bold">Pengaduan</span>
</a>

{/* Tombol Kunjungan Hari Ini */}
<div
  className="
    fixed left-4 bottom-4 z-50
    px-4 py-2 flex items-center gap-2
    rounded-md bg-red-700 border border-white text-white hover:bg-red-800 hover:border-white shadow-md
    font-semibold text-sm transition
    backdrop-blur-sm
  "
  style={{
    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)"
  }}
  aria-label="Kunjungan Hari Ini"
>
  <span>
    <img
      src="/icons/visit.png"
      alt="Visitor Icon"
      className="w-5 h-5"
    />
  </span>
  <span className="font-bold">Kunjungan: {visitorCount}</span>
</div>
</div>

{/* Tombol untuk tampilan laptop */}
<div className="hidden md:flex justify-between items-center py-2">
  {/* Tombol Pengaduan */}
  <a
    href={pengaduanHref}
    target="_blank"
    rel="noopener noreferrer"
    className="
      fixed right-4 bottom-4 z-50
      px-4 py-2 flex items-center gap-2
      rounded-md bg-red-600 border border-white text-white hover:bg-red-800 hover:border-white shadow-md
      font-semibold text-sm transition
      backdrop-blur-sm
    "
    style={{
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)"
    }}
    aria-label="Pengaduan WhatsApp"
  >
    <span>
      <img
        src="/icons/pengaduan.png"
        alt="WhatsApp Logo"
        className="w-5 h-5"
      />
    </span>
    <span className="font-bold">Pengaduan</span>
  </a>

  {/* Tombol Kunjungan Hari Ini */}
  <div
    className="
      fixed left-4 bottom-4 z-50
      px-4 py-2 flex items-center gap-2
      rounded-md bg-red-600 border border-white text-white hover:bg-red-800 hover:border-white shadow-md
      font-semibold text-sm transition
      backdrop-blur-sm
    "
    style={{
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)"
    }}
    aria-label="Kunjungan Hari Ini"
  >
    <span>
      <img
        src="/icons/visit.png"
        alt="Visitor Icon"
        className="w-5 h-5"
      />
    </span>
    <span className="font-bold">Kunjungan: {visitorCount}</span>
  </div>
</div>
    </footer>
  );
};

export default FooterKersik;