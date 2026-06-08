"use client";
import { useState, FormEvent } from "react";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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
                    type="text"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.company")}</label>
                  <input
                    required
                    type="text"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.email")}</label>
                  <input
                    required
                    type="email"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.phone")}</label>
                  <input
                    type="tel"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1B2A4A]">{t("contact.message")}</label>
                <textarea
                  rows={4}
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4B4] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#E8604C] text-white font-semibold py-3 rounded-xl hover:bg-[#d45540] transition-colors shadow-lg shadow-[#E8604C]/20"
              >
                {t("contact.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
