"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Download,
  Sparkles,
  Users,
  GraduationCap,
  ArrowRight,
  BookOpen,
  ShoppingBag,
  Briefcase,
  Tag,
  Home,
  MessageCircle,
  Play,
  Trophy,
  Newspaper,
  UserCheck,
  Menu,
  X,
} from "lucide-react";

import DownloadCTA from "@/components/DownloadCTA";
import MiniGame from "@/components/MiniGame";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxImage from "@/components/ParallaxImage";
import Typewriter from "@/components/Typewriter";
import FloatingCollage from "@/components/FloatingCollage";
import CampusMap from "@/components/CampusMap";
import LoomVisualizer from "@/components/LoomVisualizer";
import Testimonials from "@/components/Testimonials";
import Leaderboard from "@/components/Leaderboard";
import FAQ from "@/components/FAQ";

// ── Components ─────────────────────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
    el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
    el.style.transition = "none";
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
  };
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}

// ── Constants ──────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "#features", label: "Ecosystem" },
  { href: "#stats", label: "Impact" },
  { href: "#how", label: "How it Works" },
  { href: "#game", label: "Play & Win" },
  { href: "#download", label: "Get the App" },
];

const FEATURES = [
  { icon: BookOpen, title: "Smart Learning Hub", desc: "Access AI-powered study tools, flashcards, practice tests, and past questions to ace your courses.", color: "text-primary-light", tag: "Learn" },
  { icon: Sparkles, title: "Looms & Rewards", desc: "Earn Looms for your academic contributions and community engagement. Real value for real student effort.", color: "text-primary", tag: "Earn" },
  { icon: ShoppingBag, title: "Student Marketplace", desc: "The student-exclusive economy. Buy, sell, and trade textbooks or gadgets safely within your campus.", color: "text-primary-light", tag: "Earn" },
  { icon: Briefcase, title: "Campus Gigs", desc: "Discover student gig opportunities to earn real income while you study. Tutoring, freelancing, and more.", color: "text-primary", tag: "Earn" },
  { icon: Users, title: "Social Feed & Stories", desc: "Connect with peers, share experiences, and explore what's happening across all university campuses.", color: "text-primary", tag: "Connect" },
  { icon: MessageCircle, title: "Anonymous Discussions", desc: "Speak freely. Share thoughts, seek advice, and engage in candid campus conversations anonymously.", color: "text-primary-light", tag: "Connect" },
  { icon: Play, title: "UniClips", desc: "Short-form video content created by and for university students. Learn, laugh, and share definir moments.", color: "text-primary", tag: "Connect" },
  { icon: Newspaper, title: "Campus News & Events", desc: "Stay up to date with campus news, upcoming events, concerts, and activities from your university and beyond.", color: "text-primary", tag: "Connect" },
  { icon: UserCheck, title: "Verified Community", desc: "A safe, university-verified environment exclusively for students. Your campus identity, protected.", color: "text-primary-light", tag: "All" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white grid-overlay overflow-x-hidden selection:bg-primary-light/30 selection:text-primary">
      <ScrollProgress />
      <CursorSpotlight />

      {/* ── Background Elements ───────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-light/5 blur-[150px] rounded-full animate-pulse opacity-60" />
      </div>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto glass-light px-5 md:px-10 py-4 md:py-5 rounded-full z-50 mb-2 md:mb-12 animate-fade-in shadow-sm border border-slate-200 mt-4 md:mt-6 mx-6">
        <div className="flex items-center">
          <Image src="/assets/uniloomy.png" alt="Uniloomy Logo" width={160} height={44} className="h-8 w-auto object-contain brightness-0" priority />
        </div>
        <div className="hidden lg:flex items-center gap-10 text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">
          {NAV_LINKS.map(l => (
            <Link key={l.label} href={l.href} className="hover:text-primary transition-all duration-300 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="#download" className="bg-slate-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg hover:shadow-primary/20">
            Get App
          </Link>
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
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
              className="text-3xl font-black text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}

      <section className="w-full max-w-7xl mx-auto flex flex-col items-center pt-2 md:pt-8 pb-12 md:pb-32 text-center relative px-6 min-h-[500px] md:min-h-[800px] flex justify-center overflow-visible">
        <FloatingCollage />


        <div className="relative z-10 flex flex-col items-center">
          <ScrollReveal direction="scale">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100/50 backdrop-blur-sm border border-slate-200 rounded-full mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Now Live in Ghana 🇬🇭</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-8xl font-black text-slate-900 leading-[1.1] md:leading-[0.9] tracking-tight md:tracking-tighter mb-8 md:text-stroke-white">
              Learn Smarter.<br />
              <span className="text-primary">Earn Bigger.</span><br />
              <span className="text-primary-light">
                <Typewriter text="Connect Deeper." delay={1000} />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="max-w-xl mx-auto">
            <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed mb-12 md:text-stroke-white px-4 md:px-0">
              The super-app designed for the modern Ghanaian student. Study with AI, find campus gigs, and connect with your community.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up" className="w-full max-w-md mb-8">
            <DownloadCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section id="stats" className="w-full max-w-7xl mx-auto mb-16 md:mb-32 px-6">
        <ScrollReveal>
          <div className="glass-light shadow-sm rounded-[2.5rem] px-6 py-8 md:px-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-slate-100 border border-slate-200">
            {[
              { label: "Active Students", value: 5200, suffix: "+" },
              { label: "Partner Universities", value: 6, suffix: "" },
              { label: "App Features", value: 22, suffix: "+" },
              { label: "Looms Earn Rate", value: 10, suffix: "x" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 px-6">
                <span className="text-4xl md:text-5xl font-black text-slate-900">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Pillars ──────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-32 mb-20 md:mb-40 px-6">
        {/* Learn */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full">
            <ParallaxImage
              src="/assets/students/learn.png"
              alt="Students studying"
              className="aspect-[4/3] rounded-[3rem] shadow-2xl shadow-slate-200"
              overlayLabel="Phase 1: Academic Excellence"
            />
          </div>
          <ScrollReveal direction="right" className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">Learn <br /><span className="text-primary">Without Limits.</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Access AI-powered study tools, practice with past questions, and collaborate in real-time. Uniloomy simplifies your academic path.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {["AI Flashcards", "Smart Slides", "Past Questions"].map(t => (
                <span key={t} className="px-4 py-2 bg-white text-slate-600 rounded-xl text-xs font-bold border border-slate-200 shadow-sm">{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Earn pillar visual wrapper */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <div className="flex-1 w-full">
            <ParallaxImage
              src="/assets/students/earn.png"
              alt="Student working"
              className="aspect-[4/3] rounded-[3rem] shadow-2xl shadow-slate-200"
              overlayLabel="Phase 2: Economic Power"
            />
          </div>
          <ScrollReveal direction="left" className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">Earn <br /><span className="text-primary-light">Your Way.</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Find campus gigs, sell textbooks, and trade gadgets in our marketplace. Plus, earn Looms for your academic contributions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {["Campus Gigs", "Marketplace", "Looms Rewards"].map(t => (
                <span key={t} className="px-4 py-2 bg-white text-slate-600 rounded-xl text-xs font-bold border border-slate-200 shadow-sm">{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Connect */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full">
            <ParallaxImage
              src="/assets/students/connect.png"
              alt="Campus life"
              className="aspect-[4/3] rounded-[3rem] shadow-2xl shadow-slate-200"
              overlayLabel="Phase 3: Deep Connection"
            />
          </div>
          <ScrollReveal direction="right" className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">Connect <br /><span className="text-primary">Beyond Borders.</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Stay updated with campus news, join anonymous discussions, and see what's trending across all universities in Ghana.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {["Social Feed", "Campus News", "UniClips"].map(t => (
                <span key={t} className="px-4 py-2 bg-white text-slate-600 rounded-xl text-xs font-bold border border-slate-200 shadow-sm">{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CampusMap />

      {/* ── Features Grid ───────────────────────────────────────────────── */}
      <section id="features" className="w-full max-w-7xl mx-auto py-16 md:py-32 border-t border-slate-200 relative px-6">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">The Complete Ecosystem.</h2>
          <p className="text-slate-500 uppercase tracking-[0.4em] font-bold text-xs leading-loose">Everything you need to own your university journey</p>
        </ScrollReveal>

        <ScrollReveal stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group glass-light p-8 rounded-[2rem] border border-slate-100 hover:border-primary-light/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-default relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-colors" />
              <div className="relative mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color} shadow-sm`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">{feature.tag}</span>
              </div>
              <h3 className="relative text-xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="relative text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </ScrollReveal>
      </section>

      {/* ── How it Works ─────────────────────────────────────────────────── */}
      <section id="how" className="w-full max-w-7xl mx-auto py-16 md:py-32 flex flex-col md:flex-row items-center gap-20 px-6">
        <div className="flex-1">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">
              Getting Started <br />is <span className="text-primary-light italic">Actually</span> Easy.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-12">
            {[
              { step: "01", title: "Download the App", desc: "Get Uniloomy free from the App Store or Google Play." },
              { step: "02", title: "Verify Your Campus", desc: "Provide your university, program details, and student ID card for quick, secure verification." },
              { step: "03", title: "Start Your Journey", desc: "Explore study tools, see trending UniClips, join anonymous chats, and stay updated with campus news from day one." },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="left">
                <div className="flex gap-6 group">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-primary-light/40 transition-colors">{step.step}</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 font-medium">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal direction="right" className="flex-1 w-full">
          <Leaderboard />
        </ScrollReveal>
      </section>

      {/* ── Game ─────────────────────────────────────────────────────────── */}
      <section id="game" className="w-full max-w-4xl mx-auto py-16 md:py-32 flex flex-col items-center px-6">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black tracking-widest text-primary-light uppercase mb-6">
            Interactive Campus Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Earn Looms While You Scroll</h2>
          <p className="text-slate-600 font-medium max-w-lg mx-auto">Uniloomy Campus Runner — rack up high scores to unlock hidden perks.</p>
        </ScrollReveal>
        <ScrollReveal direction="scale">
          <div className="w-full bg-white shadow-xl shadow-slate-200/50 p-6 md:p-10 rounded-[3rem] border border-slate-200">
            <MiniGame />
          </div>
        </ScrollReveal>
      </section>

      <Testimonials />

      <FAQ />

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="w-full max-w-4xl mx-auto py-20 md:py-40 text-center px-6">
        <ScrollReveal direction="scale">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter">
            Uniloomy.<br />
            Campus <br />Redefined.
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join thousands of students learning smarter and earning bigger across Ghana.
          </p>
          <div className="flex justify-center">
            <a href="#download" className="bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl flex items-center gap-3">
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="w-full py-16 flex flex-col md:flex-row items-center justify-between border-t border-slate-200 text-[11px] text-slate-500 font-bold uppercase tracking-widest px-6 mt-auto">
        <span>&copy; {new Date().getFullYear()} Uniloomy Inc. Ghana</span>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </footer>
    </main>
  );
}

