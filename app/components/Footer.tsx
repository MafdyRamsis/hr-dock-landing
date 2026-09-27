"use client";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import Logo from "./Logo";
import PaymentBadges from "./PaymentBadges";
import { legalEntity } from "../lib/legal-entity";

export default function Footer() {
  const { t, lang } = useLang();
  const ar = lang === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-900 pb-8 pt-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 inline-flex rounded-xl bg-white p-1"><Logo className="rounded-lg" /></div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {t("footer.tagline")} — {t("about.sub")}
            </p>
          </div>

          {/* Product links */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">Product</div>
            <ul className="space-y-2">
              {[
                ["#products", t("products.m1.name")],
                ["#products", t("products.m2.name")],
                ["#products", t("products.m3.name")],
                ["#features", t("nav.features")],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-cyan-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">Company</div>
            <ul className="space-y-2">
              {[
                ["#about",   t("nav.about")],
                ["#pricing", "Pricing"],
                ["#contact", t("nav.contact")],
                ["#contact", t("nav.demo")],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-cyan-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-start md:justify-between">
          <div className="text-xs leading-6 text-slate-400">
            <div className="font-semibold text-slate-300">{ar ? legalEntity.nameAr : legalEntity.name}</div>
            <div>{ar ? "سجل تجاري" : "Commercial register"} {legalEntity.commercialReg} · {ar ? "الرقم الضريبي" : "Tax ID"} {legalEntity.taxId}</div>
            <div>{ar ? legalEntity.addressAr : legalEntity.address}</div>
            <div>
              <a href={`mailto:${legalEntity.email}`} className="hover:text-cyan-300">{legalEntity.email}</a>
              {" · "}
              <a href={`tel:${legalEntity.phone}`} className="hover:text-cyan-300" dir="ltr">{legalEntity.phone}</a>
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs text-slate-400">{ar ? "وسائل الدفع المقبولة — عبر Paymob" : "Accepted payments — processed by Paymob"}</div>
            <PaymentBadges />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} HR Dock. {t("footer.rights")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/terms" className="transition-colors hover:text-cyan-300">{ar ? "الشروط والأحكام" : "Terms & Conditions"}</Link>
            <Link href="/refund" className="transition-colors hover:text-cyan-300">{ar ? "سياسة الاسترجاع" : "Refund Policy"}</Link>
            <Link href="/privacy" className="transition-colors hover:text-cyan-300">{ar ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
            <p className="text-xs text-cyan-300/70">Built in Egypt 🇪🇬</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
