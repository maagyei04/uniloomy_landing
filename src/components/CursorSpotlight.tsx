"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = `${e.clientX}px`;
      spotRef.current.style.top = `${e.clientY}px`;
      spotRef.current.style.opacity = "1";
    };
    const leave = () => {
      if (spotRef.current) spotRef.current.style.opacity = "0";
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed z-0 opacity-0 transition-opacity duration-300"
      style={{
        width: 480,
        height: 480,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(26,35,126,0.18) 0%, rgba(77,111,255,0.07) 40%, transparent 70%)",
        filter: "blur(2px)",
      }}
    />
  );
}
