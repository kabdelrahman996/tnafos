import { FaHardHat, FaPalette, FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    title: "المقاولات العامة",
    description:
      "نمتلك خبرات متعددة التخصصات لتنفيذ المشاريع الكبرى في جميع أنحاء المملكة بأعلى معايير الجودة.",
    icon: <FaHardHat className="text-4xl" />,
  },
  {
    title: "التصميم الداخلي",
    description:
      "حلول مبتكرة تشمل توزيع الألوان، الأثاث، والإضاءة لتحقيق التوازن والجمال في المساحات.",
    icon: <FaPalette className="text-4xl" />,
  },
  {
    title: "إدارة المشاريع",
    description:
      "قيادة المشاريع من الفكرة إلى التنفيذ مع التركيز على الجودة والتكلفة والالتزام بالوقت.",
    icon: <FaProjectDiagram className="text-4xl" />,
  },
];

function Services() {
  return (
    <section className="py-20 bg-background text-right">
      <div className="container mx-auto px-6 lg:px-15">
        {}
        <div className="mb-16">
          <h2 className="text-secondary font-bold mb-2 flex items-center gap-2">
            <span className="w-10 h-[2px] bg-secondary"></span>
            ماذا نقدم
          </h2>
          <h3 className="text-primary text-3xl md:text-4xl font-black font-['Cairo']">
            حلول متكاملة في قطاع الإنشاءات
          </h3>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-sm shadow-sm border-b-4 border-transparent hover:border-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-primary text-xl font-bold mb-4 font-['Cairo']">
                {service.title}
              </h4>
              <p className="text-text leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
