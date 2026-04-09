"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowUp, ArrowDown, Medal } from "lucide-react";

const LEADERS = [
  { rank: 1, name: "Jessica T.", looms: 12540, change: "up", uni: "Ashesi" },
  { rank: 2, name: "Prince O.", looms: 10200, change: "up", uni: "UG Legon" },
  { rank: 3, name: "Nana Yaw", looms: 9800, change: "down", uni: "KNUST" },
  { rank: 4, name: "Fatima B.", looms: 8500, change: "up", uni: "UPSA" },
  { rank: 5, name: "Derick S.", looms: 7200, change: "up", uni: "UCC" },
];

export default function Leaderboard() {
  return (
    <div className="w-full glass-light p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12 relative z-10 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full mb-3">
             <Trophy className="w-3 h-3 text-primary" />
             <span className="text-[8px] font-black text-primary uppercase tracking-widest">Global Ranking</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900">Campus Leaderboard</h3>
        </div>
        <div className="md:text-right">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total Distributed</p>
          <p className="text-lg md:text-xl font-black text-primary">2.5M Looms 💎</p>
        </div>
      </div>


      <div className="space-y-4 relative z-10">
        {LEADERS.map((user, i) => (
          <motion.div
            key={user.rank}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-white/80 hover:border-primary/20 transition-all hover:shadow-lg group/row"
          >
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                user.rank === 1 ? "bg-yellow-400 text-white" : 
                user.rank === 2 ? "bg-slate-300 text-slate-600" : 
                user.rank === 3 ? "bg-orange-400 text-white" : "bg-slate-100 text-slate-400"
              }`}>
                {user.rank <= 3 ? <Medal className="w-4 h-4" /> : user.rank}
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm group-hover/row:text-primary transition-colors">{user.name}</h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase">{user.uni}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-black text-slate-900">{user.looms.toLocaleString()}</p>
                <p className="text-[8px] font-bold text-slate-400">Looms</p>
              </div>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${user.change === "up" ? "bg-green-50" : "bg-red-50"}`}>
                {user.change === "up" ? (
                  <ArrowUp className="w-3 h-3 text-green-500" />
                ) : (
                  <ArrowDown className="w-3 h-3 text-red-500" />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <span>Updates every 24h</span>
        <button className="text-primary hover:underline">View All Rankings</button>
      </div>
    </div>
  );
}
