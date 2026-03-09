import Link from "next/link";

function Navigation() {
  const linkStyles = `
  relative pb-2 text-primary font-medium transition-colors duration-300
  after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 
  after:bg-secondary after:transition-all after:duration-300 
  hover:after:w-full
`;

  return (
    <nav className="hidden md:flex space-x-8 rtl:space-x-reverse font-medium">
      <Link href="/" className={linkStyles}>
        الرئيسية
      </Link>
      <Link href="/about" className={linkStyles}>
        عن الشركة
      </Link>
      <Link href="/services" className={linkStyles}>
        خدماتنا
      </Link>
      <Link href="/projects" className={linkStyles}>
        سابقة الأعمال
      </Link>
      <Link href="/certificates" className={linkStyles}>
        شهادات
      </Link>
    </nav>
  );
}

export default Navigation;
