"use client";
import { useState } from "react";
import Image from "next/image";
import { FaExpand, FaTimes } from "react-icons/fa";

const certificates = [
  { id: 1, src: "/certs/cert1.png", title: "شهادة تسجيل المؤسسة" },
  { id: 2, src: "/certs/cert2.png", title: "اشتراك الغرفة التجارية" },
  { id: 3, src: "/certs/cert3.png", title: "منشآت" },
  { id: 4, src: "/certs/cert4.png", title: "هيئة الزكاة" },
  { id: 5, src: "/certs/cert6.png", title: "شهادة الزكاة" },
  { id: 6, src: "/certs/cert7.png", title: "ضريبة القيمة المضافة" },
];

function Page() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="pt-24 min-h-screen bg-white">
      {}
      <div className="container mx-auto px-6 mb-12 text-center">
        <h1 className="text-primary text-4xl font-black font-['Cairo'] mb-2">
          الوثائق الرسمية
        </h1>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>

      {}
      <section className="container mx-auto px-6 lg:px-15 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedImg(cert.src)}
              className="group relative h-[400px] border border-gray-100 rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={cert.src}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt={cert.title}
              />
              {}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaExpand className="text-white text-3xl" />
              </div>
              {}
              <div className="absolute bottom-0 inset-x-0 bg-white/90 p-4 text-center">
                <span className="text-primary font-bold font-['Cairo']">
                  {cert.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-10 right-10 text-white text-3xl hover:text-secondary transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <FaTimes />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImg}
              fill
              className="object-contain"
              alt="Full view"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Page;
