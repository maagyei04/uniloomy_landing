"use client";

import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative aspect-[9/19.5] rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-900/20 overflow-hidden ${className}`}>
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-10" />
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 320px, 60vw" className="object-cover object-top" priority={priority} />
    </div>
  );
}
