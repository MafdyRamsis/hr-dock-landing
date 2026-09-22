"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import type { SiteContent } from "../lib/site-content";

const input = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";
const label = "mb-2 block text-sm font-semibold text-slate-700";
const card = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";

export default function AdminEditor({ initialAuthenticated, initialContent }: { initialAuthenticated: boolean; initialContent: SiteContent | null }) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [content, setContent] = useState(initialContent);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function login(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (!response.ok) { const body = await response.json().catch(() => ({})); setError(body.error || "Could not sign in."); setBusy(false); return; }
    const contentResponse = await fetch("/api/admin/content");
    setContent(await contentResponse.json()); setAuthenticated(true); setPassword(""); setBusy(false);
  }

  async function save() {
    if (!content) return; setBusy(true); setError(""); setMessage("");
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) setError(body.error || "Could not publish changes.");
    else { setContent(body); setMessage("Changes published successfully."); window.scrollTo({ top: 0, behavior: "smooth" }); }
    setBusy(false);
  }

  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); setAuthenticated(false); setContent(null); }

  async function upload(file: File, onDone: (url: string) => void) {
    setBusy(true); setError(""); const data = new FormData(); data.append("file", file);
    const response = await fetch("/api/admin/upload", { method: "POST", body: data }); const body = await response.json().catch(() => ({}));
    if (!response.ok) setError(body.error || "Upload failed."); else onDone(body.url); setBusy(false);
  }

  if (!authenticated || !content) return <main className="grid min-h-screen place-items-center bg-slate-100 px-5"><form onSubmit={login} className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl"><div className="mb-7 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600 font-bold text-white">HR</span><div><h1 className="text-xl font-bold text-slate-900">Website Admin</h1><p className="text-sm text-slate-500">Sign in to edit hr-dock.com</p></div></div><label className={label} htmlFor="password">Admin password</label><input id="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className={input} />{error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}<button disabled={busy} className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60">{busy ? "Signing in…" : "Sign in"}</button></form></main>;

  const setHero = (key: keyof SiteContent["hero"], value: string) => setContent({ ...content, hero: { ...content.hero, [key]: value } });
  const setPricing = (key: "eyebrow" | "title" | "subtitle" | "annualDiscount", value: string) => setContent({ ...content, pricing: { ...content.pricing, [key]: value } });
  const updatePlan = (index: number, key: string, value: string | boolean | string[]) => { const plans = [...content.pricing.plans]; plans[index] = { ...plans[index], [key]: value }; setContent({ ...content, pricing: { ...content.pricing, plans } }); };

  return <main className="min-h-screen bg-slate-100 pb-28">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><div><h1 className="text-xl font-bold text-slate-900">HR-Dock Website Admin</h1><p className="text-xs text-slate-500">Edit and publish marketing content</p></div><div className="flex gap-2"><a href="/" target="_blank" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Preview site ↗</a><button onClick={logout} className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100">Sign out</button></div></div></header>
    <div className="mx-auto max-w-6xl space-y-6 px-5 py-8">
      {(message || error) && <div role="status" className={`rounded-xl border px-4 py-3 text-sm font-medium ${error ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>{error || message}</div>}
      <section className={card}><div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Homepage</p><h2 className="mt-1 text-2xl font-bold">Hero section</h2></div><div className="grid gap-5 md:grid-cols-2"><Field label="Badge" value={content.hero.badge} onChange={(v) => setHero("badge", v)} /><Field label="Headline" value={content.hero.headline} onChange={(v) => setHero("headline", v)} /><div className="md:col-span-2"><Field label="Supporting text" value={content.hero.subtext} onChange={(v) => setHero("subtext", v)} multiline /></div><Field label="Primary button" value={content.hero.primaryCta} onChange={(v) => setHero("primaryCta", v)} /><Field label="Secondary button" value={content.hero.secondaryCta} onChange={(v) => setHero("secondaryCta", v)} /><ImageField label="Hero image" url={content.hero.imageUrl} busy={busy} onSelect={(file) => upload(file, (url) => setHero("imageUrl", url))} onClear={() => setHero("imageUrl", "")} /></div></section>

      <section className={card}><div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Commercial</p><h2 className="mt-1 text-2xl font-bold">Pricing</h2><p className="mt-2 text-sm text-slate-500">Enter prices in EGP per employee per month. Annual is the monthly equivalent when billed annually. Use “Contact us” until you decide an amount.</p></div><div className="grid gap-5 md:grid-cols-2"><Field label="Eyebrow" value={content.pricing.eyebrow} onChange={(v) => setPricing("eyebrow", v)} /><Field label="Annual discount badge" value={content.pricing.annualDiscount} onChange={(v) => setPricing("annualDiscount", v)} /><Field label="Section title" value={content.pricing.title} onChange={(v) => setPricing("title", v)} /><Field label="Section subtitle" value={content.pricing.subtitle} onChange={(v) => setPricing("subtitle", v)} /></div><div className="mt-7 grid gap-5 lg:grid-cols-3">{content.pricing.plans.map((plan, index) => <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="mb-4 flex items-center justify-between"><h3 className="font-bold">Plan {index + 1}</h3><label className="flex items-center gap-2 text-xs font-semibold text-slate-600"><input type="checkbox" checked={plan.featured} onChange={(e) => updatePlan(index, "featured", e.target.checked)} /> Featured</label></div><div className="space-y-4"><Field label="Name" value={plan.name} onChange={(v) => updatePlan(index, "name", v)} /><Field label="Description" value={plan.description} onChange={(v) => updatePlan(index, "description", v)} multiline /><div className="grid grid-cols-2 gap-3"><Field label="Monthly EGP" value={plan.monthlyPrice} onChange={(v) => updatePlan(index, "monthlyPrice", v)} /><Field label="Annual EGP" value={plan.annualPrice} onChange={(v) => updatePlan(index, "annualPrice", v)} /></div><Field label="Button label" value={plan.cta} onChange={(v) => updatePlan(index, "cta", v)} /><Field label="Features (one per line)" value={plan.features.join("\n")} onChange={(v) => updatePlan(index, "features", v.split("\n").filter(Boolean))} multiline /></div></div>)}</div></section>

      <section className={card}><div className="mb-6 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Social proof</p><h2 className="mt-1 text-2xl font-bold">Client logos</h2></div><button onClick={() => setContent({ ...content, clients: { ...content.clients, logos: [...content.clients.logos, { name: "New client", imageUrl: "" }] } })} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold">+ Add client</button></div><div className="mb-6 grid gap-5 md:grid-cols-2"><Field label="Section title" value={content.clients.title} onChange={(v) => setContent({ ...content, clients: { ...content.clients, title: v } })} /><Field label="Section subtitle" value={content.clients.subtitle} onChange={(v) => setContent({ ...content, clients: { ...content.clients, subtitle: v } })} /></div><div className="grid gap-4 md:grid-cols-2">{content.clients.logos.map((logo, index) => <div key={index} className="rounded-xl border border-slate-200 p-4"><Field label="Client name" value={logo.name} onChange={(v) => { const logos = [...content.clients.logos]; logos[index] = { ...logo, name: v }; setContent({ ...content, clients: { ...content.clients, logos } }); }} /><div className="mt-4"><ImageField label="Logo" url={logo.imageUrl} busy={busy} onSelect={(file) => upload(file, (url) => { const logos = [...content.clients.logos]; logos[index] = { ...logo, imageUrl: url }; setContent({ ...content, clients: { ...content.clients, logos } }); })} onClear={() => { const logos = content.clients.logos.filter((_, i) => i !== index); setContent({ ...content, clients: { ...content.clients, logos } }); }} clearLabel="Remove client" /></div></div>)}</div></section>

      <section className={card}><div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Conversion</p><h2 className="mt-1 text-2xl font-bold">Call to action</h2></div><div className="grid gap-5 md:grid-cols-2"><Field label="Title" value={content.cta.title} onChange={(v) => setContent({ ...content, cta: { ...content.cta, title: v } })} /><Field label="Button" value={content.cta.button} onChange={(v) => setContent({ ...content, cta: { ...content.cta, button: v } })} /><div className="md:col-span-2"><Field label="Supporting text" value={content.cta.subtitle} onChange={(v) => setContent({ ...content, cta: { ...content.cta, subtitle: v } })} multiline /></div></div></section>
    </div>
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 p-4 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between"><p className="hidden text-sm text-slate-500 sm:block">Publishing updates the public website immediately.</p><button onClick={save} disabled={busy} className="w-full rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:opacity-60 sm:w-auto">{busy ? "Working…" : "Publish changes"}</button></div></div>
  </main>;
}

function Field({ label: text, value, onChange, multiline = false }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean }) {
  return <label className="block"><span className={label}>{text}</span>{multiline ? <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} className={input} /> : <input value={value} onChange={(e) => onChange(e.target.value)} className={input} />}</label>;
}

function ImageField({ label: text, url, busy, onSelect, onClear, clearLabel = "Remove image" }: { label: string; url: string; busy: boolean; onSelect: (file: File) => void; onClear: () => void; clearLabel?: string }) {
  function choose(event: ChangeEvent<HTMLInputElement>) { const file = event.target.files?.[0]; if (file) onSelect(file); event.target.value = ""; }
  return <div><span className={label}>{text}</span>{url && <div className="relative mb-3 h-36 overflow-hidden rounded-xl border border-slate-200 bg-slate-50"><Image src={url} alt="Current upload" fill unoptimized sizes="600px" className="object-contain" /></div>}<div className="flex gap-2"><label className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"><input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={choose} disabled={busy} className="sr-only" />{url ? "Replace" : "Upload image"}</label>{url && <button type="button" onClick={onClear} className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600">{clearLabel}</button>}</div><p className="mt-2 text-xs text-slate-400">JPG, PNG, WebP, or SVG. Maximum 5 MB.</p></div>;
}
