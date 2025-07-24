"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "./icons";
import { Button } from "./ui/button";
import { ScrollReveal } from "./animated/scroll-reveal";
import { scaleIn, pulse } from "../lib/animations";
import { JSX } from "react";
import Link from "next/link";

export function PricingSection(): JSX.Element {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <ScrollReveal variants={scaleIn}>
          <div className="max-w-md mx-auto text-center bg-slate-900 p-10 rounded-2xl border border-slate-800">
            <h2 className="text-3xl font-bold text-white">
              Transparent Pricing
            </h2>
            <p className="mt-3 text-gray-400">
              No surprises. Just one simple rate for all card transactions.
            </p>

            <motion.div className="my-8" variants={pulse} animate="pulse">
              <span className="text-5xl font-extrabold text-white">2.9%</span>
              <span className="text-3xl font-bold text-white"> + 30¢</span>
              <span className="block text-gray-400 mt-1">
                per successful transaction
              </span>
            </motion.div>

            <motion.ul
              className="space-y-3 text-left text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                "No setup or monthly fees",
                "Access to all payment methods",
                "24/7 technical support",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <CheckIcon />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button variant="default" className="w-full py-3" asChild>
                <Link href="/signup">Start Accepting Payments</Link>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
