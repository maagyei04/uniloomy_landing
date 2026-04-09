"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const UNIVERSITIES = [
  { id: "ug", name: "University of Ghana", location: "Legon", x: "72%", y: "83%" },
  { id: "knust", name: "KNUST", location: "Kumasi", x: "42%", y: "65%" },
];

export default function CampusMap() {
  return (
    <section id="network" className="w-full max-w-7xl mx-auto py-32 px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Map Container */}
        <div className="flex-1 relative w-full aspect-[3/4] max-w-md bg-slate-50/50 rounded-[4rem] border border-slate-100 p-8 shadow-inner overflow-hidden flex items-center justify-center">
          {/* Detailed Ghana SVG Outline */}
          <svg
            viewBox="0 0 200 300"
            className="w-full h-full fill-white stroke-slate-200 stroke-[1.5px] opacity-60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M45,15 L60,10 L85,10 L110,15 L130,12 L150,18 L160,35 L165,60 L168,85 L162,110 L165,135 L168,160 L165,185 L158,210 L152,235 L140,260 L120,275 L100,285 L80,282 L60,278 L45,265 L35,245 L32,220 L28,195 L32,170 L35,145 L30,120 L35,95 L40,70 L38,45 L42,25 Z" />
          </svg>

          {/* Markers */}
          {UNIVERSITIES.map((uni, i) => (
            <motion.div
              key={uni.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
              className="absolute group z-10"
              style={{ left: uni.x, top: uni.y }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping scale-150" />
                <div className="relative bg-white p-2 rounded-full shadow-lg border-2 border-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[120px]">
                  <div className="glass-light px-3 py-2 rounded-xl text-center shadow-xl border border-white">
                    <p className="text-[10px] font-black text-slate-800 uppercase leading-none mb-1">{uni.name}</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{uni.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="absolute bottom-8 left-0 right-0 text-center px-8">
            <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest leading-relaxed">Can't find your campus?</p>
            <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-tighter bg-white px-4 py-2 rounded-full border border-primary/10 shadow-sm">
              Request for addition
            </button>
          </div>
        </div>


        {/* Text Content */}
        <ScrollReveal direction="right" className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Active Network</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Connecting every <br /><span className="text-primary">Campus in Ghana.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
            Uniloomy isn't just an app; it's a nationwide network. From the lecture halls of Legon to the tech hubs of Kumasi, we're building the future of Ghanaian student life together.
          </p>
          
          <div className="grid grid-cols-2 gap-6 max-w-sm">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-black text-slate-900">5+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Regional Hubs</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-black text-slate-900">12k+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Student Connections</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
