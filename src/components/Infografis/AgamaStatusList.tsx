import React from "react";

const agama = [
  {
    label: "Islam",
    jumlah: 2500,
    color: "bg-green-100",
    icon: (
      <img
        src="/icons/islam.png"
        alt="Islam"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Kristen",
    jumlah: 550,
    color: "bg-blue-100",
    icon: (
      <img
        src="/icons/kristen.png"
        alt="Kristen"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Katolik",
    jumlah: 120,
    color: "bg-rose-100",
    icon: (
      <img
        src="/icons/katolik.png"
        alt="Katolik"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Hindu",
    jumlah: 60,
    color: "bg-yellow-100",
    icon: (
      <img
        src="/icons/hindu.png"
        alt="Hindu"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Budha",
    jumlah: 37,
    color: "bg-amber-100",
    icon: (
      <img
        src="/icons/budha.png"
        alt="Budha"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Konghucu",
    jumlah: 18,
    color: "bg-pink-100",
    icon: (
      <img
        src="/icons/konghucu.png"
        alt="Konghucu"
        className="w-6 h-6"
      />
    ),
  },
];

const AgamaStatusList = () => (
  <div className="flex flex-row gap-3 overflow-x-auto pb-2">
    {agama.map((item) => (
      <div
        key={item.label}
        className={`flex flex-col items-center min-w-[96px] px-3 py-2 rounded-lg shadow ${item.color} hover:scale-105 transition-transform`}
      >
        <span className="mb-1">{item.icon}</span>
        <span className="font-bold text-red-900 text-lg">{item.jumlah}</span>
        <span className="text-xs text-black-700 text-center">{item.label}</span>
      </div>
    ))}
  </div>
);

export default AgamaStatusList;