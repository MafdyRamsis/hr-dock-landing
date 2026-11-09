"use client";

import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";


export default function Hero({ content }: { content: SiteContent["hero"] }) {
  const { t, lang } = useLang();
  const english = lang === "en";

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 pb-14 pt-28 text-white sm:pb-16 lg:pt-32">
      <div className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center min-w-0 gap-9 px-5 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:gap-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />{english ? content.badge : t("hero.badge")}
          </span>
          <h1 className="mt-5 whitespace-pre-line text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            {english ? content.headline : t("hero.headline")}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 sm:text-lg text-slate-300">
            {english ? content.subtext : t("hero.sub")}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:-translate-y-0.5 hover:bg-indigo-500">
              {english ? content.primaryCta : t("hero.cta1")} <span className="ms-2" aria-hidden="true">↗</span>
            </a>
            <a href="#payroll-workflow" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              {english ? content.secondaryCta : t("hero.cta2")}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-400">
            <span>✓ {english ? "Built for teams in Egypt" : "مصمم لفرق العمل في مصر"}</span>
            <span>✓ {english ? "Arabic & English" : "العربية والإنجليزية"}</span>
            <span>✓ {english ? "Web & mobile workflows" : "الويب والجوال"}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[680px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/5 bg-white/[.03] blur-sm" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-200/15 bg-slate-100 shadow-2xl shadow-black/40">
            <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ms-3 rounded-md bg-slate-100 px-3 py-1 text-[10px] text-slate-400">app.hr-dock.com</span>
              <span className="ms-auto rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-bold text-indigo-600">{english ? "Live product" : "من النظام"}</span>
            </div>
            {content.imageUrl ? (
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image src={content.imageUrl} alt="HR Dock product preview" fill priority sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" />
              </div>
            ) : (
              <div className="relative aspect-[16/10] bg-white">
                <Image src={english ? "/screens/en-attendance.webp" : "/screens/ar-attendance.webp"} alt={english ? "HR Dock attendance board: who is present, late or not in yet today" : "لوحة الحضور في HR Dock: مين حاضر ومتأخر ومين لسه مسجلش النهارده"} fill priority sizes="(max-width: 1024px) 100vw, 680px" className="object-cover object-top" />
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-[11px] text-slate-500">{english ? "A real HR Dock screen, shown with a sample company" : "شاشة حقيقية من HR Dock ببيانات شركة تجريبية"}</p>
        </div>
      </div>
    </section>
  );
}
