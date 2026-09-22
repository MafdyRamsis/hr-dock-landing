export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 166 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="HR Dock" style={{ direction: "ltr" }}>
      <rect width="40" height="40" rx="12" fill="#4F46E5" />
      <path d="M10 23h20M14 17v12m12-12v12M14 17h12" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="31" cy="10" r="3" fill="#67E8F9" />
      <text x="51" y="27" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="800" letterSpacing="-1.2" direction="ltr">HR Dock</text>
    </svg>
  );
}
