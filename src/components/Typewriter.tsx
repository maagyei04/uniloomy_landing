"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export default function Typewriter({ text, className = "", delay = 0 }: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Initial delay before starting the typing
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setComplete(true);
        }
      }, 70); // Typing speed
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!complete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[4px] h-[0.8em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
}
