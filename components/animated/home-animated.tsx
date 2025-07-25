"use client";
import { motion } from "framer-motion";
import React from "react";

export const HomeAnimated = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="bg-slate-900 text-gray-300 antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
