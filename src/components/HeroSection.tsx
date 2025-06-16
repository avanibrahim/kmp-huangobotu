
import React from "react";

const HeroSection = () => (
  <section className="relative flex flex-col md:flex-row gap-6 items-center md:items-start py-10 px-4 bg-white rounded-xl shadow-md">
    <div className="flex-shrink-0">
      <img
        src="image/sotk2.png"
        alt="Kepala Desa"
        className="w-32 h-40 rounded-xl object-cover border-4 border-red-700 shadow"
      />
      <div className="text-center mt-2 font-bold text-sm text-gray-700">Avan Ibrahim</div>
    </div>
    <div className="flex-1 flex flex-col pt-4 md:pt-0">
      <h2 className="font-bold text-2xl mb-2 text-red-700">Sambutan Kepala Kelurahan</h2>
      <div className="bg-gray-100 rounded-lg p-4 overflow-y-auto max-h-44 shadow-inner text-gray-700 text-justify text-sm leading-relaxed">
        {`"Selamat datang di website Sistem Informasi Desa Merah Putih. Portal ini kami persembahkan untuk meningkatkan
           partisipasi, transparansi, dan pelayanan publik bagi seluruh warga desa. Kami siap mendukung program Koperasi Merah Putih, peningkatan ekonomi, serta keterbukaan informasi secara profesional dan modern. Terima kasih atas dukungan semua pihak."`}
      </div>
    </div>
  </section>
);

export default HeroSection;
