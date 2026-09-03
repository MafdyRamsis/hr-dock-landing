"use client";
import { useState, FormEvent } from "react";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
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
      if (!response.ok) throw new Error(result.error || t("contact.error"));
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("contact.error"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1B2A4A] mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-gray-500">{t("contact.sub")}</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#00B4B4]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-[#00B4B4]">
                ✓
              </div>
              <p className="text-lg font-semibold text-[#1B2A4A]">{t("contact.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.name")}</label>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.company")}</label>
                  <input
                    required
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
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.email")}</label>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.phone")}</label>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.message")}</label>
                <textarea
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
                className="mt-2 bg-[#E8604C] text-white font-semibold py-3 rounded-xl hover:bg-[#d45540] transition-colors shadow-lg shadow-[#E8604C]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? t("contact.sending") : t("contact.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
