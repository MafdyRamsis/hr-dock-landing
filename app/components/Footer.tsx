"use client";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-900 pb-8 pt-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 inline-flex rounded-xl bg-white px-2.5 py-1.5"><Logo className="h-9 w-auto" /></div>
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

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} HR Dock. {t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition-colors hover:text-cyan-300">Terms & Conditions</Link>
            <Link href="/privacy" className="transition-colors hover:text-cyan-300">Privacy Policy</Link>
            <p className="text-xs text-cyan-300/70">Built in Egypt 🇪🇬</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
