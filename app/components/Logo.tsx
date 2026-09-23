import Image from "next/image";

export default function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={`relative block h-[88px] w-[96px] shrink-0 overflow-hidden bg-white md:h-[106px] md:w-[120px] ${className}`}>
      <Image
        src="/logo.png"
        alt="HR Dock — Empowering Your Workforce"
        width={500}
        height={500}
        priority={priority}
        sizes="(min-width: 768px) 200px, 160px"
        className="absolute -left-[35px] -top-[41px] h-[160px] w-[160px] max-w-none md:-left-[45px] md:-top-[53px] md:h-[200px] md:w-[200px]"
      />
    </span>
  );
}
