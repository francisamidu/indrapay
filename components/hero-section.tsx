"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations";
import { JSX } from "react";
import Link from "next/link";

export function HeroSection(): JSX.Element {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Connecting Your Business to the World with
            <motion.span
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
              variants={staggerItem}
            >
              {" "}
              Seamless Payments
            </motion.span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400"
          >
            Indrapay provides a single, powerful platform to accept payments
            from anyone, anywhere. Simple integration, transparent pricing, and
            unparalleled reach.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" asChild>
                <Link href="/signup">Get Started for Free</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" asChild>
                <Link href="/contact-sales">Talk to Sales</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
