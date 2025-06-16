import React from "react";

const DemografiCard = () => (
  <section
    aria-label="Demografi Penduduk"
    className="rounded-xl bg-red-100/80 flex flex-col md:flex-row gap-4 items-center p-6 md:p-8 shadow-md animate-fade-in"
  >
    <div className="flex-1 flex flex-col">
      <h2 className="text-2xl font-bold text-red-900 mb-2">
        Demografi Penduduk
      </h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Kelurahan Huangobotu memiliki profil penduduk yang beragam, didominasi oleh kelompok usia produktif dengan sebaran tingkat pendidikan dan pekerjaan yang menunjang pembangunan desa. Nilai kekeluargaan dan gotong royong menjadi ciri utama masyarakat, yang tercermin pada komposisi kepala keluarga, gender, dan status sosial.
      </p>
    </div>
    <div className="w-50 h-50 md:w-52 md:h-52 shrink-0 flex justify-center items-center">
      <img
        src="/image/demog.png"
        alt="Ilustrasi keluarga desa"
        className="rounded-xl w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  </section>
);

export default DemografiCard;