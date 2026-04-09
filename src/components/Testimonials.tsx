"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote } from "lucide-react";

const REVIEWS = [
  { name: "Kofi A.", uni: "UG Legon", text: "Finally an app that understands Ghanaian student life. The anonymous posts are pure gold! 😂", color: "bg-blue-50" },
  { name: "Ama S.", uni: "KNUST", text: "Finding campus gigs has never been this easy. Earned my first 500 Looms last week! 💰", color: "bg-green-50" },
  { name: "Kwame B.", uni: "UCC", text: "The study tools are top-notch. Uniloomy is basically my new best friend for exams. 📚", color: "bg-purple-50" },
  { name: "Yaa P.", uni: "Ashesi", text: "Connecting with other campuses is so smooth. Love the UniClips feature! 🎬", color: "bg-pink-50" },
  { name: "Ekow R.", uni: "UPSA", text: "The marketplace is a lifesaver. Sold my old textbooks in 2 hours flat. ⚡", color: "bg-orange-50" },
  { name: "Abena M.", uni: "GIMPA", text: "Secure, fun, and actually useful. Best student app in Ghana, no cap. 🧢🔥", color: "bg-teal-50" },
];

export default function Testimonials() {
  return (
    <section className="w-full py-32 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">Campus Buzz</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">What the <span className="text-primary-light">Streets</span> are Saying.</h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 md:gap-8 animate-scroll hover:pause px-6">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div 
                key={i} 
                className={`flex-shrink-0 w-[320px] md:w-[400px] glass-light p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50 relative overflow-hidden`}
              >
                <Quote className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 text-slate-200 opacity-20" />
                <div className="flex items-center gap-4 mb-4 md:mb-6">

                  <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center font-black text-slate-400 border border-white shadow-sm`}>
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.uni}</p>
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
