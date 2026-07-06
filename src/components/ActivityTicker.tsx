"use client";

import { Sparkles, Trophy, ShoppingBag, Flame, Briefcase, GraduationCap } from "lucide-react";

const ACTIVITY = [
  { icon: Sparkles, text: "Ama just earned 40 Looms at KNUST" },
  { icon: Trophy, text: "Kwame hit a 15-day streak at UG Legon" },
  { icon: ShoppingBag, text: "Efua sold a textbook on the Marketplace" },
  { icon: Flame, text: "Kojo climbed to Silver Tier" },
  { icon: Briefcase, text: "Nana booked a tutoring gig at Ashesi" },
  { icon: Trophy, text: "Yaw moved up to #12 on the leaderboard" },
  { icon: GraduationCap, text: "Adjoa finished a Practice Test at UCC" },
  { icon: Sparkles, text: "Kofi redeemed 500 Looms for airtime" },
];

export default function ActivityTicker() {
  return (
    <div className="w-full border-y border-slate-100 bg-slate-50/60 overflow-hidden py-3">
      <div className="flex overflow-hidden group">
        <div className="flex gap-10 animate-scroll md:hover:pause px-6 whitespace-nowrap">
          {[...ACTIVITY, ...ACTIVITY].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-500 shrink-0">
              <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
