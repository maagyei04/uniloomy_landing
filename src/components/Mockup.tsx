"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Mockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full max-w-[260px] md:max-w-[300px] aspect-[9/18.5] mx-auto"
    >
      {/* Smartphone Frame */}
      <div className="absolute inset-0 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-4 ring-slate-800/50">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
        
        {/* Screen Content */}
        <div className="absolute inset-0 bg-white p-4 pt-12 flex flex-col gap-6 overflow-hidden">
          {/* Mock App Header */}
          <div className="flex items-center justify-between px-2">
            <Image src="/assets/uniloomy.png" alt="Logo" width={80} height={24} className="h-5 w-auto object-contain" />
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-100" />
              <div className="w-6 h-6 rounded-full bg-slate-100" />
            </div>
          </div>

          {/* Mock Feed Item */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20" />
              <div className="flex flex-col gap-1">
                <div className="w-20 h-2 bg-slate-200 rounded" />
                <div className="w-12 h-1.5 bg-slate-100 rounded" />
              </div>
            </div>
            <div className="w-full aspect-square rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
               <Image src="/assets/icon.png" alt="App Icon" width={64} height={64} className="opacity-20 grayscale" />
            </div>
          </div>

          {/* Mock Floating Action */}
          <div className="mt-auto flex justify-between items-center py-4 border-t border-slate-100">
             <div className="flex gap-4">
                <div className="w-6 h-6 bg-slate-200 rounded" />
                <div className="w-6 h-6 bg-slate-100 rounded" />
             </div>
             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <div className="w-4 h-4 bg-white rounded-sm" />
             </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements (from Zeefas UI) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-6 top-1/4 w-12 h-12 rounded-full bg-primary-light/20 blur-[2px] opacity-40 z-10" 
      />
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute -left-8 bottom-1/3 w-16 h-16 rounded-[1rem] bg-primary/10 backdrop-blur-md border border-primary/20 z-10 shadow-sm" 
      />
    </motion.div>
  );
}
