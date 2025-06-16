
import React from "react";

const layanan = [
  { nama: "Surat Pengantar", keterangan: "Pengajuan surat pengantar berbagai keperluan" },
  { nama: "KTP & KK", keterangan: "Pencetakan & perubahan data KTP/KK" },
  { nama: "Mutasi Warga", keterangan: "Pelayanan pindah/datang warga" },
  { nama: "Surat Keterangan Usaha", keterangan: "Permohonan Surat Keterangan Usaha warga" },
];

const AdministrasiSection = () => (
  <section id="administrasi" className="mb-10">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Layanan Administrasi Penduduk</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {layanan.map((lay, idx) => (
        <div key={lay.nama} className="rounded-xl bg-white border shadow p-4 flex flex-col justify-between hover:border-red-400 transition">
          <div className="font-bold text-gray-800 mb-1">{lay.nama}</div>
          <div className="text-xs text-gray-600">{lay.keterangan}</div>
        </div>
      ))}
    </div>
  </section>
);

export default AdministrasiSection;
