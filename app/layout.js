import Header from "./_components/Header";
import { Cairo, Almarai } from "next/font/google";
import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import WhatsAppButton from "./_components/WhatsAppButton";
import ScrollToTop from "./_components/ScrollToTop";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
  variable: "--font-almarai",
});

export const metadata = {
  title: {
    template: "%s | Tnafos Construction Group",
    default: "مجموعة تنافس لأعمال البناء | Tnafos Construction Group",
  },
  description:
    "شركة تنافس للمقاولات العامة والتصميم الداخلي بالمملكة العربية السعودية. متخصصون في إدارة المشاريع الكبرى، أعمال الأسفلت، العزل، والتشطيبات. خبرة في تنفيذ مشاريع استراتيجية مثل قطار الحرمين والإسكان التنموي.",
  keywords: [
    "مقاولات عامة",
    "تصميم داخلي نجران",
    "شركة بناء السعودية",
    "أعمال أسفلت",
    "إدارة مشاريع",
    "T.C.G",
    "تنافس للمقاولات",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} ${almarai.variable} font-almarai bg-[#F4F4F4]`}
      >
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
