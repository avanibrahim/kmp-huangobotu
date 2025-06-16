
import React from "react";
import { File, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PPIDInfoCardProps {
  title: string;
  type: string;
  date: string;
  downloads: number;
  docUrl?: string;
}

const PPIDInfoCard: React.FC<PPIDInfoCardProps> = ({ title, type, date, downloads, docUrl }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg bg-white px-5 py-3 shadow-sm mb-3">
    <div className="flex-1 min-w-0">
      <div className="font-medium text-base text-gray-800">{title}</div>
      <div className="text-xs text-gray-500 mt-0.5">{type} &middot; {date}</div>
    </div>
    <div className="flex items-center gap-2 mt-3 md:mt-0 md:ml-4 flex-shrink-0">
      <a
        href={docUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="border-gray-300 text-red-700 font-semibold text-xs px-3 py-1 rounded flex items-center gap-1 hover:bg-red-50 focus:ring-2 focus:ring-red-200">
          <File className="w-4 h-4" />
          <span>Lihat Berkas</span>
        </Button>
      </a>
      <Button
        variant="outline"
        className="border-gray-300 text-blue-700 font-semibold text-xs px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-50 focus:ring-2 focus:ring-blue-200"
      >
        <Download className="w-4 h-4" />
        <span>Unduh&nbsp;({downloads})</span>
      </Button>
    </div>
  </div>
);

export default PPIDInfoCard;
