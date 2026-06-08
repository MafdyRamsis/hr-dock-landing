"use client";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1923] border-t border-white/10 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo className="h-9 w-auto mb-3" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")} — {t("about.sub")}
            </p>
          </div>

          {/* Product links */}
          <div>
            <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Product</div>
            <ul className="space-y-2">
              {[
                ["#products", t("products.m1.name")],
                ["#products", t("products.m2.name")],
                ["#products", t("products.m3.name")],
                ["#features", t("nav.features")],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-white/40 text-sm hover:text-[#00B4B4] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Company</div>
            <ul className="space-y-2">
              {[
                ["#about",   t("nav.about")],
                ["#clients", t("nav.clients")],
                ["#contact", t("nav.contact")],
                ["#contact", t("nav.demo")],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-white/40 text-sm hover:text-[#00B4B4] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <p>© {year} HR Dock. {t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-[#00B4B4] transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#00B4B4] transition-colors">Privacy Policy</Link>
            <p className="text-[#00B4B4]/60 text-xs">Built in Egypt 🇪🇬</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
