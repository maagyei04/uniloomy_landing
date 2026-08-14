"use client";

import Link from "next/link";
import { Store, ArrowRight, Wallet, ShieldCheck, BadgeCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BUSINESS_SIGNUP_URL = "https://business.uniloomy.com/signup";
const BUSINESS_LOGIN_URL = "https://business.uniloomy.com/login";

const SELLER_POINTS = [
  { icon: Store, text: "Set up a storefront in minutes — student side-hustle or outside brand" },
  { icon: Wallet, text: "Instant payouts to MoMo the moment a buyer confirms their order" },
  { icon: ShieldCheck, text: "Every sale is escrow-protected, for both you and the buyer" },
];

export default function SellOnUniloomy() {
  return (
    <section id="sell" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-6">
      <ScrollReveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 md:px-16 md:py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute inset-0 -z-10 dot-pattern opacity-[0.06]" />
          <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square bg-primary-light/30 blur-[100px] rounded-full -z-10" />

          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold text-white uppercase tracking-widest mb-6">
              <Store className="w-3.5 h-3.5" />
              Uniloomy Business
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
              Got something to sell? <span className="text-white/70">Open your shop.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Whether you&apos;re a student running a side-hustle or a brand looking to reach
              thousands of verified students on campus, Uniloomy Business gives you a real
              dashboard to manage products, orders, and payouts — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href={BUSINESS_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-white text-primary shadow-lg hover:bg-white/90 transition-colors"
              >
                Create Your Storefront <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href={BUSINESS_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors"
              >
                Business Login
              </Link>
            </div>

            <p className="text-white/50 text-xs font-medium flex items-center justify-center lg:justify-start gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5 shrink-0" />
              Same account as the Uniloomy app — you&apos;re a student first, storefront owner second.
            </p>
          </div>

          <div className="flex-1 w-full max-w-sm flex flex-col gap-4">
            {SELLER_POINTS.map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
              >
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <p.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <p className="text-sm text-white/90 font-medium leading-relaxed pt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
