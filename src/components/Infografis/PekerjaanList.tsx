
import React from "react";
import { ArrowDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const pekerjaan = [
  { label: "Petani", jumlah: 800 },
  { label: "Guru", jumlah: 100 },
  { label: "Nelayan", jumlah: 40 },
  { label: "Wiraswasta", jumlah: 430 },
  { label: "PNS", jumlah: 55 },
  { label: "Buruh", jumlah: 120 },
  { label: "Pelajar/Mahasiswa", jumlah: 250 },
  { label: "Lainnya", jumlah: 200 },
];

const PekerjaanList = () => (
  <ScrollArea className="w-full max-w-full h-[224px] overflow-y-auto rounded-xl border border-red-200 bg-red-50/20 shadow-inner px-0">
    <ul className="flex flex-col gap-2 py-2">
      {pekerjaan.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-3 hover:bg-red-50 rounded px-2 py-1 transition truncate"
        >
          <span className="text-red-500 flex-shrink-0">
            <ArrowDown size={18} strokeWidth={2.2} />
          </span>
          <span className="flex-1 text-gray-700 font-medium truncate">{item.label}</span>
          <span className="font-mono text-red-700 font-bold text-sm whitespace-nowrap">{item.jumlah.toLocaleString()}</span>
        </li>
      ))}
    </ul>
  </ScrollArea>
);

export default PekerjaanList;
