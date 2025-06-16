
import React from "react";
import HorizontalSlider from "./ui/HorizontalSlider";

const galeri = [
  { img: "https://desadalung.badungkab.go.id/storage/desadalung/image/Wujudkan%20Desa%20Dalung%20yang%20Bersih%20dan%20Nyaman,%20Semangat%20Gotong%20Royong%20di%20Banjar%20Tegal%20Luwih.jpg", caption: "Kegiatan Gotong Royong" },
  { img: "https://cdn.rri.co.id/berita/Banten/o/1723632864982-1000001178/4loit1m6gw5ao5t.jpeg", caption: "Festival Desa" },
  { img: "https://polrestagorontalokota.com/wp-content/uploads/2025/06/IMG_1465-scaled.jpg", caption: "Panen Raya" },
  { img: "https://harapanbarunews.com/wp-content/uploads/2025/04/Bentuk-Koperasi-Merah-Putih-di-Nasal.jpg", caption: "Rapat Warga" },
];

const GaleriSection = () => (
  <section id="galeri" className="mb-10">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Galeri Kelurahan</h3>
    <HorizontalSlider>
      {galeri.map((g, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={g.img} alt={g.caption} className="w-44 h-28 object-cover rounded-xl shadow-md border mb-2" />
          <span className="text-xs text-gray-600">{g.caption}</span>
        </div>
      ))}
    </HorizontalSlider>
  </section>
);

export default GaleriSection;
