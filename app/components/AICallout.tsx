"use client";
import { useLang } from "../context/LanguageContext";

const aiFeatures = ["ai.feat1", "ai.feat2", "ai.feat3", "ai.feat4"];

export default function AICallout() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-[#1B2A4A] relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#E8604C]/8 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#E8604C]/15 text-[#E8604C] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <span className="text-base">✦</span> {t("ai.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            {t("ai.title")}
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">{t("ai.sub")}</p>

          <ul className="space-y-3 mb-8">
            {aiFeatures.map((key) => (
              <li key={key} className="flex items-center gap-3 text-white/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-[#E8604C]/20 text-[#E8604C] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                {t(key)}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E8604C] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#d45540] transition-colors"
          >
            {t("ai.cta")} →
          </a>
        </div>

        {/* Right: AI mockup */}
        <div className="rounded-2xl border border-white/10 bg-[#0f1923] p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-white font-bold text-sm">AI Candidate Screening</div>
              <div className="text-white/40 text-xs">Senior React Developer · 24 applicants</div>
            </div>
            <span className="text-xs bg-[#E8604C]/20 text-[#E8604C] px-2 py-0.5 rounded-full font-semibold">AI Active</span>
          </div>

          <div className="space-y-2">
            {[
              { name: "Youssef Adel",   score: 94, match: "Excellent Match",   color: "#00B4B4" },
              { name: "Hana Sherif",    score: 88, match: "Strong Match",      color: "#00B4B4" },
              { name: "Karim Mostafa",  score: 71, match: "Good Match",        color: "#22c55e" },
              { name: "Dina Ramadan",   score: 58, match: "Partial Match",     color: "#FBBF24" },
              { name: "Ali Hassan",     score: 32, match: "Low Match",         color: "#E8604C" },
            ].map((c, i) => (
              <div key={c.name} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5">
                <div className="w-5 h-5 rounded-full bg-white/10 text-white/50 flex items-center justify-center text-[10px] font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="w-7 h-7 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {c.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs font-medium">{c.name}</div>
                  <div className="w-full bg-white/10 rounded-full h-1 mt-1">
                    <div className="h-1 rounded-full transition-all" style={{ width: `${c.score}%`, background: c.color }} />
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-xs" style={{ color: c.color }}>{c.score}%</div>
                  <div className="text-[10px] text-white/30">{c.match}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/30">
            <span>Powered by HR Dock AI</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4B4] animate-pulse" />
              Screening in real-time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
