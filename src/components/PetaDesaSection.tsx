
import React from "react";
import MapboxPlaceholder from "./ui/MapboxPlaceholder";

const PetaDesaSection = () => (
  <section id="peta" className="mb-10">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Peta Wilayah Kelurahan</h3>
    <div className="rounded-lg border-2 border-red-100 shadow overflow-hidden w-full h-72 bg-gray-50 relative">
      <MapboxPlaceholder />
      <div className="absolute right-4 top-4 p-2 bg-white/80 rounded shadow text-xs font-semibold text-gray-700">
        <span>Integrasi Mapbox – Minta token Mapbox publik pada admin!</span>
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-1">Klik & drag untuk eksplorasi wilayah.</p>
  </section>
);

export default PetaDesaSection;
