"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ScrollReveal } from "./animated/scroll-reveal";
import { fadeInUp } from "../lib/animations";
import Link from "next/link";
import { JSX } from "react";

export function FinalCTA(): JSX.Element {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Create an account in minutes and start accepting payments today. No
            long-term contracts, no hidden fees.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-8 py-4" asChild>
              <Link href="/signup">Create Your Free Account </Link>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
