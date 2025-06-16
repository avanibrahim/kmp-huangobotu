
import React, { useState } from "react";
import MapboxMap from "./MapboxMap";

const DesaMapSection = () => {
  // State for public token input (temporary, per instruksi Lovable)
  const [token, setToken] = useState("");

  return (
    <div className="bg-gradient-to-tr from-green-100 via-white to-green-50 rounded-xl border border-red-100 shadow p-5 h-full">
      <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
        <span aria-hidden className="inline-block w-5 h-5 rounded-full bg-red-600" />
        Maps Interaktif Lokasi Kelurahan
      </h3>
      {/* Input token jika belum ada */}
      {!token ? (
        <div className="mb-3">
          <label className="block mb-2 text-xs text-gray-700 font-medium">Masukkan Mapbox Public Token Anda:</label>
          <input
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-red-400"
            placeholder="Mapbox public token..."
            type="password"
            value={token}
            onChange={e => setToken(e.target.value)}
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
          />
          <div className="text-xs text-gray-500 mt-1">
            Dapatkan public token di <a className="underline text-red-500" href="https://mapbox.com/" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </div>
        </div>
      ) : null}
      {token && (
        <div className="overflow-hidden rounded-lg">
          <MapboxMap token={token} />
        </div>
      )}
      <div className="text-xs text-gray-600 mt-2">
        Peta dapat dizoom, digeser, dan menampilkan marker lokasi kelurahan.
      </div>
    </div>
  );
};

export default DesaMapSection;
