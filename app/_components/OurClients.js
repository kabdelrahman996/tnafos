import Image from "next/image";

const clients = [
  { name: "وزارة الإسكان - الإسكان التنموي", logo: "/logos/housing.png" },
  { name: "الحرس الوطني - مستشفى الملك عبدالعزيز", logo: "/logos/ng.png" },
  { name: "شركة الراشد", logo: "/logos/alrashid.png" },
  { name: "مركز جمجوم التجاري", logo: "/logos/jamjoom.png" },
  { name: "تحلية الشعيبة", logo: "/logos/shuaibah.png" },
];

function OurClients() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-15 text-center mb-12">
        <h3 className="text-primary/50 font-bold text-sm uppercase tracking-[0.3em] mb-4">
          نفخر بثقتهم
        </h3>
        <h4 className="text-primary text-3xl font-black font-['Cairo']">
          شركاء النجاح
        </h4>
      </div>

      {}
      <div className="flex w-full group">
        <div className="flex space-x-16 rtl:space-x-reverse animate-loop-scroll group-hover:paused items-center">
          {}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 md:w-52 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative h-20 w-full">
                {}
                <div className="flex items-center justify-center h-full text-primary font-bold text-center text-sm px-4">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClients;
