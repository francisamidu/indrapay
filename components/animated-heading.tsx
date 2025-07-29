// AnimatedHeading.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewritter";
import { fadeInUp, staggerItem } from "@/lib/animations";

const letterVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.02 },
  }),
};

export function AnimatedHeading() {
  const { text } = useTypewriter({
    words: ["Seamless Payments", "Cross-Border Payments", "Global Payouts"],
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 1500,
    loop: true,
  });

  return (
    <motion.h1
      variants={fadeInUp}
      className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
    >
      Connecting Your Business to the World with{" "}
      <motion.span
        className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
        variants={staggerItem}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={`${char === " " ? "space" : char}-${i}`}
            custom={i}
            variants={letterVariant}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <span className="inline-block animate-blink text-3xl font-light">
          _
        </span>
      </motion.span>
    </motion.h1>
  );
}
