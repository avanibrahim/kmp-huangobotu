
import React from "react";
import { Map, Users } from "lucide-react";

const visi = "Menjadi kelurahan mandiri, transparan dalam pengelolaan, sejahtera secara sosial dan ekonomi, serta menjaga kearifan lokal dan lingkungan.";
const misi = [
  { text: "Meningkatkan kualitas pelayanan publik kepada masyarakat.", icon: "users" },
  { text: "Mewujudkan tata kelola pemerintahan desa yang transparan dan akuntabel.", icon: "map" },
  { text: "Mendorong partisipasi masyarakat dalam pembangunan kelurahan.", icon: "users" },
  { text: "Melestarikan nilai-nilai budaya dan lingkungan.", icon: "map" },
];

const icons = {
  map: <Map className="w-5 h-5 text-red-500 shrink-0" strokeWidth={2.2} aria-hidden />,
  users: <Users className="w-5 h-5 text-red-500 shrink-0" strokeWidth={2.2} aria-hidden />
};

const VisiMisiSection = () => (
  <section className="mb-8" aria-labelledby="visi-misi-heading">
    <h2 id="visi-misi-heading" className="text-2xl font-bold text-red-700 mb-3">Visi &amp; Misi</h2>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-gradient-to-tr from-red-100 via-white to-red-50 rounded-xl p-5 mb-2 shadow border border-red-100">
        <h3 className="text-lg font-bold mb-1 text-gray-700">Visi</h3>
        <p className="text-gray-700 font-semibold text-base md:text-lg">{visi}</p>
      </div>
      <div className="flex-1 bg-white rounded-xl p-5 shadow border border-gray-100">
        <h3 className="text-lg font-bold mb-1 text-gray-700">Misi</h3>
        <ul className="space-y-3 mt-2">
          {misi.map((ms, i) => (
            <li key={i} className="flex items-start gap-2 animate-fade-in">
              <span className="pt-1">{icons[ms.icon as "map" | "users"]}</span>
              <span className="text-gray-800">{ms.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default VisiMisiSection;
