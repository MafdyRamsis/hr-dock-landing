"use client";
import { useState, FormEvent } from "react";
import { useLang } from "../context/LanguageContext";

import { legalEntity } from "../lib/legal-entity";
import type { SiteContent } from "../lib/site-content";

export default function Contact({ content, formAvailable }: { content: SiteContent["cta"]; formAvailable: boolean }) {
  const { t, lang } = useLang();
  const ar = lang === "ar";
  const emailLink = `mailto:${legalEntity.email}?subject=${encodeURIComponent(ar ? "طلب عرض توضيحي لنظام HR Dock" : "HR Dock demo request")}`;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error((!ar && result.error) || t("contact.error"));
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("contact.error"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">{ar ? t("contact.title") : content.title}</h2>
          <p className="text-lg text-gray-500">{ar ? t("contact.sub") : content.subtitle}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-200/60">
          {!formAvailable ? (
            <div className="space-y-3 text-center">
              <p className="text-sm text-slate-600">{t("contact.emailHint")}</p>
              <a href={emailLink} className="inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500">
                {t("contact.emailDemo")}
              </a>
              <p className="text-sm text-slate-500" dir="ltr">{legalEntity.email}</p>
            </div>
          ) : submitted ? (
            <div role="status" className="text-center py-12">
              <div className="w-16 h-16 bg-[#00B4B4]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-[#00B4B4]">
                ✓
              </div>
              <p className="text-lg font-semibold text-[#1B2A4A]">{t("contact.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-sm font-medium text-[#1B2A4A]">{t("contact.name")}</label>
                  <input
                    required
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-company" className="text-sm font-medium text-[#1B2A4A]">{t("contact.company")}</label>
                  <input
                    required
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-sm font-medium text-[#1B2A4A]">{t("contact.email")}</label>
                  <input
                    required
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-sm font-medium text-[#1B2A4A]">{t("contact.phone")}</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-headcount" className="text-sm font-medium text-[#1B2A4A]">{t("contact.headcount")}</label>
                <input id="contact-headcount" name="headcount" type="number" min={1} max={9999999} step={1}
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-[#1B2A4A]">{t("contact.message")}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent resize-none"
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {!!error && (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-900/10 transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? t("contact.sending") : ar ? t("contact.submit") : content.button}
              </button>
              <a href={emailLink} className="text-center text-sm font-medium text-indigo-700 underline underline-offset-4">
                {t("contact.emailDemo")}
              </a>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
