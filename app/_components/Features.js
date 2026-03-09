import { FaCheckCircle, FaUsers, FaClock, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "كفاءة مالية عالية",
    desc: "نضمن تدفقات مالية مستقرة تمنع توقف المشاريع تحت أي ظرف.",
    icon: <FaChartLine />,
  },
  {
    title: "التزام صارم بالوقت",
    desc: "سياسة الشركة ترتكز على تسليم المشاريع في مواعيدها المحددة بدقة.",
    icon: <FaClock />,
  },
  {
    title: "كوادر فنية متخصصة",
    desc: "نضم نخبة من المهندسين والمراقبين والفنيين ذوي الخبرة الدولية.",
    icon: <FaUsers />,
  },
  {
    title: "أسس علمية مدروسة",
    desc: "ننفذ مشاريعنا بناءً على حلول واقعية واستراتيجيات عمل مرنة.",
    icon: <FaCheckCircle />,
  },
];

function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-15">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {}
          <div className="lg:w-1/2 space-y-8 text-right">
            <div>
              <h2 className="text-secondary font-bold mb-2 tracking-widest">
                لماذا نحن؟
              </h2>
              <h3 className="text-primary text-4xl font-black font-['Cairo'] leading-tight">
                نضع معايير جديدة <br /> في عالم الإنشاءات
              </h3>
            </div>

            <p className="text-text leading-relaxed">
              منذ انطلاقتنا في عام 1442هـ، حرصنا في مجموعة تنافس على بناء علاقة
              مستدامة مع عملائنا قائمة على الثقة والشفافية، مما جعلنا شريكاً
              استراتيجياً في كبرى المشاريع القومية بالمملكة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-secondary text-2xl mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-primary font-bold mb-1 font-['Cairo']">
                      {item.title}
                    </h4>
                    <p className="text-text text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            <div className="bg-primary p-10 rounded-sm text-center flex flex-col justify-center transform translate-y-8">
              <span className="text-secondary text-5xl font-black mb-2">
                210+
              </span>
              <p className="text-white text-sm font-medium">مشروع منجز</p>
            </div>
            <div className="bg-background p-10 rounded-sm text-center border-t-4 border-secondary flex flex-col justify-center">
              <span className="text-primary text-5xl font-black mb-2">
                1442
              </span>
              <p className="text-primary text-sm font-medium italic">
                عام التأسيس
              </p>
            </div>
            <div className="bg-background p-10 rounded-sm text-center flex flex-col justify-center border-b-4 border-primary">
              <span className="text-primary text-5xl font-black mb-2">
                100%
              </span>
              <p className="text-primary text-sm font-medium">جودة التنفيذ</p>
            </div>
            <div className="bg-secondary p-10 rounded-sm text-center flex flex-col justify-center transform -translate-y-8">
              <span className="text-primary text-5xl font-black mb-2">15+</span>
              <p className="text-primary text-sm font-medium">تخصص هندسي</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
