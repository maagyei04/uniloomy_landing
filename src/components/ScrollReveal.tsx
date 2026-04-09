"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
  stagger?: number;
}

const variants: any = {
  hidden: (direction: string) => ({
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    scale: direction === "scale" ? 0.9 : 1,
  }),
  visible: (custom: { delay: number; stagger: number }) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      delay: custom.delay,
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: custom.stagger,
    },
  }),
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  stagger = 0,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={variants}
      custom={{ delay, stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

