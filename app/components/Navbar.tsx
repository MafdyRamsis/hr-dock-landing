"use client";

import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import Logo from "./Logo";

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    ["#daily-work", lang === "ar" ? "كيف يعمل" : "How it works"],
    ["#products", t("nav.products")],
    ["#features", t("nav.features")],
    ["#pricing", lang === "ar" ? "الباقات" : "Plans"],
    ["#about", t("nav.about")],
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/75 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-6">
        <a href="#" className="shrink-0 rounded-xl bg-white px-2.5 py-1.5 shadow-sm" aria-label="HR Dock home"><Logo className="h-9 w-auto" /></a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => <a key={href} href={href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">{label}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggle} className="rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200" aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}>{lang === "en" ? "العربية" : "English"}</button>
          <a href="#contact" className="hidden rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 sm:inline-flex">{t("nav.demo")}</a>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} className="rounded-lg border border-white/15 p-2.5 lg:hidden">
            <span className="block h-0.5 w-5 bg-white" /><span className="mt-1.5 block h-0.5 w-5 bg-white" /><span className="mt-1.5 block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>
      {open && <div id="mobile-navigation" className="border-t border-white/10 bg-slate-900 px-6 py-4 lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5">{label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-indigo-600 px-3 py-3 text-center text-sm font-semibold text-white sm:hidden">{t("nav.demo")}</a>
        </div>
      </div>}
    </nav>
  );
}
