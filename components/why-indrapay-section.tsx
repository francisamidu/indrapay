"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./animated/scroll-reveal";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

export function WhyIndrapaySection() {
  const reasons = [
    {
      number: "01",
      title: "Built for global scale",
      description:
        "We connect directly to local payment networks and central banks worldwide, with dedicated infrastructure built from the ground up. No middleware, no delays - just direct access to the global financial system.",
    },
    {
      number: "02",
      title: "Compliance-first approach",
      description:
        "We are a team of experienced compliance experts focused on helping you navigate cross-border regulations. We expose tools to give you transparency and visibility into our compliance program, moving fast and efficiently.",
    },
    {
      number: "03",
      title: "Developer-focused partners",
      description:
        "We are the only payment platform that is dedicated to providing services to developers and builders, and nothing else. We do not operate competing programs nor are we distracted by other business lines.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Distinctive Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
        {/* Hexagonal/Geometric Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(20, 184, 166, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75px 75px, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(45deg, transparent 24px, rgba(71, 85, 105, 0.1) 25px, rgba(71, 85, 105, 0.1) 26px, transparent 27px, transparent 74px, rgba(71, 85, 105, 0.1) 75px, rgba(71, 85, 105, 0.1) 76px, transparent 77px),
              linear-gradient(-45deg, transparent 24px, rgba(71, 85, 105, 0.05) 25px, rgba(71, 85, 105, 0.05) 26px, transparent 27px, transparent 74px, rgba(71, 85, 105, 0.05) 75px, rgba(71, 85, 105, 0.05) 76px, transparent 77px)
            `,
            backgroundSize: "50px 50px, 100px 100px, 100px 100px, 100px 100px",
            backgroundPosition: "0 0, 0 0, 0 0, 0 0",
          }}
        />

        {/* Additional geometric pattern layer */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(circle, black 1px, transparent 1px)",
            maskSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variants={fadeInUp}>
            <div className="mb-16">
              {/* Section Label */}
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-teal-400 mr-3"></div>
                <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
                  Why Indrapay
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 max-w-4xl">
                Created by fintech engineers and founders,{" "}
                <span className="text-gray-400">
                  we built Indrapay from the ground up to solve our own
                  cross-border payment challenges
                </span>
              </h2>

              {/* About Link */}
              <motion.a
                href="/about"
                className="inline-flex items-center text-white font-medium hover:text-teal-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                About our company
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Three Reasons Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                variants={staggerItem}
                className="space-y-4"
              >
                {/* Number */}
                <div className="text-2xl font-bold text-gray-500 mb-4">
                  {reason.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}
