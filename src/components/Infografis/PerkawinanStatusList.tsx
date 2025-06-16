
import React from "react";
import { CircleCheck, CircleMinus, CirclePlus } from "lucide-react";

const status = [
  {
    label: "Belum Kawin",
    jumlah: 1100,
    color: "bg-red-100",
    icon: (
      <img
        src="/icons/belum-kawin.png"
        alt="Belum Kawin"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Kawin",
    jumlah: 2000,
    color: "bg-emerald-100",
    icon: (
      <img
        src="/icons/kawin.png"
        alt="Kawin"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Cerai Mati",
    jumlah: 120,
    color: "bg-gray-200",
    icon: (
      <img
        src="/icons/cerai-mati.png"
        alt="Cerai Mati"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Kawin Tercatat",
    jumlah: 150,
    color: "bg-yellow-100",
    icon: (
      <img
        src="/icons/kawin-tercatat.png"
        alt="Kawin Tercatat"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Cerai Hidup",
    jumlah: 80,
    color: "bg-orange-100",
    icon: (
      <img
        src="/icons/cerai-hidup.png"
        alt="Cerai Hidup"
        className="w-6 h-6"
      />
    ),
  },
  {
    label: "Kawin Tidak Tercatat",
    jumlah: 50,
    color: "bg-fuchsia-100",
    icon: (
      <img
        src="/icons/kawin-tidak-tercatat.png"
        alt="Kawin Tidak Tercatat"
        className="w-6 h-6"
      />
    ),
  },
];

const PerkawinanStatusList = () => (
  <div className="flex flex-row gap-3 overflow-x-auto pb-2">
    {status.map((item) => (
      <div
        key={item.label}
        className={`flex flex-col items-center min-w-[110px] px-3 py-2 rounded-lg shadow ${item.color} hover:scale-105 transition-transform`}
      >
        <span className="mb-1">{item.icon}</span>
        <span className="font-bold text-red-900 text-lg">{item.jumlah}</span>
        <span className="text-xs text-gray-700 text-center">{item.label}</span>
      </div>
    ))}
  </div>
);

export default PerkawinanStatusList;
