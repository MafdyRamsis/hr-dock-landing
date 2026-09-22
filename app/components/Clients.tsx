"use client";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";

export default function Clients({ content }: { content: SiteContent["clients"] }) {
  const { t, lang } = useLang();

  return (
    <>
      {/* Clients */}
      <section id="clients" className="py-24 bg-[#0f1923]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">{lang === "en" ? content.title : t("clients.title")}</h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">{lang === "en" ? content.subtitle : t("clients.sub")}</p>
          </div>

          {content.logos.length ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {content.logos.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5">
                  {logo.imageUrl ? <div className="relative h-full w-full"><Image src={logo.imageUrl} alt={logo.name} fill sizes="180px" className="object-contain" /></div> : <span className="font-semibold text-white/70">{logo.name}</span>}
                </div>
              ))}
            </div>
          ) : <div className="rounded-2xl border border-dashed border-white/20 py-20 text-center">
            <div className="text-5xl mb-4">🏢</div>
            <div className="text-white font-semibold text-lg mb-2">Our clients will be listed here</div>
            <div className="text-white/40 text-sm">Be one of our first clients — <a href="#contact" className="text-[#00B4B4] hover:underline">request a demo</a></div>
          </div>}
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#1B2A4A] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{t("partners.title")}</h2>
            <p className="text-white/40 text-sm">{t("partners.sub")}</p>
          </div>

          <div className="rounded-2xl border border-dashed border-white/20 py-14 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <div className="text-white font-semibold mb-2">Our partners will be listed here</div>
            <div className="text-white/40 text-sm">Partnerships coming soon</div>
          </div>
        </div>
      </section>
    </>
  );
}
