import type { JSX } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { SocialProof } from "@/components/social-proof";
import { FeaturesSection } from "@/components/features-section";
import { DeveloperSection } from "@/components/developer-section";
import { PricingSection } from "@/components/pricing-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { FinancialPrimitivesSection } from "@/components/financial-primitives-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyIndrapaySection } from "@/components/why-indrapay-section";

import { withTitle, META_DESCRIPTION } from "./metadata";
import { HomeAnimated } from "@/components/animated/home-animated";

export const metadata = {
  title: withTitle("Home"),
  description: META_DESCRIPTION,
};

export default function HomePage(): JSX.Element {
  return (
    <HomeAnimated>
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <DeveloperSection />
        <FinancialPrimitivesSection />
        <TestimonialsSection />
        <WhyIndrapaySection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </HomeAnimated>
  );
}
