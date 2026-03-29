import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | UniLoomy",
  description: "UniLoomy's Terms of Service — your rights and obligations when using the platform.",
};

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last Updated: {lastUpdated}</p>
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            <p className="text-slate-300 leading-relaxed text-sm">
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using UniLoomy. By creating an account or accessing the Service, you agree to be bound by these Terms. These Terms constitute a legally binding agreement between you and <strong>UniLoomy Technologies Ltd</strong>, a company incorporated under the Companies Act, 2019 (Act 992) of Ghana. If you do not agree, you must not use the Service.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-slate-300">

          <Section title="1. Eligibility">
            <p>You must be at least <strong className="text-white">16 years old</strong> and a currently enrolled or recently graduated university student to use UniLoomy. By registering, you confirm that:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>You are at least 16 years of age.</li>
              <li>You have the legal capacity to enter into a binding contract under Ghanaian law or the law of your jurisdiction.</li>
              <li>You are affiliated with a recognised university or tertiary institution.</li>
              <li>All registration information you submit is accurate and truthful.</li>
            </ul>
            <p className="mt-3">UniLoomy reserves the right to verify your student status and suspend accounts that fail verification.</p>
          </Section>

          <Section title="2. Account Registration and Security">
            <ul className="list-disc pl-5 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your password and account credentials.</li>
              <li>You agree to notify us immediately at <strong className="text-white">support@uniloomy.com</strong> if you suspect any unauthorised access to your account.</li>
              <li>UniLoomy is not liable for any loss resulting from a third party using your account without your permission where you have failed to take reasonable security precautions.</li>
              <li>You may only hold one account on UniLoomy. Creating multiple accounts to circumvent a suspension is a material breach of these Terms.</li>
            </ul>
          </Section>

          <Section title="3. Acceptable Use Policy">
            <p>You agree to use the Service lawfully and in good faith. You <strong className="text-white">must not</strong>:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Post content that is unlawful, defamatory, obscene, threatening, or violates another person&apos;s rights.</li>
              <li>Share, distribute, or reproduce copyrighted material without appropriate authorisation.</li>
              <li>Engage in fraud, misrepresentation, or impersonation of any person or entity.</li>
              <li>Use the platform to conduct scams, pyramid schemes, or any fraudulent commercial activity.</li>
              <li>Harass, bully, or abuse any other user — including through the Anonymous Discussions feature.</li>
              <li>Post, list, or solicit items that are illegal under Ghanaian law (e.g., narcotics, unlicensed firearms, counterfeit goods).</li>
              <li>Interfere with or disrupt the Service&apos;s infrastructure, networks, or security.</li>
              <li>Use automated tools (bots, scrapers) to access the Service without prior written consent.</li>
              <li>Use the Service to promote hate speech, discrimination, or violence against any group.</li>
            </ul>
            <p className="mt-4">Violation of this Acceptable Use Policy may result in immediate account suspension or permanent termination, and may be reported to relevant authorities under the <strong className="text-white">Electronic Transactions Act, 2008 (Act 772)</strong> and the <strong className="text-white">Cybersecurity Act, 2020 (Act 1038)</strong> of Ghana.</p>
          </Section>

          <Section title="4. Marketplace, Gigs & Transactions">
            <ul className="list-disc pl-5 space-y-2">
              <li>UniLoomy provides a platform for peer-to-peer transactions. We are not a party to any transaction between buyers and sellers or employers and service providers.</li>
              <li>All listings must be accurate, honest, and compliant with our Acceptable Use Policy.</li>
              <li>UniLoomy does not guarantee the quality, safety, or legality of items listed or services offered.</li>
              <li>Payment disputes must first be raised through UniLoomy&apos;s in-app dispute resolution system. UniLoomy&apos;s decisions in such disputes are final and binding on both parties.</li>
              <li>All financial transactions on the platform are subject to Ghana&apos;s <strong className="text-white">Payment Systems and Services Act, 2019 (Act 987)</strong>.</li>
              <li>Users are solely responsible for any taxes applicable to their earnings through the platform in accordance with Ghana Revenue Authority (GRA) regulations.</li>
            </ul>
          </Section>

          <Section title="5. Looms (Rewards Points)">
            <ul className="list-disc pl-5 space-y-2">
              <li>Looms are UniLoomy&apos;s in-platform reward points. They have no cash value and cannot be transferred, sold, or exchanged for currency outside of the defined redemption mechanisms within the App.</li>
              <li>UniLoomy reserves the right to modify, suspend, or discontinue the Looms programme with 30 days&apos; notice to affected users.</li>
              <li>Looms obtained through fraudulent activity will be forfeited immediately and may result in account suspension.</li>
              <li>Unredeemed Looms expire 12 months after your last account activity.</li>
            </ul>
          </Section>

          <Section title="6. User-Generated Content">
            <p>
              You retain ownership of content you post on UniLoomy (&quot;User Content&quot;). By posting User Content, you grant UniLoomy Technologies Ltd a <strong className="text-white">worldwide, non-exclusive, royalty-free, sublicensable licence</strong> to use, reproduce, modify, adapt, publish, translate, distribute, and display such content for the purpose of operating and promoting the Service.
            </p>
            <p className="mt-3">You represent and warrant that:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>You own or have the right to post the User Content.</li>
              <li>The User Content does not infringe any third party&apos;s intellectual property, privacy, or other rights.</li>
              <li>The User Content complies with our Acceptable Use Policy and all applicable laws.</li>
            </ul>
            <p className="mt-3">UniLoomy may remove any User Content at our sole discretion without prior notice if it violates these Terms or applicable law.</p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>All platform content, branding, software, design, and trademarks belonging to UniLoomy are protected by intellectual property laws of Ghana and international treaties. You are granted a limited, non-exclusive, non-transferable licence to use the Service for its intended purpose. You may not:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Copy, modify, or distribute any part of the Service or its content without express written permission.</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code of the application.</li>
              <li>Use UniLoomy&apos;s brand name, logo, or trademarks without prior written consent.</li>
            </ul>
          </Section>

          <Section title="8. Housing Listings">
            <ul className="list-disc pl-5 space-y-2">
              <li>UniLoomy is a platform for listing student accommodation. We are not a landlord, real estate agent, or property manager.</li>
              <li>UniLoomy does not verify the physical condition, legal title, or safety of any listed property.</li>
              <li>You are strongly advised to physically inspect any property and review all documents before entering into a rental or purchase agreement.</li>
              <li>Posting fraudulent or misleading housing listings is a criminal offence under Ghanaian law and will result in immediate account termination and reporting to the Ghana Police Service.</li>
            </ul>
          </Section>

          <Section title="9. Termination">
            <p>UniLoomy may suspend or terminate your account at any time, with or without notice, for:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Any violation of these Terms.</li>
              <li>Engagement in fraudulent, abusive, or illegal activity.</li>
              <li>Prolonged inactivity (more than 24 months).</li>
              <li>At our discretion to protect the safety of the community.</li>
            </ul>
            <p className="mt-3">You may terminate your account at any time via the in-app &quot;Delete Account&quot; option in Settings. Upon termination, your right to use the Service ceases immediately. Data retention obligations are governed by our Privacy Policy.</p>
          </Section>

          <Section title="10. Disclaimers and Limitation of Liability">
            <div className="p-4 rounded-xl bg-amber-900/10 border border-amber-700/20 text-amber-300/80 text-xs mb-4">
              ⚠️ Please read this section carefully as it limits UniLoomy&apos;s legal liability.
            </div>
            <p><strong className="text-white">10.1 As-Is Service.</strong> The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p className="mt-3"><strong className="text-white">10.2 Limitation of Liability.</strong> To the fullest extent permitted by Ghanaian law, UniLoomy&apos;s total liability to you for any claim arising from your use of the Service shall not exceed the amount you paid to UniLoomy (if any) in the six (6) months preceding the claim. UniLoomy is not liable for indirect, incidental, consequential, or punitive damages.</p>
            <p className="mt-3"><strong className="text-white">10.3 Third-Party Actions.</strong> UniLoomy is not responsible for the actions of other users, including transactions, disputes, or harmful content. Your interaction with other users is at your own risk.</p>
          </Section>

          <Section title="11. Indemnity">
            <p>You agree to indemnify, defend, and hold harmless UniLoomy Technologies Ltd, its directors, officers, employees, and agents from any claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Your use of or access to the Service.</li>
              <li>Your violation of these Terms.</li>
              <li>Your violation of any rights of a third party, including intellectual property, privacy, or consumer rights.</li>
              <li>Any User Content you post on the platform.</li>
            </ul>
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            <p>These Terms are governed by and construed in accordance with the laws of the <strong className="text-white">Republic of Ghana</strong>. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ghana.</p>
            <p className="mt-3"><strong className="text-white">Mediation First:</strong> Before initiating formal legal proceedings, both parties agree to attempt in good faith to resolve any dispute through mediation, in accordance with the <strong className="text-white">Alternative Dispute Resolution Act, 2010 (Act 798)</strong> of Ghana.</p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>We may update these Terms from time to time. Material changes will be communicated via in-app notification or email at least 14 days before taking effect. Continued use of the Service after such notification constitutes your acceptance of the updated Terms.</p>
          </Section>

          <Section title="14. Miscellaneous">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force.</li>
              <li><strong className="text-white">Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and UniLoomy.</li>
              <li><strong className="text-white">Waiver:</strong> Failure by UniLoomy to enforce any provision shall not constitute a waiver of that provision.</li>
              <li><strong className="text-white">Assignment:</strong> UniLoomy may assign these Terms in connection with a merger or acquisition. You may not assign your rights under these Terms without our consent.</li>
            </ul>
          </Section>

          <Section title="15. Contact Us">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <p><strong className="text-white">UniLoomy Technologies Ltd</strong></p>
              <p>Ghana</p>
              <p>Email: <a href="mailto:legal@uniloomy.com" className="text-blue-400 underline">legal@uniloomy.com</a></p>
              <p>Support: <a href="mailto:support@uniloomy.com" className="text-blue-400 underline">support@uniloomy.com</a></p>
            </div>
          </Section>

        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-bold uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} UniLoomy Technologies Ltd. Ghana</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-blue-500">Terms of Service</Link>
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
