import Image from "next/image";
import {
  FaEye,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

import bg from "@/public/bg1.jpg";

function page() {
  return (
    <main className="pt-20">
      {}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-white text-5xl font-black font-['Cairo'] mb-4">
            من نحن
          </h1>
          <p className="text-secondary font-bold tracking-widest uppercase">
            مجموعة تنافس لأعمال البناء
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          {}
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat"></div>

          <Image src={bg} fill alt="About us" />
        </div>
      </section>

      {}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={bg}
                fill
                className="object-cover"
                alt="مجموعة تنافس"
              />
              <div className="absolute bottom-0 right-0 bg-secondary p-8">
                <span className="text-primary text-4xl font-black block leading-none">
                  1442
                </span>
                <span className="text-primary font-bold text-sm">
                  عام الانطلاق
                </span>
              </div>
            </div>

            <div className="text-right space-y-6">
              <h2 className="text-primary text-3xl font-black font-['Cairo'] border-r-4 border-secondary pr-4">
                مسيرة من الإنجاز والطموح
              </h2>
              <p className="text-text leading-loose text-lg">
                تعتبر شركة تنافس من الشركات المميزة التي اتبعت سياسات مدروسة منذ
                إنطلاقتها الأولى عام 1442 هجري. ارتكزت تلك السياسات على أسس
                علمية وحلول واقعية، مما مكنا من تحقيق الريادة الشاملة في قطاع
                المقاولات العامة.
              </p>
              <p className="text-text leading-loose">
                نحن ننفرد بوجود طموح يتنامى بشكل كبير للمضي في استراتيجية عمل
                مرنة، تهدف للحفاظ على البصمة المميزة في إدارة وتنفيذ المشاريع
                الهامة والكبرى بالمملكة، وهو ما يعكسه حجم المشاريع المنجزة خلال
                السنوات الماضية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {}
            <div className="bg-white p-12 rounded-sm shadow-sm border-t-4 border-primary group hover:bg-primary transition-all duration-500">
              <div className="bg-secondary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6 group-hover:bg-secondary transition-all">
                <FaEye className="text-primary text-2xl" />
              </div>
              <h3 className="text-primary text-2xl font-black mb-4 font-['Cairo'] group-hover:text-white">
                رؤيتنا
              </h3>
              <p className="text-text leading-relaxed group-hover:text-gray-300">
                أن نكون علامة فارقة في معايير الجودة والخدمات في مجال الإنشاءات
                والتشغيل والصيانة، من خلال تبني أحدث التقنيات الهندسية
                والإدارية.
              </p>
            </div>

            {}
            <div className="bg-white p-12 rounded-sm shadow-sm border-t-4 border-secondary group hover:bg-secondary transition-all duration-500">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6 group-hover:bg-primary transition-all">
                <FaRocket className="text-secondary text-2xl" />
              </div>
              <h3 className="text-primary text-2xl font-black mb-4 font-['Cairo']">
                رسالتنا
              </h3>
              <p className="text-text leading-relaxed">
                تقديم خدمات إنشائية متكاملة تلبي تطلعات عملائنا وتساهم في النهضة
                العمرانية للمملكة، مع الالتزام الكامل بمعايير السلامة والاستدامة
                والوقت.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-15 text-center">
          <h2 className="text-primary text-3xl font-black font-['Cairo'] mb-16">
            القيم التي تحركنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "الأمانة",
                icon: <FaHandshake />,
                desc: "نعمل بصدق وشفافية في كل مرحلة من مراحل المشروع.",
              },
              {
                title: "الالتزام",
                icon: <FaBullseye />,
                desc: "دقة متناهية في المواعيد والمواصفات المتفق عليها.",
              },
              {
                title: "فريق العمل",
                icon: <FaUsers />,
                desc: "نؤمن بأن نجاحنا يكمن في تكامل خبرات كوادرنا.",
              },
              {
                title: "الجودة",
                icon: <FaCheckCircle />,
                desc: "تطبيق أعلى معايير الجودة العلمية في التنفيذ.",
              },
            ].map((value, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-secondary text-4xl flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-primary text-xl font-bold font-['Cairo']">
                  {value.title}
                </h4>
                <p className="text-text text-sm leading-relaxed px-4">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
