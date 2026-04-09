"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Share2, Star } from "lucide-react";

const FloatingItem = ({ children, delay = 0, duration = 6, className = "" }: any) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-15, 15, -15] }}
    transition={{
      repeat: Infinity,
      duration: duration,
      delay: delay,
      ease: "easeInOut",
    }}
    className={`absolute pointer-events-none select-none ${className}`}
  >
    {children}
  </motion.div>
);

export default function FloatingCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 opacity-70 pointer-events-none">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-light/10 blur-[150px] rounded-full" />

      {/* Main Collage Items */}
      
      {/* Large laughing group card */}
      <FloatingItem className="top-[12%] left-[2%] md:left-[5%]" delay={0}>
        <div className="w-64 md:w-80 aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6">
          <Image src="/assets/collage/laughing.png" alt="Students laughing" fill className="object-cover" />
          <div className="absolute bottom-4 left-4 right-4 glass-light p-3 rounded-2xl flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-800">Campus Hangout 📍</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </div>
      </FloatingItem>

      {/* DJ Post Card */}
      <FloatingItem className="top-[50%] right-[2%] md:right-[5%]" delay={1.5} duration={7}>
        <div className="w-48 md:w-64 aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 scale-90">
          <Image src="/assets/collage/dj.png" alt="Student DJ" fill className="object-cover" />
          <div className="absolute top-4 left-4 glass-light px-3 py-1 rounded-full text-[8px] font-black text-slate-900 uppercase">Live Now</div>
          <div className="absolute inset-x-4 bottom-4 p-3 glass-light rounded-2xl">
            <div className="flex gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>
            <p className="text-[8px] font-bold text-slate-800">GUSA Nights 2024 🎉</p>
          </div>
        </div>
      </FloatingItem>

      {/* Circle Profile - Selfie */}
      <FloatingItem className="top-[18%] right-[5%] md:right-[10%]" delay={0.5} duration={8}>
        <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden shadow-xl border-4 border-white shadow-primary/20">
          <Image src="/assets/collage/selfie.png" alt="Student selfie" fill className="object-cover" />
        </div>
      </FloatingItem>

      {/* Small Message Bubble */}
      <FloatingItem className="top-[40%] left-[3%] md:left-[8%]" delay={2} duration={5}>
        <div className="glass-light p-4 rounded-3xl shadow-xl flex items-center gap-3 border border-white">
          <div className="w-8 h-8 rounded-full bg-primary-light/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-400">Anonymous Post</span>
            <span className="text-[10px] font-black text-slate-800">Anyone see the cat near main? 🐈</span>
          </div>
        </div>
      </FloatingItem>

      {/* Study Photo - Semi Circle */}
      <FloatingItem className="bottom-[12%] left-[1%] md:left-[4%]" delay={1} duration={9}>
        <div className="w-40 h-40 md:w-56 md:h-56 relative rounded-[4rem] overflow-hidden shadow-xl border-4 border-white opacity-80 transform rotate-12">
          <Image src="/assets/collage/studying.png" alt="Students studying" fill className="object-cover" />
        </div>
      </FloatingItem>

      {/* Floating Emojis */}
      <FloatingItem className="top-[5%] left-[15%]" delay={0.2} duration={4}>
        <span className="text-4xl md:text-5xl drop-shadow-lg">😂</span>
      </FloatingItem>
      <FloatingItem className="bottom-[20%] right-[8%] md:right-[15%]" delay={2.5} duration={5}>
        <span className="text-4xl md:text-5xl drop-shadow-lg">🔥</span>
      </FloatingItem>
      <FloatingItem className="top-[65%] left-[10%]" delay={1.2} duration={6}>
        <span className="text-4xl md:text-5xl drop-shadow-lg">📚</span>
      </FloatingItem>
       <FloatingItem className="bottom-[25%] left-[12%]" delay={3} duration={7}>
        <span className="text-4xl md:text-5xl drop-shadow-lg">💙</span>
      </FloatingItem>

    </div>
  );
}
