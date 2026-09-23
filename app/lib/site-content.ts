import "server-only";

import { list, put } from "@vercel/blob";
import { promises as fs } from "node:fs";
import path from "node:path";

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  cta: string;
  featured: boolean;
  features: string[];
};

export type SiteContent = {
  hero: {
    badge: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    imageUrl: string;
  };
  pricing: {
    currency: "EGP";
    eyebrow: string;
    title: string;
    subtitle: string;
    annualDiscount: string;
    plans: PricingPlan[];
  };
  clients: {
    title: string;
    subtitle: string;
    logos: { name: string; imageUrl: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  updatedAt: string;
};

export const defaultSiteContent: SiteContent = {
  hero: {
    badge: "HR built for the realities of work in Egypt",
    headline: "Payroll shouldn't start with a spreadsheet hunt.",
    subtext: "When attendance, leave, overtime and employee records live in different places, month-end becomes a chase. HR Dock brings the work that feeds payroll into one clearer workflow.",
    primaryCta: "Show me the workflow",
    secondaryCta: "See the problems we solve",
    imageUrl: "",
  },
  pricing: {
    currency: "EGP",
    eyebrow: "Plans for your team",
    title: "Start with the bottleneck that costs you time.",
    subtitle: "Tell us your headcount, locations and current process. We'll show the relevant workflows and prepare an EGP quote around what you actually need.",
    annualDiscount: "",
    plans: [
      { name: "Starter", description: "Get attendance, leave and payroll inputs out of scattered sheets.", monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Discuss Starter", featured: false, features: ["Employee records", "Attendance, shifts and leave", "Payroll and payslips", "Overtime, loans and expenses"] },
      { name: "Growth", description: "Standardize the requests and records around every employee.", monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Discuss Growth", featured: true, features: ["Everything in Starter", "Onboarding, documents and assets", "Training and performance", "Helpdesk, surveys and workflows"] },
      { name: "Enterprise", description: "Connect hiring to the HR operations that follow it.", monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Discuss Enterprise", featured: false, features: ["Everything in Growth", "Recruitment pipeline", "AI candidate screening", "Assessments and talent pool"] },
    ],
  },
  clients: { title: "Built to grow with Egyptian businesses", subtitle: "Trusted by people-first teams building the future of work.", logos: [] },
  cta: { title: "Bring us your busiest HR day.", subtitle: "Shift changes, leave approvals, payroll cut-off or missing employee files—show us where work slows down, and we'll walk through the matching HR Dock workflow.", button: "Plan my demo" },
  updatedAt: new Date(0).toISOString(),
};

const CONTENT_PATH = "cms/site-content.json";
const LOCAL_PATH = path.join(process.cwd(), ".data", "site-content.json");

function mergeContent(value: Partial<SiteContent>): SiteContent {
  // Refresh only the original stock copy in previously published CMS content.
  // Anything an admin actually changed (including images and prices) stays intact.
  const hero = { ...value.hero };
  if (hero.badge === "Built for Egyptian Businesses") hero.badge = defaultSiteContent.hero.badge;
  if (hero.badge === "Built around the Egyptian workday") hero.badge = defaultSiteContent.hero.badge;
  if (hero.headline === "Where Modern HR Docks & Workforces Thrive") hero.headline = defaultSiteContent.hero.headline;
  if (hero.headline === "Your everyday HR, finally in one place.") hero.headline = defaultSiteContent.hero.headline;
  if (hero.subtext === "HR Dock streamlines payroll, attendance, recruitment, and compliance — all in one platform built for the Egyptian market.") hero.subtext = defaultSiteContent.hero.subtext;
  if (hero.subtext === "Track attendance, manage leave and employee requests, prepare payroll, and keep your people records together — with workflows built for teams in Egypt.") hero.subtext = defaultSiteContent.hero.subtext;
  if (hero.primaryCta === "Request a Demo") hero.primaryCta = defaultSiteContent.hero.primaryCta;
  if (hero.secondaryCta === "See How It Works") hero.secondaryCta = defaultSiteContent.hero.secondaryCta;
  if (hero.secondaryCta === "Explore daily workflows") hero.secondaryCta = defaultSiteContent.hero.secondaryCta;
  const pricing = { ...value.pricing };
  if (pricing.eyebrow === "Simple pricing") pricing.eyebrow = defaultSiteContent.pricing.eyebrow;
  if (pricing.title === "Choose a plan that grows with you") pricing.title = defaultSiteContent.pricing.title;
  if (pricing.title === "Start with daily HR. Add more as you grow.") pricing.title = defaultSiteContent.pricing.title;
  if (pricing.subtitle === "Pricing is quoted in Egyptian pounds (EGP). Contact our team for a plan tailored to your company.") pricing.subtitle = defaultSiteContent.pricing.subtitle;
  if (pricing.subtitle === "Tell us your team size and workflows. We’ll recommend a plan and quote it in Egyptian pounds (EGP).") pricing.subtitle = defaultSiteContent.pricing.subtitle;
  const oldPlanFeatures: Record<string, string[]> = {
    Starter: ["Core employee records", "Leave management", "Document storage", "Employee self-service"],
    Growth: ["Everything in Starter", "Time & attendance", "Smart onboarding", "Advanced reports", "Priority support"],
    Enterprise: ["Everything in Growth", "Custom roles & workflows", "SSO and API access", "Dedicated success manager"],
  };
  const oldPlanDescriptions: Record<string, string> = {
    Starter: "For small teams building strong foundations.",
    Growth: "For growing companies ready to automate.",
    Enterprise: "For complex teams with custom needs.",
  };
  const previousPlanDescriptions: Record<string, string> = {
    Starter: "People, attendance and payroll essentials.",
    Growth: "The full employee lifecycle for growing teams.",
    Enterprise: "HR operations plus hiring and AI tools.",
  };
  if (pricing.plans) {
    pricing.plans = pricing.plans.map((plan) => {
      const stock = defaultSiteContent.pricing.plans.find((item) => item.name === plan.name);
      if (!stock) return plan;
      return {
        ...plan,
        description: plan.description === oldPlanDescriptions[plan.name] || plan.description === previousPlanDescriptions[plan.name] ? stock.description : plan.description,
        cta: plan.cta === "Contact sales" ? stock.cta : plan.cta,
        features: JSON.stringify(plan.features) === JSON.stringify(oldPlanFeatures[plan.name]) ? stock.features : plan.features,
      };
    });
  }
  const cta = { ...value.cta };
  if (cta.title === "Make work feel better—for everyone.") cta.title = defaultSiteContent.cta.title;
  if (cta.title === "See your daily HR workflow in one place.") cta.title = defaultSiteContent.cta.title;
  if (cta.subtitle === "Replace fragmented HR processes with one beautifully simple platform.") cta.subtitle = defaultSiteContent.cta.subtitle;
  if (cta.subtitle === "Walk through attendance, requests, payroll, and employee records using the way your team works.") cta.subtitle = defaultSiteContent.cta.subtitle;
  if (cta.button === "Book your demo") cta.button = defaultSiteContent.cta.button;
  // Content published before the EGP switch held USD figures. Never relabel those figures as pounds.
  const legacyPlans = pricing && !pricing.currency
    ? pricing.plans?.map((plan) => ({ ...plan, monthlyPrice: "Contact sales", annualPrice: "Contact sales", cta: "Contact sales" }))
    : undefined;
  return {
    ...defaultSiteContent,
    ...value,
    hero: { ...defaultSiteContent.hero, ...hero },
    pricing: { ...defaultSiteContent.pricing, ...pricing, currency: "EGP", annualDiscount: legacyPlans ? "" : (pricing?.annualDiscount ?? defaultSiteContent.pricing.annualDiscount), subtitle: legacyPlans ? defaultSiteContent.pricing.subtitle : (pricing?.subtitle ?? defaultSiteContent.pricing.subtitle), plans: legacyPlans?.length ? legacyPlans : pricing?.plans?.length ? pricing.plans : defaultSiteContent.pricing.plans },
    clients: { ...defaultSiteContent.clients, ...value.clients, logos: value.clients?.logos ?? defaultSiteContent.clients.logos },
    cta: { ...defaultSiteContent.cta, ...cta },
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const { blobs } = await list({ prefix: CONTENT_PATH, limit: 1 });
      if (!blobs[0]) return defaultSiteContent;
      const response = await fetch(blobs[0].url, { cache: "no-store" });
      if (!response.ok) return defaultSiteContent;
      return mergeContent(await response.json());
    }
    return mergeContent(JSON.parse(await fs.readFile(LOCAL_PATH, "utf8")));
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const normalized = mergeContent({ ...content, updatedAt: new Date().toISOString() });
  const serialized = JSON.stringify(normalized, null, 2);
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(CONTENT_PATH, serialized, { access: "public", contentType: "application/json", addRandomSuffix: false, allowOverwrite: true, cacheControlMaxAge: 60 });
  } else {
    await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
    await fs.writeFile(LOCAL_PATH, serialized, "utf8");
  }
  return normalized;
}
