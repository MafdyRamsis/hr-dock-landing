"use client";
import { useLang } from "../context/LanguageContext";

const clients: { name: string; industry: string; size: string }[] = [];

const partners: { name: string; role: string }[] = [];

export default function Clients() {
  const { t } = useLang();

  return (
    <>
      {/* Clients */}
      <section id="clients" className="py-24 bg-[#0f1923]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">{t("clients.title")}</h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">{t("clients.sub")}</p>
          </div>

          <div className="rounded-2xl border border-dashed border-white/20 py-20 text-center">
            <div className="text-5xl mb-4">🏢</div>
            <div className="text-white font-semibold text-lg mb-2">Our clients will be listed here</div>
            <div className="text-white/40 text-sm">Be one of our first clients — <a href="#contact" className="text-[#00B4B4] hover:underline">request a demo</a></div>
          </div>
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
