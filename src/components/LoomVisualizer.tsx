"use client";

import { motion } from "framer-motion";
import { Coins, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";

const Coin = ({ delay = 0, left, top }: { delay?: number; left: number; top: number }) => {
  const [collected, setCollected] = useState(false);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1, scale: 1 }}
      animate={collected ? { y: -80, opacity: 0, scale: 1.3 } : { y: [0, -14, 0] }}
      transition={
        collected
          ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
          : { repeat: Infinity, duration: 3, delay, ease: "easeInOut" }
      }
      onMouseEnter={() => !collected && setCollected(true)}
      className="absolute cursor-pointer"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <div className="relative group">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md border-2 border-white relative">
          <span className="text-white font-black text-xs leading-none">L</span>
        </div>
        {collected && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1.4, opacity: 0 }}
            className="absolute -top-3 -right-3 text-secondary"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const COIN_POSITIONS = [
  { left: 15, top: 55 },
  { left: 75, top: 25 },
  { left: 35, top: 20 },
  { left: 60, top: 65 },
  { left: 85, top: 55 },
  { left: 45, top: 75 },
];

export default function LoomVisualizer() {
  const [balance, setBalance] = useState(0);

  return (
    <div className="relative w-full aspect-square md:aspect-video bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
      {/* Interactive Coins */}
      <div className="absolute inset-0 z-10" onMouseEnter={() => setBalance((b) => b + 10)}>
        {COIN_POSITIONS.map((pos, i) => (
          <Coin key={i} delay={i * 0.5} left={pos.left} top={pos.top} />
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <Coins className="w-56 h-56 text-primary" />
      </div>

      {/* Floating HUD */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
        <div className="glass-light px-3 py-2 rounded-xl flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-secondary" />
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Earning Rate</p>
            <p className="text-xs font-black text-slate-900">1.5x Multiplier</p>
          </div>
        </div>

        <div className="glass-light px-3 py-2 rounded-xl flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-white font-black text-[10px]">L</span>
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Your Looms</p>
            <p className="text-xs font-black text-slate-900">{balance.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 pointer-events-none">
        <h4 className="text-2xl font-black text-slate-900 mb-2">Turn Effort into Looms</h4>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Hover to collect</p>
      </div>
    </div>
  );
}
