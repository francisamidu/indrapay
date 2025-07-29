import type { JSX } from "react";
import HeroSection from "@/components/hero-section";
import { SocialProof } from "@/components/social-proof";
import { FeaturesSection } from "@/components/features-section";
import { DeveloperSection } from "@/components/developer-section";
import { PricingSection } from "@/components/pricing-section";
import { FinalCTA } from "@/components/final-cta";
import { FinancialPrimitivesSection } from "@/components/financial-primitives-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyIndrapaySection } from "@/components/why-indrapay-section";

import { withTitle, META_DESCRIPTION } from "./metadata";

export const metadata = {
  title: withTitle("Home"),
  description: META_DESCRIPTION,
};

export default function HomePage(): JSX.Element {
  return (
    <main className="overflow-x-hidden">
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
  );
}
