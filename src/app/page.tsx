"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import Mockup from "@/components/Mockup";
import MiniGame from "@/components/MiniGame";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
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

const NAV_LINKS = [
  { href: "#features", label: "Ecosystem" },
  { href: "#stats",    label: "Impact" },
  { href: "#how",      label: "How it Works" },
  { href: "#game",     label: "Play & Win" },
  { href: "#waitlist", label: "Early Access" },
];

const FEATURES = [
  { icon: BookOpen,      title: "Smart Learning Hub",        desc: "Access AI-powered study tools, flashcards, practice tests, slides, pascos, and personalized learning paths to ace your courses.",                                         color: "text-primary-light", tag: "Learn" },
  { icon: Sparkles,      title: "Looms & Rewards",           desc: "Earn Looms — our rewards points — for your academic contributions and community engagement. Real value for real effort.",                                              color: "text-white",         tag: "Earn" },
  { icon: ShoppingBag,   title: "Student Marketplace",       desc: "The student-exclusive economy. Buy, sell, and trade textbooks, gadgets, and more safely within your campus network.",                                                 color: "text-primary-light", tag: "Earn" },
  { icon: Briefcase,     title: "Campus Gigs",               desc: "Discover student gig opportunities to earn real income while you study. Tutoring, freelancing, and more — all within Uniloomy.",                                     color: "text-white",         tag: "Earn" },
  { icon: Tag,           title: "Exclusive Deals",           desc: "Unlock exclusive student discounts and deals from brands that care about university students and their financial wellbeing.",                                          color: "text-primary-light", tag: "Earn" },
  { icon: Users,         title: "Social Feed & Stories",     desc: "Connect with peers, share experiences, and explore what's happening across different campuses in real-time.",                                                         color: "text-white",         tag: "Connect" },
  { icon: MessageCircle, title: "Anonymous Discussions",     desc: "Speak freely. Share thoughts, seek advice, and engage in candid campus conversations without revealing your identity.",                                               color: "text-primary-light", tag: "Connect" },
  { icon: Play,          title: "UniClips",                  desc: "Short-form video content created by and for university students. Learn, laugh, and share moments that define campus life.",                                          color: "text-white",         tag: "Connect" },
  { icon: Home,          title: "Student Housing",           desc: "Find verified, affordable student accommodation near your campus. No middlemen, no scams — just safe housing.",                                                       color: "text-primary-light", tag: "Connect" },
  { icon: Newspaper,     title: "Campus News & Events",      desc: "Stay up to date with campus news, upcoming events, concerts, and activities from your university and beyond.",                                                        color: "text-white",         tag: "Connect" },
  { icon: UserCheck,     title: "Verified Community",        desc: "A safe, university-verified environment exclusively for students. Your campus identity, protected and authentic.",                                                    color: "text-primary-light", tag: "All" },
  { icon: Trophy,        title: "Study Groups & Sessions",   desc: "Join or create study sessions, collaborate on assignments, and master your courses together with classmates.",                                                        color: "text-white",         tag: "Learn" },
];

// Tilt card component
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.025)`;
    el.style.transition = "none";
    // glow follows cursor
    el.style.background = `radial-gradient(circle at ${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%, rgba(77,111,255,0.07), transparent 70%)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.5s cubic-bezier(.22,.68,0,1.2)";
    el.style.background = "";
  };
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: "transform", transition: "transform 0.5s cubic-bezier(.22,.68,0,1.2)" }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll spy for active nav links
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen grid-overlay flex flex-col pt-6 md:pt-10 px-6 md:px-16 lg:px-24">
      <CursorSpotlight />

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto glass-dark px-5 md:px-10 py-4 md:py-5 rounded-full z-50 mb-6 md:mb-12 animate-fade-in shadow-glow">
        <div className="flex items-center">
          <Image src="/assets/uniloomy.png" alt="UniLoomy Logo" width={160} height={44} className="h-8 w-auto object-contain" priority />
        </div>
        <div className="hidden lg:flex items-center gap-10 text-white/50 font-bold text-xs uppercase tracking-[0.2em]">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors ${activeSection === l.href.slice(1) ? "text-white" : "hover:text-white"}`}
            >
              {l.label}
              {activeSection === l.href.slice(1) && (
                <div className="h-0.5 w-full bg-primary-light rounded-full mt-0.5 transition-all" />
              )}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-primary font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/10">
            <Download className="w-4 h-4" />Get App
          </button>
          <button
            className="lg:hidden p-2 rounded-xl glass-dark border border-white/5 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(o => !o)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: "rgba(2,6,23,0.96)", backdropFilter: "blur(16px)" }}>
          <button className="absolute top-8 right-8 text-white/60 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-7 h-7" />
          </button>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-black text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 mt-2 md:mt-16 mb-20 md:mb-32">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 md:pr-10">
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 animate-fade-in">
            <div className="pill bg-white text-primary md:-rotate-3 hover:rotate-0 transition-transform cursor-pointer">Learn Smarter</div>
            <div className="pill bg-primary text-white md:rotate-2 hover:rotate-0 transition-transform cursor-pointer">Earn Bigger</div>
            <div className="pill bg-primary-light text-white md:-rotate-1 hover:rotate-0 transition-transform cursor-pointer">Connect Deeper</div>
          </div>

          <p className="text-2xl md:text-3xl font-black text-white leading-tight max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your all-in-one platform designed for university students.
          </p>

          <p className="text-slate-400 text-sm md:text-base max-w-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Learn, earn, and connect — not just with your campus, but with students from different universities and campuses across Ghana.
          </p>

          <div id="waitlist" className="w-full max-w-md animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <WaitlistForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-primary-dark bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-xs font-bold text-white/50 uppercase tracking-widest flex items-center">
              Join <span className="text-white mx-1">thousands</span> of students on the waitlist
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Mockup />
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section id="stats" className="w-full max-w-7xl mx-auto mb-24">
        <ScrollReveal>
          <div className="glass-dark rounded-3xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/5 border border-white/5">
            {[
              { label: "Students on Waitlist", value: 5200, suffix: "+" },
              { label: "Partner Universities",  value: 6,    suffix: "" },
              { label: "App Features",          value: 22,   suffix: "+" },
              { label: "Looms Earn Rate",       value: 10,   suffix: "x" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 px-6">
                <span className="text-4xl md:text-5xl font-black text-white">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Features Grid ───────────────────────────────────────────────── */}
      <section id="features" className="w-full max-w-7xl mx-auto py-32 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">One App. Your Entire Campus Life.</h2>
          <p className="text-slate-500 uppercase tracking-[0.4em] font-bold text-xs">Everything you need to own your university journey</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 60} direction="up">
              <TiltCard className="glass-dark p-10 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.05] transition-all group border-white/10 hover:border-white/20 h-full cursor-default">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/20 bg-white/5 px-3 py-1 rounded-full">{feature.tag}</span>
                </div>
                <h3 className="text-xl font-black text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────────────────────────── */}
      <section id="how" className="w-full max-w-5xl mx-auto py-32 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
              Getting Started <br />is <span className="text-primary-light italic">Actually</span> Easy.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-12">
            {[
              { step: "01", title: "Join the Waitlist",   desc: "Sign up with your email to secure your spot. Early access members get exclusive Looms bonus points on launch." },
              { step: "02", title: "Verify Your Campus",  desc: "Use your university email or student ID to join as a verified member of your campus community." },
              { step: "03", title: "Start Your Journey",  desc: "Explore study tools, connect with peers, discover gigs, and start earning Looms from day one." },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 120} direction="left">
                <div className="flex gap-6 group cursor-default">
                  <span className="text-4xl font-black text-white/10 group-hover:text-primary-light/30 transition-colors">{step.step}</span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                    <p className="text-slate-500 font-medium">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal direction="right" className="flex-1 w-full">
          <div className="bg-gradient-to-br from-primary/20 to-primary-light/10 rounded-[3rem] aspect-square flex items-center justify-center border border-white/5 hover:border-primary/20 transition-colors">
            <div className="text-center p-12">
              <GraduationCap className="w-24 h-24 text-primary-light mx-auto mb-6 animate-float" />
              <p className="text-white font-black text-2xl">Launching at <br /> University of Ghana <br /> & KNUST first.</p>
              <p className="text-slate-500 text-sm mt-4 font-medium">More universities coming soon.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Game ─────────────────────────────────────────────────────────── */}
      <section id="game" className="w-full max-w-4xl mx-auto py-32 flex flex-col items-center">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black tracking-widest text-primary-light uppercase mb-6">
            Interactive Campus Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Earn Looms While You Wait</h2>
          <p className="text-slate-400 font-medium">UniLoomy Campus Runner — top scores earn early beta perks & bonus Looms on launch day.</p>
        </ScrollReveal>
        <ScrollReveal className="w-full" direction="scale">
          <div className="w-full glass-dark p-6 md:p-10 rounded-[3rem] border-white/10 relative">
            <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10 animate-float-slow" />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary-light/10 blur-3xl rounded-full" />
            <MiniGame />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="w-full max-w-4xl mx-auto py-40 text-center">
        <ScrollReveal direction="scale">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter overflow-hidden">
            Uni<span className="text-primary-light">Loomy</span>.<br />
            Your Campus <br />Redefined.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join thousands of students already on the waitlist to learn smarter, earn bigger, and connect deeper — starting at University of Ghana & KNUST.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#waitlist" className="pill bg-white text-black !px-12 !py-5 hover:scale-105 transition-transform flex items-center gap-3 cursor-pointer">
              Join Waitlist Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="w-full py-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 text-[11px] text-slate-600 font-bold uppercase tracking-widest mt-auto">
        <span>&copy; {new Date().getFullYear()} UniLoomy Inc. Ghana</span>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="/privacy" className="hover:text-primary-light transition-colors">Privacy</Link>
          <Link href="/terms"   className="hover:text-primary-light transition-colors">Terms</Link>
          <a href="#" className="hover:text-primary-light transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-light transition-colors">X / Twitter</a>
        </div>
      </footer>
    </main>
  );
}
