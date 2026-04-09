"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  { 
    q: "How do I earn Looms?", 
    a: "You earn Looms by being an active part of the community! Share quality study materials, participate in campus challenges, and engage with peers. High-quality contributions receive the most rewards." 
  },
  { 
    q: "What exactly is an Anonymous Post?", 
    a: "Anonymous posts allow you to share thoughts or seek advice secretly with your campus. To keep things fresh and safe, these posts automatically delete after 24 to 72 hours." 
  },
  { 
    q: "Can I change my university after verification?", 
    a: "University verification is tied to your student ID. If you transfer or need to update your campus, you can contact support through the app settings to re-verify your new campus." 
  },
  { 
    q: "How do I report inappropriate content?", 
    a: "Safety is our priority. Every post and UniClip has a report button. Once reported, our moderation team reviews the content against our community guidelines within minutes." 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full max-w-4xl mx-auto py-32 px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
          <HelpCircle className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">Got Questions?</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Your <span className="text-primary-light">Answers</span>.</h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="glass-light rounded-3xl overflow-hidden border border-white shadow-sm hover:shadow-md transition-shadow">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <span className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors">{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100"
              >
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
