export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HR Dock"
    >
      {/* Icon: navy bowl */}
      <path d="M10 20 Q10 34 22 34 Q34 34 34 20 Z" fill="#1B2A4A" />
      <rect x="10" y="17" width="24" height="5" rx="2.5" fill="#1B2A4A" />
      {/* Teal dot */}
      <circle cx="22" cy="9" r="5.5" fill="#00B4B4" />

      {/* "HR" in coral */}
      <text x="44" y="40" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="28" fill="#E8604C">HR</text>
      {/* "Dock" in teal */}
      <text x="100" y="40" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="28" fill="#00B4B4">Dock</text>
    </svg>
  );
}
