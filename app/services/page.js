import {
  FaHardHat,
  FaDraftingCompass,
  FaTasks,
  FaCheckDouble,
} from "react-icons/fa";
import Image from "next/image";

const servicesDetails = [
  {
    title: "المقاولات العامة",
    icon: <FaHardHat />,
    description:
      "تشكل المقاولات العامة النواة الصلبة لعملياتنا. نحن مؤهلون للانخراط في المشاريع الكبرى في جميع أنحاء المملكة بفضل التخطيط المدروس والخبرات متعددة التخصصات.",
    features: [
      "تنفيذ المشاريع السكنية والتجارية",
      "البنية التحتية والطرق",
      "أعمال الأسفلت والإيبوكسي",
      "الالتزام بالمعايير الهندسية الدولية",
    ],
    image: "/bg2.jpg", 
    lightBg: false,
  },
  {
    title: "التصميم الداخلي والديكور",
    icon: <FaDraftingCompass />,
    description:
      "نؤمن أن التصميم الداخلي هو فن التعامل مع الفراغات لتحقيق التوازن بين الجمال والوظيفة، مع التركيز على الراحة النفسية للمستخدم.",
    features: [
      "توزيع الأثاث وانسيابية الحركة",
      "دراسة الألوان وتأثيرها النفسي",
      "تنسيق الإضاءة والخامات",
      "حلول مبتكرة للمساحات الضيقة",
    ],
    image: "/bg2.jpg", 
    lightBg: true,
  },
  {
    title: "إدارة المشاريع",
    icon: <FaTasks />,
    description:
      "نقدم خدمات إدارة المشاريع باحترافية تضمن تحقيق أهداف العميل من حيث الجودة، التكلفة، والوقت، من خلال رقابة صارمة وفريق عمل متكامل.",
    features: [
      "تأمين الجودة الشاملة",
      "مراقبة وتدقيق التكاليف",
      "إدارة المخاطر والجدول الزمني",
      "التنسيق بين كافة المقاولين",
    ],
    image: "/bg2.jpg",
    lightBg: false,
  },
];

function Page() {
  return (
    <main className="pt-20">
      {}
      <section className="bg-primary py-24 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-black font-['Cairo'] mb-4">
            خدماتنا التخصصية
          </h1>
          <p className="text-secondary max-w-2xl mx-auto font-medium">
            نقدم حلولاً هندسية وإنشائية متكاملة ترتكز على أسس علمية وخبرات وطنية
            بمواصفات عالمية.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      </section>

      {}
      {servicesDetails.map((service, index) => (
        <section
          key={index}
          className={`py-24 ${service.lightBg ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-6 lg:px-15">
            <div
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 1 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {}
              <div className="lg:w-1/2 space-y-8 text-right order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary p-4 text-primary text-3xl rounded-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-primary text-3xl font-black font-['Cairo']">
                    {service.title}
                  </h2>
                </div>

                <p className="text-text text-lg leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-primary font-bold text-sm"
                    >
                      <FaCheckDouble className="text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {}
              <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                <div className="relative h-[400px] w-full group">
                  <div className="absolute -inset-4 border-2 border-secondary/20 group-hover:inset-0 transition-all duration-500 rounded-sm"></div>
                  <Image
                    src={service.image}
                    fill
                    alt={service.title}
                    className="object-cover rounded-sm shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold font-['Cairo'] mb-8 italic">
            سياسة الجودة لدينا تهدف إلى تعزيز الثقة المستمرة مع عملائنا وتطوير
            أداء كوادرنا.
          </h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            <span className="flex items-center gap-2">✓ جودة التنفيذ</span>
            <span className="flex items-center gap-2">✓ دقة المواعيد</span>
            <span className="flex items-center gap-2">✓ كفاءة الإنفاق</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
