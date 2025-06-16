
import React from "react";
import HorizontalSlider from "./ui/HorizontalSlider";

const struktur = [
  {
    nama: "Nama Lengkap",
    jabatan: "Sekretaris",
    foto: "image/sotk.png",
  },
  {
    nama: "Nama Lengkap",
    jabatan: "Anggota",
    foto: "image/sotk2.png",
  },
  {
    nama: "Nama Lengkap",
    jabatan: "Anggota",
    foto: "image/sotk.png",
  },
  {
    nama: "Nama Lengkap",
    jabatan: "Anggota",
    foto: "image/sotk2.png",
  },
  {
    nama: "Nama Lengkap",
    jabatan: "Anggota",
    foto: "image/sotk.png",
  },
  {
    nama: "Nama Lengkap",
    jabatan: "Anggota",
    foto: "image/sotk2.png",
  },
  
];

const StrukturOrganisasiSection = () => (
  <section id="struktur" className="mb-10">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Struktur Organisasi Kelurahan</h3>
    <HorizontalSlider>
      {struktur.map((org, idx) => (
        <div key={org.nama} className="flex flex-col items-center p-2">
          <img src={org.foto} alt={org.nama} className="w-20 h-24 rounded-lg object-cover border-2 border-red-700 shadow" />
          <div className="font-bold text-sm text-gray-800 mt-1">{org.nama}</div>
          <div className="text-xs text-gray-500">{org.jabatan}</div>
        </div>
      ))}
    </HorizontalSlider>
  </section>
);

export default StrukturOrganisasiSection;
