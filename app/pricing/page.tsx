import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { Link } from "@radix-ui/react-navigation-menu";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

export default function PricingPage(): JSX.Element {
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "2.9% + 30¢",
      description: "Perfect for small businesses and startups",
      features: [
        "Accept all major payment methods",
        "Basic fraud protection",
        "Email support",
        "Standard dashboard",
        "API access",
        "No setup fees",
      ],
      cta: "Get Started",
      href: "/signup",
    },
    {
      name: "Growth",
      price: "2.7% + 30¢",
      description: "For growing businesses with higher volumes",
      features: [
        "Everything in Starter",
        "Advanced fraud protection",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Webhooks",
        "Volume discounts available",
      ],
      popular: true,
      cta: "Start Free Trial",
      href: "/signup?plan=growth",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large businesses with complex needs",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "Advanced reporting",
        "Multi-currency support",
        "Custom pricing",
      ],
      cta: "Contact Sales",
      href: "/contact-sales",
    },
  ];

  return (
    <div className="bg-slate-900 text-gray-300 antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Simple, Transparent
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                {" "}
                Pricing
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
              No hidden fees, no surprises. Choose the plan that fits your
              business needs.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-slate-900 p-8 rounded-2xl border ${
                    tier.popular
                      ? "border-teal-500 relative"
                      : "border-slate-800"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="text-4xl font-extrabold text-white mb-2">
                      {tier.price}
                    </div>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.popular ? "default" : "secondary"}
                    className="w-full py-3 text-center"
                  >
                    <Link href={tier.href} className="text-white">
                      {tier.cta}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Are there any setup fees?
                </h3>
                <p className="text-gray-400">
                  No, there are no setup fees, monthly fees, or hidden charges.
                  You only pay when you successfully process a transaction.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  When do I get paid?
                </h3>
                <p className="text-gray-400">
                  Funds are typically transferred to your bank account within
                  2-3 business days after a successful transaction.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What payment methods do you support?
                </h3>
                <p className="text-gray-400">
                  We support all major credit and debit cards, mobile money,
                  bank transfers, and popular local payment methods across
                  different regions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
