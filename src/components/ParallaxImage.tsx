"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  overlayLabel?: string;
  priority?: boolean;
}

export default function ParallaxImage({ src, alt, className = "", overlayLabel, priority = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY, height: "120%", top: "-10%", position: "relative" }}>
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover"
          priority={priority}
        />
      </motion.div>
      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
      {overlayLabel && (
        <div className="absolute bottom-6 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-primary font-black text-[10px] uppercase tracking-widest shadow-lg z-10">
          {overlayLabel}
        </div>
      )}
    </div>
  );
}
