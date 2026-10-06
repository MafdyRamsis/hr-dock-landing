// Single source of truth for the company that sells HR Dock. Paymob requires
// the merchant's legal identity and contact details on the website.
// Set the NEXT_PUBLIC_LEGAL_* variables in Vercel once the company is
// registered. Public legal pages must never expose placeholder text, so the
// optional registration fields stay blank until their verified values are set.
// (Each variable is read literally so Next.js can inline it in client code.)
export const legalEntity = {
  name:          process.env.NEXT_PUBLIC_LEGAL_NAME       || "HR Dock",
  nameAr:        process.env.NEXT_PUBLIC_LEGAL_NAME_AR    || "HR Dock",
  commercialReg: process.env.NEXT_PUBLIC_LEGAL_CR         || "",
  taxId:         process.env.NEXT_PUBLIC_LEGAL_TAX_ID     || "",
  address:       process.env.NEXT_PUBLIC_LEGAL_ADDRESS    || "Egypt",
  addressAr:     process.env.NEXT_PUBLIC_LEGAL_ADDRESS_AR || "مصر",
  email:         process.env.NEXT_PUBLIC_LEGAL_EMAIL      || "hello@hr-dock.com",
  phone:         process.env.NEXT_PUBLIC_LEGAL_PHONE      || "",
};
