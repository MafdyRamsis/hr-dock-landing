"use client";
import { useLang } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Navbar() {
  const { lang, toggle, t } = useLang();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#1B2A4A]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Logo className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a href="#about"    className="text-sm text-white/70 hover:text-[#00B4B4] transition-colors">{t("nav.about")}</a>
          <a href="#products" className="text-sm text-white/70 hover:text-[#00B4B4] transition-colors">{t("nav.products")}</a>
          <a href="#features" className="text-sm text-white/70 hover:text-[#00B4B4] transition-colors">{t("nav.features")}</a>
          <a href="#clients"  className="text-sm text-white/70 hover:text-[#00B4B4] transition-colors">{t("nav.clients")}</a>
          <a href="#contact"  className="text-sm text-white/70 hover:text-[#00B4B4] transition-colors">{t("nav.contact")}</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-sm font-medium text-white/70 hover:text-[#00B4B4] border border-white/20 rounded-full px-3 py-1 transition-colors"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-medium bg-[#E8604C] text-white px-4 py-2 rounded-lg hover:bg-[#d45540] transition-colors"
          >
            {t("nav.demo")}
          </a>
        </div>
      </div>
    </nav>
  );
}
