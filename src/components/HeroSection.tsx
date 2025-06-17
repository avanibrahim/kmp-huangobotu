
import React from "react";

const HeroSection = () => (
  <section className="relative flex flex-col md:flex-row gap-6 items-center md:items-start py-10 px-4 bg-white rounded-xl shadow-md">
    <div className="flex-shrink-0">
      <img
        src="image/sotk2.png"
        alt="Kepala Desa"
        className="w-32 h-40 rounded-xl object-cover border-4 border-red-700 shadow"
      />
      <div className="text-center mt-2 font-bold text-sm text-gray-700">Kepala Kelurahan</div>
    </div>
    <div className="flex-1 flex flex-col pt-4 md:pt-0">
      <h2 className="font-bold text-2xl mb-2 text-red-700">Sambutan Kepala Kelurahan</h2>
      <div className="bg-gray-100 rounded-lg p-4 overflow-y-auto max-h-44 shadow-inner text-gray-700 text-justify text-sm leading-relaxed">
        {`"Assalamu’alaikum Warahmatullahi Wabarakatuh,
Salam Sejahtera untuk kita semua,
Om Swastiastu, Namo Buddhaya, Salam Kebajikan,

Dengan rasa syukur dan bangga, saya selaku Kepala Kelurahan Huangobotu mengucapkan selamat datang di website resmi Koperasi Merah Putih Kelurahan Huangobotu.

Website ini merupakan salah satu bentuk komitmen kami dalam mewujudkan tata kelola koperasi yang transparan, modern, dan akuntabel. Koperasi Merah Putih hadir sebagai wadah pemberdayaan ekonomi masyarakat, khususnya warga Huangobotu, dengan semangat gotong royong dan kebersamaan yang menjadi jati diri bangsa Indonesia.

Melalui website ini, kami berharap masyarakat dapat dengan mudah mengakses informasi seputar kegiatan koperasi, laporan keuangan, program-program pemberdayaan, hingga berita terkini yang berkaitan dengan pengembangan ekonomi lokal. Fitur Monitoring, yang menampilkan data real-time, kami hadirkan untuk mendorong partisipasi aktif dan pengawasan bersama demi koperasi yang sehat dan terpercaya.

Kami menyadari bahwa kemajuan koperasi tidak bisa dicapai sendiri, melainkan melalui kolaborasi antara pengurus, anggota, pemerintah, dan seluruh elemen masyarakat. Oleh karena itu, kami terbuka terhadap saran dan masukan demi kemajuan bersama.

Akhir kata, mari kita jadikan Koperasi Merah Putih sebagai simbol kekuatan ekonomi rakyat yang berlandaskan nilai-nilai Pancasila. Semoga website ini dapat menjadi jembatan komunikasi yang efektif dan memberikan manfaat seluas-luasnya bagi kita semua.

Terima kasih atas kunjungannya.
Wassalamu’alaikum Warahmatullahi Wabarakatuh.

Hormat kami,
Kepala Kelurahan Huangobotu"`}
      </div>
    </div>
  </section>
);

export default HeroSection;
