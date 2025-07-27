"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type React from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}
