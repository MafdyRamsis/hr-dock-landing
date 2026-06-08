"use client";
import { useLang } from "../context/LanguageContext";

const values = [
  { key: "about.v1", textKey: "about.v1.text", icon: "🎯" },
  { key: "about.v2", textKey: "about.v2.text", icon: "🚀" },
  { key: "about.v3", textKey: "about.v3.text", icon: "🤝" },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#00B4B4]/10 text-[#00B4B4] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              {t("about.sub")}
            </span>
            <h2 className="text-4xl font-bold text-[#1B2A4A] mb-6">{t("about.title")}</h2>
            <p className="text-gray-500 leading-relaxed text-base">{t("about.body")}</p>

            <div className="mt-10 space-y-5">
              {values.map(({ key, textKey, icon }) => (
                <div key={key} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B2A4A] flex items-center justify-center text-xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="font-bold text-[#1B2A4A] mb-1">{t(key)}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{t(textKey)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="rounded-2xl bg-[#1B2A4A] p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-[#00B4B4]/20 flex items-center justify-center text-3xl">🏢</div>
              <div>
                <div className="text-white font-bold text-lg">HR Dock</div>
                <div className="text-[#00B4B4] text-sm">Empowering Your Workforce</div>
              </div>
            </div>

            {[
              { label: "Founded", value: "2024" },
              { label: "Headquarters", value: "Cairo, Egypt 🇪🇬" },
              { label: "Market", value: "Egyptian Private Sector" },
              { label: "Compliance", value: "NOSS · Egyptian Labor Law" },
              { label: "Languages", value: "Arabic & English" },
              { label: "Modules", value: "3 (45 features)" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-white/40">{label}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}

            <div className="pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="block w-full text-center bg-[#E8604C] text-white font-semibold py-3 rounded-xl hover:bg-[#d45540] transition-colors"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
