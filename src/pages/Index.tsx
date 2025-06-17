
import React from "react";
import Navbar from "@/components/Navbar";
import PhotoSection from "@/components/PhotoSection";
import HeroSection from "@/components/HeroSection";
import BeritaTerbaruSection from "@/components/BeritaTerbaruSection";
import PetaDesaSection from "@/components/PetaDesaSection";
import StrukturOrganisasiSection from "@/components/StrukturOrganisasiSection";
import AdministrasiSection from "@/components/AdministrasiSection";
import APBDesaSection from "@/components/APBDesaSection";
import PotensiDesaSection from "@/components/PotensiDesaSection";
import BelanjaSection from "@/components/BelanjaSection";
import GaleriSection from "@/components/GaleriSection";
import BeritaDesaSection from "@/components/BeritaDesaSection";
import FooterKersik from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-100">
      <Navbar />
      <div className="pt-16 sm:pt-20 pb-8 max-w-screen-2xl mx-auto px-0 sm:px-2 lg:px-8 w-full">
        <PhotoSection />
        {/* Selanjutnya: sambutan dan konten fleksibel grid */}
        <div className="px-2 sm:px-0">
          <HeroSection />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-10 px-2 sm:px-0">
          <div>
            <BeritaTerbaruSection />
            <StrukturOrganisasiSection />
            <PotensiDesaSection />
            <GaleriSection />
          </div>
          <div>
            <AdministrasiSection />
            <BelanjaSection />
            <BeritaDesaSection />
            <APBDesaSection />
          </div>
        </div>
          <PetaDesaSection />
      </div>
      <FooterKersik />
    </div>
  );
};

export default Index;
