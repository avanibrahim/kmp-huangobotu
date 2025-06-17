import React from "react";

const PetaDesaSection = () => (
  <section id="peta" className="mb-5">
    <h3 className="text-xl font-semibold text-red-700 mb-2">Peta Wilayah Kelurahan</h3>
    <div className="rounded-lg border-2 border-red-100 shadow overflow-hidden w-full h-72 bg-gray-50 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789012!2d123.456789012345!3d-0.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e123456789012345%3A0x123456789012345!2sKelurahan%20Huangobotu!5e0!3m2!1sen!2sid!4v1691234567890!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      <div className="absolute right-4 top-4 p-2 bg-white/80 rounded shadow text-xs font-semibold text-gray-700">
        <span>Google Maps – Peta wilayah Kelurahan Huangobotu</span>
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-1">Klik & drag untuk eksplorasi wilayah.</p>
  </section>
);

export default PetaDesaSection;