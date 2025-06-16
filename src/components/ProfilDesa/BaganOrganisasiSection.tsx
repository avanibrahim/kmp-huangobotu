
import React from "react";
import { useState } from "react";
import { Download } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ORGANISASI_IMAGE = "/image/struktur.png";

const DOWNLOAD_LINK = ORGANISASI_IMAGE+"struktur.png";

const BaganOrganisasiSection = () => {
  return (
    <section aria-labelledby="bagan-heading" className="mb-8">
      <h2 id="bagan-heading" className="text-2xl font-bold text-red-700 mb-3">(Struktur Organisasi)</h2>
      <div className="flex flex-col items-center bg-white rounded-xl shadow overflow-hidden border border-gray-100 p-5">
        <Dialog>
          <DialogTrigger asChild>
            <button className="focus:outline-none group">
              <img
                src={ORGANISASI_IMAGE}
                alt="Bagan Organisasi Desa"
                className="w-full max-w-xs md:max-w-md rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 border-red-100 shadow"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
              <span className="sr-only">Perbesar bagan organisasi desa</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl animate-scale-in">
            <img
              src={ORGANISASI_IMAGE}
              alt="Bagan Organisasi Desa (preview besar)"
              className="w-full h-auto rounded-xl border shadow-lg"
              loading="lazy"
            />
          </DialogContent>
        </Dialog>
        <a
          href={DOWNLOAD_LINK}
          download="struktur.png"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white font-medium shadow hover:bg-red-700 transition hover-scale"
        >
          <Download className="w-5 h-5" strokeWidth={2.2} />
          Download
        </a>
      </div>
    </section>
  );
};

export default BaganOrganisasiSection;
