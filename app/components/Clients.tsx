"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";

export default function Clients({ content }: { content: SiteContent["clients"] }) {
  const { t, lang } = useLang();
  if (!content.logos.length) return null;
  return (
    <section id="clients" className="border-y border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">{lang === "en" ? content.title : t("clients.title")}</h2>
          <p className="mt-3 text-sm text-slate-500">{lang === "en" ? content.subtitle : t("clients.sub")}</p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {content.logos.map((logo, index) => <div key={`${logo.name}-${index}`} className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5">
            {logo.imageUrl ? <div className="relative h-full w-full"><Image src={logo.imageUrl} alt={logo.name} fill sizes="180px" className="object-contain" /></div> : <span className="text-sm font-semibold text-slate-500">{logo.name}</span>}
          </div>)}
        </div>
      </div>
    </section>
  );
}
