"use client";

import { motion } from "framer-motion";
import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from "./icons";
import { ScrollReveal } from "./animated/scroll-reveal";
import { staggerContainer, staggerItem, hoverLift } from "@/lib/animations";
import { JSX } from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};
function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverLift as any}
      className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-all cursor-pointer"
    >
      <motion.div
        className="bg-teal-500/10 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{children}</p>
    </motion.div>
  );
}

export function FeaturesSection(): JSX.Element {
  return (
    <section id="solutions" className="py-20 md:py-28 !bg-slate-800/50 z-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A Unified Platform for Growth
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage payments, reduce fraud, and expand
              your business globally.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard icon={<FeatureIcon1 />} title="Accept All Payments">
            From credit cards to mobile money and bank transfers, offer your
            customers their preferred way to pay.
          </FeatureCard>
          <FeatureCard icon={<FeatureIcon2 />} title="Global & Local Reach">
            Instantly tap into new markets with our extensive network of local
            payment methods across continents.
          </FeatureCard>
          <FeatureCard icon={<FeatureIcon3 />} title="Bank-Grade Security">
            Protect your revenue with our PCI-DSS Level 1 compliant systems and
            advanced fraud detection engine.
          </FeatureCard>
        </motion.div>
      </div>
    </section>
  );
}
