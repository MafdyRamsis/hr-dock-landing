import Link from "next/link";
import Logo from "./Logo";
import { legalEntity } from "../lib/legal-entity";

// Shared bilingual layout for Terms, Refund Policy and Privacy Policy.
// Both languages are on one page (English, then Arabic) so there is a single
// authoritative URL per policy for customers and for Paymob's review.
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function SellerBlock({ ar = false }: { ar?: boolean }) {
  return (
    <p>
      <strong className="text-white">{ar ? legalEntity.nameAr : legalEntity.name}</strong><br />
      {ar ? "سجل تجاري رقم" : "Commercial register no."} {legalEntity.commercialReg} · {ar ? "الرقم الضريبي" : "Tax ID"} {legalEntity.taxId}<br />
      {ar ? legalEntity.addressAr : legalEntity.address}<br />
      <a href={`mailto:${legalEntity.email}`} className="text-[#00B4B4] hover:underline">{legalEntity.email}</a>
      {" · "}<span dir="ltr">{legalEntity.phone}</span>
    </p>
  );
}

type Props = {
  titleEn: string; titleAr: string; effective: string; effectiveAr: string;
  english: React.ReactNode; arabic: React.ReactNode;
};

export default function LegalPage({ titleEn, titleAr, effective, effectiveAr, english, arabic }: Props) {
  return (
    <div className="min-h-screen bg-[#0f1923] text-white">
      <nav className="border-b border-white/10 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/"><Logo className="h-8 w-auto" /></Link>
          <div className="flex items-center gap-5 text-sm">
            <a href="#ar" className="text-white/60 hover:text-[#00B4B4]">العربية</a>
            <Link href="/" className="text-white/50 hover:text-[#00B4B4] transition-colors">← Home</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">{titleEn}</h1>
          <p className="text-white/40 text-sm">Effective date: {effective} · <a href="#ar" className="hover:text-[#00B4B4]">النسخة العربية أدناه</a></p>
        </div>
        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/70 leading-relaxed">{english}</div>

        <div id="ar" dir="rtl" lang="ar" className="mt-20 border-t border-white/10 pt-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">{titleAr}</h1>
            <p className="text-white/40 text-sm">تاريخ السريان: {effectiveAr}</p>
          </div>
          <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/70 leading-relaxed">{arabic}</div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <p>© {new Date().getFullYear()} HR Dock. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#00B4B4] transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-[#00B4B4] transition-colors">Refund Policy</Link>
            <Link href="/privacy" className="hover:text-[#00B4B4] transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
