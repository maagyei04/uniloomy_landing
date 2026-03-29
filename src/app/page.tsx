"use client";

import Image from "next/image";
import { useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import Mockup from "@/components/Mockup";
import MiniGame from "@/components/MiniGame";
import { 
  Download, 
  ChevronRight, 
  Sparkles, 
  Users, 
  Wallet, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck,
  Zap,
  LayoutGrid
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen grid-overlay flex flex-col pt-6 md:pt-10 px-6 md:px-16 lg:px-24">
      {/* Header / Nav */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto glass-dark px-10 py-5 rounded-full z-50 mb-8 md:mb-12 animate-fade-in shadow-glow">
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
          Download
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-0 mt-4 md:mt-16 mb-32">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-8 md:pr-10">
          <div className="flex flex-col gap-4 animate-fade-in">
            <div className="pill bg-white text-primary -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              Learn Smarter
            </div>
            <div className="pill bg-primary text-white rotate-2 hover:rotate-0 transition-transform cursor-pointer ml-4">
              Earn Bigger
            </div>
            <div className="pill bg-primary-light text-white -rotate-1 hover:rotate-0 transition-transform cursor-pointer ml-2">
              Connect Deeper
            </div>
          </div>

          <p className="text-xl md:text-3xl font-black text-white leading-tight max-w-lg mt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The complete digital infrastructure for the modern university student.
          </p>

          <p className="text-slate-400 text-sm md:text-base max-w-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
            From academic collaboration to financial empowerment—everything you need to thrive on campus is here.
          </p>

          <div id="waitlist" className="w-full max-w-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <WaitlistForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex -space-x-3 overflow-hidden">
               {[1,2,3,4].map(i => (
                 <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-primary-dark bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(64 + i)}
                 </div>
               ))}
            </div>
            <div className="text-xs font-bold text-white/50 uppercase tracking-widest flex items-center">
              Joined by <span className="text-white mx-1">50,000+</span> students
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
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">One Hub. Infinite Posibilities.</h2>
          <p className="text-slate-500 uppercase tracking-[0.4em] font-bold text-xs">Everything you need to own your campus life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: "Looms", desc: "Collaborate on projects, share notes, and master your courses together.", color: "text-primary-light" },
            { icon: Wallet, title: "Marketplace", desc: "The student-exclusive economy. Buy, sell, and trade safely within your campus.", color: "text-white" },
            { icon: Users, title: "Social Graph", desc: "Build meaningful connections that go beyond the lecture hall.", color: "text-primary-light" },
            { icon: ShieldCheck, title: "Secure Campus", desc: "A safe, verified environment exclusively for university students.", color: "text-primary-light" },
            { icon: Zap, title: "Earn Rewards", desc: "Get rewarded for your contributions to the community and academic success.", color: "text-white" },
            { icon: LayoutGrid, title: "Campus Map", desc: "Never miss an event with our real-time interactive campus hub.", color: "text-primary-light" },
          ].map((feature, i) => (
            <div key={i} className="glass-dark p-10 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/[0.05] transition-all group border-white/10 hover:border-white/20">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
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
              { step: "01", title: "Verify Email", desc: "Use your university .edu email to join the waitlist." },
              { step: "02", title: "Claim Username", desc: "Secure your unique identifier before anyone else." },
              { step: "03", title: "Start Looming", desc: "Connect with your roommates and course mates instantly." },
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
              <p className="text-white font-black text-2xl">Coming to <br/> University of Ghana & KNUST first.</p>
           </div>
        </div>
      </section>

      {/* Interactive Section - Visible Game */}
      <section id="game" className="w-full max-w-4xl mx-auto py-32 flex flex-col items-center">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black tracking-widest text-primary-light uppercase mb-6">
             Interactive Campus Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Earn Credits While You Wait</h2>
          <p className="text-slate-400 font-medium">UniLoomy Runner: High score wins early beta perks.</p>
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
          Uni<span className="text-primary-light">Loomy</span>.<br/>
          Your Campus <br/>Redefined.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
           <button className="pill bg-white text-black !px-12 !py-5 hover:scale-105 transition-transform flex items-center gap-3">
              Join Waitlist Now <ArrowRight className="w-5 h-5" />
           </button>
           <button className="pill bg-white/5 border border-white/10 text-white !px-12 !py-5 hover:bg-white/10 transition-colors">
              About the Mission
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 text-[11px] text-slate-600 font-bold uppercase tracking-widest mt-auto">
        <span>&copy; {new Date().getFullYear()} UniLoomy Inc. Ghana</span>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-primary-light transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary-light transition-colors">Terms</a>
          <a href="#" className="hover:text-primary-light transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary-light transition-colors">X / Twitter</a>
        </div>
      </footer>
    </main>
  );
}
