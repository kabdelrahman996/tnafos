import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFilePdf,
  FaDownload,
} from "react-icons/fa";

function Page() {
  const contactDetails = [
    {
      title: "أرقام التواصل",
      info: ["0581500704", "0531515665"],
      icon: <FaPhoneAlt />,
      link: "tel:+966581500704",
      color: "bg-primary",
    },
    {
      title: "البريد الإلكتروني",
      info: ["info@tnafos-group.com"],
      icon: <FaEnvelope />,
      link: "mailto:info@tnafos-group.com",
      color: "bg-secondary",
    },
    {
      title: "المقر الرئيسي",
      info: ["المملكة العربية السعودية", "نجران - شرورة"],
      icon: <FaMapMarkerAlt />,
      link: "https://maps.google.com", 
      color: "bg-primary",
    },
  ];

  return (
    <main className="pt-20 min-h-screen bg-white">
      {}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-black font-['Cairo'] mb-4">
            تواصل معنا
          </h1>
          <p className="text-secondary text-lg">
            نحن هنا للإجابة على استفساراتكم وبدء رحلة البناء معاً
          </p>
        </div>
      </section>

      {}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDetails.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className="group bg-white p-10 rounded-sm shadow-xl border-b-4 border-transparent hover:border-secondary transition-all duration-300 text-center"
              >
                <div
                  className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-primary text-xl font-bold font-['Cairo'] mb-4">
                  {item.title}
                </h3>
                {item.info.map((line, i) => (
                  <p key={i} className="text-text font-medium">
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-15">
          <div className="flex flex-col lg:flex-row gap-12">
            {}
            <div className="lg:w-2/3 h-[450px] bg-gray-200 rounded-sm overflow-hidden relative shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119842.123456789!2d47.1234567!3d17.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e23123456789abc%3A0x123456789abcdef!2sSharurah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {}
            <div className="lg:w-1/3 space-y-8 text-right">
              {}
              <div className="bg-primary p-8 rounded-sm text-white shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <FaFilePdf className="text-secondary text-3xl" />
                  <h4 className="text-xl font-bold font-['Cairo']">
                    بروفايل الشركة
                  </h4>
                </div>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                  يمكنكم تحميل النسخة الكاملة من بروفايل مجموعة تنافس للاطلاع
                  على كافة التفاصيل التقنية وسابقة الأعمال.
                </p>
                <a
                  href="/tnafos.pdf" 
                  download
                  className="flex items-center justify-center gap-3 bg-secondary text-primary py-4 font-black rounded-sm hover:bg-yellow-500 transition-all shadow-md group"
                >
                  <FaDownload className="group-hover:bounce" />
                  تحميل الملف (PDF)
                </a>
              </div>

              {}
              <div className="bg-white p-8 rounded-sm border-2 border-primary/10 text-primary shadow-sm">
                <h4 className="text-xl font-bold font-['Cairo'] mb-4 flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-2xl" /> دعم مباشر
                </h4>
                <p className="text-sm text-text mb-6">
                  تواصل معنا عبر واتساب للحصول على استجابة سريعة لطلبات عروض
                  الأسعار.
                </p>
                <a
                  href="https://wa.me/966581500704"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 font-bold rounded-sm hover:opacity-90 transition-all"
                >
                  مراسلة فورية عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
