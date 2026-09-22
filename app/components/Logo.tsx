export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 191 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="HR Dock" style={{ direction: "ltr" }}>
      <path d="M2 17h12c0 9 3 14 8 14s8-5 8-14h12c0 17-8 25-20 25S2 34 2 17Z" fill="#15273E" />
      <circle cx="22" cy="8" r="6.5" fill="#159EA7" />
      <text x="52" y="30" fill="#F46B5B" fontFamily="Arial, sans-serif" fontSize="25" fontWeight="800" letterSpacing="-1.4" direction="ltr">HR</text>
      <text x="93" y="30" fill="#159EA7" fontFamily="Arial, sans-serif" fontSize="25" fontWeight="800" letterSpacing="-1.4" direction="ltr">Dock</text>
      <path d="M52 37h128" stroke="#159EA7" strokeWidth="2" />
    </svg>
  );
}
