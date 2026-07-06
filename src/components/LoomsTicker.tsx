"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export default function LoomsTicker() {
  const [count, setCount] = useState(184320);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 7) + 1);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
      <Flame className="w-3.5 h-3.5 text-orange-400" />
      <span>{count.toLocaleString()} Looms earned today</span>
    </div>
  );
}
