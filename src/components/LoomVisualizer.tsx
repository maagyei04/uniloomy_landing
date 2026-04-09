"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Coins, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";

const Coin = ({ delay = 0 }: { delay?: number }) => {
  const [collected, setCollected] = useState(false);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={collected ? { y: -100, opacity: 0, scale: 1.5 } : { y: [0, -20, 0] }}
      transition={collected ? { duration: 0.5 } : { repeat: Infinity, duration: 3, delay: delay, ease: "easeInOut" }}
      onMouseEnter={() => !collected && setCollected(true)}
      className="absolute cursor-pointer"
      style={{ left: `${Math.random() * 80 + 10}%`, top: `${Math.random() * 80 + 10}%` }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-secondary/40 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 relative overflow-hidden">
          <span className="text-white font-black text-xs leading-none">L</span>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 -skew-y-12" />
        </div>
        {collected && (
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: [1, 1.5], opacity: [1, 0] }}
            className="absolute -top-4 -right-4 text-secondary"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function LoomVisualizer() {
  const [balance, setBalance] = useState(0);

  return (
    <div className="relative w-full aspect-square md:aspect-video bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden group shadow-inner">
      {/* Interactive Coins */}
      <div className="absolute inset-0 z-10" onMouseEnter={() => setBalance(b => b + 10)}>
        {[...Array(6)].map((_, i) => (
          <Coin key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Coins className="w-64 h-64 text-slate-900" />
      </div>

      {/* Floating HUD */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20 pointer-events-none">
        <div className="glass-light px-4 py-2 rounded-2xl flex items-center gap-3 border border-white">
          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-secondary" />
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Earning Rate</p>
            <p className="text-xs font-black text-slate-900">1.5x Multiplier ✨</p>
          </div>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="glass-light px-4 py-2 rounded-2xl flex items-center gap-3 border border-white"
        >
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-white font-black text-xs">L</span>
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Your Looms</p>
            <p className="text-xs font-black text-slate-900">{balance.toLocaleString()}</p>
          </div>
        </motion.div>
      </div>

      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 pointer-events-none">
        <h4 className="text-2xl font-black text-slate-900 mb-2">Turn Effort into Looms</h4>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Hover to Collect Rewards</p>
      </div>
    </div>
  );
}
