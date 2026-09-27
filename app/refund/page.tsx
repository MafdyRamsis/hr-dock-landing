import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section, SellerBlock } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — HR Dock",
  description: "HR Dock refund, cancellation and plan-change policy",
  alternates: { canonical: "/refund" },
};

const english = (
  <>
    <Section title="1. Scope">
      <p>This policy applies to every HR Dock subscription payment, whether made online by card or e-wallet through our payment provider Paymob, or by bank transfer. It forms part of our <Link href="/terms" className="text-[#00B4B4] hover:underline">Terms &amp; Conditions</Link> and follows Egyptian Consumer Protection Law No. 181 of 2018 and the rules of the Consumer Protection Agency. You accept it before completing any payment.</p>
    </Section>
    <Section title="2. 14-day refund on your first payment">
      <p>If HR Dock is not right for you, you may request a <strong className="text-white">full refund of your first subscription invoice within 14 days</strong> of the payment date. No reason is required.</p>
    </Section>
    <Section title="3. Later invoices and renewals">
      <ul>
        <li>Invoices after your first one are not refundable once their billing period has started.</li>
        <li>Exceptions: where the law requires a refund, or where the Service was unavailable or materially not as described for a significant part of the period. In those cases we refund the affected part of the period on a pro-rata basis.</li>
      </ul>
    </Section>
    <Section title="4. Cancellation">
      <p>You can cancel at any time by contacting us in writing. Cancellation takes effect at the end of the current billing period, no further invoices are issued, and you keep access until the period ends. You can export your data for 30 days after that, as described in our Terms.</p>
    </Section>
    <Section title="5. Changing your plan (exchange)">
      <p>You can move to a different module or change your headcount at any time. We send you an updated quotation; once you approve it, the difference is reflected in your next invoice. Amounts already paid are not converted to cash.</p>
    </Section>
    <Section title="6. How to request a refund">
      <p>Email us with your company name and invoice number. We reply within 7 days. If we cannot accept a request, we explain the reasons in writing.</p>
    </Section>
    <Section title="7. How refunds are paid">
      <ul>
        <li>Refunds are made only to the same card or payment method used for the original payment, through Paymob. We do not refund in cash or to a different account.</li>
        <li>We refund the full amount you paid; payment-processing fees are not deducted.</li>
        <li>After we approve a refund, your bank usually shows it within 7–14 working days, depending on the issuing bank.</li>
      </ul>
    </Section>
    <Section title="8. Contact">
      <SellerBlock />
    </Section>
  </>
);

const arabic = (
  <>
    <Section title="1. نطاق السياسة">
      <p>تسري هذه السياسة على جميع مدفوعات اشتراك HR Dock، سواء تمت إلكترونيًا بالبطاقة أو المحفظة الإلكترونية عبر مزوّد خدمة الدفع Paymob، أو بالتحويل البنكي. وهي جزء من <Link href="/terms#ar" className="text-[#00B4B4] hover:underline">الشروط والأحكام</Link>، وتلتزم بقانون حماية المستهلك رقم 181 لسنة 2018 وضوابط جهاز حماية المستهلك. ويوافق العميل عليها قبل إتمام أي عملية دفع.</p>
    </Section>
    <Section title="2. استرداد كامل خلال 14 يومًا من أول دفعة">
      <p>إذا لم تناسبك الخدمة، يحق لك طلب <strong className="text-white">استرداد كامل قيمة أول فاتورة اشتراك خلال 14 يومًا</strong> من تاريخ الدفع، دون الحاجة لذكر أسباب.</p>
    </Section>
    <Section title="3. الفواتير اللاحقة والتجديد">
      <ul>
        <li>لا تُسترد الفواتير التالية لأول فاتورة بعد بدء فترة الفوترة الخاصة بها.</li>
        <li>يُستثنى من ذلك ما يوجب القانون رده، أو إذا توقفت الخدمة أو اختلفت جوهريًا عن وصفها لجزء كبير من الفترة؛ وفي هذه الحالة نرد قيمة الجزء المتأثر من الفترة بشكل نسبي.</li>
      </ul>
    </Section>
    <Section title="4. إلغاء الاشتراك">
      <p>يمكنك إلغاء الاشتراك في أي وقت بإخطار كتابي. يسري الإلغاء في نهاية فترة الفوترة الحالية، ولا تُصدر فواتير جديدة، وتظل الخدمة متاحة لك حتى نهاية الفترة. ويمكنك تصدير بياناتك خلال 30 يومًا بعد ذلك وفقًا للشروط والأحكام.</p>
    </Section>
    <Section title="5. تغيير الباقة (الاستبدال)">
      <p>يمكنك الانتقال إلى وحدة أخرى أو تعديل عدد الموظفين في أي وقت. نرسل لك عرض سعر محدّثًا، وبعد اعتماده يظهر الفرق في الفاتورة التالية. ولا تتحول المبالغ المدفوعة إلى نقد.</p>
    </Section>
    <Section title="6. طريقة طلب الاسترداد">
      <p>راسلنا عبر البريد الإلكتروني باسم الشركة ورقم الفاتورة، وسنرد خلال 7 أيام. وفي حال تعذّر قبول الطلب، نوضح الأسباب كتابيًا.</p>
    </Section>
    <Section title="7. طريقة رد المبالغ">
      <ul>
        <li>يتم الرد فقط على نفس البطاقة أو وسيلة الدفع المستخدمة في العملية الأصلية وعبر Paymob، ولا يتم الرد نقدًا أو إلى حساب آخر.</li>
        <li>نرد كامل المبلغ المدفوع دون خصم رسوم معالجة الدفع.</li>
        <li>بعد اعتماد الاسترداد، يظهر المبلغ عادة خلال 7 إلى 14 يوم عمل حسب البنك المُصدر للبطاقة.</li>
      </ul>
    </Section>
    <Section title="8. التواصل">
      <SellerBlock ar />
    </Section>
  </>
);

export default function RefundPage() {
  return <LegalPage titleEn="Refund & Cancellation Policy" titleAr="سياسة الاسترداد والإلغاء والاستبدال"
    effective="27 September 2026" effectiveAr="27 سبتمبر 2026" english={english} arabic={arabic} />;
}
