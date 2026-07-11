"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

// TODO: replace with the real TestFlight public link and Google Play closed-testing opt-in URL.
const TESTFLIGHT_URL = "https://testflight.apple.com/join/wN1q1yzJ";
const PLAY_TESTING_URL = "https://play.google.com/apps/testing/com.michantech.uniloomy";
// EAS Build "internal distribution" artifact link — update this whenever you cut a new test build.
const APK_URL = "https://expo.dev/accounts/ybliss/projects/uniloomy/builds/d0c18309-2388-471e-967f-3122ca3578ac";

export default function DownloadCTA() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/10 border border-slate-800 transition-colors hover:bg-slate-800"
        >
          {/* Simple Apple Logo SVG */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 384 512">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Join via TestFlight</span>
            <span className="text-sm font-black uppercase tracking-widest">iOS Beta</span>
          </span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={PLAY_TESTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 border border-primary-light transition-colors hover:bg-primary-light"
        >
          {/* Simple Play Store SVG */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 512 512">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Closed Testing</span>
            <span className="text-sm font-black uppercase tracking-widest">Android Beta</span>
          </span>
        </motion.a>
      </div>
      <p className="text-xs text-slate-400 font-medium">
        Uniloomy is in private beta — joining adds you as a tester via Apple TestFlight or Google Play, no app store listing yet.
      </p>

      <a
        href={APK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors"
      >
        <Download className="w-3.5 h-3.5" />
        Android: skip the wait, download the APK directly
      </a>
      <p className="text-[11px] text-slate-400 font-medium text-center -mt-2">
        Requires enabling &quot;install from unknown sources&quot; on your device, and won&apos;t auto-update — use Closed Testing above for the smoothest experience.
      </p>
    </div>
  );
}
