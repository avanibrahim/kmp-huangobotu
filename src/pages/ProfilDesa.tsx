
import React from "react";
import Navbar from "@/components/Navbar";
import FooterKersik from "@/components/Footer";
import VisiMisiSection from "@/components/ProfilDesa/VisiMisiSection";
import BaganOrganisasiSection from "@/components/ProfilDesa/BaganOrganisasiSection";
import InfoGeografisSection from "@/components/ProfilDesa/InfoGeografisSection";
import DesaMapSection from "@/components/ProfilDesa/DesaMapSection";

const ProfilDesa = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-100 flex flex-col">
    <Navbar />
    <main className="pt-20 max-w-screen-lg mx-auto w-full flex flex-col gap-8 pb-8 px-2 sm:px-4 animate-fade-in">
      <header>
        <h1 className="text-3xl md:text-4xl font-black text-red-700 mb-1 drop-shadow">Profil Desa</h1>
        <span className="block text-md text-gray-600 mb-4">Gambaran lengkap identitas, visi-misi, organisasi, dan lokasi desa.</span>
      </header>
      <VisiMisiSection />
      <BaganOrganisasiSection />
      <section aria-label="Lokasi Desa" className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1 min-w-0">
          <InfoGeografisSection />
        </div>
        <div className="flex-1 min-w-0">
          <DesaMapSection />
        </div>
      </section>
    </main>
    <FooterKersik />
  </div>
);

export default ProfilDesa;
