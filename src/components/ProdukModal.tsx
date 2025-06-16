
import React from "react";
import { X } from "lucide-react";

interface Produk {
  nama: string;
  img: string;
  harga: string;
  hargaDetail: string;
  deskripsi: string;
  wa: string;
}

const encodeWA = (nama: string, harga: string) => {
  const message = `Halo, saya tertarik membeli produk ${nama} dengan harga ${harga}. Mohon info lebih lanjut.`;
  return encodeURIComponent(message);
};

const ProdukModal = ({
  produk,
  onClose,
}: { produk: Produk; onClose: () => void }) => {
  const { nama, img, harga, hargaDetail, deskripsi, wa } = produk;
  const waHref = `https://wa.me/${wa}?text=${encodeWA(nama, harga)}`;
  // blur body scroll when modal open for accessibility UX
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[101] flex flex-col items-center justify-center
        max-h-screen overflow-y-auto animate-fade-in
        transition-all duration-200
        p-0 m-0 w-screen h-screen
      "
      style={{
        padding: 0,
        margin: 0,
        borderRadius: 0,
        boxShadow: "none",
        background: "transparent"
      }}
    >
      {/* Tombol X */}
      <button
        className="
          absolute top-4 right-4 z-10 rounded-full
          p-3 transition bg-white/90 hover:bg-gray-100 border
          shadow-md text-gray-700 hover:text-red-600
        "
        onClick={onClose}
        aria-label="Tutup"
        type="button"
      >
        <X className="w-7 h-7" />
      </button>
      <div
        className="
          flex-grow flex flex-col justify-center items-center
          w-full max-w-lg mx-auto 
          pt-16 pb-8 px-4 xs:px-6
        "
      >
        {/* Gambar produk */}
        <div className="w-full flex justify-center items-center mb-4">
          <img
            src={img}
            alt={nama}
            className="object-contain w-full max-w-[370px] max-h-[40vh] min-h-[120px] bg-gray-100 border border-gray-200 rounded-xl"
            style={{}}
          />
        </div>
        {/* Nama, harga, deskripsi */}
        <div className="w-full bg-white py-2 px-2 flex flex-col items-center rounded-xl border border-gray-100 shadow-md">
          <div className="font-bold text-2xl text-gray-800 mb-1 text-center">{nama}</div>
          <div className="text-sm text-gray-500 mb-2 text-center">{hargaDetail}</div>
          <div className="text-base text-gray-700 mb-4 whitespace-pre-line text-center leading-relaxed max-w-prose">
            {deskripsi}
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full max-w-sm text-center py-3 px-5 
              bg-green-600 hover:bg-green-700 
              rounded-lg text-white font-semibold shadow 
              transition mb-2
              text-lg
            "
            aria-label={`Checkout via WhatsApp untuk ${nama}`}
            onClick={onClose}
            tabIndex={0}
          >
            Checkout via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdukModal;
