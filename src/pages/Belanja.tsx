
import React from "react";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ProdukModal from "@/components/ProdukModal";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterKersik from "@/components/Footer";

const produk = [
  {
    nama: "Kue Kerawang",
    img: "https://cdn.rri.co.id/berita/Makassar/o/1744859780000-4c2ffb56-972e-4d28-ac86-4fdc69e20cb8/k1quwkkbz76neb6.jpeg",
    harga: "Rp50.000/500gr",
    hargaDetail: "Rp50.000 per 500gr. Stok selalu baru langsung dari pembuat kue.",
    deskripsi: "Kue Kerawang adalah kue kering khas Gorontalo yang dihias motif warna-warni di permukaannya, terinspirasi dari kain Karawo, dan sering dijadikan oleh-oleh atau sajian saat hari raya.",
    wa: "6282291325909",
  },
  {
    nama: "Upiya Karanji",
    img: "https://museum.gorontaloprov.go.id/wp-content/uploads/2022/12/IMG_8702-1024x683.jpg",
    harga: "Rp100.000/pcs",
    hargaDetail: "Rp100.000 per pcs. Upiya Karanji, Dibuat dengan tangan yang profesional.",
    deskripsi: "Upiya Karanji adalah peci atau songkok khas Gorontalo yang terbuat dari anyaman pohon mintu (sejenis rotan), digunakan sebagai identitas budaya dan sering dipakai saat beribadah atau acara adat.",
    wa: "6282291325909",
  },
  {
    nama: "Kain Kerawang",
    img: "https://i0.wp.com/jnewsonline.com/wp-content/uploads/2024/06/oleh-oleh-khas-manado-2.jpg?resize=1000%2C600&ssl=1",
    harga: "Hubungi Admin",
    hargaDetail: "Harga disesuaikan dengan permintaan pembeli. Silahkan Hubungi admin untuk info lebih lanjut.",
    deskripsi: "Kain Kerawang adalah kain tradisional Gorontalo yang dibuat dengan teknik sulaman tangan berwarna-warni, menjadi simbol budaya dan kebanggaan daerah tersebut.",
    wa: "628221325909",
  },
  {
    nama: "Jasa Fotografer",
    img: "https://shanibacreative.com/wp-content/uploads/2020/04/harga-jasa-foto-produk.jpg",
    harga: "Hubungi Admin",
    hargaDetail: "Harga disesuaikan paket. Silakan hubungi admin untuk info.",
    deskripsi: "Jasa fotografer adalah layanan profesional yang membantu mengabadikan momen penting seperti pernikahan, wisuda, prewedding, dan acara lainnya dengan hasil foto berkualitas tinggi sesuai kebutuhan klien.",
    wa: "6282291325909",
  },
  {
    nama: "Penyiraman Otomatis (IoT)",
    img: "https://down-id.img.susercontent.com/file/0857b82509c97d1bf3c05cf04dd5587f",
    harga: "Hubungi Admin",
    hargaDetail: "Harga disesuaikan dengan kebutuhan. Silahkan hubungi admin untuk info lebih lanjut.",
    deskripsi: "Sistem penyiraman otomatis berbasis IoT menggunakan sensor dan internet untuk menyiram tanaman secara otomatis dan bisa dikontrol dari jarak jauh.",
    wa: "6282226192277",
  },
];

const Belanja = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-red-100">
      <Navbar />
      <div className="flex-1 w-full pt-16">
        <div className="max-w-screen-lg mx-auto px-2 sm:px-4 py-3">
          <h1 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-red-700 mb-1 flex items-center gap-2">
            <ShoppingCart className="w-6 sm:w-7 h-6 sm:h-7 text-red-700" /> Belanja Produk Unggulan
          </h1>
          <p className="text-gray-600 mb-4 xs:mb-6 text-sm xs:text-base">Produk berkualitas pilihan warga Kelurahan Huangobotu. Klik produk untuk detail dan pembelian via WhatsApp.</p>
          <div
            className="
              grid 
              grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 
              gap-5 sm:gap-6
            "
          >
            {produk.map((p, idx) => (
              <Dialog key={p.nama} open={openIdx === idx} onOpenChange={(v) => v ? handleOpen(idx) : handleClose()}>
                <DialogTrigger asChild>
                  <button
                    className="
                      group w-full bg-white border border-gray-200 
                      hover:border-red-400 
                      rounded-2xl shadow-lg 
                      p-3 xs:p-5 flex flex-col items-center cursor-pointer transition-all 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300
                      hover-scale
                      active:scale-95
                    "
                    onClick={() => handleOpen(idx)}
                    tabIndex={0}
                    aria-label={`Lihat detail ${p.nama}`}
                  >
                    <img 
                      src={p.img} 
                      alt={p.nama} 
                      loading="lazy" 
                      className="
                        w-full h-40 xs:h-48 sm:h-52 md:h-56 object-cover rounded-xl mb-3
                        aspect-video group-hover:scale-105 transition-transform duration-200
                      "
                    />
                    <div className="font-semibold text-base xs:text-lg sm:text-xl text-gray-800 text-center line-clamp-2">{p.nama}</div>
                    <div className="text-sm xs:text-base text-red-700 font-bold mt-2">{p.harga}</div>
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="
                    p-0 m-0 bg-transparent border-none shadow-none fixed inset-0 z-[100]
                    flex items-stretch justify-stretch
                  "
                  style={{
                    background: "rgba(0,0,0,0.45)",
                    boxShadow: "none",
                    inset: 0
                  }}
                >
                  <ProdukModal produk={p} onClose={handleClose} />
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <div className="pt-6 text-xs text-gray-400 text-center">
            Sistem belanja koperasi & pengiriman sedang disempurnakan.<br className="hidden xs:inline" /> Untuk pembelian, gunakan WhatsApp atau hubungi admin.
          </div>
        </div>
      </div>
      <FooterKersik />
      <style>{`
        @media (max-width: 540px) {
          .xs\\:text-2xl { font-size: 1.5rem !important; }
          .xs\\:mb-6 { margin-bottom: 1.5rem !important; }
          .xs\\:grid-cols-2 { grid-template-columns: repeat(2,minmax(0,1fr)) !important;}
          .xs\\:p-3 { padding: 0.75rem !important; }
          .xs\\:p-5 { padding: 1.25rem !important; }
          .xs\\:text-sm { font-size: .95rem !important }
          .xs\\:text-lg { font-size: 1.125rem !important}
        }
        @media (max-width: 400px) {
          .xs\\:grid-cols-2 { grid-template-columns: 1fr !important;}
        }
      `}
      </style>
    </div>
  );
};

export default Belanja;
