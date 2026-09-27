import type { Metadata } from "next";
import LegalPage, { Section, SellerBlock } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — HR Dock",
  description: "HR Dock Privacy Policy — how we collect, use, and protect your data",
  alternates: { canonical: "/privacy" },
};

const W = ({ children }: { children: React.ReactNode }) => <strong className="text-white">{children}</strong>;

const english = (
  <>
    <Section title="1. Who We Are">
      <p>HR Dock (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an HR management platform built for organisations operating in Egypt, provided by:</p>
      <SellerBlock />
      <p>For privacy-related enquiries, email us and identify the request as a privacy enquiry.</p>
    </Section>

    <Section title="2. Definitions">
      <ul>
        <li><W>Account Data:</W> Information you provide to create and manage your HR Dock workspace (company name, admin name, email, billing details).</li>
        <li><W>Employee Data:</W> Personal data about your employees that you upload or generate through the platform (names, national IDs, salaries, attendance records, leave balances, performance data, etc.).</li>
        <li><W>Usage Data:</W> Technical data about how you interact with the platform (page visits, feature usage, device info, IP address, browser type).</li>
        <li><W>Controller:</W> The Organisation that determines the purposes and means of processing Employee Data — that&apos;s <W>you</W>, not HR Dock.</li>
        <li><W>Processor:</W> HR Dock acts as a data processor on your behalf for Employee Data.</li>
      </ul>
    </Section>

    <Section title="3. Data We Collect">
      <p><W>3.1 Account, Billing & Payment Data</W></p>
      <p>When you register or subscribe, we collect company name, administrator name, work email address, phone number, billing address, invoices and payment records.</p>
      <p>Online payments are processed by our licensed payment provider <W>Paymob</W> (Accept for Technology and Electronic Payment Services). Card details are entered only on Paymob&apos;s secure page; HR Dock never receives or stores full card numbers. We receive only the payment result, the transaction reference, the card brand and the last four digits, which we keep with the invoice. We share with Paymob only the details needed to process and verify the payment (payer name, email, phone and invoice amount).</p>

      <p><W>3.2 Employee Data (on your behalf)</W></p>
      <p>As the data controller, you are responsible for the Employee Data you enter into HR Dock. This may include: full names, national ID numbers, dates of birth, job titles, departments, salary and compensation details, attendance and leave records, performance evaluations, disciplinary records, benefit enrolments, and contract documents.</p>
      <p>We process this data only on your documented instructions.</p>

      <p><W>3.3 Usage & Technical Data</W></p>
      <p>We automatically collect: IP addresses, browser and device information, pages visited, features used, session durations, and error logs. This helps us maintain platform stability and improve the Service.</p>

      <p><W>3.4 Communications Data</W></p>
      <p>If you contact our support team, we retain those communications to resolve your enquiry and improve our service quality.</p>

      <p><W>3.5 Mobile App Data</W></p>
      <p>The HR Dock mobile app lets employees and managers use the platform from a phone. In addition to the data described above, the app handles the following:</p>
      <ul>
        <li><W>Location (only at clock-in and clock-out):</W> When an employee clocks in or out, the app asks for permission to read the device&apos;s location once, converts it to a readable place name using the device&apos;s operating-system location services, and sends the coordinates and place name to HR Dock, where they are stored with that attendance record and made available to the employer. The app does not track location in the background or between clock-in and clock-out events. If location permission is declined, the employee can still use the rest of the app.</li>
        <li><W>Push notification token:</W> A device token is stored against the user account so that notifications (for example leave decisions and announcements) can be delivered. It is removed when the user signs out.</li>
        <li><W>Biometric unlock:</W> If the user turns it on, fingerprint or face unlock is performed by the device&apos;s operating system. HR Dock does not receive, collect, or store biometric data.</li>
        <li><W>Session data:</W> A sign-in token and basic profile details are kept in the device&apos;s secure storage to keep the user signed in, and are deleted on sign-out.</li>
      </ul>
      <p>The employer remains the data controller for data processed through the mobile app. Requests to access, correct, or delete that data follow Section 9.</p>
    </Section>

    <Section title="4. How We Use Your Data">
      <p>We use collected data to:</p>
      <ul>
        <li>Provide, maintain, and improve the HR Dock platform.</li>
        <li>Process payroll calculations and Egyptian NOSS &amp; tax compliance on your behalf.</li>
        <li>Issue invoices, process payments and send payment receipts.</li>
        <li>Send service-related notifications (downtime alerts, security notices, billing reminders).</li>
        <li>Respond to support requests and troubleshoot issues.</li>
        <li>Detect and prevent fraud, security breaches, and abuse.</li>
        <li>Comply with legal obligations under Egyptian law.</li>
        <li>Send product updates and marketing communications — only with your consent, and you may opt out at any time.</li>
      </ul>
      <p>We do <W>not</W> use Employee Data for marketing, profiling for our own benefit, or any purpose outside providing the Service to you.</p>
    </Section>

    <Section title="5. Employee Data — Special Obligations">
      <p>HR Dock processes Employee Data as a <W>data processor</W> under your instructions as the data controller. This means:</p>
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
        <li><W>Active accounts:</W> Data is retained for the duration of your subscription.</li>
        <li><W>After termination:</W> Export and deletion periods follow the signed customer agreement, applicable law, and technically necessary backup-retention cycles.</li>
        <li><W>Invoices and payment records:</W> Retained for at least 18 months from the transaction and for as long as tax, accounting and payment-network rules require.</li>
        <li><W>Security and usage logs:</W> Retained only as long as reasonably necessary for security, support, and service operation.</li>
      </ul>
    </Section>

    <Section title="8. Sharing & Third Parties">
      <p>We do not sell your data. We share data only with:</p>
      <ul>
        <li><W>Sub-processors:</W> Third-party services we use to operate the platform — cloud hosting, payment processing (Paymob), error monitoring and email delivery. All sub-processors are bound by data processing agreements and provide equivalent data protection guarantees.</li>
        <li><W>Legal authorities:</W> When required by Egyptian law, court order, the Central Bank of Egypt or card networks, or to protect HR Dock&apos;s legal rights.</li>
        <li><W>Business transfers:</W> In the event of a merger or acquisition, your data may be transferred. We will notify you in advance and you retain the right to export your data.</li>
      </ul>
    </Section>

    <Section title="9. Your Rights">
      <p>Under the Egyptian Personal Data Protection Law No. 151 of 2020 and applicable regulations, you and your employees have the following rights regarding personal data:</p>
      <ul>
        <li><W>Access:</W> Request a copy of personal data we hold about you.</li>
        <li><W>Correction:</W> Request correction of inaccurate data.</li>
        <li><W>Deletion:</W> Request deletion of your data (subject to legal retention obligations).</li>
        <li><W>Portability:</W> Export your data in a machine-readable format (CSV/Excel) at any time from within the platform.</li>
        <li><W>Objection:</W> Object to processing based on legitimate interests.</li>
        <li><W>Withdraw consent:</W> Where processing is based on consent, you may withdraw it at any time.</li>
      </ul>
      <p>To exercise any of these rights, email us and identify the request as a privacy enquiry. We will respond within the period required by applicable law.</p>
    </Section>

    <Section title="10. Cookies">
      <ul>
        <li><W>Essential cookies:</W> Required for authentication and session management. Cannot be disabled.</li>
        <li><W>Optional cookies:</W> If analytics or marketing cookies are introduced, the website will provide an appropriate notice and consent choices before they are used where required.</li>
      </ul>
    </Section>

    <Section title="11. Children's Data">
      <p>The HR Dock platform is intended for use by businesses and is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately.</p>
    </Section>

    <Section title="12. Changes to This Policy">
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes via email or in-platform notice at least 14 days before they take effect. The updated policy will be posted on this page with the revised effective date.</p>
    </Section>

    <Section title="13. Contact Us">
      <SellerBlock />
    </Section>
  </>
);

const arabic = (
  <>
    <Section title="1. من نحن">
      <p>HR Dock منصة لإدارة الموارد البشرية مصممة للمنشآت العاملة في مصر، وتقدمها:</p>
      <SellerBlock ar />
      <p>للاستفسارات المتعلقة بالخصوصية، راسلنا عبر البريد الإلكتروني مع توضيح أن الطلب متعلق بالخصوصية.</p>
    </Section>

    <Section title="2. التعريفات">
      <ul>
        <li><W>بيانات الحساب:</W> البيانات التي تقدمها لإنشاء مساحة العمل وإدارتها (اسم الشركة، اسم المسؤول، البريد الإلكتروني، بيانات الفوترة).</li>
        <li><W>بيانات الموظفين:</W> البيانات الشخصية لموظفيك التي ترفعها أو تنشئها عبر المنصة (الأسماء، الأرقام القومية، الرواتب، سجلات الحضور، أرصدة الإجازات، بيانات الأداء، وغيرها).</li>
        <li><W>بيانات الاستخدام:</W> البيانات الفنية عن طريقة استخدامك للمنصة (الصفحات، المزايا المستخدمة، بيانات الجهاز، عنوان IP، نوع المتصفح).</li>
        <li><W>المتحكم في البيانات:</W> المنشأة التي تحدد أغراض ووسائل معالجة بيانات الموظفين — أي <W>أنت</W> وليس HR Dock.</li>
        <li><W>المعالج:</W> تعمل HR Dock كمعالج للبيانات نيابة عنك فيما يخص بيانات الموظفين.</li>
      </ul>
    </Section>

    <Section title="3. البيانات التي نجمعها">
      <p><W>3.1 بيانات الحساب والفوترة والدفع</W></p>
      <p>عند التسجيل أو الاشتراك نجمع اسم الشركة واسم المسؤول والبريد الإلكتروني للعمل ورقم الهاتف وعنوان الفوترة والفواتير وسجلات الدفع.</p>
      <p>تتم معالجة المدفوعات الإلكترونية عبر مزوّد خدمة الدفع المرخّص <W>Paymob</W> (شركة اكسبت للتكنولوجيا وخدمات الدفع الإلكتروني). تُدخل بيانات البطاقة فقط في صفحة الدفع الآمنة الخاصة بـ Paymob، ولا تستلم HR Dock أرقام البطاقات كاملة ولا تحتفظ بها. ونستلم فقط نتيجة العملية ورقمها المرجعي ونوع البطاقة وآخر أربعة أرقام منها، ونحفظها مع الفاتورة. ولا نشارك مع Paymob إلا البيانات اللازمة لمعالجة الدفع والتحقق منه (اسم الدافع وبريده الإلكتروني وهاتفه وقيمة الفاتورة).</p>

      <p><W>3.2 بيانات الموظفين (نيابة عنك)</W></p>
      <p>بصفتك المتحكم في البيانات، تكون مسؤولًا عن بيانات الموظفين التي تدخلها، وقد تشمل: الأسماء الكاملة، والأرقام القومية، وتواريخ الميلاد، والمسميات الوظيفية، والإدارات، وبيانات الرواتب والتعويضات، وسجلات الحضور والإجازات، وتقييمات الأداء، والجزاءات، والمزايا، ومستندات العقود.</p>
      <p>نعالج هذه البيانات وفقًا لتعليماتك الموثقة فقط.</p>

      <p><W>3.3 بيانات الاستخدام والبيانات الفنية</W></p>
      <p>نجمع تلقائيًا: عناوين IP، وبيانات المتصفح والجهاز، والصفحات التي تمت زيارتها، والمزايا المستخدمة، ومدة الجلسات، وسجلات الأخطاء، وذلك للحفاظ على استقرار المنصة وتحسين الخدمة.</p>

      <p><W>3.4 بيانات المراسلات</W></p>
      <p>عند تواصلك مع فريق الدعم نحتفظ بالمراسلات لحل استفسارك وتحسين جودة الخدمة.</p>

      <p><W>3.5 بيانات تطبيق الهاتف</W></p>
      <p>يتيح تطبيق HR Dock للموظفين والمديرين استخدام المنصة من الهاتف، ويتعامل بالإضافة إلى ما سبق مع ما يلي:</p>
      <ul>
        <li><W>الموقع (عند تسجيل الحضور والانصراف فقط):</W> يطلب التطبيق إذنًا لقراءة موقع الجهاز مرة واحدة عند الحضور أو الانصراف، ويحوّله إلى اسم مكان مقروء عبر خدمات الموقع في نظام تشغيل الجهاز، ثم يرسل الإحداثيات واسم المكان إلى HR Dock لتُحفظ مع سجل الحضور وتكون متاحة لصاحب العمل. لا يتتبع التطبيق الموقع في الخلفية أو بين الحضور والانصراف، ويمكن استخدام باقي التطبيق عند رفض الإذن.</li>
        <li><W>رمز الإشعارات:</W> يُحفظ رمز الجهاز مع حساب المستخدم لتوصيل الإشعارات (مثل قرارات الإجازات والإعلانات)، ويُحذف عند تسجيل الخروج.</li>
        <li><W>فتح التطبيق بالبصمة:</W> عند تفعيله، يتم التحقق بالبصمة أو الوجه عبر نظام تشغيل الجهاز، ولا تستلم HR Dock أي بيانات بيومترية ولا تجمعها ولا تحفظها.</li>
        <li><W>بيانات الجلسة:</W> يُحفظ رمز الدخول وبيانات الملف الأساسية في التخزين الآمن للجهاز لإبقاء المستخدم مسجلًا، وتُحذف عند تسجيل الخروج.</li>
      </ul>
      <p>يظل صاحب العمل هو المتحكم في البيانات المعالجة عبر التطبيق، وتخضع طلبات الاطلاع أو التصحيح أو الحذف للبند 9.</p>
    </Section>

    <Section title="4. كيف نستخدم بياناتك">
      <ul>
        <li>تقديم منصة HR Dock وصيانتها وتحسينها.</li>
        <li>إجراء حسابات الرواتب والالتزام بقواعد التأمينات الاجتماعية والضرائب المصرية نيابة عنك.</li>
        <li>إصدار الفواتير ومعالجة المدفوعات وإرسال إيصالات الدفع.</li>
        <li>إرسال إشعارات الخدمة (تنبيهات الانقطاع، والإشعارات الأمنية، وتذكيرات الفواتير).</li>
        <li>الرد على طلبات الدعم وحل المشكلات.</li>
        <li>اكتشاف الاحتيال والاختراقات وإساءة الاستخدام ومنعها.</li>
        <li>الالتزام بالمتطلبات القانونية وفقًا للقانون المصري.</li>
        <li>إرسال تحديثات المنتج والرسائل التسويقية بموافقتك فقط، ويمكنك إلغاء الاشتراك فيها في أي وقت.</li>
      </ul>
      <p><W>لا</W> نستخدم بيانات الموظفين في التسويق أو التنميط لمصلحتنا أو لأي غرض خارج تقديم الخدمة لك.</p>
    </Section>

    <Section title="5. بيانات الموظفين — التزامات خاصة">
      <p>تعالج HR Dock بيانات الموظفين بصفتها <W>معالجًا للبيانات</W> وفقًا لتعليماتك بصفتك المتحكم فيها، ويعني ذلك:</p>
      <ul>
        <li>تكون مسؤولًا عن وجود سند قانوني (مثل عقد العمل أو التزام قانوني) لمعالجة البيانات الشخصية لموظفيك.</li>
        <li>تكون مسؤولًا عن إبلاغ موظفيك بأن بياناتهم تتم معالجتها على منصة HR Dock.</li>
        <li>تساعدك HR Dock في الاستجابة لطلبات أصحاب البيانات (الاطلاع والتصحيح والحذف) من داخل المنصة.</li>
        <li>نخطر العملاء المتأثرين بأي خرق للبيانات الشخصية وفقًا للقانون واتفاقية العميل.</li>
      </ul>
      <p>قد تُعد بعض فئات بيانات الموظفين حساسة (مثل الإجازات المرضية والجزاءات)، ويجب التأكد من وجود السند القانوني المناسب قبل إدخالها.</p>
    </Section>

    <Section title="6. تخزين البيانات وأمنها">
      <p>تتم معالجة البيانات عبر مزودي استضافة سحابية وقواعد بيانات مُدارة، وقد يتغير المزودون أو المناطق مع تطور الخدمة وفق الضمانات التعاقدية والقانونية. وتتاح معلومات المعالجين الفرعيين الحاليين للعملاء عند الطلب.</p>
      <ul>
        <li>اتصالات HTTPS مشفرة لنقل البيانات.</li>
        <li>صلاحيات وصول حسب الدور وعزل بيانات كل منشأة.</li>
        <li>تقييد الوصول الإداري وتسجيل الأحداث الأمنية.</li>
        <li>نسخ احتياطية وإجراءات استعادة مُدارة تناسب الخدمة المشترك فيها.</li>
      </ul>
      <p>ورغم هذه الإجراءات لا يوجد نظام آمن تمامًا، لذا ننصح باستخدام كلمات مرور قوية وتفعيل التحقق بخطوتين.</p>
    </Section>

    <Section title="7. الاحتفاظ بالبيانات">
      <ul>
        <li><W>الحسابات النشطة:</W> تُحفظ البيانات طوال مدة الاشتراك.</li>
        <li><W>بعد الإنهاء:</W> تخضع مدد التصدير والحذف لاتفاقية العميل والقانون ودورات النسخ الاحتياطي اللازمة فنيًا.</li>
        <li><W>الفواتير وسجلات الدفع:</W> تُحفظ لمدة 18 شهرًا على الأقل من تاريخ العملية، ولأي مدة أطول تتطلبها قواعد الضرائب والمحاسبة وشبكات الدفع.</li>
        <li><W>سجلات الأمان والاستخدام:</W> تُحفظ فقط للمدة اللازمة بشكل معقول للأمان والدعم وتشغيل الخدمة.</li>
      </ul>
    </Section>

    <Section title="8. المشاركة مع الغير">
      <p>لا نبيع بياناتك، ونشاركها فقط مع:</p>
      <ul>
        <li><W>المعالجين الفرعيين:</W> خدمات نستخدمها لتشغيل المنصة — الاستضافة السحابية، ومعالجة المدفوعات (Paymob)، ومراقبة الأخطاء، وإرسال البريد الإلكتروني. ويلتزم جميعهم باتفاقيات معالجة بيانات توفر ضمانات حماية مماثلة.</li>
        <li><W>الجهات القانونية:</W> عندما يتطلب ذلك القانون المصري أو أمر قضائي أو البنك المركزي المصري أو شبكات البطاقات، أو لحماية حقوق HR Dock القانونية.</li>
        <li><W>انتقال الأعمال:</W> في حالة الاندماج أو الاستحواذ قد تنتقل بياناتك، وسنخطرك مسبقًا مع احتفاظك بحق تصدير بياناتك.</li>
      </ul>
    </Section>

    <Section title="9. حقوقك">
      <p>وفقًا لقانون حماية البيانات الشخصية رقم 151 لسنة 2020 واللوائح السارية، لك ولموظفيك الحقوق التالية:</p>
      <ul>
        <li><W>الاطلاع:</W> طلب نسخة من بياناتك الشخصية لدينا.</li>
        <li><W>التصحيح:</W> طلب تصحيح البيانات غير الدقيقة.</li>
        <li><W>الحذف:</W> طلب حذف بياناتك (مع مراعاة التزامات الاحتفاظ القانونية).</li>
        <li><W>قابلية النقل:</W> تصدير بياناتك بصيغة قابلة للقراءة آليًا (CSV/Excel) في أي وقت من داخل المنصة.</li>
        <li><W>الاعتراض:</W> الاعتراض على المعالجة القائمة على المصلحة المشروعة.</li>
        <li><W>سحب الموافقة:</W> سحب موافقتك في أي وقت إذا كانت المعالجة قائمة عليها.</li>
      </ul>
      <p>لممارسة أي من هذه الحقوق، راسلنا عبر البريد الإلكتروني مع توضيح أن الطلب متعلق بالخصوصية، وسنرد خلال المدة التي يحددها القانون.</p>
    </Section>

    <Section title="10. ملفات تعريف الارتباط (Cookies)">
      <ul>
        <li><W>ملفات أساسية:</W> لازمة للدخول وإدارة الجلسة ولا يمكن تعطيلها.</li>
        <li><W>ملفات اختيارية:</W> إذا أُضيفت ملفات للتحليل أو التسويق، سيعرض الموقع إشعارًا وخيارات موافقة قبل استخدامها متى لزم ذلك.</li>
      </ul>
    </Section>

    <Section title="11. بيانات الأطفال">
      <p>منصة HR Dock موجهة للمنشآت وليست موجهة لمن هم دون 18 عامًا، ولا نجمع عن علم بيانات القُصّر. وإذا اعتقدت أننا جمعنا مثل هذه البيانات دون قصد، يرجى التواصل معنا فورًا.</p>
    </Section>

    <Section title="12. تعديل هذه السياسة">
      <p>قد نحدّث هذه السياسة من وقت لآخر، وسنخطرك بالتغييرات الجوهرية عبر البريد الإلكتروني أو داخل المنصة قبل 14 يومًا على الأقل من سريانها، مع نشر السياسة المحدثة وتاريخ السريان الجديد في هذه الصفحة.</p>
    </Section>

    <Section title="13. التواصل معنا">
      <SellerBlock ar />
    </Section>
  </>
);

export default function PrivacyPage() {
  return <LegalPage titleEn="Privacy Policy" titleAr="سياسة الخصوصية"
    effective="27 September 2026" effectiveAr="27 سبتمبر 2026" english={english} arabic={arabic} />;
}
