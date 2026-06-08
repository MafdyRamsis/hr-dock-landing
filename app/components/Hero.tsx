"use client";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative pt-28 pb-0 overflow-hidden bg-[#1B2A4A]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00B4B4]/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center pb-16">
        <span className="inline-block bg-[#00B4B4]/15 text-[#00B4B4] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          {t("hero.badge")}
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 whitespace-pre-line">
          {t("hero.headline")}
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
          {t("hero.sub")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#E8604C] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#d45540] transition-colors shadow-lg shadow-[#E8604C]/20"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
          >
            {t("hero.cta2")}
          </a>
        </div>

        {/* Dashboard mockup — full width, clipped at bottom */}
        <div className="rounded-t-2xl border border-white/10 shadow-2xl overflow-hidden mx-auto max-w-5xl">
          {/* browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1923]">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <div className="flex-1 mx-4 h-5 bg-white/10 rounded text-white/30 text-xs flex items-center px-3">
              app.hrdock.com/dashboard
            </div>
          </div>
          {/* app shell */}
          <div className="flex bg-[#f0f2f5]" style={{ minHeight: 280 }}>
            {/* sidebar */}
            <div className="w-48 bg-[#1B2A4A] flex flex-col py-4 shrink-0">
              <div className="flex items-center gap-2 px-4 mb-6">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-[#00B4B4]">HR</div>
                <div>
                  <div className="text-xs font-bold text-white">HR Dock</div>
                  <div className="text-[9px] text-white/40">HR MANAGEMENT</div>
                </div>
              </div>
              {[
                { label: "Dashboard", active: true },
                { label: "Requests", active: false },
                { label: "Employees", active: false },
                { label: "Time & Payroll", active: false },
                { label: "Talent", active: false },
                { label: "HR Operations", active: false },
                { label: "Admin", active: false },
              ].map(({ label, active }) => (
                <div
                  key={label}
                  className={`mx-2 px-3 py-2 rounded-lg text-xs mb-0.5 ${
                    active
                      ? "bg-[#00B4B4]/20 text-[#00B4B4] font-semibold"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  {label}
                </div>
              ))}
              <div className="mt-auto px-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#E8604C] flex items-center justify-center text-white text-xs font-bold">MR</div>
                <div>
                  <div className="text-xs text-white font-medium">Mafdy Ramsis</div>
                  <div className="text-[9px] text-[#00B4B4]">Admin</div>
                </div>
              </div>
            </div>

            {/* main content */}
            <div className="flex-1 p-6">
              <div className="text-lg font-bold text-[#1B2A4A] mb-4">Dashboard</div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[
                  { label: "Employees", value: "248", delta: "↑ 4%", color: "text-[#00B4B4]" },
                  { label: "On Leave", value: "12", delta: "→ 0%", color: "text-gray-400" },
                  { label: "Payroll Due", value: "EGP 1.2M", delta: "↑ 8%", color: "text-[#00B4B4]" },
                  { label: "Open Roles", value: "7", delta: "↓ 2", color: "text-[#E8604C]" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="text-xs text-gray-400 mb-1">{s.label}</div>
                    <div className="text-xl font-bold text-[#1B2A4A]">{s.value}</div>
                    <div className={`text-xs mt-1 ${s.color}`}>{s.delta}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-xs font-semibold text-[#1B2A4A] mb-3">Headcount by Department</div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[60, 80, 45, 90, 55, 70, 40].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{ height: `${h}%`, background: i % 2 === 0 ? "#00B4B4" : "#1B2A4A", opacity: 0.85 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-xs font-semibold text-[#1B2A4A] mb-3">Recent Activity</div>
                  {["Ahmed joined Engineering","Sara's leave approved","Payroll for June processed","7 new applicants"].map((item) => (
                    <div key={item} className="text-xs text-gray-500 border-b border-gray-50 py-1 last:border-0 truncate">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
