"use client";
import Link from "next/link";

function Navigation({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "مشاريعنا", href: "/projects" },
    { name: "الشهادات", href: "/certificates" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <nav
      className={`
      fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto 
      bg-white md:bg-transparent shadow-xl md:shadow-none
      transition-transform duration-300 ease-in-out z-[1001]
      flex flex-col md:flex-row items-center gap-8 pt-24 md:pt-0
      ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
    `}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-primary font-bold hover:text-secondary transition-colors text-lg md:text-base"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
