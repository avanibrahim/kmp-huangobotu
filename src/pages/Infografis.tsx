
import React from "react";
import Navbar from "@/components/Navbar";
import FooterKersik from "@/components/Footer";
import DemografiCard from "@/components/Infografis/DemografiCard";
import StatCards from "@/components/Infografis/StatCards";
import UmurChart from "@/components/Infografis/UmurChart";
import DusunPieChart from "@/components/Infografis/DusunPieChart";
import PendidikanBarChart from "@/components/Infografis/PendidikanBarChart";
import PekerjaanList from "@/components/Infografis/PekerjaanList";
import PerkawinanStatusList from "@/components/Infografis/PerkawinanStatusList";
import AgamaStatusList from "@/components/Infografis/AgamaStatusList";

const Infografis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-100 flex flex-col">
      <Navbar />
      <main className="pt-24 max-w-5xl mx-auto w-full flex flex-col gap-10 pb-10 px-2 sm:px-4 animate-fade-in">
        <header className="mb-2">
          <h1 className="text-3xl md:text-4xl font-black text-red-700 mb-1 drop-shadow animate-fade-in">
            Infografis Desa
          </h1>
          <span className="block text-md text-gray-600 mb-4">
            Visualisasi data kependudukan, pendidikan, pekerjaan, dan demografi Kelurahan Huangobotu. Semua data dalam bentuk infografis interaktif.
          </span>
        </header>

        <section>
          <DemografiCard />
        </section>
        <section>
          <StatCards />
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-full w-full">
            <UmurChart />
          </div>
          <div className="h-full w-full">
            <PendidikanBarChart />
          </div>
          <div className="h-full w-full">
            <DusunPieChart />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-red-200 shadow-lg px-3 py-6 flex flex-col h-full">
            <h2 className="font-bold text-lg text-red-700 mb-3 px-2">Pekerjaan Utama Penduduk</h2>
            <div className="flex-1 min-h-[224px] max-h-[300px]">
              <PekerjaanList />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white border border-red-200 shadow-lg px-3 py-6 flex flex-col mb-2">
              <h2 className="font-bold text-lg text-red-700 mb-3 px-2">Status Perkawinan</h2>
              <PerkawinanStatusList />
            </div>
            <div className="rounded-2xl bg-white border border-red-200 shadow-lg px-3 py-6 flex flex-col">
              <h2 className="font-bold text-lg text-red-700 mb-3 px-2">Distribusi Agama</h2>
              <AgamaStatusList />
            </div>
          </div>
        </section>
      </main>
      <FooterKersik />
    </div>
  );
};

export default Infografis;
