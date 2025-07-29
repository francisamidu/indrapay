"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./header";
import { Footer } from "./footer";
import { Button } from "./ui/button";
import { ScrollReveal } from "./animated/scroll-reveal";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/lib/animations";
import { useState } from "react";
import Link from "next/link";
import { Mail01Icon } from "hugeicons-react";
import { useWidth } from "@/hooks/use-width";

interface Product {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
}

interface Service {
  name: string;
  description: string;
}

interface Capability {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  services: Service[];
}

export const Products = () => {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(
    null
  );

  const capabilities: Capability[] = [
    {
      id: "send",
      title: "Send",
      color: "from-orange-400 to-orange-500",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      services: [
        {
          name: "Cross-Border Transfers",
          description: "Send money to 50+ countries instantly",
        },
        {
          name: "Bulk Payouts",
          description: "Process thousands of payments simultaneously",
        },
        {
          name: "Supplier Payments",
          description: "Pay international suppliers efficiently",
        },
        {
          name: "Employee Remittances",
          description: "Global payroll and salary transfers",
        },
      ],
    },
    {
      id: "receive",
      title: "Receive",
      color: "from-blue-400 to-blue-500",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12H3m0 0l7-7m-7 7l7 7"
          />
        </svg>
      ),
      services: [
        {
          name: "Local Payment Methods",
          description: "Accept UPI, Alipay, SEPA, and more",
        },
        {
          name: "Credit Card Processing",
          description: "Visa, Mastercard, and regional cards",
        },
        {
          name: "Bank Transfers",
          description: "Direct bank account collections",
        },
        {
          name: "Digital Wallets",
          description: "PayPal, Apple Pay, Google Pay integration",
        },
      ],
    },
    {
      id: "convert",
      title: "Convert",
      color: "from-teal-400 to-teal-500",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      services: [
        {
          name: "Multi-Currency Wallets",
          description: "Hold and manage 50+ currencies",
        },
        {
          name: "Real-Time FX",
          description: "Live exchange rates and conversions",
        },
        {
          name: "Hedging Tools",
          description: "Protect against currency fluctuations",
        },
        {
          name: "Auto-Convert",
          description: "Automatic currency conversion rules",
        },
      ],
    },
  ];

  const products: Product[] = [
    {
      id: "global-businesses",
      icon: "🏢",
      title: "Global Businesses",
      description:
        "Enterprise-grade payment infrastructure for companies operating across multiple markets.",
      features: [
        "Multi-currency accounts",
        "Bulk payment processing",
        "Advanced reporting",
        "Dedicated support",
      ],
      cta: "Learn more",
      href: "/products/global-businesses",
    },
    {
      id: "fintech-platforms",
      icon: "💳",
      title: "Fintech Platforms",
      description:
        "White-label payment solutions and APIs for fintech companies and digital platforms.",
      features: [
        "White-label solutions",
        "Flexible APIs",
        "Compliance tools",
        "Revenue sharing",
      ],
      cta: "Learn more",
      href: "/products/fintech-platforms",
    },
    {
      id: "marketplaces",
      icon: "🛒",
      title: "Marketplaces",
      description:
        "Split payments, escrow services, and multi-party settlement for online marketplaces.",
      features: [
        "Split payments",
        "Escrow services",
        "Seller onboarding",
        "Dispute management",
      ],
      cta: "Learn more",
      href: "/products/marketplaces",
    },
    {
      id: "remittance-providers",
      icon: "💸",
      title: "Remittance Providers",
      description:
        "Cost-effective cross-border transfer solutions for money service businesses.",
      features: [
        "Low-cost transfers",
        "Local payout methods",
        "Compliance automation",
        "Real-time tracking",
      ],
      cta: "Learn more",
      href: "/products/remittance",
    },
    {
      id: "digital-banks",
      icon: "🏦",
      title: "Digital Banks",
      description:
        "Banking-as-a-Service infrastructure for digital banks and neobanks worldwide.",
      features: [
        "Banking APIs",
        "Account management",
        "Card issuing",
        "Regulatory support",
      ],
      cta: "Learn more",
      href: "/products/digital-banks",
    },
    {
      id: "developers",
      icon: "👨‍💻",
      title: "Developers",
      description:
        "Comprehensive APIs, SDKs, and developer tools for custom payment integrations.",
      features: [
        "RESTful APIs",
        "Multiple SDKs",
        "Sandbox environment",
        "24/7 support",
      ],
      cta: "Learn more",
      href: "/products/developers",
    },
  ];

  const width = useWidth();

  return (
    <motion.div
      className="bg-slate-900 text-gray-300 antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="md:max-w-screen-xl px-4 md:px-12 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center">
              <ScrollReveal className="w-fit" variants={fadeInLeft}>
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-yellow-400/80 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm mb-8">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    Cross-Border Payments
                  </div>

                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                    Global payments
                    <br />
                    made simple
                  </h1>

                  <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                    Accept, send, and manage payments across 50+ countries with
                    our unified API. From local payment methods to instant
                    settlements.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="default" size="lg">
                      Contact us
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </Button>
                    <Button variant="outline" size="lg">
                      Read the docs
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                className="w-fit mt-12 md:mt-0"
                variants={fadeInRight}
                delay={0.2}
              >
                <div className="relative">
                  {/* Code Editor Window */}
                  <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Window Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-gray-400 text-sm font-mono">
                        indrapay-api.js
                      </span>
                    </div>

                    {/* Code Content */}
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-1">
                        <div className="flex">
                          <span className="text-gray-500 w-6">1</span>
                          <span className="text-purple-400">await</span>
                          <span className="text-white ml-2">
                            indrapay.payments.
                          </span>
                          <span className="text-yellow-400">create</span>
                          <span className="text-white">({"{"}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-6">2</span>
                          <span className="text-cyan-300 ml-4">amount</span>
                          <span className="text-white">: </span>
                          <span className="text-orange-400">50000</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-6">3</span>
                          <span className="text-cyan-300 ml-4">currency</span>
                          <span className="text-white">: </span>
                          <span className="text-green-400">"USD"</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-6">4</span>
                          <span className="text-cyan-300 ml-4">
                            destination
                          </span>
                          <span className="text-white">: </span>
                          <span className="text-green-400">"EUR"</span>
                          <span className="text-white">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-6">5</span>
                          <span className="text-cyan-300 ml-4">recipient</span>
                          <span className="text-white">: </span>
                          <span className="text-green-400">
                            "DE89370400..."
                          </span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-6">6</span>
                          <span className="text-white">{"});"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Payment Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute md:-bottom-4 -bottom-16 md:-left-8 left-0 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                  >
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      $500.00
                    </div>
                    <div className="text-gray-500 text-sm">Account ••1234</div>
                    <div className="mt-3 h-12 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 rounded-lg opacity-60"></div>
                  </motion.div>

                  {/* Floating Notification Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute md:-top-4 md:-right-8 hidden md:block bg-yellow-400 text-slate-900 rounded-xl shadow-lg p-4 font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      Cross-border sent
                    </div>
                    <div className="text-lg font-bold">-€425.50</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="absolute md:-top-4 md:-right-8 hidden md:block bg-teal-500 text-white rounded-xl shadow-lg p-4 font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Payment received
                    </div>
                    <div className="text-lg font-bold">+₹41,250</div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                      radial-gradient(circle at 2px 2px, rgb(20 184 166) 1px, transparent 0)
                    `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal variants={fadeInUp}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Indrapay's capabilities
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Everything you need to build global payment experiences.
                    Hover over each capability to explore our services.
                  </p>
                </div>
              </ScrollReveal>

              <div className="relative">
                {/* Capability Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {capabilities.map((capability) => (
                    <motion.div
                      key={capability.id}
                      className="relative"
                      onMouseEnter={() => setHoveredCapability(capability.id)}
                    >
                      <motion.div
                        className={`relative rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                          hoveredCapability === capability.id
                            ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-2xl shadow-teal-500/25"
                            : "bg-white text-slate-900 hover:shadow-xl"
                        }`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon Circle */}
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                            hoveredCapability === capability.id
                              ? "bg-white/20 text-white"
                              : `bg-gradient-to-br ${capability.color} text-white`
                          }`}
                        >
                          {capability.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                          {capability.title}
                        </h3>
                        <p
                          className={`text-sm ${
                            hoveredCapability === capability.id
                              ? "text-white/80"
                              : "text-slate-600"
                          }`}
                        >
                          {capability.id === "send" &&
                            "Cross-border payments and global payouts"}
                          {capability.id === "receive" &&
                            "Accept payments from global customers"}
                          {capability.id === "convert" &&
                            "Multi-currency wallets and FX services"}
                        </p>

                        {/* Hover Indicator */}
                        {hoveredCapability === capability.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rotate-45 border-4 border-slate-900"
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Expanded Services */}
                <div
                  className="relative min-h-[300px]"
                  onMouseLeave={() => setHoveredCapability(null)}
                >
                  <AnimatePresence mode="wait">
                    {hoveredCapability && (
                      <motion.div
                        key={hoveredCapability}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                          <div className="grid md:grid-cols-2 gap-6">
                            {capabilities
                              .find((cap) => cap.id === hoveredCapability)
                              ?.services.map((service, index) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900/70 transition-colors group cursor-pointer"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                                    <svg
                                      className="w-5 h-5 text-teal-400"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                      />
                                    </svg>
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-white font-semibold mb-1 group-hover:text-teal-300 transition-colors">
                                      {service.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                      {service.description}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                          </div>

                          {/* CTA */}
                          <div className="mt-8 text-center">
                            <motion.a
                              href="/docs"
                              className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium group"
                              whileHover={{ x: 5 }}
                            >
                              Learn more about{" "}
                              {capabilities
                                .find((cap) => cap.id === hoveredCapability)
                                ?.title.toLowerCase()}{" "}
                              capabilities
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
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Stats Section */}
              <ScrollReveal delay={0.4}>
                <div className="mt-20 pt-16 border-t border-slate-800">
                  <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-teal-400 mb-2">
                        50+
                      </div>
                      <div className="text-gray-400">Countries supported</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-teal-400 mb-2">
                        100+
                      </div>
                      <div className="text-gray-400">Payment methods</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-teal-400 mb-2">
                        99.9%
                      </div>
                      <div className="text-gray-400">Uptime guarantee</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-teal-400 mb-2">
                        24/7
                      </div>
                      <div className="text-gray-400">Developer support</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Products Grid Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Who can benefit from Indrapay's payment solutions
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  From startups to enterprises, our flexible platform serves
                  businesses across industries and use cases
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
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-6">{product.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={product.href}
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium group"
                    whileHover={{ x: 5 }}
                  >
                    {product.cta}
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 md:py-28 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variants={fadeInLeft}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Why use our cross-border solutions?
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Global interoperability
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Our payment flow is optimized for each market, and
                        powered by deep local insight in developed, developing
                        and emerging economies. From traditional banking rails
                        to mobile money, we give you payment technologies that
                        truly matter.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Direct, uniquely wide network
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Our network connects you to 7 billion bank accounts and
                        1.5 billion wallets. No hidden fees. No endless delays.
                        Just quick, transparent and cost-effective payment
                        solutions in every corner of the world.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Instant, traceable transactions
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        We have built the world's premier real-time payment
                        rails, where 90% of transactions are instant. For the
                        remaining ones, you get full visibility over FX rates
                        and fees and real-time transaction status monitoring -
                        so you know exactly when the money will arrive.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variants={fadeInRight} delay={0.2}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">7B+</div>
                        <div className="text-sm opacity-90">Bank accounts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">1.5B+</div>
                        <div className="text-sm opacity-90">Mobile wallets</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">50+</div>
                        <div className="text-sm opacity-90">Countries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">90%</div>
                        <div className="text-sm opacity-90">
                          Instant transfers
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold mb-2">
                        Global reach, local expertise
                      </div>
                      <div className="text-sm opacity-90">
                        Connecting businesses worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="md:container mx-auto px-2 md:px-6">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                             radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
                           `,
                    backgroundSize: "50px 50px, 30px 30px",
                  }}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-start relative z-10">
                {/* Left Column */}
                <ScrollReveal className="md:mb-0 mb-6" variants={fadeInLeft}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Start building today
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                      Unmatched access to global payment networks, local banking
                      rails, and cross-border infrastructure. You're in the
                      driver's seat to build your own payment products, on your
                      terms, without layers in between.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors group"
                          href="/signup"
                        >
                          Start building
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
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center px-6 py-3 bg-blue-800/50 text-white font-semibold rounded-lg hover:bg-blue-700/50 transition-colors border border-blue-300"
                        >
                          Contact Sales
                          <Mail01Icon className="w-4 h-4 ml-2" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Right Column - Resource Cards */}
                <ScrollReveal variants={fadeInRight} delay={0.2}>
                  <div className="space-y-4">
                    <motion.a
                      href="/docs"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center  md:justify-between md:p-6 p-3 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-600/60 hover:border-blue-500/40 transition-all group"
                    >
                      <div className="flex md:items-start items-center md:space-x-4">
                        <div className="md:w-10 md:h-10 w-8 h-8 bg-blue-500/20 mr-2 md:mr-0  rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-blue-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            Documentation
                          </h3>
                          {width < 768 ? null : (
                            <p className="text-blue-200 text-sm">
                              Explore and familiarize yourself with our APIs
                            </p>
                          )}
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-blue-300 transform group-hover:translate-x-1 transition-transform"
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

                    <motion.a
                      href="/developers"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center justify-between md:p-6 p-3 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-600/60 hover:border-blue-500/40 transition-all group"
                    >
                      <div className="flex items-center md:items-start md:space-x-4">
                        <div className="md:w-10 md:h-10 w-8 h-8 bg-blue-500/20 mr-2 md:mr-0 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-blue-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            Getting Started
                          </h3>
                          {width < 768 ? null : (
                            <p className="text-blue-200 text-sm">
                              Quickly get up to speed with our platform
                            </p>
                          )}
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-blue-300 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};
