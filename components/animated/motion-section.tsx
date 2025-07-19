"use client"

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import type React from "react"

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
}

export function MotionSection({ children, ...props }: MotionSectionProps) {
  return <motion.section {...props}>{children}</motion.section>
}
