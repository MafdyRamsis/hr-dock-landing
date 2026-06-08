import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Terms & Conditions — HR Dock",
  description: "HR Dock Terms and Conditions of Service",
};

const EFFECTIVE_DATE = "1 July 2025";
const COMPANY_NAME = "HR Dock";
const COMPANY_EMAIL = "legal@hrdock.com";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0f1923] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/"><Logo className="h-8 w-auto" /></Link>
          <Link href="/" className="text-sm text-white/50 hover:text-[#00B4B4] transition-colors">← Back to Home</Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p className="text-white/40 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/70 leading-relaxed">

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using the {COMPANY_NAME} platform ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you are using the Service on behalf of a company or other legal entity ("Organisation"), you represent that you have the authority to bind that entity to these Terms.</p>
            <p>If you do not agree to these Terms, you must not use the Service.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>{COMPANY_NAME} provides a cloud-based Human Resources management platform designed for the Egyptian market, comprising up to three modules:</p>
            <ul>
              <li><strong className="text-white">Module 1 — Payroll & Attendance:</strong> Attendance tracking, leave management, shift scheduling, payroll processing with Egyptian NOSS & tax compliance, loans, expenses, and reporting.</li>
              <li><strong className="text-white">Module 2 — HR Operations:</strong> All of Module 1 features, plus training, performance, onboarding, exit management, disciplinary, benefits, assets, documents, helpdesk, surveys, policies, travel, WFH, and workflows.</li>
              <li><strong className="text-white">Module 3 — Recruitment & AI:</strong> All of Module 2 features, plus AI-powered recruitment pipeline, candidate screening, assessment portal, job descriptions, and talent pool management.</li>
            </ul>
            <p>The specific modules and features available to your Organisation depend on your active subscription plan.</p>
          </Section>

          <Section title="3. Account Registration">
            <p>To use the Service, you must create an account by providing accurate and complete information. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your login credentials.</li>
              <li>All activity that occurs under your account.</li>
              <li>Notifying {COMPANY_NAME} immediately at <a href={`mailto:${COMPANY_EMAIL}`} className="text-[#00B4B4] hover:underline">{COMPANY_EMAIL}</a> of any unauthorised access or security breach.</li>
            </ul>
            <p>Each workspace is tied to one Organisation. Sharing accounts across organisations is prohibited.</p>
          </Section>

          <Section title="4. Data Ownership">
            <p><strong className="text-white">Your data belongs to you.</strong> All employee data, payroll records, documents, and other content you upload or generate through the Service ("Customer Data") remains the sole property of your Organisation.</p>
            <p>{COMPANY_NAME} does not sell, rent, or share Customer Data with third parties for commercial purposes. We access Customer Data only as necessary to provide and improve the Service, or as required by law.</p>
            <p>Upon termination of your subscription, you may export your Customer Data within 30 days. After this period, {COMPANY_NAME} reserves the right to delete Customer Data from its systems.</p>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable Egyptian or international law or regulation.</li>
              <li>Process data of individuals without a lawful basis under the Egyptian Personal Data Protection Law (PDPL) or applicable regulations.</li>
              <li>Upload malicious code, viruses, or any software intended to harm the Service or other users.</li>
              <li>Attempt to gain unauthorised access to any part of the Service or its infrastructure.</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
              <li>Resell or sublicense access to the Service without written permission from {COMPANY_NAME}.</li>
            </ul>
          </Section>

          <Section title="6. Payment & Subscription">
            <p>Access to the Service requires a valid subscription. Subscription fees are billed in advance on a monthly or annual basis as agreed during sign-up.</p>
            <ul>
              <li>All fees are quoted in Egyptian Pounds (EGP) unless otherwise specified.</li>
              <li>Fees are non-refundable except as required by applicable law or as expressly stated in your agreement.</li>
              <li>Failure to pay may result in suspension of access after a 7-day grace period.</li>
              <li>{COMPANY_NAME} reserves the right to adjust pricing with 30 days' written notice.</li>
            </ul>
          </Section>

          <Section title="7. Service Availability">
            <p>{COMPANY_NAME} targets a Service uptime of 99.9% measured monthly, excluding scheduled maintenance windows. Scheduled maintenance will be communicated at least 48 hours in advance.</p>
            <p>{COMPANY_NAME} is not liable for outages caused by third-party infrastructure providers, force majeure events, or actions outside our reasonable control.</p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>The Service, including its software, design, trademarks, and content (excluding Customer Data), is the intellectual property of {COMPANY_NAME} and is protected under Egyptian and international intellectual property laws.</p>
            <p>Nothing in these Terms transfers any intellectual property rights to you. You are granted a limited, non-exclusive, non-transferable licence to use the Service solely as permitted by these Terms and your subscription plan.</p>
          </Section>

          <Section title="9. Confidentiality">
            <p>Each party agrees to keep confidential any non-public information received from the other party that is designated as confidential or that reasonably should be understood to be confidential. This obligation survives termination of these Terms for a period of three (3) years.</p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>To the maximum extent permitted by Egyptian law, {COMPANY_NAME}'s total liability to your Organisation for any claim arising under or related to these Terms shall not exceed the fees paid by your Organisation in the three (3) months preceding the event giving rise to the claim.</p>
            <p>{COMPANY_NAME} is not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.</p>
          </Section>

          <Section title="11. Termination">
            <p>Either party may terminate the subscription at the end of the current billing period by providing written notice. {COMPANY_NAME} may terminate or suspend access immediately if:</p>
            <ul>
              <li>You breach these Terms and fail to remedy the breach within 14 days of written notice.</li>
              <li>You engage in fraudulent or illegal activity.</li>
              <li>Payment obligations are not met.</li>
            </ul>
            <p>Upon termination, your right to access the Service ceases immediately. Data export rights as described in Section 4 apply.</p>
          </Section>

          <Section title="12. Governing Law & Dispute Resolution">
            <p>These Terms are governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts of Cairo, Egypt.</p>
            <p>Before initiating legal proceedings, both parties agree to attempt in good faith to resolve disputes through direct negotiation for a period of 30 days.</p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>{COMPANY_NAME} may update these Terms from time to time. We will notify you of material changes via email or an in-platform notice at least 14 days before the changes take effect. Continued use of the Service after that date constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section title="14. Contact">
            <p>For questions about these Terms, please contact us at:</p>
            <p>
              <strong className="text-white">{COMPANY_NAME}</strong><br />
              Cairo, Egypt<br />
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-[#00B4B4] hover:underline">{COMPANY_EMAIL}</a>
            </p>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <p>© {new Date().getFullYear()} HR Dock. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#00B4B4] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#00B4B4] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
