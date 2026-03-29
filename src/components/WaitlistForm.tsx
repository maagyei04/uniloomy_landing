"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      // Simulate API call
      await new Promise(r => setTimeout(r, 800));
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 flex flex-col items-center text-center space-y-4 border-primary/20 bg-primary/[0.02]"
          >
            <div className="relative w-16 h-16 mb-2">
              <Image 
                src="/assets/icon.png" 
                alt="UniLoomy Icon" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-2 text-primary-light font-black uppercase tracking-widest text-sm">
              <CheckCircle2 className="w-4 h-4" />
              You&apos;re In!
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Thanks for joining the waitlist. We&apos;ll reach out to <span className="text-white font-bold">{email}</span> as soon as we launch.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="university-email@edu.gh"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-xl glass border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-light/50 transition-colors bg-white/[0.01]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-primary-light hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              {loading ? "Joining..." : "Get Early Access"}
              {!loading && <Send className="w-4 h-4" />}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
