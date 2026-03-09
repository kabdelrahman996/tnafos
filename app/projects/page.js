"use client";
import { useState } from "react";
import Image from "next/image";


const allProjects = [
  {
    id: 1,
    title: "مشروع قطار الحرمين",
    category: "مشاريع كبرى",
    description: "تنفيذ أعمال البنية التحتية والإنشاءات الكبرى.",
    image: "/bg1.jpg",
  },
  {
    id: 2,
    title: "الإسكان التنموي - منطقة عسفان",
    category: "مشاريع كبرى",
    description: "مشروعات الإسكان التنموي التابعة لوزارة الإسكان بجده.",
    image: "/bg1.jpg",
  },
  {
    id: 3,
    title: "مستشفى الملك عبدالعزيز - الحرس الوطني",
    category: "أعمال الأسفلت",
    description: "تنفيذ أعمال الأسفلت والطرق لقطاعات الحرس الوطني.",
    image: "/bg1.jpg",
  },
  {
    id: 4,
    title: "مركز جمجوم التجاري",
    category: "أعمال الإيبوكسي",
    description: "تنفيذ أرضيات الإيبوكسي بمواصفات عالمية.",
    image: "/bg1.jpg",
  },
  {
    id: 5,
    title: "الجوهرة مول - طريق الحرمين",
    category: "تشطيبات",
    description: "أعمال التشطيبات الداخلية والديكور المتكاملة.",
    image: "/bg1.jpg",
  },
  {
    id: 6,
    title: "تحلية الشعيبة - شركة الراشد",
    category: "عزل وشبك",
    description: "أعمال الشبك والعزل المتخصصة لمشاريع التحلية.",
    image: "/bg1.jpg",
  },
  {
    id: 7,
    title: "الإسكان التنموي بشرورة",
    category: "مشاريع كبرى",
    description: "تنفيذ الوحدات السكنية في منطقة نجران - شرورة.",
    image: "/bg1.jpg",
  },
  {
    id: 8,
    title: "أعمال المظلات والمسابح",
    category: "أعمال خاصة",
    description: "تصميم وتنفيذ مظلات معمارية وعزل المسابح.",
    image: "/bg1.jpg",
  },
];

const categories = [
  "الكل",
  "مشاريع كبرى",
  "أعمال الأسفلت",
  "أعمال الإيبوكسي",
  "تشطيبات",
  "عزل وشبك",
];

function Page() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      {}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-black font-['Cairo'] mb-4">
            سابقة الأعمال
          </h1>
          <p className="text-secondary text-lg font-medium italic">
            جسور من الثقة والإنجاز في كافة أنحاء المملكة
          </p>
        </div>
      </section>

      {}
      <section className="py-10 sticky top-16 z-30 bg-gray-50/80 backdrop-blur-md">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-secondary text-primary shadow-lg scale-105"
                  : "bg-white text-primary border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    fill
                    alt={project.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 text-right">
                  <h4 className="text-primary text-xl font-bold font-['Cairo'] mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-text text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="w-10 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              قريباً سيتم إضافة المزيد من مشاريع {activeCategory}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Page;
