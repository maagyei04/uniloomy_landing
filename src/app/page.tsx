"use client";

import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import Mockup from "@/components/Mockup";
import MiniGame from "@/components/MiniGame";
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
  UserCheck
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen grid-overlay flex flex-col pt-6 md:pt-10 px-6 md:px-16 lg:px-24">
      {/* Header / Nav */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto glass-dark px-5 md:px-10 py-4 md:py-5 rounded-full z-50 mb-6 md:mb-12 animate-fade-in shadow-glow">
        <div className="flex items-center">
          <Image src="/assets/uniloomy.png" alt="UniLoomy Logo" width={160} height={44} className="h-8 w-auto object-contain" priority />
        </div>
        <div className="hidden lg:flex items-center gap-10 text-white/50 font-bold text-xs uppercase tracking-[0.2em]">
          <a href="#features" className="hover:text-white transition-colors">Ecosystem</a>
          <a href="#how" className="hover:text-white transition-colors">How it Works</a>
          <a href="#game" className="hover:text-white transition-colors">Play & Win</a>
          <a href="#waitlist" className="hover:text-white transition-colors">Early Access</a>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-primary font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/10">
          <Download className="w-4 h-4" />
          Get App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 mt-2 md:mt-16 mb-20 md:mb-32">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 md:pr-10">
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 animate-fade-in">
            <div className="pill bg-white text-primary md:-rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              Learn Smarter
            </div>
            <div className="pill bg-primary text-white md:rotate-2 hover:rotate-0 transition-transform cursor-pointer">
              Earn Bigger
            </div>
            <div className="pill bg-primary-light text-white md:-rotate-1 hover:rotate-0 transition-transform cursor-pointer">
              Connect Deeper
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-black text-white leading-tight max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your all-in-one platform designed for university students.
          </p>

          <p className="text-slate-400 text-sm md:text-base max-w-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Learn, earn, and connect — not just with your campus, but with students from different universities and campuses across Ghana.
          </p>

          <div id="waitlist" className="w-full max-w-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <WaitlistForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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

        <div className="flex-1 w-full flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Mockup />
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="w-full max-w-7xl mx-auto py-32 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">One App. Your Entire Campus Life.</h2>
          <p className="text-slate-500 uppercase tracking-[0.4em] font-bold text-xs">Everything you need to own your university journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Smart Learning Hub",
              desc: "Access AI-powered study tools, flashcards, practice tests, slides, pascos, and personalized learning paths to ace your courses.",
              color: "text-primary-light",
              tag: "Learn"
            },
            {
              icon: Sparkles,
              title: "Looms & Rewards",
              desc: "Earn Looms — our rewards points — for your academic contributions and community engagement. Real value for real effort.",
              color: "text-white",
              tag: "Earn"
            },
            {
              icon: ShoppingBag,
              title: "Student Marketplace",
              desc: "The student-exclusive economy. Buy, sell, and trade textbooks, gadgets, and more safely within your campus network.",
              color: "text-primary-light",
              tag: "Earn"
            },
            {
              icon: Briefcase,
              title: "Campus Gigs",
              desc: "Discover student gig opportunities to earn real income while you study. Tutoring, freelancing, and more — all within Uniloomy.",
              color: "text-white",
              tag: "Earn"
            },
            {
              icon: Tag,
              title: "Exclusive Deals",
              desc: "Unlock exclusive student discounts and deals from brands that care about university students and their financial wellbeing.",
              color: "text-primary-light",
              tag: "Earn"
            },
            {
              icon: Users,
              title: "Social Feed & Stories",
              desc: "Connect with peers, share experiences, and explore what's happening across different campuses in real-time.",
              color: "text-white",
              tag: "Connect"
            },
            {
              icon: MessageCircle,
              title: "Anonymous Discussions",
              desc: "Speak freely. Share thoughts, seek advice, and engage in candid campus conversations without revealing your identity.",
              color: "text-primary-light",
              tag: "Connect"
            },
            {
              icon: Play,
              title: "UniClips",
              desc: "Short-form video content created by and for university students. Learn, laugh, and share moments that define campus life.",
              color: "text-white",
              tag: "Connect"
            },
            {
              icon: Home,
              title: "Student Housing",
              desc: "Find verified, affordable student accommodation near your campus. No middlemen, no scams — just safe housing.",
              color: "text-primary-light",
              tag: "Connect"
            },
            {
              icon: Newspaper,
              title: "Campus News & Events",
              desc: "Stay up to date with campus news, upcoming events, concerts, and activities from your university and beyond.",
              color: "text-white",
              tag: "Connect"
            },
            {
              icon: UserCheck,
              title: "Verified Community",
              desc: "A safe, university-verified environment exclusively for students. Your campus identity, protected and authentic.",
              color: "text-primary-light",
              tag: "All"
            },
            {
              icon: Trophy,
              title: "Study Groups & Sessions",
              desc: "Join or create study sessions, collaborate on assignments, and master your courses together with classmates.",
              color: "text-white",
              tag: "Learn"
            },
          ].map((feature, i) => (
            <div key={i} className="glass-dark p-10 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.05] transition-all group border-white/10 hover:border-white/20">
              <div className="flex items-center justify-between">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/20 bg-white/5 px-3 py-1 rounded-full">{feature.tag}</span>
              </div>
              <h3 className="text-xl font-black text-white">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="w-full max-w-5xl mx-auto py-32 flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
            Getting Started <br />is <span className="text-primary-light italic">Actually</span> Easy.
          </h2>
          <div className="flex flex-col gap-12">
            {[
              { step: "01", title: "Join the Waitlist", desc: "Sign up with your email to secure your spot. Early access members get exclusive Looms bonus points on launch." },
              { step: "02", title: "Verify Your Campus", desc: "Use your university email or student ID to join as a verified member of your campus community." },
              { step: "03", title: "Start Your Journey", desc: "Explore study tools, connect with peers, discover gigs, and start earning Looms from day one." },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-black text-white/10">{step.step}</span>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  <p className="text-slate-500 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full bg-gradient-to-br from-primary/20 to-primary-light/10 rounded-[3rem] aspect-square flex items-center justify-center border border-white/5">
          <div className="text-center p-12">
            <GraduationCap className="w-24 h-24 text-primary-light mx-auto mb-6 animate-float" />
            <p className="text-white font-black text-2xl">Launching at <br /> University of Ghana <br /> & KNUST first.</p>
            <p className="text-slate-500 text-sm mt-4 font-medium">More universities coming soon.</p>
          </div>
        </div>
      </section>

      {/* Interactive Section - Visible Game */}
      <section id="game" className="w-full max-w-4xl mx-auto py-32 flex flex-col items-center">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black tracking-widest text-primary-light uppercase mb-6">
            Interactive Campus Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Earn Looms While You Wait</h2>
          <p className="text-slate-400 font-medium">UniLoomy Campus Runner — top scores earn early beta perks & bonus Looms on launch day.</p>
        </div>
        <div className="w-full glass-dark p-10 rounded-[3rem] border-white/10 relative">
          <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10 animate-float-slow" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary-light/10 blur-3xl rounded-full" />
          <MiniGame />
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-4xl mx-auto py-40 text-center">
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
      </section>

      {/* Footer */}
      <footer className="w-full py-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 text-[11px] text-slate-600 font-bold uppercase tracking-widest mt-auto">
        <span>&copy; {new Date().getFullYear()} UniLoomy Inc. Ghana</span>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="/privacy" className="hover:text-primary-light transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary-light transition-colors">Terms</Link>
          <a href="#" className="hover:text-primary-light transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-light transition-colors">X / Twitter</a>
        </div>
      </footer>
    </main>
  );
}
