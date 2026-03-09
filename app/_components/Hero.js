import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg3.jpg";

function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {}
      <div className="absolute inset-0">
        <Image
          fill
          src={bg}
          alt="مشاريع مجموعة تنافس لأعمال البناء"
          className="object-cover"
          priority 
          quality={90}
        />

        {}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/50 to-transparent"></div>

        {}
        <div className="absolute bottom-0 right-0 w-1/3 h-1.5 bg-secondary z-10"></div>
      </div>

      {}
      <div className="relative container mx-auto px-6 lg:px-15 h-full flex flex-col justify-center items-start text-right z-20">
        <div className="max-w-3xl space-y-6">
          {}
          <div className="inline-flex items-center gap-2 py-1 px-3 bg-secondary/10 text-secondary font-bold text-sm border-r-4 border-secondary backdrop-blur-md">
            <span>تأسست عام 1442 هـ</span>
          </div>

          {}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] font-['Cairo']">
            نبني المستقبل <br />
            <span className="text-secondary drop-shadow-sm">
              برؤية هندسية
            </span>{" "}
            متطورة
          </h1>

          {}
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed font-light font-['Cairo']">
            مجموعة تنافس لأعمال البناء.. ريادة شاملة في قطاع المقاولات العامة،
            التصميم الداخلي، وإدارة المشاريع الكبرى بأعلى معايير الجودة العالمية
            في كافة أنحاء المملكة.
          </p>

          {}
          <div className="flex flex-wrap gap-6 pt-6">
            {}
            <Link
              href="/projects"
              className="relative px-8 py-4 font-bold text-lg group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 translate-y-0 bg-secondary group-hover:-translate-x-2 group-hover:-translate-y-2"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
              <span className="relative text-primary">استعرض مشاريعنا</span>
            </Link>

            {}
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:-translate-y-1"
            >
              من نحن
            </Link>
          </div>
        </div>

        {}
        <div className="absolute bottom-12 left-6 lg:left-15 hidden lg:flex gap-16 text-white border-l border-white/20 pl-8">
          <div className="flex flex-col">
            <span className="text-secondary text-4xl font-black tabular-nums tracking-tighter">
              210+
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
              مشروع منجز
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-secondary text-4xl font-black tabular-nums tracking-tighter">
              100%
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
              دقة التنفيذ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
