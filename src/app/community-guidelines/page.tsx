import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Community Guidelines | Uniloomy",
  description: "Uniloomy's Community Guidelines — how we keep the platform safe, honest, and useful for every student.",
};

export default function CommunityGuidelinesPage() {
  const lastUpdated = "March 29, 2026";

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/assets/uniloomy.png" alt="Uniloomy" width={120} height={32} className="h-6 w-auto" />
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
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Community Guidelines</h1>
          <p className="text-slate-400 text-sm">Last Updated: {lastUpdated}</p>
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            <p className="text-slate-300 leading-relaxed text-sm">
              Uniloomy only works if it&apos;s a place students can trust — honest listings, real study help, and conversations that don&apos;t turn toxic just because a post is anonymous. These Guidelines explain what we expect from everyone on the platform, in plain language. They apply to every feature — the Social Feed, Anonymous Discussions, UniClips, Study Hub, Campus Gigs, Marketplace, and Housing — and are part of our <Link href="/terms" className="text-blue-400 underline">Terms of Service</Link>, incorporated by reference. Breaking them can lead to content removal, warnings, suspension, or a permanent ban.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-slate-300">

          <Section title="1. Our Values">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Be real.</strong> Your profile, listings, and posts should represent who you actually are and what you&apos;re actually offering.</li>
              <li><strong className="text-white">Be respectful.</strong> Disagreement is fine. Harassment, hate, and cruelty aren&apos;t — even anonymously.</li>
              <li><strong className="text-white">Be safe.</strong> Don&apos;t put other students at risk, financially, physically, or emotionally.</li>
              <li><strong className="text-white">Be fair.</strong> Honest listings, honest reviews, honest academic work.</li>
            </ul>
          </Section>

          <Section title="2. Social Feed, Stories &amp; General Conduct">
            <p>You <strong className="text-white">must not</strong>:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Bully, harass, threaten, or repeatedly target another student.</li>
              <li>Impersonate another person, university, or organisation.</li>
              <li>Post hate speech or content that demeans people based on ethnicity, region, religion, gender, disability, or sexual orientation.</li>
              <li>Share someone else&apos;s private information (address, phone number, ID, exam results) without their consent — commonly known as doxxing.</li>
              <li>Post graphic violence, sexually explicit content, or content that sexualises minors.</li>
              <li>Spam the feed with repetitive, irrelevant, or purely promotional content outside of Marketplace/Gigs.</li>
            </ul>
          </Section>

          <Section title="3. Anonymous Discussions">
            <p>Anonymous posts exist so you can ask, vent, or speak honestly without your name attached — not as cover for cruelty. In addition to Section 2 above:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Anonymity is not a shield for harassment, threats, or targeted attacks on a specific, identifiable student.</li>
              <li>Do not use Anonymous Discussions to accuse a named individual of a crime or serious misconduct without basis — this can constitute defamation under Ghanaian law even when posted anonymously, and Uniloomy can be compelled to assist identification in serious legal cases.</li>
              <li>Anonymous posts are ephemeral by design and are automatically removed after 24–72 hours, but reported content is preserved for moderation and legal purposes regardless of the auto-delete window.</li>
              <li>If a post describes a mental health crisis, self-harm, or immediate danger, please also contact your university&apos;s counselling service or local emergency services — Uniloomy is not a crisis response service.</li>
            </ul>
          </Section>

          <Section title="4. UniClips &amp; Video Content">
            <ul className="list-disc pl-5 space-y-2">
              <li>Only post videos you made or have the right to share. Don&apos;t upload copyrighted music, film, or TV clips without permission.</li>
              <li>Get consent from anyone identifiable in your video before posting, especially in shared spaces like lecture halls or hostels.</li>
              <li>No dangerous stunts, challenges that encourage self-harm, or content that could get someone hurt if copied.</li>
              <li>Captions and on-screen text are held to the same standard as any other post — no harassment, hate speech, or doxxing.</li>
            </ul>
          </Section>

          <Section title="5. Marketplace &amp; Campus Gigs">
            <ul className="list-disc pl-5 space-y-2">
              <li>List items and services honestly — accurate photos, condition, and price. Don&apos;t misrepresent what you&apos;re selling or offering.</li>
              <li>Never list anything illegal under Ghanaian law: narcotics, unlicensed firearms or weapons, counterfeit goods, stolen items, academic work for sale (see Section 7), or access to exam materials.</li>
              <li>Use Uniloomy&apos;s escrow flow for gig payments rather than asking buyers/clients to pay you directly outside the app — escrow is what protects both sides if something goes wrong.</li>
              <li>When meeting in person to exchange goods, meet in a public, well-lit campus location where possible, and tell a friend where you&apos;re going.</li>
              <li>Leave honest reviews. Fake reviews, review-swapping, or retaliatory reviews are not allowed.</li>
            </ul>
          </Section>

          <Section title="6. Housing Listings">
            <ul className="list-disc pl-5 space-y-2">
              <li>Only list properties you are actually authorised to advertise, at accurate prices with real, current photos.</li>
              <li>Disclose known issues (shared bathrooms, distance from campus, landlord requirements) rather than leaving them out.</li>
              <li>Always inspect a property in person and review paperwork before paying anything — Uniloomy does not verify landlords or titles.</li>
              <li>Posting fake or misleading housing listings is treated as a serious violation and may be reported to the Ghana Police Service.</li>
            </ul>
          </Section>

          <Section title="7. Study Hub &amp; Academic Integrity">
            <ul className="list-disc pl-5 space-y-2">
              <li>The AI Tutor, Solve, Flashcards, and Practice Tests are study aids — use them to understand material, not to submit AI-generated work as your own where your university&apos;s academic integrity policy prohibits it.</li>
              <li>Do not use Uniloomy to sell or distribute live exam content, leaked papers, or to coordinate cheating during an assessment.</li>
              <li>Shared study materials should be your own notes or properly licensed resources — don&apos;t upload a textbook or paper you don&apos;t have the rights to redistribute.</li>
            </ul>
          </Section>

          <Section title="8. Messaging &amp; Inbox">
            <ul className="list-disc pl-5 space-y-2">
              <li>Don&apos;t use direct messages to harass, spam, or send unsolicited explicit content.</li>
              <li>Don&apos;t use messaging to run scams — including fake gig offers, advance-fee requests, or attempts to move a paid transaction off-platform to avoid escrow protection.</li>
              <li>Block and report any user who makes you uncomfortable; you don&apos;t need to respond first.</li>
            </ul>
          </Section>

          <Section title="9. Reporting &amp; Enforcement">
            <p>Every post, comment, UniClip, listing, and message has a report option. When something is reported, our moderation team reviews it against these Guidelines.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                { step: "Warning", desc: "First-time, lower-severity violations typically receive a warning and content removal." },
                { step: "Temporary Restriction", desc: "Repeated or moderate violations may lead to a temporary posting, messaging, or listing suspension." },
                { step: "Permanent Ban", desc: "Severe or repeated violations — harassment campaigns, fraud, illegal listings, safety threats — result in permanent account termination." },
                { step: "Legal Referral", desc: "Content involving threats, fraud, or illegal activity may be reported to Ghanaian law enforcement, as described in our Terms of Service." },
              ].map((item) => (
                <div key={item.step} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="font-bold text-white text-xs uppercase tracking-widest mb-1">{item.step}</p>
                  <p className="text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">If you believe a moderation decision on your account was made in error, you can appeal by emailing <strong className="text-white">support@uniloomy.com</strong> with your username and the content in question.</p>
          </Section>

          <Section title="10. Changes to These Guidelines">
            <p>We may update these Guidelines as the platform grows. Material changes will be communicated via in-app notification or email at least 14 days before taking effect. Continued use of the Service after that date constitutes acceptance of the updated Guidelines.</p>
          </Section>

          <Section title="11. Contact Us">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <p><strong className="text-white">Uniloomy Technologies Ltd</strong></p>
              <p>Ghana</p>
              <p>Report content or appeal a decision: <a href="mailto:support@uniloomy.com" className="text-blue-400 underline">support@uniloomy.com</a></p>
            </div>
          </Section>

        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-bold uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Uniloomy Technologies Ltd. Ghana</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/community-guidelines" className="text-blue-500">Community Guidelines</Link>
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
