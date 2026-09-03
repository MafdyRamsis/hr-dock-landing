import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://hrdock.app"),
  title: "HR Dock — Modern HR Management for Egyptian Businesses",
  description:
    "HR Dock streamlines payroll, attendance, recruitment, and compliance — all in one platform built for the Egyptian market.",
  applicationName: "HR Dock",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_EG",
    siteName: "HR Dock",
    title: "HR Dock — Modern HR Management for Egyptian Businesses",
    description: "Payroll, attendance, recruitment, and HR operations for Egyptian businesses.",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
