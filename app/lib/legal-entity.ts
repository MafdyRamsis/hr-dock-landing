// Single source of truth for the company that sells HR Dock. Paymob requires
// the merchant's legal identity and contact details on the website.
// Set the NEXT_PUBLIC_LEGAL_* variables in Vercel once the company is
// registered; until then the bracketed placeholders make every gap obvious.
// (Each variable is read literally so Next.js can inline it in client code.)
export const legalEntity = {
  name:          process.env.NEXT_PUBLIC_LEGAL_NAME       || "[Company legal name]",
  nameAr:        process.env.NEXT_PUBLIC_LEGAL_NAME_AR    || "[الاسم القانوني للشركة]",
  commercialReg: process.env.NEXT_PUBLIC_LEGAL_CR         || "[Commercial register no.]",
  taxId:         process.env.NEXT_PUBLIC_LEGAL_TAX_ID     || "[Tax registration no.]",
  address:       process.env.NEXT_PUBLIC_LEGAL_ADDRESS    || "[Registered address], Egypt",
  addressAr:     process.env.NEXT_PUBLIC_LEGAL_ADDRESS_AR || "[العنوان المسجل]، مصر",
  email:         process.env.NEXT_PUBLIC_LEGAL_EMAIL      || "[support email]",
  phone:         process.env.NEXT_PUBLIC_LEGAL_PHONE      || "[support phone]",
};
