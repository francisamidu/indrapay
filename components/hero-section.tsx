"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { AnimatedFinanceBackground } from "./ui/animated-finance-background";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Link from "next/link";
import { AnimatedHeading } from "./animated-heading";

const HeroSectionWithBackground = () => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <AnimatedFinanceBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <AnimatedHeading />

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
            <motion.div
              className="w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="md:w-fit w-[250px]"
                variant="default"
                size="lg"
                asChild
              >
                <Link href="/sign-up">Get Started for Free</Link>
              </Button>
            </motion.div>
            <motion.div
              className="w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="md:w-fit w-[250px]"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
};
export default HeroSectionWithBackground;
