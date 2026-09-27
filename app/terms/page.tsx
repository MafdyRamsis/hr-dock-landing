import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section, SellerBlock } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — HR Dock",
  description: "HR Dock Terms and Conditions of Service",
  alternates: { canonical: "/terms" },
};

const COMPANY_NAME = "HR Dock";
const a = "text-[#00B4B4] hover:underline";

const english = (
  <>
    <Section title="1. Acceptance of Terms">
      <p>By accessing or using the {COMPANY_NAME} platform (&quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;), our <Link href="/refund" className={a}>Refund &amp; Cancellation Policy</Link> and our <Link href="/privacy" className={a}>Privacy Policy</Link>. If you are using the Service on behalf of a company or other legal entity (&quot;Organisation&quot;), you represent that you have the authority to bind that entity to these Terms.</p>
      <p>If you do not agree to these Terms, you must not use the Service.</p>
    </Section>

    <Section title="2. Who provides the Service">
      <p>The Service is provided and sold by:</p>
      <SellerBlock />
    </Section>

    <Section title="3. Description of Service">
      <p>{COMPANY_NAME} provides a cloud-based Human Resources management platform designed for the Egyptian market, comprising up to three modules:</p>
      <ul>
        <li><strong className="text-white">Module 1 — Payroll &amp; Attendance:</strong> Attendance tracking, leave management, shift scheduling, payroll processing with Egyptian NOSS &amp; tax compliance, loans, expenses, and reporting.</li>
        <li><strong className="text-white">Module 2 — HR Operations:</strong> All of Module 1 features, plus training, performance, onboarding, exit management, disciplinary, benefits, assets, documents, helpdesk, surveys, policies, travel, WFH, and workflows.</li>
        <li><strong className="text-white">Module 3 — Recruitment &amp; AI:</strong> All of Module 2 features, plus AI-powered recruitment pipeline, candidate screening, assessment portal, job descriptions, and talent pool management.</li>
      </ul>
      <p>The specific modules and features available to your Organisation depend on your approved offer.</p>
    </Section>

    <Section title="4. Account Registration">
      <p>To use the Service, you must create an account by providing accurate and complete information. You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your login credentials.</li>
        <li>All activity that occurs under your account.</li>
        <li>Notifying {COMPANY_NAME} promptly of any unauthorised access or security breach.</li>
      </ul>
      <p>Each workspace is tied to one Organisation. Sharing accounts across organisations is prohibited.</p>
    </Section>

    <Section title="5. Data Ownership">
      <p><strong className="text-white">Your data belongs to you.</strong> All employee data, payroll records, documents, and other content you upload or generate through the Service (&quot;Customer Data&quot;) remains the sole property of your Organisation.</p>
      <p>{COMPANY_NAME} does not sell, rent, or share Customer Data with third parties for commercial purposes. We access Customer Data only as necessary to provide and improve the Service, or as required by law.</p>
      <p>Upon termination of your subscription, you may export your Customer Data within 30 days. After this period, {COMPANY_NAME} reserves the right to delete Customer Data from its systems.</p>
    </Section>

    <Section title="6. Acceptable Use">
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Violate any applicable Egyptian or international law or regulation.</li>
        <li>Process data of individuals without a lawful basis under the Egyptian Personal Data Protection Law No. 151 of 2020 (PDPL) or applicable regulations.</li>
        <li>Upload malicious code, viruses, or any software intended to harm the Service or other users.</li>
        <li>Attempt to gain unauthorised access to any part of the Service or its infrastructure.</li>
        <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
        <li>Resell or sublicense access to the Service without written permission from {COMPANY_NAME}.</li>
      </ul>
    </Section>

    <Section title="7. Prices, Invoices & Payment">
      <ul>
        <li>{COMPANY_NAME} does not publish fixed prices. Each Organisation receives a written quotation; the offer you approve sets your fees.</li>
        <li>Invoices are issued according to the approved offer and appear in the Subscription &amp; Billing page of your workspace. Each invoice shows the amount due in numbers and in words, in Egyptian Pounds (EGP), including any applicable taxes.</li>
        <li>You may pay online by card or e-wallet through our licensed payment provider Paymob (Accept for Technology and Electronic Payment Services), or by bank transfer. The amount charged is exactly the invoice total; no surcharge is added for paying online.</li>
        <li>Card details are entered only on Paymob&apos;s secure page. {COMPANY_NAME} never receives or stores your full card number.</li>
        <li>A payment receipt is emailed to you after every successful online payment.</li>
        <li>Refunds, cancellation and plan changes follow our <Link href="/refund" className={a}>Refund &amp; Cancellation Policy</Link>, including a full refund of your first invoice within 14 days.</li>
        <li>Unpaid invoices may result in suspension of access after a 7-day grace period following the due date.</li>
        <li>{COMPANY_NAME} may revise its fees for future billing periods with 30 days&apos; written notice.</li>
      </ul>
    </Section>

    <Section title="8. Service Availability">
      <p>{COMPANY_NAME} aims to keep the Service reliably available and to communicate material planned maintenance when reasonably practicable. Any binding service-level commitment must be stated in your signed customer order or service agreement.</p>
      <p>{COMPANY_NAME} is not liable for outages caused by third-party infrastructure providers, force majeure events, or actions outside our reasonable control.</p>
    </Section>

    <Section title="9. Intellectual Property">
      <p>The Service, including its software, design, trademarks, and content (excluding Customer Data), is the intellectual property of {COMPANY_NAME} and is protected under Egyptian and international intellectual property laws.</p>
      <p>Nothing in these Terms transfers any intellectual property rights to you. You are granted a limited, non-exclusive, non-transferable licence to use the Service solely as permitted by these Terms and your approved offer.</p>
    </Section>

    <Section title="10. Confidentiality">
      <p>Each party agrees to keep confidential any non-public information received from the other party that is designated as confidential or that reasonably should be understood to be confidential. This obligation survives termination of these Terms for a period of three (3) years.</p>
    </Section>

    <Section title="11. Limitation of Liability">
      <p>To the maximum extent permitted by Egyptian law, {COMPANY_NAME}&apos;s total liability to your Organisation for any claim arising under or related to these Terms shall not exceed the fees paid by your Organisation in the three (3) months preceding the event giving rise to the claim.</p>
      <p>{COMPANY_NAME} is not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.</p>
    </Section>

    <Section title="12. Termination">
      <p>Either party may terminate the subscription at the end of the current billing period by providing written notice. {COMPANY_NAME} may terminate or suspend access immediately if:</p>
      <ul>
        <li>You breach these Terms and fail to remedy the breach within 14 days of written notice.</li>
        <li>You engage in fraudulent or illegal activity.</li>
        <li>Payment obligations are not met.</li>
      </ul>
      <p>Upon termination, your right to access the Service ceases. Data export rights as described in Section 5 apply.</p>
    </Section>

    <Section title="13. Governing Law & Dispute Resolution">
      <p>These Terms are governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts of Cairo, Egypt.</p>
      <p>Before initiating legal proceedings, both parties agree to attempt in good faith to resolve disputes through direct negotiation for a period of 30 days.</p>
    </Section>

    <Section title="14. Changes to These Terms">
      <p>{COMPANY_NAME} may update these Terms from time to time. We will notify you of material changes via email or an in-platform notice at least 14 days before the changes take effect. Continued use of the Service after that date constitutes acceptance of the updated Terms.</p>
    </Section>

    <Section title="15. Contact">
      <SellerBlock />
    </Section>
  </>
);

const arabic = (
  <>
    <Section title="1. قبول الشروط">
      <p>باستخدامك منصة HR Dock (&quot;الخدمة&quot;) فإنك توافق على الالتزام بهذه الشروط والأحكام، وبـ<Link href="/refund#ar" className={a}>سياسة الاسترداد والإلغاء</Link> و<Link href="/privacy#ar" className={a}>سياسة الخصوصية</Link>. وإذا كنت تستخدم الخدمة نيابةً عن شركة أو كيان قانوني (&quot;المنشأة&quot;)، فإنك تقر بأن لديك الصلاحية لإلزام هذا الكيان بهذه الشروط.</p>
      <p>إذا لم توافق على هذه الشروط، فلا يجوز لك استخدام الخدمة.</p>
    </Section>

    <Section title="2. مقدم الخدمة">
      <p>تُقدَّم الخدمة وتُباع من خلال:</p>
      <SellerBlock ar />
    </Section>

    <Section title="3. وصف الخدمة">
      <p>توفر HR Dock منصة سحابية لإدارة الموارد البشرية مصممة للسوق المصري، وتتكون من حتى ثلاث وحدات:</p>
      <ul>
        <li><strong className="text-white">الوحدة 1 — الرواتب والحضور:</strong> تتبع الحضور، وإدارة الإجازات، وجدولة الورديات، ومعالجة الرواتب وفقًا لقواعد التأمينات الاجتماعية والضرائب المصرية، والسلف، والمصروفات، والتقارير.</li>
        <li><strong className="text-white">الوحدة 2 — عمليات الموارد البشرية:</strong> جميع مزايا الوحدة 1، بالإضافة إلى التدريب، والأداء، والتعيين، وإنهاء الخدمة، والجزاءات، والمزايا، والعُهد، والمستندات، والدعم، والاستبيانات، والسياسات، والسفر، والعمل من المنزل، ومسارات الموافقات.</li>
        <li><strong className="text-white">الوحدة 3 — التوظيف والذكاء الاصطناعي:</strong> جميع مزايا الوحدة 2، بالإضافة إلى مسار توظيف مدعوم بالذكاء الاصطناعي، وفرز المرشحين، وبوابة التقييم، والأوصاف الوظيفية، وقاعدة المواهب.</li>
      </ul>
      <p>تتحدد الوحدات والمزايا المتاحة لمنشأتك وفقًا للعرض المعتمد.</p>
    </Section>

    <Section title="4. تسجيل الحساب">
      <p>لاستخدام الخدمة يجب إنشاء حساب ببيانات صحيحة وكاملة، وتكون مسؤولًا عن:</p>
      <ul>
        <li>الحفاظ على سرية بيانات الدخول.</li>
        <li>جميع الأنشطة التي تتم من خلال حسابك.</li>
        <li>إخطار HR Dock فورًا بأي دخول غير مصرح به أو اختراق أمني.</li>
      </ul>
      <p>كل مساحة عمل مرتبطة بمنشأة واحدة، ويُحظر مشاركة الحسابات بين المنشآت.</p>
    </Section>

    <Section title="5. ملكية البيانات">
      <p><strong className="text-white">بياناتك ملك لك.</strong> جميع بيانات الموظفين وسجلات الرواتب والمستندات وأي محتوى تقوم برفعه أو إنشائه عبر الخدمة (&quot;بيانات العميل&quot;) تظل ملكًا حصريًا لمنشأتك.</p>
      <p>لا تبيع HR Dock بيانات العميل أو تؤجرها أو تشاركها مع أي طرف ثالث لأغراض تجارية، ولا تطّلع عليها إلا بالقدر اللازم لتقديم الخدمة وتحسينها أو وفقًا لما يتطلبه القانون.</p>
      <p>عند انتهاء الاشتراك، يمكنك تصدير بياناتك خلال 30 يومًا، ويحق لـ HR Dock بعد ذلك حذفها من أنظمتها.</p>
    </Section>

    <Section title="6. الاستخدام المقبول">
      <p>تلتزم بعدم استخدام الخدمة في:</p>
      <ul>
        <li>مخالفة أي قانون أو لائحة مصرية أو دولية سارية.</li>
        <li>معالجة بيانات أي أشخاص دون سند قانوني وفقًا لقانون حماية البيانات الشخصية رقم 151 لسنة 2020 ولائحته التنفيذية.</li>
        <li>رفع أي برمجيات ضارة أو فيروسات تستهدف الإضرار بالخدمة أو بمستخدميها.</li>
        <li>محاولة الوصول غير المصرح به إلى أي جزء من الخدمة أو بنيتها التحتية.</li>
        <li>الهندسة العكسية أو فك تجميع أي جزء من الخدمة.</li>
        <li>إعادة بيع الخدمة أو منح تراخيص فرعية لها دون موافقة كتابية من HR Dock.</li>
      </ul>
    </Section>

    <Section title="7. الأسعار والفواتير والدفع">
      <ul>
        <li>لا تعلن HR Dock عن أسعار ثابتة، وتحصل كل منشأة على عرض سعر مكتوب، ويحدد العرض المعتمد قيمة الاشتراك.</li>
        <li>تُصدر الفواتير وفقًا للعرض المعتمد وتظهر في صفحة &quot;الاشتراك والفواتير&quot; داخل مساحة العمل، وتوضح كل فاتورة المبلغ المستحق بالأرقام والحروف بالجنيه المصري شاملًا الضرائب المطبقة.</li>
        <li>يمكن السداد إلكترونيًا بالبطاقة أو المحفظة الإلكترونية عبر مزوّد خدمة الدفع المرخّص Paymob (شركة اكسبت للتكنولوجيا وخدمات الدفع الإلكتروني)، أو بالتحويل البنكي. ويُخصم إجمالي الفاتورة فقط دون أي رسوم إضافية مقابل الدفع الإلكتروني.</li>
        <li>تُدخل بيانات البطاقة فقط في صفحة الدفع الآمنة الخاصة بـ Paymob، ولا تستلم HR Dock رقم البطاقة كاملًا ولا تحتفظ به.</li>
        <li>يُرسل إيصال دفع إلى بريدك الإلكتروني بعد كل عملية دفع إلكتروني ناجحة.</li>
        <li>يخضع الاسترداد والإلغاء وتغيير الباقة لـ<Link href="/refund#ar" className={a}>سياسة الاسترداد والإلغاء</Link>، بما في ذلك استرداد كامل قيمة أول فاتورة خلال 14 يومًا.</li>
        <li>قد يؤدي عدم سداد الفواتير إلى إيقاف الخدمة بعد مهلة 7 أيام من تاريخ الاستحقاق.</li>
        <li>يحق لـ HR Dock تعديل الرسوم لفترات الفوترة المستقبلية بإخطار كتابي قبل 30 يومًا.</li>
      </ul>
    </Section>

    <Section title="8. إتاحة الخدمة">
      <p>تسعى HR Dock إلى إتاحة الخدمة بشكل مستقر والإعلان عن أعمال الصيانة المخطط لها متى أمكن ذلك. وأي التزام ملزم بمستوى الخدمة يجب أن يُنص عليه في أمر الشراء أو اتفاقية الخدمة الموقعة.</p>
      <p>لا تتحمل HR Dock المسؤولية عن الانقطاعات الناتجة عن مزودي البنية التحتية من الغير أو القوة القاهرة أو أي ظروف خارجة عن إرادتها المعقولة.</p>
    </Section>

    <Section title="9. الملكية الفكرية">
      <p>الخدمة بما فيها البرمجيات والتصميم والعلامات التجارية والمحتوى (باستثناء بيانات العميل) ملكية فكرية لـ HR Dock ومحمية بموجب قوانين الملكية الفكرية المصرية والدولية.</p>
      <p>لا تنقل هذه الشروط إليك أي حقوق ملكية فكرية، وتُمنح ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام الخدمة في حدود هذه الشروط والعرض المعتمد.</p>
    </Section>

    <Section title="10. السرية">
      <p>يلتزم كل طرف بالحفاظ على سرية أي معلومات غير معلنة يتلقاها من الطرف الآخر وتكون مصنفة كسرية أو يُفهم بشكل معقول أنها سرية، ويستمر هذا الالتزام لمدة ثلاث (3) سنوات بعد انتهاء هذه الشروط.</p>
    </Section>

    <Section title="11. حدود المسؤولية">
      <p>في حدود ما يسمح به القانون المصري، لا تتجاوز المسؤولية الإجمالية لـ HR Dock تجاه منشأتك عن أي مطالبة ناشئة عن هذه الشروط قيمة الرسوم التي سددتها المنشأة خلال الأشهر الثلاثة السابقة للواقعة محل المطالبة.</p>
      <p>لا تتحمل HR Dock المسؤولية عن الأضرار غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية، بما في ذلك فوات الأرباح أو فقدان البيانات أو الفرص التجارية.</p>
    </Section>

    <Section title="12. إنهاء الاشتراك">
      <p>يجوز لأي طرف إنهاء الاشتراك في نهاية فترة الفوترة الحالية بإخطار كتابي. ويحق لـ HR Dock إيقاف الخدمة أو إنهاؤها فورًا في الحالات التالية:</p>
      <ul>
        <li>مخالفة هذه الشروط وعدم تصحيح المخالفة خلال 14 يومًا من الإخطار الكتابي.</li>
        <li>ممارسة أي نشاط احتيالي أو غير قانوني.</li>
        <li>عدم الوفاء بالتزامات السداد.</li>
      </ul>
      <p>عند الإنهاء يتوقف حقك في استخدام الخدمة، مع سريان حق تصدير البيانات الوارد في البند 5.</p>
    </Section>

    <Section title="13. القانون الواجب التطبيق وتسوية النزاعات">
      <p>تخضع هذه الشروط وتُفسر وفقًا لقوانين جمهورية مصر العربية، وتختص محاكم القاهرة وحدها بنظر أي نزاع ينشأ عنها.</p>
      <p>يتفق الطرفان قبل اللجوء للقضاء على محاولة حل النزاع وديًا بحسن نية من خلال التفاوض المباشر لمدة 30 يومًا.</p>
    </Section>

    <Section title="14. تعديل الشروط">
      <p>يجوز لـ HR Dock تحديث هذه الشروط من وقت لآخر، وسنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو داخل المنصة قبل 14 يومًا على الأقل من سريانها. ويُعد استمرارك في استخدام الخدمة بعد ذلك التاريخ قبولًا للشروط المحدثة.</p>
    </Section>

    <Section title="15. التواصل">
      <SellerBlock ar />
    </Section>
  </>
);

export default function TermsPage() {
  return <LegalPage titleEn="Terms & Conditions" titleAr="الشروط والأحكام"
    effective="27 September 2026" effectiveAr="27 سبتمبر 2026" english={english} arabic={arabic} />;
}
