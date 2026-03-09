import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const featuredProjects = [
  {
    title: "مشروع قطار الحرمين",
    location: "مكة المكرمة - المدينة المنورة",
    image: "/train.jpg", 
    tag: "بنية تحتية",
  },
  {
    title: "مستشفى الملك عبدالعزيز (الحرس الوطني)",
    location: "جدة",
    image: "/hospital.png", 
    tag: "أعمال أسفلت",
  },
  {
    title: "الجوهرة مول",
    location: "طريق الحرمين - جدة",
    image: "/mall-project.jpg", 
    tag: "تشطيبات",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-15">
        {}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <h2 className="text-secondary font-bold mb-2 tracking-widest uppercase">
              إنجازاتنا
            </h2>
            <h3 className="text-primary text-4xl font-black font-['Cairo']">
              مشاريع نفخر بها
            </h3>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
          >
            عرض كافة المشاريع
            <FaArrowLeft className="text-sm group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-[450px] overflow-hidden rounded-sm mb-6">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 font-bold text-xs">
                  {project.tag}
                </div>
              </div>
              <div className="text-right space-y-2">
                <p className="text-text/60 text-sm">{project.location}</p>
                <h4 className="text-primary text-2xl font-bold font-['Cairo'] group-hover:text-secondary transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
