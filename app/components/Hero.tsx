"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";

const bars = [42, 66, 53, 82, 71, 94, 76];

export default function Hero({ content }: { content: SiteContent["hero"] }) {
  const { t, lang } = useLang();
  const english = lang === "en";

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 pb-24 pt-36 text-white md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[.92fr_1.08fr] lg:gap-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />{english ? content.badge : t("hero.badge")}
          </span>
          <h1 className="mt-7 whitespace-pre-line text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            {english ? content.headline : t("hero.headline")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {english ? content.subtext : t("hero.sub")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5 hover:bg-indigo-500">
              {english ? content.primaryCta : t("hero.cta1")} <span className="ms-2" aria-hidden="true">↗</span>
            </a>
            <a href="#daily-work" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              {english ? content.secondaryCta : t("hero.cta2")}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-400">
            <span>✓ {english ? "Built for teams in Egypt" : "مصمم لفرق العمل في مصر"}</span>
            <span>✓ {english ? "Arabic & English" : "العربية والإنجليزية"}</span>
            <span>✓ {english ? "Web & mobile workflows" : "الويب والجوال"}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/5 bg-white/[.03] blur-sm" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-200/15 bg-slate-100 shadow-2xl shadow-black/40">
            <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ms-3 rounded-md bg-slate-100 px-3 py-1 text-[10px] text-slate-400">app.hr-dock.com</span>
              <span className="ms-auto rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-bold text-indigo-600">{english ? "Preview" : "معاينة"}</span>
            </div>
            {content.imageUrl ? (
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image src={content.imageUrl} alt="HR Dock product preview" fill priority sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" />
              </div>
            ) : (
              <div className="flex min-h-[390px] text-slate-900">
                <aside className="hidden w-28 shrink-0 bg-slate-900 px-3 py-5 sm:block">
                  <span className="block text-xs font-bold text-cyan-300">HR Dock</span>
                  <div className="mt-8 space-y-3">
                    {["Overview", "People", "Attendance", "Leave", "Payroll", "Reports"].map((item, index) => (
                      <div key={item} className={`rounded-md px-2 py-1.5 text-[9px] ${index === 0 ? "bg-indigo-500/20 font-semibold text-indigo-200" : "text-slate-400"}`}>{item}</div>
                    ))}
                  </div>
                </aside>
                <div className="min-w-0 flex-1 p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div><p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-500">{english ? "Workforce overview" : "نظرة عامة على الفريق"}</p><h2 className="mt-1 text-lg font-bold sm:text-xl">{english ? "Good morning, team" : "صباح الخير يا فريق"}</h2></div>
                    <span className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[9px] text-slate-500">EGP · Egypt</span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                    {[["Present today", "92%", "↑ 4%"], ["Pending leave", "08", "Review"], ["Payroll status", "Ready", "This cycle"]].map(([label, value, note]) => (
                      <div key={label} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                        <p className="text-[9px] leading-3 text-slate-500">{label}</p><p className="mt-2 text-base font-bold sm:text-lg">{value}</p><p className="mt-1 text-[9px] font-semibold text-cyan-600">{note}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-[1.3fr_1fr]">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex justify-between text-[10px]"><span className="font-semibold">Attendance trend</span><span className="text-slate-400">This week</span></div>
                      <div className="mt-5 flex h-20 items-end gap-2">{bars.map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-600 to-cyan-400" style={{ height: `${height}%` }} />)}</div>
                      <div className="mt-2 flex justify-between text-[8px] text-slate-400"><span>Sat</span><span>Fri</span></div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-[10px] font-semibold">Today&apos;s work</p>
                      <div className="mt-4 space-y-3 text-[10px] text-slate-600">
                        <p><span className="me-2 text-cyan-500">●</span>Attendance synced</p>
                        <p><span className="me-2 text-indigo-500">●</span>Leave requests to review</p>
                        <p><span className="me-2 text-emerald-500">●</span>Payroll ready to check</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-[11px] text-slate-500">{english ? "Illustrative dashboard preview" : "معاينة توضيحية للوحة المعلومات"}</p>
        </div>
      </div>
    </section>
  );
}
