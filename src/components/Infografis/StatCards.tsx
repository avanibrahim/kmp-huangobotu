import React from "react";

const stats = [
  {
    label: "Total Penduduk",
    jumlah: 1200,
    color: "bg-blue-100",
    icon: (
      <img
        src="/icons/tpend.png"
        alt="Kepala"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Kepala Keluarga",
    jumlah: 800,
    color: "bg-green-100",
    icon: (
      <img
        src="/icons/kepkel.png"
        alt="Wakil"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Perempuan",
    jumlah: 500,
    color: "bg-yellow-100",
    icon: (
      <img
        src="/icons/per.png"
        alt="Sekretaris"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Laki-Laki",
    jumlah: 3000,
    color: "bg-red-100",
    icon: (
      <img
        src="/icons/lak.png"
        alt="Anggota"
        className="w-6 h-6"
      />
    ),
  },
];

const StatCards = () => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {stats.map((item) => (
      <div
        key={item.label}
        className={`flex flex-col items-center p-4 rounded-lg shadow ${item.color}`}
      >
        <span className="mb-2">{item.icon}</span>
        <span className="text-lg font-bold text-gray-800">{item.jumlah}</span>
        <span className="text-sm text-gray-600">{item.label}</span>
      </div>
    ))}
  </div>
);

export default StatCards;