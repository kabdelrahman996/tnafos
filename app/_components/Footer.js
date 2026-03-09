import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
          {}
          <div className="space-y-6">
            <div className="bg-white p-2 inline-block rounded-sm">
              {}
              <span className="text-primary font-bold text-xl px-2">
                مجموعة تنافس
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              رواد في قطاع المقاولات العامة والتصميم الداخلي بالمملكة العربية
              السعودية، نلتزم بأعلى معايير الجودة والدقة في التنفيذ منذ عام
              1442هـ.
            </p>
          </div>

          {}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  عن الشركة
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-secondary transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-secondary transition-colors"
                >
                  سابقة الأعمال
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-6">خدماتنا</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>المقاولات العامة</li>
              <li>التصميم الداخلي والديكور</li>
              <li>إدارة المشاريع</li>
              <li>أعمال الأسفلت والإيبوكسي</li>
            </ul>
          </div>

          {}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-6">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-secondary" />
                <span>المملكة العربية السعودية، نجران، شرورة</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaPhoneAlt className="text-secondary" />
                <span dir="ltr">0581500704</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaPhoneAlt className="text-secondary" />
                <span dir="ltr">0531515665</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-secondary" />
                <span className="text-sm">info@tnafos-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>
            © {new Date().getFullYear()} جميع الحقوق محفوظة لمجموعة تنافس لأعمال
            البناء.
          </p>
          <div className="flex gap-6">
            <span>سجل تجاري: 175323636</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
