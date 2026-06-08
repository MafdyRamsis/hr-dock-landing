"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.features": { en: "Features", ar: "المميزات" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.demo": { en: "Request Demo", ar: "طلب عرض" },

  // Hero
  "hero.badge": { en: "Built for Egyptian Businesses", ar: "مصمم للشركات المصرية" },
  "hero.headline": { en: "Modern HR Management,\nSimplified.", ar: "إدارة الموارد البشرية\nبشكل حديث ومبسّط." },
  "hero.sub": {
    en: "HR Dock streamlines payroll, attendance, recruitment, and compliance — all in one platform built for the Egyptian market.",
    ar: "HR Dock يبسّط الرواتب والحضور والتوظيف والامتثال — كل ذلك في منصة واحدة مصمّمة للسوق المصري.",
  },
  "hero.cta1": { en: "Get Started Free", ar: "ابدأ مجاناً" },
  "hero.cta2": { en: "See How It Works", ar: "شاهد كيف يعمل" },

  // Features
  "features.title": { en: "Everything your HR team needs", ar: "كل ما يحتاجه فريق الموارد البشرية" },
  "features.sub": {
    en: "One platform to manage your entire workforce lifecycle.",
    ar: "منصة واحدة لإدارة دورة حياة القوى العاملة بالكامل.",
  },
  "features.payroll.title": { en: "Smart Payroll", ar: "رواتب ذكية" },
  "features.payroll.desc": {
    en: "Automate salary calculations, deductions, bonuses, and Egyptian labor law compliance.",
    ar: "أتمتة حسابات الرواتب والخصومات والمكافآت والامتثال لقانون العمل المصري.",
  },
  "features.attendance.title": { en: "Attendance & Leave", ar: "الحضور والإجازات" },
  "features.attendance.desc": {
    en: "Track check-ins, manage leave requests, and sync with your payroll automatically.",
    ar: "تتبع تسجيل الدخول وإدارة طلبات الإجازة والمزامنة مع الرواتب تلقائياً.",
  },
  "features.recruitment.title": { en: "Recruitment Pipeline", ar: "خط التوظيف" },
  "features.recruitment.desc": {
    en: "Post jobs, screen applicants, and onboard new hires — all without leaving HR Dock.",
    ar: "انشر الوظائف وفلتر المتقدمين وأدمج الموظفين الجدد — كل ذلك داخل HR Dock.",
  },
  "features.analytics.title": { en: "HR Analytics", ar: "تحليلات الموارد البشرية" },
  "features.analytics.desc": {
    en: "Real-time dashboards and reports to make data-driven HR decisions.",
    ar: "لوحات بيانات وتقارير في الوقت الفعلي لاتخاذ قرارات مبنية على البيانات.",
  },
  "features.multitenancy.title": { en: "Multi-Company Support", ar: "دعم متعدد الشركات" },
  "features.multitenancy.desc": {
    en: "Manage multiple business entities under one account with isolated data per company.",
    ar: "إدارة كيانات أعمال متعددة تحت حساب واحد مع بيانات معزولة لكل شركة.",
  },
  "features.mobile.title": { en: "Mobile App", ar: "تطبيق الجوال" },
  "features.mobile.desc": {
    en: "Employees can submit requests, check payslips, and clock in/out from anywhere.",
    ar: "يمكن للموظفين تقديم الطلبات وعرض قسائم الرواتب وتسجيل الدخول من أي مكان.",
  },

  // Contact
  "contact.title": { en: "Request a Demo", ar: "اطلب عرضاً توضيحياً" },
  "contact.sub": {
    en: "See HR Dock in action. Fill in your details and our team will reach out within 24 hours.",
    ar: "شاهد HR Dock عملياً. أدخل بياناتك وسيتواصل معك فريقنا خلال 24 ساعة.",
  },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.company": { en: "Company Name", ar: "اسم الشركة" },
  "contact.email": { en: "Work Email", ar: "البريد الإلكتروني للعمل" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.message": { en: "Message (optional)", ar: "رسالة (اختياري)" },
  "contact.submit": { en: "Request Demo", ar: "اطلب العرض" },
  "contact.success": {
    en: "Thanks! We'll be in touch soon.",
    ar: "شكراً! سنتواصل معك قريباً.",
  },

  // Navbar extras
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.products": { en: "Products", ar: "المنتجات" },
  "nav.clients": { en: "Clients", ar: "عملاؤنا" },

  // Stats
  "stats.companies": { en: "Companies Trust HR Dock", ar: "شركة تثق في HR Dock" },
  "stats.employees": { en: "Employees Managed", ar: "موظف تحت الإدارة" },
  "stats.modules": { en: "Integrated Modules", ar: "وحدة متكاملة" },
  "stats.uptime": { en: "Uptime SLA", ar: "ضمان التشغيل" },

  // AI Callout
  "ai.badge": { en: "AI-Powered", ar: "مدعوم بالذكاء الاصطناعي" },
  "ai.title": { en: "The only Egyptian HR platform with built-in AI", ar: "المنصة المصرية الوحيدة للموارد البشرية بذكاء اصطناعي مدمج" },
  "ai.sub": { en: "While others add AI as an afterthought, HR Dock's Recruitment & AI module uses machine learning to screen candidates, rank applicants, and run structured assessments — saving your team hours on every hire.", ar: "بينما يضيف الآخرون الذكاء الاصطناعي كفكرة لاحقة، تستخدم وحدة التوظيف والذكاء الاصطناعي في HR Dock التعلم الآلي لفلترة المرشحين وتصنيف المتقدمين وإجراء التقييمات المنظمة." },
  "ai.feat1": { en: "AI Candidate Screening", ar: "فلترة المرشحين بالذكاء الاصطناعي" },
  "ai.feat2": { en: "Smart Applicant Ranking", ar: "تصنيف ذكي للمتقدمين" },
  "ai.feat3": { en: "Automated Assessment Portal", ar: "بوابة تقييم آلية" },
  "ai.feat4": { en: "Talent Pool Intelligence", ar: "ذكاء مجموعة المواهب" },
  "ai.cta": { en: "See AI in Action", ar: "شاهد الذكاء الاصطناعي" },

  // Products
  "products.title": { en: "Three Modules. One Platform.", ar: "ثلاث وحدات. منصة واحدة." },
  "products.sub": { en: "Start with what you need. Expand as you grow. Every module builds on the last.", ar: "ابدأ بما تحتاجه. توسّع مع نموك. كل وحدة تبني على السابقة." },
  "products.m1.name": { en: "Payroll & Attendance", ar: "الرواتب والحضور" },
  "products.m1.tag": { en: "Module 1", ar: "الوحدة الأولى" },
  "products.m1.sub": { en: "الرواتب والحضور", ar: "الرواتب والحضور" },
  "products.m1.desc": { en: "Core HR compliance — attendance tracking, leave management, full payroll with Egyptian NOSS & tax.", ar: "الامتثال الأساسي للموارد البشرية — تتبع الحضور وإدارة الإجازات والرواتب الكاملة مع NOSS والضرائب المصرية." },
  "products.m2.name": { en: "HR Operations", ar: "عمليات الموارد البشرية" },
  "products.m2.tag": { en: "Module 2", ar: "الوحدة الثانية" },
  "products.m2.sub": { en: "إدارة الموارد البشرية", ar: "إدارة الموارد البشرية" },
  "products.m2.desc": { en: "Full HR management — documents, org tools, requests, workflows, employee lifecycle & compliance.", ar: "إدارة شاملة للموارد البشرية — المستندات وأدوات التنظيم والطلبات وسير العمل ودورة حياة الموظف." },
  "products.m3.name": { en: "Recruitment & AI", ar: "التوظيف والذكاء الاصطناعي" },
  "products.m3.tag": { en: "Module 3 · AI", ar: "الوحدة الثالثة · ذكاء اصطناعي" },
  "products.m3.sub": { en: "التوظيف والذكاء الاصطناعي", ar: "التوظيف والذكاء الاصطناعي" },
  "products.m3.desc": { en: "Complete talent acquisition — recruitment pipeline, AI candidate screening & assessment portal.", ar: "اكتساب المواهب الكامل — خط التوظيف وفلترة المرشحين بالذكاء الاصطناعي وبوابة التقييم." },

  // About
  "about.title": { en: "About HR Dock", ar: "عن HR Dock" },
  "about.sub": { en: "Built in Egypt, for Egypt.", ar: "صُنع في مصر، لمصر." },
  "about.body": { en: "HR Dock was built by a team of HR professionals and engineers who lived the pain of outdated, expensive HR tools that don't understand the Egyptian market — NOSS compliance, Arabic workflows, multi-company structures, and the nuances of local labor law. We built the platform we always wanted.", ar: "بنى HR Dock فريق من متخصصي الموارد البشرية والمهندسين الذين عاشوا معاناة الأدوات القديمة والمكلفة التي لا تفهم السوق المصري — امتثال NOSS وسير العمل بالعربية وهياكل متعددة الشركات وتفاصيل قانون العمل المحلي." },
  "about.v1": { en: "Mission", ar: "المهمة" },
  "about.v1.text": { en: "Make world-class HR software accessible to every Egyptian business, regardless of size.", ar: "جعل برامج الموارد البشرية عالمية المستوى في متناول كل شركة مصرية بصرف النظر عن حجمها." },
  "about.v2": { en: "Vision", ar: "الرؤية" },
  "about.v2.text": { en: "Become the HR backbone of the Egyptian private sector by 2027.", ar: "أن نصبح العمود الفقري للموارد البشرية في القطاع الخاص المصري بحلول عام 2027." },
  "about.v3": { en: "Values", ar: "القيم" },
  "about.v3.text": { en: "Transparency, compliance, simplicity — and always putting people first.", ar: "الشفافية والامتثال والبساطة — ووضع الناس دائماً في المقدمة." },

  // Clients & Partners
  "clients.title": { en: "Trusted by Egyptian Businesses", ar: "يثق بها الشركات المصرية" },
  "clients.sub": { en: "From startups to enterprise groups — HR Dock scales with you.", ar: "من الشركات الناشئة إلى المجموعات الكبرى — HR Dock يتوسع معك." },
  "partners.title": { en: "Our Partners", ar: "شركاؤنا" },
  "partners.sub": { en: "Integrated with the tools your team already uses.", ar: "متكامل مع الأدوات التي يستخدمها فريقك بالفعل." },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.tagline": { en: "Empowering Your Workforce", ar: "تمكين قوتك العاملة" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
