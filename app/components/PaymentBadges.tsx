"use client";
import { useEffect, useRef, useState } from "react";

// Accepted-payment marks (Paymob merchant agreement 3.2.2 / 9.2). Official
// artwork goes in /public/payment-logos/ (from Paymob's merchant brand kit).
// Until a file exists, a neutral text badge is shown instead of a drawn copy.
const BRANDS = [
  { label: "Paymob", file: "paymob.svg" },
  { label: "Visa", file: "visa.svg" },
  { label: "Mastercard", file: "mastercard.svg" },
  { label: "Meeza", file: "meeza.svg" },
];

function Badge({ label, file }: { label: string; file: string }) {
  const [missing, setMissing] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  // A server-rendered <img> can fail before React hydrates, so its onError
  // never fires; check the finished load state once mounted as well.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  if (missing) {
    return <span className="inline-flex h-7 items-center rounded-md border border-white/15 bg-white/5 px-2.5 text-[11px] font-bold text-slate-300">{label}</span>;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={img} src={`/payment-logos/${file}`} alt={label} className="h-7 w-auto rounded bg-white px-1.5 py-1" onError={() => setMissing(true)} />;
}

export default function PaymentBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Accepted payment methods">
      {BRANDS.map((b) => <Badge key={b.file} {...b} />)}
    </div>
  );
}
