import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy — HR Dock",
  description: "HR Dock Privacy Policy — how we collect, use, and protect your data",
};

const EFFECTIVE_DATE = "3 September 2026";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Effective date: {EFFECTIVE_DATE}</p>
          <p className="text-white/40 text-sm mt-1">HR Dock is committed to protecting the privacy of the organisations and individuals who use our platform.</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/70 leading-relaxed">

          <Section title="1. Who We Are">
            <p>HR Dock (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an HR management platform built for organisations operating in Egypt. The legal service provider for each customer is identified in that customer&apos;s signed order or service agreement.</p>
            <p>For privacy-related enquiries, use the contact form on our website and identify the request as a privacy enquiry.</p>
          </Section>

          <Section title="2. Definitions">
            <ul>
              <li><strong className="text-white">Account Data:</strong> Information you provide to create and manage your HR Dock workspace (company name, admin name, email, billing details).</li>
              <li><strong className="text-white">Employee Data:</strong> Personal data about your employees that you upload or generate through the platform (names, national IDs, salaries, attendance records, leave balances, performance data, etc.).</li>
              <li><strong className="text-white">Usage Data:</strong> Technical data about how you interact with the platform (page visits, feature usage, device info, IP address, browser type).</li>
              <li><strong className="text-white">Controller:</strong> The Organisation that determines the purposes and means of processing Employee Data — that&apos;s <strong className="text-white">you</strong>, not HR Dock.</li>
              <li><strong className="text-white">Processor:</strong> HR Dock acts as a data processor on your behalf for Employee Data.</li>
            </ul>
          </Section>

          <Section title="3. Data We Collect">
            <p><strong className="text-white">3.1 Account & Billing Data</strong></p>
            <p>When you register or subscribe, we may collect company name, administrator name, work email address, phone number, billing address, and subscription records. Payment details, if online payments are introduced, will be handled under the payment provider disclosures shown at that time.</p>

            <p><strong className="text-white">3.2 Employee Data (on your behalf)</strong></p>
            <p>As the data controller, you are responsible for the Employee Data you enter into HR Dock. This may include: full names, national ID numbers, dates of birth, job titles, departments, salary and compensation details, attendance and leave records, performance evaluations, disciplinary records, benefit enrolments, and contract documents.</p>
            <p>We process this data only on your documented instructions.</p>

            <p><strong className="text-white">3.3 Usage & Technical Data</strong></p>
            <p>We automatically collect: IP addresses, browser and device information, pages visited, features used, session durations, and error logs. This helps us maintain platform stability and improve the Service.</p>

            <p><strong className="text-white">3.4 Communications Data</strong></p>
            <p>If you contact our support team, we retain those communications to resolve your enquiry and improve our service quality.</p>
          </Section>

          <Section title="4. How We Use Your Data">
            <p>We use collected data to:</p>
            <ul>
              <li>Provide, maintain, and improve the HR Dock platform.</li>
              <li>Process payroll calculations and Egyptian NOSS & tax compliance on your behalf.</li>
              <li>Send service-related notifications (downtime alerts, security notices, billing reminders).</li>
              <li>Respond to support requests and troubleshoot issues.</li>
              <li>Detect and prevent fraud, security breaches, and abuse.</li>
              <li>Comply with legal obligations under Egyptian law.</li>
              <li>Send product updates and marketing communications — only with your consent, and you may opt out at any time.</li>
            </ul>
            <p>We do <strong className="text-white">not</strong> use Employee Data for marketing, profiling for our own benefit, or any purpose outside providing the Service to you.</p>
          </Section>

          <Section title="5. Employee Data — Special Obligations">
            <p>HR Dock processes Employee Data as a <strong className="text-white">data processor</strong> under your instructions as the data controller. This means:</p>
            <ul>
              <li>You are responsible for having a lawful basis (e.g. employment contract, legal obligation) to process your employees&apos; personal data.</li>
              <li>You are responsible for informing your employees that their data is processed on the HR Dock platform.</li>
              <li>HR Dock will assist you in responding to data subject requests (access, correction, deletion) within the platform.</li>
              <li>We will notify affected customers of a qualifying personal data breach as required by applicable law and the relevant customer agreement.</li>
            </ul>
            <p>Certain categories of Employee Data may be considered sensitive (e.g. health-related leave, disciplinary records). You must ensure you have the appropriate legal basis before entering such data into the platform.</p>
          </Section>

          <Section title="6. Data Storage & Security">
            <p>Data is processed using managed cloud hosting and database providers. Hosting providers and regions may change as the Service evolves, subject to applicable contractual and legal safeguards. Current sub-processor information is available to customers on request.</p>
            <ul>
              <li>Encrypted HTTPS connections for data in transit.</li>
              <li>Role-based access controls and tenant-level data isolation.</li>
              <li>Restricted administrative access and security logging.</li>
              <li>Managed backups and recovery procedures appropriate to the subscribed service.</li>
            </ul>
            <p>Despite these measures, no system is completely secure. We encourage you to use strong passwords and enable MFA.</p>
          </Section>

          <Section title="7. Data Retention">
            <ul>
              <li><strong className="text-white">Active accounts:</strong> Data is retained for the duration of your subscription.</li>
              <li><strong className="text-white">After termination:</strong> Export and deletion periods follow the signed customer agreement, applicable law, and technically necessary backup-retention cycles.</li>
              <li><strong className="text-white">Business records:</strong> Retained for the period required by applicable tax, accounting, and legal obligations.</li>
              <li><strong className="text-white">Security and usage logs:</strong> Retained only as long as reasonably necessary for security, support, and service operation.</li>
            </ul>
          </Section>

          <Section title="8. Sharing & Third Parties">
            <p>We do not sell your data. We share data only with:</p>
            <ul>
              <li><strong className="text-white">Sub-processors:</strong> Third-party services we use to operate the platform (cloud hosting, payment processing, error monitoring, email delivery). All sub-processors are bound by data processing agreements and provide equivalent data protection guarantees.</li>
              <li><strong className="text-white">Legal authorities:</strong> When required by Egyptian law, court order, or to protect HR Dock&apos;s legal rights.</li>
              <li><strong className="text-white">Business transfers:</strong> In the event of a merger or acquisition, your data may be transferred. We will notify you in advance and you retain the right to export your data.</li>
            </ul>
          </Section>

          <Section title="9. Your Rights">
            <p>Under the Egyptian PDPL and applicable regulations, you and your employees have the following rights regarding personal data:</p>
            <ul>
              <li><strong className="text-white">Access:</strong> Request a copy of personal data we hold about you.</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your data (subject to legal retention obligations).</li>
              <li><strong className="text-white">Portability:</strong> Export your data in a machine-readable format (CSV/Excel) at any time from within the platform.</li>
              <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interests.</li>
              <li><strong className="text-white">Withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
            </ul>
            <p>To exercise any of these rights, use the contact form on our website and identify the request as a privacy enquiry. We will respond within the period required by applicable law.</p>
          </Section>

          <Section title="10. Cookies">
            <p>HR Dock uses the following cookies:</p>
            <ul>
              <li><strong className="text-white">Essential cookies:</strong> Required for authentication and session management. Cannot be disabled.</li>
              <li><strong className="text-white">Optional cookies:</strong> If analytics or marketing cookies are introduced, the website will provide an appropriate notice and consent choices before they are used where required.</li>
            </ul>
          </Section>

          <Section title="11. Children's Data">
            <p>The HR Dock platform is intended for use by businesses and is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately.</p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes via email or in-platform notice at least 14 days before they take effect. The updated policy will be posted on this page with the revised effective date.</p>
          </Section>

          <Section title="13. Contact Us">
            <p>For any privacy-related questions, requests, or concerns:</p>
            <p>
              <strong className="text-white">HR Dock — Data Protection</strong><br />
              Cairo, Egypt<br />
              <Link href="/#contact" className="text-[#00B4B4] hover:underline">Contact HR Dock</Link>
            </p>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <p>© {new Date().getFullYear()} HR Dock. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#00B4B4] transition-colors">Terms & Conditions</Link>
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
