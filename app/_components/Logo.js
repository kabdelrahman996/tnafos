import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col lg:flex-row items-center gap-3 no-underline group"
    >
      {}
      <div
        className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-primary transition-transform group-hover:scale-105"
        style={{
          clipPath:
            "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        }}
      >
        <span className="font-['Cairo'] text-xl font-black tracking-tighter text-secondary">
          T
        </span>
      </div>

      {}
      <div className="flex flex-col items-center lg:items-start">
        <span className="font-['Cairo'] text-[16px] font-bold leading-[1.1] text-primary">
          مجموعة تنافس
        </span>
        <span className="font-['Cairo'] text-[10px] uppercase tracking-widest text-text">
          Tnafos Construction Group
        </span>
      </div>
    </Link>
  );
}

export default Logo;
