
import React from "react";

const MapboxPlaceholder = () => (
  <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-white via-gray-50 to-red-50">
    <svg width={80} height={80} fill="none" viewBox="0 0 80 80">
      <rect x={10} y={25} width={60} height={30} rx={10} fill="#ef4444" fillOpacity={0.4} />
      <circle cx={40} cy={40} r={8} stroke="#ef4444" strokeWidth={2} fill="#fff" />
    </svg>
    <span className="block mt-2 text-red-500 font-bold">MAPBOX PETA DESA</span>
    <span className="text-xs text-gray-400">(akan diaktifkan admin)</span>
  </div>
);

export default MapboxPlaceholder;
