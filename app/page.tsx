"use client";

import { motion } from "framer-motion";
import { Header } from "../components/header";
import HeroSection from "../components/hero-section";
import { SocialProof } from "../components/social-proof";
import { FeaturesSection } from "../components/features-section";
import { DeveloperSection } from "../components/developer-section";
import { PricingSection } from "../components/pricing-section";
import { FinalCTA } from "../components/final-cta";
import { Footer } from "../components/footer";
import type { JSX } from "react"; // Declare JSX variable
import { FinancialPrimitivesSection } from "@/components/financial-primitives-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage(): JSX.Element {
  return (
    <motion.div
      className="bg-slate-900 text-gray-300 antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <DeveloperSection />
        <FinancialPrimitivesSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
