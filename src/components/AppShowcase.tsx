"use client";

import PhoneFrame from "@/components/PhoneFrame";

const SCREENS = [
  { src: "/assets/screenshots/home.png", label: "Social Feed" },
  { src: "/assets/screenshots/studyhub.png", label: "Study Hub" },
  { src: "/assets/screenshots/gigs.png", label: "Campus Gigs" },
  { src: "/assets/screenshots/marketplace.png", label: "Marketplace" },
  { src: "/assets/screenshots/explore.png", label: "Explore" },
  { src: "/assets/screenshots/uniclips.png", label: "UniClips" },
  { src: "/assets/screenshots/earnloooms.png", label: "Earn Looms" },
];

export default function AppShowcase() {
  return (
    <section className="w-full py-16 md:py-28 bg-slate-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">See Uniloomy in Action</h2>
        <p className="text-slate-500">Real screens from the real app — no mockups.</p>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex gap-6 md:gap-8 animate-scroll md:hover:pause px-6">
          {[...SCREENS, ...SCREENS].map((screen, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-4">
              <PhoneFrame src={screen.src} alt={screen.label} className="w-[210px] md:w-[240px]" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{screen.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
