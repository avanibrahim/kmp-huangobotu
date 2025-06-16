
import React from "react";
import { Map, Users } from "lucide-react";

const data = [
  {
    title: "Batas Dusun",
    value: "U: Dusun A, S: Dusun B, B: Dusun C",
    icon: <Map className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Luas Wilayah",
    value: "1.250 Ha",
    icon: <Map className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Jumlah Penduduk",
    value: "3.500 Jiwa",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
];

const InfoGeografisSection = () => (
  <div className="bg-gradient-to-tr from-blue-50 via-white to-blue-100 rounded-xl border border-red-100 shadow p-5 h-full">
    <h3 className="text-lg font-bold text-red-800 mb-3 flex gap-2 items-center"> Info Geografis &amp; Demografis</h3>
    <ul className="flex flex-col gap-4">
      {data.map((item, i) => (
        <li key={item.title} className="flex items-center gap-4">
          <span>{item.icon}</span>
          <span className="flex flex-col">
            <span className="font-semibold text-gray-700">{item.value}</span>
            <span className="text-xs text-gray-600">{item.title}</span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default InfoGeografisSection;
