
import React from "react";
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

const FooterKersik = () => (
  <footer className="relative w-full bg-[#b90d16] text-white mt-16 pt-10 pb-8 font-quicksand">
    <div className="max-w-7xl mx-auto px-3 lg:px-7 flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
      {/* LOGO & ALAMAT */}
      <div className="flex flex-col min-w-[260px] max-w-xs">
        <img
          src={logoUrl}
          alt="Logo Desa Kersik"
          className="w-24 mb-3"
        />
        <div className="font-bold text-lg mb-1">Pemerintah Kelurahan Huangobotu</div>
        <div className="text-sm leading-relaxed text-white/95">
          Jalan Apel,<br />
          Kelurahan Huangobotu, Kecamatan Dungingi,<br />
          Kota Gorontalo<br />
          Provinsi Gorontalo, 96137
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
            {/* <a href="https://tiktok.com/" className="hover:text-gray-800" target="_blank" rel="noreferrer" aria-label="TikTok">
              <Tiktok className="w-5 h-5" />
            </a> */}
          </li>
        </ul>
      </div>
      {/* NOMOR TELEPON PENTING */}
      <div className="flex-1 min-w-[170px]">
        <div className="font-bold text-lg mb-2">Nomor Telepon Penting</div>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="tel:6281234567890" className="underline hover:text-yellow-100">Nama/Kades Huangobotu</a>
          </li>
          <li>
            <a href="tel:6281223456789" className="underline hover:text-yellow-100">Nama/Asisten Kades</a>
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

    {/* Tombol Pengaduan pinggir kanan bawah */}
    <a
      href={pengaduanHref}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed right-4 bottom-4 z-50
        px-6 py-3 flex items-center gap-2
        rounded-lg bg-white/30 border border-red-200 text-white/90 hover:bg-red-800 hover:border-white shadow-lg
        font-semibold text-lg transition
        backdrop-blur-sm
      "
      style={{
        boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)"
      }}
      aria-label="Pengaduan WhatsApp"
    >
      <span>
        <svg aria-hidden="true" focusable="false" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14.985 11.413c-.2-.099-1.176-.577-1.359-.644-.183-.065-.316-.1-.449.099-.132.199-.513.644-.628.777-.116.132-.232.149-.429.05-.198-.099-.837-.308-1.594-.985-.59-.524-.99-1.17-1.107-1.368-.116-.199-.012-.307.087-.406.089-.089.198-.232.298-.349.099-.116.132-.199.198-.332.066-.132.033-.248-.017-.347-.049-.099-.448-1.083-.614-1.484-.162-.389-.327-.336-.448-.341l-.382-.007c-.133 0-.347.049-.53.248s-.696.68-.696 1.66.713 1.928.813 2.062c.099.132 1.398 2.139 3.387 2.917.473.163.84.26 1.126.334.474.121.906.104 1.248.063.38-.045 1.176-.48 1.342-.944.165-.464.165-.862.115-.951-.049-.087-.182-.14-.381-.248zm-6.47-9.413a7.004 7.004 0 00-6.985 7.004c0 1.232.325 2.432.941 3.498l-1.002 3.652c-.062.226.034.466.241.585.12.071.264.088.39.044l3.909-1.302a7 7 0 103.507-13.481zm0 1.308a5.7 5.7 0 110 11.401 5.7 5.7 0 010-11.401z"/>
        </svg>
      </span>
      <span className="font-bold">Pengaduan</span>
    </a>
  </footer>
);

export default FooterKersik;
