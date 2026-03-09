import Link from "next/link";
import { FaWhatsapp, FaFilePdf } from "react-icons/fa";

function FinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 bg-primary">
        {}
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-15 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-white text-3xl md:text-5xl font-black font-['Cairo'] leading-tight">
            هل أنت جاهز لبدء{" "}
            <span className="text-secondary">مشروعك القادم</span> معنا؟
          </h2>

          <p className="text-gray-300 text-lg md:text-xl font-light">
            سواء كان مشروعاً إنشائياً ضخماً أو تصميماً داخلياً فريداً، فريقنا
            الهندسي جاهز لتحويل رؤيتك إلى واقع ملموس بدقة واحترافية.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {}
            <Link
              href="/contact"
              className="bg-secondary text-primary px-10 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              اطلب عرض سعر الآن
            </Link>

            {}
            <a
              href="https://wa.me/966581500704" 
              target="_blank"
              className="flex items-center gap-2 border-2 border-white/30 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
            >
              <FaWhatsapp className="text-2xl" />
              تواصل عبر واتساب
            </a>
          </div>

          {}
          <p className="text-secondary/60 text-sm font-medium pt-8 italic">
            * نلتزم بتسليم كافة المشاريع وفق الجدول الزمني المحدد وبأعلى معايير
            الجودة.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
