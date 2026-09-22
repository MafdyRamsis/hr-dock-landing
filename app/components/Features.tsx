"use client";
import { useLang } from "../context/LanguageContext";
import {
  PayrollMockup,
  AttendanceMockup,
  RecruitmentMockup,
  AnalyticsMockup,
  MultiCompanyMockup,
  MobileAppMockup,
} from "./FeatureMockups";

const featureDefs = [
  { key: "attendance",   icon: "📅", reverse: false, Mockup: AttendanceMockup },
  { key: "payroll",      icon: "💰", reverse: true,  Mockup: PayrollMockup },
  { key: "mobile",       icon: "📱", reverse: false, Mockup: MobileAppMockup },
  { key: "analytics",    icon: "📊", reverse: true,  Mockup: AnalyticsMockup },
  { key: "multitenancy", icon: "🏢", reverse: false, Mockup: MultiCompanyMockup },
  { key: "recruitment",  icon: "🎯", reverse: true,  Mockup: RecruitmentMockup },
];

export default function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="py-24 bg-[#1B2A4A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#00B4B4]/15 text-[#00B4B4] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
            {t("features.sub")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("features.title")}
          </h2>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-24">
          {featureDefs.map(({ key, icon, reverse, Mockup }) => (
            <div
              key={key}
              className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
            >
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-5">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-white/60 leading-relaxed text-base">
                  {t(`features.${key}.desc`)}
                </p>
              </div>

              {/* Mockup */}
              <div className="flex-1 min-w-0 w-full">
                <Mockup />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
