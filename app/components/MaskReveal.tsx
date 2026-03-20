"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MaskRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function MaskReveal({
  children,
  duration = 1,
  delay = 0,
  direction = "up",
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    direction === "up"
      ? ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : direction === "down"
        ? ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]
        : direction === "left"
          ? ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
          : ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ clipPath, opacity }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
