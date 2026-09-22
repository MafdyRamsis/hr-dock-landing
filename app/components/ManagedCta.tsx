"use client";

import { useRef, type FormEvent } from "react";
import { useLang } from "../context/LanguageContext";
import type { SiteContent } from "../lib/site-content";

export default function ManagedCta({ content }: { content: SiteContent["cta"] }) {
  const { lang } = useLang();
  const emailInput = useRef<HTMLInputElement>(null);

  function continueToContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = document.getElementById("contact-email") as HTMLInputElement | null;
    if (input) input.value = emailInput.current?.value ?? "";
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    input?.focus({ preventScroll: true });
  }

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 px-6 py-20 text-center text-white shadow-2xl shadow-indigo-900/20">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">{lang === "ar" ? "ابدأ الحوار" : "Let's talk"}</span>
          <h2 className="mt-7 text-4xl font-bold tracking-tight md:text-5xl">{lang === "ar" ? "شاهد سير عمل الموارد البشرية في مكان واحد" : content.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">{lang === "ar" ? "استعرض الحضور والطلبات والرواتب وملفات الموظفين بالطريقة التي يعمل بها فريقك." : content.subtitle}</p>
          <form onSubmit={continueToContact} className="mx-auto mt-9 flex max-w-lg flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur sm:flex-row">
            <label htmlFor="cta-email" className="sr-only">{lang === "ar" ? "البريد الإلكتروني للعمل" : "Work email"}</label>
            <input ref={emailInput} id="cta-email" type="email" required autoComplete="email" placeholder={lang === "ar" ? "بريدك الإلكتروني للعمل" : "Your work email"} className="min-h-12 min-w-0 flex-1 rounded-xl border-0 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300" />
            <button type="submit" className="min-h-12 shrink-0 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-500">{lang === "ar" ? "أكمل طلب العرض" : content.button}</button>
          </form>
          <p className="mt-3 text-xs text-slate-400">{lang === "ar" ? "أكمل النموذج القصير أدناه لطلب العرض." : "Complete the short form below to request your demo."}</p>
        </div>
      </div>
    </section>
  );
}
