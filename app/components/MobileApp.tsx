"use client";
import { useLang } from "../context/LanguageContext";

// Unlisted App Store link: the app is not in App Store search, so this
// button and QR code are how employees reach it.
export const APP_STORE_URL = "https://apps.apple.com/app/id6819200736";

export default function MobileApp() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section id="mobile-app" className="bg-slate-50 py-20 text-slate-900" dir={ar ? "rtl" : "ltr"}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-start">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {ar ? "تطبيق HR Dock للموظفين" : "The HR Dock app for employees"}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            {ar
              ? "سجّل الحضور، اطلب إجازة، وشوف قسيمة راتبك من موبايلك. سجّل الدخول ببيانات الحساب اللي بتديهالك إدارة الموارد البشرية في شركتك."
              : "Check in, request leave and see your payslip from your phone. Sign in with the account details your company's HR gives you."}
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3 text-white shadow-sm transition-colors hover:bg-slate-700"
          >
            <span className="flex flex-col leading-tight text-start">
              <span className="text-xs text-slate-300">{ar ? "حمّل من" : "Download on the"}</span>
              <span className="text-lg font-semibold">App Store</span>
            </span>
          </a>
          <p className="mt-3 text-sm text-slate-500">{ar ? "لأجهزة iPhone" : "For iPhone"}</p>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/app-store-qr.svg" alt={ar ? "رمز QR لتحميل تطبيق HR Dock" : "QR code to download the HR Dock app"} width={176} height={176} />
          <p className="text-sm text-slate-600">{ar ? "امسح الكود بكاميرا الموبايل" : "Scan with your phone camera"}</p>
        </div>
      </div>
    </section>
  );
}
