"use client";

import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";

export default function Mockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[520px] mx-auto flex justify-center items-end pt-2"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-0 -mr-16 md:-mr-24 rotate-[-8deg] translate-y-4"
      >
        <PhoneFrame src="/assets/screenshots/studyhub.png" alt="Uniloomy Earn Looms screen" className="w-[150px] md:w-[190px] shadow-xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="relative z-10"
      >
        <PhoneFrame src="/assets/screenshots/home.png" alt="Uniloomy Study Hub screen" className="w-[190px] md:w-[240px]" priority />
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative z-0 -ml-16 md:-ml-24 rotate-[8deg] translate-y-6"
      >
        <PhoneFrame src="/assets/screenshots/gigs.png" alt="Uniloomy Campus Gigs screen" className="w-[150px] md:w-[190px] shadow-xl" />
      </motion.div>
    </motion.div>
  );
}
