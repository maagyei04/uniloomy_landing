import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | UniLoomy",
  description: "UniLoomy's Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "March 29, 2026";

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/assets/uniloomy.png" alt="UniLoomy" width={120} height={32} className="h-6 w-auto" />
          </Link>
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/30 text-[10px] font-black tracking-widest text-blue-400 uppercase mb-6">
            Legal Document
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last Updated: {lastUpdated}</p>
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            <p className="text-slate-300 leading-relaxed text-sm">
              UniLoomy Technologies Ltd (&quot;UniLoomy&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data and privacy rights. This Privacy Policy explains how we collect, use, store, and share information when you use our mobile application and website (collectively, the &quot;Service&quot;). This policy complies with Ghana&apos;s <strong>Data Protection Act, 2012 (Act 843)</strong>, the <strong>Electronic Transactions Act, 2008 (Act 772)</strong>, and applicable international data protection standards including the EU General Data Protection Regulation (GDPR) where applicable.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-slate-300">

          <Section title="1. Who We Are">
            <p><strong className="text-white">UniLoomy Technologies Ltd</strong> is a Ghanaian technology company registered under the Companies Act, 2019 (Act 992) of Ghana. Our registered office is in Ghana. We operate a university student super-app designed to facilitate learning, economic opportunity, and social connection for university students.</p>
            <p className="mt-3">For data protection purposes, UniLoomy is the <em>data controller</em> of your personal information.</p>
            <p className="mt-3"><strong className="text-white">Contact:</strong> privacy@uniloomy.com</p>
          </Section>

          <Section title="2. Information We Collect">
            <Subsection title="2.1 Information You Provide">
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-white">Account Information:</strong> Full name, university email address, student ID (for verification), password (hashed), profile photo, and university/campus affiliation.</li>
                <li><strong className="text-white">Profile Data:</strong> Course of study, academic year, bio, social links, and interests.</li>
                <li><strong className="text-white">Financial Data:</strong> For marketplace and gig transactions — mobile money account details (e.g., MTN MoMo, Vodafone Cash, AirtelTigo Money), payment history. We do not store full card numbers.</li>
                <li><strong className="text-white">Content:</strong> Posts, comments, stories, UniClips, study materials, marketplace listings, gig postings, and messages you create.</li>
                <li><strong className="text-white">Communication:</strong> Emails or messages you send to our support team.</li>
              </ul>
            </Subsection>
            <Subsection title="2.2 Information Collected Automatically">
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-white">Device Information:</strong> Device type, operating system, unique device identifiers, mobile network, and IP address.</li>
                <li><strong className="text-white">Usage Data:</strong> Features used, pages visited, time spent, app interactions, search queries, and click patterns.</li>
                <li><strong className="text-white">Location Data:</strong> Approximate location derived from IP address. Precise GPS location only with your explicit consent (e.g., for housing listings nearby).</li>
                <li><strong className="text-white">Log Data:</strong> Error logs, access timestamps, and crash reports.</li>
                <li><strong className="text-white">Cookies & Similar Technologies:</strong> Authentication tokens, session cookies, and analytics identifiers. See Section 9 for details.</li>
              </ul>
            </Subsection>
            <Subsection title="2.3 Information from Third Parties">
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>University verification data from partnered institutions.</li>
                <li>Social sign-in data (Google/Apple) if you choose to use those login methods.</li>
                <li>Payment processor confirmations (not full transaction details).</li>
              </ul>
            </Subsection>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We process your data on the following legal bases (per Ghana Data Protection Act, 2012, s.19 and GDPR Art. 6):</p>
            <div className="mt-4 space-y-4">
              {[
                { basis: "Contract Performance", uses: "Creating and managing your account, processing transactions, providing customer support, and delivering core features of the Service." },
                { basis: "Legitimate Interests", uses: "Improving the platform, preventing fraud, enforcing our Terms, personalizing your experience, and conducting analytics to understand usage patterns." },
                { basis: "Consent", uses: "Sending promotional emails and push notifications (you may withdraw consent at any time). Accessing precise GPS location. Personalised advertising." },
                { basis: "Legal Obligation", uses: "Complying with applicable laws, responding to lawful requests from authorities, and fulfilling financial reporting obligations." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="font-bold text-white text-xs uppercase tracking-widest mb-1">{item.basis}</p>
                  <p>{item.uses}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>We do not sell your personal data. We may share data in the following limited circumstances:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Service Providers:</strong> Cloud hosting (AWS/Firebase), payment processors (MTN MoMo API, Paystack), analytics providers (Mixpanel/Amplitude), and customer support tools — all bound by data processing agreements.</li>
              <li><strong className="text-white">University Partners:</strong> For student verification only, with your consent.</li>
              <li><strong className="text-white">Other Users:</strong> Public profile information, marketplace listings, posts, and UniClips you choose to make public.</li>
              <li><strong className="text-white">Legal Authorities:</strong> Where required by Ghanaian law (e.g., court orders, the Data Protection Commission, the Ghana Police Service) or to protect the rights and safety of users.</li>
              <li><strong className="text-white">Business Transfers:</strong> In the event of a merger or acquisition, your data may be transferred to the new entity, which will be bound by this policy.</li>
            </ul>
          </Section>

          <Section title="5. International Data Transfers">
            <p>
              UniLoomy is based in Ghana. Our service providers may process data outside of Ghana, including in the European Economic Area (EEA), the United Kingdom, and the United States. Where such transfers occur, we ensure appropriate safeguards are in place in accordance with Ghana&apos;s Data Protection Act (s. 43) and GDPR Chapter V, including Standard Contractual Clauses (SCCs) or equivalent mechanisms.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain your personal data for as long as your account is active or as needed to provide services. Specifically:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Account data</strong> — retained for the duration of your account plus 6 months after deletion requests.</li>
              <li><strong className="text-white">Transaction records</strong> — retained for 7 years to comply with Ghana Revenue Authority (GRA) requirements and the Companies Act financial records obligations.</li>
              <li><strong className="text-white">Support communications</strong> — retained for 3 years.</li>
              <li><strong className="text-white">Usage logs</strong> — anonymised after 12 months.</li>
            </ul>
          </Section>

          <Section title="7. Your Rights">
            <p>Under Ghana&apos;s Data Protection Act, 2012, and applicable international law, you have the right to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                { right: "Access", desc: "Request a copy of your personal data we hold." },
                { right: "Rectification", desc: "Correct inaccurate or incomplete data." },
                { right: "Erasure", desc: "Request deletion of your data (subject to legal obligations)." },
                { right: "Portability", desc: "Receive your data in a structured, machine-readable format." },
                { right: "Object", desc: "Object to processing based on legitimate interests." },
                { right: "Restriction", desc: "Request that we limit how we use your data." },
                { right: "Withdraw Consent", desc: "Withdraw consent for consent-based processing at any time." },
                { right: "Lodge a Complaint", desc: "File a complaint with Ghana's Data Protection Commission (DPC)." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="font-bold text-white text-xs uppercase tracking-widest mb-1">Right to {item.right}</p>
                  <p className="text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">To exercise any right, email <strong className="text-white">privacy@uniloomy.com</strong>. We will respond within 30 days, as required by the DPA 2012.</p>
          </Section>

          <Section title="8. Security">
            <p>We implement industry-standard technical and organisational measures to protect your data including:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>AES-256 encryption at rest and TLS 1.3 in transit.</li>
              <li>Bcrypt hashing for passwords.</li>
              <li>Role-based access controls for internal staff.</li>
              <li>Regular security audits and penetration testing.</li>
              <li>Multi-factor authentication for administrative systems.</li>
            </ul>
            <p className="mt-3">No system is completely secure. In the event of a data breach that affects your rights, we will notify you and the Ghana Data Protection Commission within 72 hours, as required by Act 843.</p>
          </Section>

          <Section title="9. Cookies and Tracking">
            <p>We use the following types of cookies and tracking technologies:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-white">Strictly Necessary:</strong> Authentication tokens and session management. Cannot be disabled.</li>
              <li><strong className="text-white">Analytics:</strong> Understanding how users interact with our platform (can be disabled in App Settings).</li>
              <li><strong className="text-white">Marketing:</strong> Personalised ads and promotions — only with your explicit consent.</li>
            </ul>
            <p className="mt-3">You can manage cookie preferences in your account settings or via your browser/device settings.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>UniLoomy is designed for university students aged 16 and over. We do not knowingly collect personal data from children under 16. If we learn that we have inadvertently collected data from a child under 16, we will delete it promptly. If you believe a minor has provided us data, contact us at <strong className="text-white">privacy@uniloomy.com</strong>.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes via in-app notification or email at least 14 days before changes take effect. The &quot;Last Updated&quot; date at the top reflects the most recent version. Continued use of the Service after the effective date constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Contact Us">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <p><strong className="text-white">UniLoomy Technologies Ltd</strong></p>
              <p>Ghana</p>
              <p>Email: <a href="mailto:privacy@uniloomy.com" className="text-blue-400 underline">privacy@uniloomy.com</a></p>
              <p>For DPC complaints (Ghana): <a href="https://www.dataprotection.org.gh" target="_blank" rel="noreferrer" className="text-blue-400 underline">dataprotection.org.gh</a></p>
            </div>
          </Section>

        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-bold uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} UniLoomy Technologies Ltd. Ghana</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-blue-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/5 pt-10">
      <h2 className="text-xl md:text-2xl font-black text-white mb-5">{title}</h2>
      {children}
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2">{title}</h3>
      {children}
    </div>
  );
}
