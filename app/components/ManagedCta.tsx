import type { SiteContent } from "../lib/site-content";

export default function ManagedCta({ content }: { content: SiteContent["cta"] }) {
  return <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f1923] to-[#1B2A4A] px-6 py-16 text-center text-white shadow-2xl"><h2 className="text-4xl font-bold md:text-5xl">{content.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">{content.subtitle}</p><a href="#contact" className="mt-8 inline-flex rounded-xl bg-[#E8604C] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#d45540]">{content.button}</a></div></section>;
}
