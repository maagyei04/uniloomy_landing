"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Users,
  ArrowRight,
  BookOpen,
  ShoppingBag,
  Briefcase,
  Tag,
  Home as HomeIcon,
  MessageCircle,
  Play,
  Newspaper,
  UserCheck,
  Menu,
  X,
  GraduationCap,
  Wallet,
  ShieldCheck,
  Flame,
  Trophy,
  FlaskConical,
} from "lucide-react";

import DownloadCTA from "@/components/DownloadCTA";
import Mockup from "@/components/Mockup";
import PhoneFrame from "@/components/PhoneFrame";
import AppShowcase from "@/components/AppShowcase";
import ActivityTicker from "@/components/ActivityTicker";
import LoomsTicker from "@/components/LoomsTicker";
import LoomVisualizer from "@/components/LoomVisualizer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CampusMap from "@/components/CampusMap";
import Testimonials from "@/components/Testimonials";
import Leaderboard from "@/components/Leaderboard";
import FAQ from "@/components/FAQ";

const TRUST_UNIS = [
  { src: "/assets/universities/knust.png", alt: "KNUST" },
  { src: "/assets/universities/ug.png", alt: "University of Ghana" },
];

// ── Constants ──────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "#features", label: "Ecosystem" },
  { href: "#how", label: "How it Works" },
  { href: "#looms", label: "Looms" },
  { href: "#faq", label: "FAQ" },
];

const INTRO_CARDS = [
  { icon: GraduationCap, title: "Learn", desc: "AI tutoring, flashcards, and practice tests that adapt to your courses.", highlight: false },
  { icon: Wallet, title: "Earn", desc: "Campus gigs, a marketplace, and Looms rewards for real academic effort.", highlight: true },
  { icon: Users, title: "Connect", desc: "A verified social feed, anonymous chat, and UniClips across every campus.", highlight: false },
];

const PILLARS = [
  {
    eyebrow: "For Students",
    heading: ["Learn", "Without Limits"],
    accent: "text-primary",
    paragraph:
      "An AI Tutor, a homework solver, flashcards, and practice tests — plus shared study materials and live sessions, so you're never studying alone.",
    image: "/assets/students/learn.png",
    alt: "Students studying together",
    reverse: false,
    features: [
      { icon: Sparkles, title: "AI-Powered Tutor", desc: "Ask questions any time and get instant, syllabus-aware explanations." },
      { icon: BookOpen, title: "Flashcards & Practice", desc: "Turn notes and past questions into flashcards and mock tests automatically." },
      { icon: Users, title: "Study Sessions", desc: "Book and join live sessions with course mates preparing for the same exam." },
    ],
  },
  {
    eyebrow: "Grow On Campus",
    heading: ["Earn", "Your Way"],
    accent: "text-primary-light",
    paragraph:
      "Escrow-protected campus gigs, a peer-to-peer marketplace, and Looms for the academic and community work you're already doing.",
    image: "/assets/students/earn.png",
    alt: "Student working on a laptop",
    reverse: true,
    features: [
      { icon: ShieldCheck, title: "Campus Gigs, Safely Paid", desc: "Find or offer work with escrow-protected payments on every booking." },
      { icon: ShoppingBag, title: "Buy, Sell, Trade", desc: "A trusted marketplace for textbooks, gadgets, and everyday items on campus." },
      { icon: Flame, title: "Looms, Streaks & Tiers", desc: "Earn daily, build a streak, and climb tiers toward better rewards." },
    ],
  },
  {
    eyebrow: "Campus Life",
    heading: ["Connect", "Beyond Borders"],
    accent: "text-primary",
    paragraph:
      "Stay close to what's happening on your campus and every other partner university — from honest conversations to the events worth showing up for.",
    image: "/assets/students/connect.png",
    alt: "Students connecting on campus",
    reverse: false,
    features: [
      { icon: MessageCircle, title: "Anonymous, When You Need It", desc: "Speak freely and get advice without attaching your name." },
      { icon: Play, title: "Social Feed & UniClips", desc: "Share moments and watch short-form videos made by students, for students." },
      { icon: Tag, title: "News, Events & Deals", desc: "Campus news, upcoming events, and exclusive student discounts in one place." },
    ],
  },
];

const FEATURES = [
  { icon: BookOpen, title: "AI Study Hub", desc: "AI Tutor, flashcards, practice tests, and an AI homework solver, plus shared study materials and sessions with your course mates.", tag: "Learn" },
  { icon: Sparkles, title: "Looms & Rewards", desc: "Earn Looms daily, build streaks, climb tiers, and redeem for airtime, data, vouchers, and merch across 9 reward categories.", tag: "Earn" },
  { icon: Briefcase, title: "Campus Gigs", desc: "Find paid work or offer your own services to fellow students, with escrow-protected payments on every booking.", tag: "Earn" },
  { icon: ShoppingBag, title: "Marketplace", desc: "Buy, sell, and trade textbooks, gadgets, and everyday items safely within your own campus community.", tag: "Earn" },
  { icon: HomeIcon, title: "Housing", desc: "Browse student-friendly housing and roommate listings near your campus, verified by your peers.", tag: "Earn" },
  { icon: Tag, title: "Events & Deals", desc: "Discover campus events, concerts, and exclusive student deals from businesses near you.", tag: "Connect" },
  { icon: Users, title: "Social Feed & Stories", desc: "Connect with peers, share moments, and see what's happening across every partner university.", tag: "Connect" },
  { icon: MessageCircle, title: "Anonymous Discussions", desc: "Speak freely. Ask, vent, and get advice in candid campus conversations without attaching your name.", tag: "Connect" },
  { icon: Play, title: "UniClips", desc: "Short-form videos made by and for university students — trends, tips, and campus culture.", tag: "Connect" },
  { icon: Newspaper, title: "Campus News", desc: "Stay current with news and updates from your university and the wider student community.", tag: "Connect" },
  { icon: UserCheck, title: "Verified Community", desc: "Every account is verified against a real student ID, keeping the community exclusively for students.", tag: "All" },
];

const HOW_IT_WORKS = [
  {
    label: "Getting Started",
    steps: [
      { title: "Download the App", desc: "Get Uniloomy free from the App Store or Google Play." },
      { title: "Verify Your Campus", desc: "Provide your university, program, and student ID for quick verification." },
      { title: "Explore Day One", desc: "Study tools, UniClips, anonymous chats, and campus news are ready immediately." },
    ],
  },
  {
    label: "Growing on Uniloomy",
    steps: [
      { title: "Check In Daily", desc: "Earn Looms for daily check-ins and academic contributions." },
      { title: "Build Your Streak", desc: "Consecutive days active push you up the tiers and leaderboard." },
      { title: "Redeem Real Rewards", desc: "Trade Looms for airtime, data, vouchers, merch, and more." },
    ],
  },
];

// ── Components ─────────────────────────────────────────────────────────

function FeatureRow({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function handleGetStarted(e: React.MouseEvent<HTMLButtonElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  confetti({
    particleCount: 60,
    spread: 70,
    startVelocity: 32,
    gravity: 1.1,
    scalar: 0.8,
    ticks: 130,
    origin: {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    },
    colors: ["#1A237E", "#4D6FFF", "#00C24A"],
  });
  document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden selection:bg-primary-light/30 selection:text-primary">
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 py-4">
          <Image src="/assets/uniloomy.png" alt="Uniloomy" width={160} height={44} className="h-7 w-auto object-contain brightness-0" priority />

          <div className="hidden lg:flex items-center gap-9 text-slate-600 font-semibold text-sm">
            {NAV_LINKS.map(l => (
              <Link key={l.label} href={l.href} className="hover:text-primary transition-colors duration-300">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LoomsTicker />
            <Link href="#download" className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm">
              Get Started
            </Link>
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8"
        >
          <button className="absolute top-8 right-8 p-2" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-slate-900" />
          </button>
          {NAV_LINKS.map(l => (
            <Link
              key={l.label} href={l.href}
              className="text-3xl font-bold text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="#download" className="bg-primary text-white px-8 py-3 rounded-full font-bold" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Link>
        </motion.div>
      )}

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-[92rem] mx-auto px-4 md:px-8 pt-6 md:pt-8">
        <div className="relative isolate rounded-[2rem] md:rounded-[3rem] px-6 pt-10 pb-6 md:pt-14 md:pb-8 flex flex-col items-center text-center">
          {/* Background layer — clipped to the panel shape, kept separate so the phone mockup below can overflow it freely */}
          <div className="absolute inset-0 z-0 rounded-[2rem] md:rounded-[3rem] dot-pattern bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-primary-light/[0.02] to-transparent" />
            <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[70%] aspect-square bg-primary/[0.05] blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <ScrollReveal direction="up">
              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-5 max-w-3xl">
                The Complete Platform for <span className="text-primary">Modern Students</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="max-w-xl">
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
                Uniloomy gives Ghanaian students AI-powered study tools, real ways to earn through campus gigs and Looms, and a verified community to belong to.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up" className="flex flex-col sm:flex-row gap-4 mb-5">
              <button onClick={handleGetStarted} className="pill bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors cursor-pointer">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <a href="#how" className="pill bg-white text-slate-700 border border-slate-200 hover:border-primary/30 transition-colors">
                See How It Works
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Trusted by students at</span>
              <div className="flex items-center gap-3">
                {TRUST_UNIS.map((u) => (
                  <div key={u.alt} className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden">
                    <Image src={u.src} alt={u.alt} width={32} height={32} className="object-contain w-6 h-6" />
                  </div>
                ))}
                <span className="text-[11px] font-bold text-slate-400">+ more soon</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Mockup sits outside the clipped background layer so it can overflow the panel edges on mobile */}
          <ScrollReveal direction="scale" delay={0.4} className="relative z-10 w-full flex justify-center overflow-visible">
            <Mockup />
          </ScrollReveal>
        </div>
      </section>

      <ActivityTicker />

      {/* ── What is Uniloomy ────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto py-16 md:py-28 px-6">
        <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">What is Uniloomy?</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Uniloomy is an all-in-one platform connecting students, their coursework, and campus life in one verified ecosystem.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTRO_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className={`rounded-[1.75rem] p-8 flex flex-col items-center text-center gap-4 ${card.highlight ? "bg-primary text-white" : "bg-slate-50 text-slate-900"
                }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.highlight ? "bg-white/15" : "bg-white"}`}>
                <card.icon className={`w-7 h-7 ${card.highlight ? "text-white" : "text-primary"}`} />
              </div>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className={`text-sm leading-relaxed ${card.highlight ? "text-white/80" : "text-slate-500"}`}>{card.desc}</p>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto mb-16 md:mb-28 px-6">
        <ScrollReveal>
          <div className="bg-slate-50 rounded-[2rem] px-6 py-8 md:px-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Students", value: 1258, suffix: "+" },
              { label: "Partner Universities", value: 2, suffix: "" },
              { label: "App Features", value: 22, suffix: "+" },
              { label: "Looms Earn Rate", value: 10, suffix: "x" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="text-3xl md:text-4xl font-semibold text-slate-900">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs font-semibold text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <AppShowcase />

      {/* ── Pillars ──────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto flex flex-col gap-24 md:gap-32 my-20 md:my-32 px-6">
        {PILLARS.map((pillar) => (
          <div key={pillar.heading.join(" ")} className={`flex flex-col ${pillar.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
            <div className="flex-1 w-full">
              <ScrollReveal direction={pillar.reverse ? "left" : "right"}>
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/60">
                  <Image src={pillar.image} alt={pillar.alt} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
                </div>
              </ScrollReveal>
            </div>
            <div className="flex-1 w-full">
              <ScrollReveal direction={pillar.reverse ? "left" : "right"}>
                <span className={`text-xs font-bold uppercase tracking-widest ${pillar.accent}`}>{pillar.eyebrow}</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-3 mb-5 leading-tight">
                  {pillar.heading[0]} <span className={pillar.accent}>{pillar.heading[1]}</span>
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">{pillar.paragraph}</p>
                <div className="flex flex-col gap-3">
                  {pillar.features.map((f) => (
                    <FeatureRow key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </section>

      <CampusMap />

      {/* ── Features Grid ───────────────────────────────────────────────── */}
      <section id="features" className="w-full max-w-6xl mx-auto py-16 md:py-28 border-t border-slate-100 relative px-6">
        <ScrollReveal className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">The Complete Ecosystem</h2>
          <p className="text-slate-500">Everything you need to own your university journey.</p>
        </ScrollReveal>

        <ScrollReveal stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="bg-slate-50 p-7 rounded-[1.5rem] hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-500 ease-brand"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5 text-primary">
                <feature.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{feature.tag}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* ── How it Works ─────────────────────────────────────────────────── */}
      <section id="how" className="w-full max-w-6xl mx-auto py-16 md:py-28 px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">How It Works</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {HOW_IT_WORKS.map((track) => (
            <ScrollReveal key={track.label} className="bg-slate-50 rounded-[2rem] p-8 md:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{track.label}</span>
              <div className="flex flex-col gap-8 mt-6">
                {track.steps.map((step, i) => (
                  <div key={step.title} className="flex gap-5">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="scale">
          <Leaderboard />
        </ScrollReveal>
      </section>

      {/* ── Looms Highlight ──────────────────────────────────────────────── */}
      <section id="looms" className="w-full max-w-5xl mx-auto py-16 md:py-28 flex flex-col items-center px-6">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-xs font-bold text-primary uppercase tracking-widest mb-6">
            <Trophy className="w-3.5 h-3.5" />
            The Looms System
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-4">Real Value for Real Effort</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Earn Looms for daily check-ins and academic contributions, build a streak, climb the tiers, and redeem for real rewards.</p>
        </ScrollReveal>
        <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <ScrollReveal direction="scale" className="flex-1 w-full">
            <LoomVisualizer />
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.1} className="shrink-0">
            <PhoneFrame src="/assets/screenshots/earnloooms.png" alt="Uniloomy Earn Looms real screenshot" className="w-[200px] md:w-[230px]" />
          </ScrollReveal>
        </div>
      </section>

      {/* <Testimonials /> */}

      <div id="faq">
        <FAQ />
      </div>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section id="download" className="w-full max-w-4xl mx-auto py-20 md:py-32 text-center px-6">
        <ScrollReveal direction="scale">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-xs font-bold text-primary uppercase tracking-widest mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            Currently in Private Beta
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight">
            Uniloomy. Campus Redefined.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            We're not on the App Store or Google Play yet — join the beta now via TestFlight or Google Play Closed Testing and help shape the app before launch.
          </p>
          <div className="flex justify-center max-w-md mx-auto">
            <DownloadCTA />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="w-full max-w-7xl mx-auto px-6 pb-6">
        <div className="bg-slate-50 rounded-[2rem] px-8 py-12 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-3">
            <Image src="/assets/uniloomy.png" alt="Uniloomy" width={160} height={44} className="h-7 w-auto object-contain brightness-0" />
            <p className="text-slate-500 text-sm max-w-xs">The all-in-one platform for university students in Ghana.</p>
          </div>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Quick Links</span>
              {NAV_LINKS.map(l => (
                <Link key={l.label} href={l.href} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Legal</span>
              <Link href="/privacy" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link href="/community-guidelines" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Community Guidelines</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Social</span>
              <a href="https://x.com/uniloomy_" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">X (Twitter)</a>
              <a href="https://instagram.com/uniloomy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@uniloomy" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">TikTok</a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">&copy; {new Date().getFullYear()} Uniloomy Inc. Ghana</p>
      </footer>
    </main>
  );
}
