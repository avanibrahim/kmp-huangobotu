
import React from "react";

const produk = [
  {
    nama: "Kue Kerawang",
    img: "https://cdn.rri.co.id/berita/Makassar/o/1744859780000-4c2ffb56-972e-4d28-ac86-4fdc69e20cb8/k1quwkkbz76neb6.jpeg",
    harga: "Rp50.000/500gr",
  },
  {
    nama: "Upiya Karanji",
    img: "https://museum.gorontaloprov.go.id/wp-content/uploads/2022/12/IMG_8702-1024x683.jpg",
    harga: "Rp100.000/pcs",
  },
  {
    nama: "Kain Kerawang",
    img: "https://i0.wp.com/jnewsonline.com/wp-content/uploads/2024/06/oleh-oleh-khas-manado-2.jpg?resize=1000%2C600&ssl=1",
    harga: "Hubungi Admin",
  },
  {
    nama: "Jasa Fotografer",
    img: "https://shanibacreative.com/wp-content/uploads/2020/04/harga-jasa-foto-produk.jpg",
    harga: "Hubungi Admin",
  },
];

const BelanjaSection = () => (
  <section id="belanja" className="mb-10">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-semibold text-red-700">Belanja & Koperasi</h3>
      <a href="belanja" className="text-red-600 text-sm hover:underline">Lihat Semua Produk</a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {produk.map((p) => (
        <div key={p.nama} className="bg-white p-3 rounded-xl shadow border hover:border-red-300 flex flex-col items-center">
          <img src={p.img} alt={p.nama} className="w-20 h-14 object-cover rounded-md mb-1" />
          <div className="font-bold text-gray-700 text-sm">{p.nama}</div>
          <div className="text-xs text-red-700">{p.harga}</div>
        </div>
      ))}
    </div>
    <div className="pt-2 text-xs text-gray-400">
      Sistem belanja terhubung Koperasi Merah Putih – telah hadir!
    </div>
  </section>
);

export default BelanjaSection;
