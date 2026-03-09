import Link from "next/link";

function ContactButton() {
  return (
    <div className="relative group overflow-hidden rounded-full">
      <Link
        href="/contact"
        className="relative inline-flex items-center justify-center bg-secondary text-primary px-8 py-2.5 font-bold transition-all duration-300 ease-in-out active:scale-95"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform"></span>

        <span className="relative z-10 flex items-center gap-2">
          اتصل بنا
          <span className="transition-transform duration-300 group-hover:translate-x-[-4px]">
            ←
          </span>
        </span>
      </Link>
    </div>
  );
}

export default ContactButton;
