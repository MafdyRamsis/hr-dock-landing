"use client";

import { useState } from "react";
import type { SiteContent } from "../lib/site-content";

export default function Pricing({ content }: { content: SiteContent["pricing"] }) {
  const [annual, setAnnual] = useState(true);
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#00B4B4]">{content.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold text-[#1B2A4A] md:text-5xl">{content.title}</h2>
          <p className="mt-5 text-lg text-gray-500">{content.subtitle}</p>
          <div className="mt-8 inline-flex rounded-xl border border-gray-200 bg-gray-100 p-1">
            <button onClick={() => setAnnual(false)} className={`rounded-lg px-4 py-2 text-sm font-semibold ${!annual ? "bg-white text-[#1B2A4A] shadow-sm" : "text-gray-500"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`rounded-lg px-4 py-2 text-sm font-semibold ${annual ? "bg-white text-[#1B2A4A] shadow-sm" : "text-gray-500"}`}>Annual <span className="text-emerald-600">{content.annualDiscount}</span></button>
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {content.plans.map((plan) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return <article key={plan.name} className={`relative rounded-2xl p-8 shadow-xl ${plan.featured ? "border-2 border-[#00B4B4] bg-white" : "border border-gray-200 bg-white"}`}>
              {plan.featured && <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-[#00B4B4] px-3 py-1 text-xs font-bold text-white">Most popular</span>}
              <h3 className="text-xl font-bold text-[#1B2A4A]">{plan.name}</h3><p className="mt-2 min-h-10 text-sm text-gray-500">{plan.description}</p>
              <div className="mt-7 flex items-end gap-1"><span className="text-4xl font-extrabold text-[#1B2A4A]">{price === "Custom" ? price : `$${price}`}</span>{price !== "Custom" && <span className="pb-1 text-sm text-gray-500">/ employee / mo</span>}</div>
              <a href="#contact" className={`mt-7 block rounded-xl px-5 py-3 text-center font-semibold transition-colors ${plan.featured ? "bg-[#E8604C] text-white hover:bg-[#d45540]" : "border border-gray-300 text-[#1B2A4A] hover:border-[#00B4B4]"}`}>{plan.cta}</a>
              <ul className="mt-8 space-y-4 text-sm text-gray-600">{plan.features.map((feature) => <li key={feature} className="flex gap-2"><span className="font-bold text-[#00B4B4]">✓</span>{feature}</li>)}</ul>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
