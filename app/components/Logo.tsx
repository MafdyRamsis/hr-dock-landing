import Image from "next/image";

export default function Logo({ className = "", priority = false, compact = false }: { className?: string; priority?: boolean; compact?: boolean }) {
  return (
    <span className={`relative block ${compact ? "h-10 w-[75px]" : "h-[88px] w-[96px] md:h-[106px] md:w-[120px]"} shrink-0 overflow-hidden bg-white ${className}`}>
      <Image
        src="/logo.png"
        alt="HR Dock — Empowering Your Workforce"
        width={500}
        height={500}
        priority={priority}
        sizes={compact ? "125px" : "(min-width: 768px) 200px, 160px"}
        className={`absolute max-w-none ${compact ? "-left-[26px] -top-[40px] h-[125px] w-[125px]" : "-left-[35px] -top-[41px] h-[160px] w-[160px] md:-left-[45px] md:-top-[53px] md:h-[200px] md:w-[200px]"}`}
      />
    </span>
  );
}
