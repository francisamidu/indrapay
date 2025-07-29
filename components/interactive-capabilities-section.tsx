"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "./animated/scroll-reveal"
import { fadeInUp } from "../lib/animations"

interface Service {
  name: string
  description: string
}

interface Capability {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  services: Service[]
}

export function InteractiveCapabilitiesSection() {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null)

  const capabilities: Capability[] = [
    {
      id: "send",
      title: "Send",
      color: "from-orange-400 to-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      services: [
        { name: "Cross-Border Transfers", description: "Send money to 50+ countries instantly" },
        { name: "Bulk Payouts", description: "Process thousands of payments simultaneously" },
        { name: "Supplier Payments", description: "Pay international suppliers efficiently" },
        { name: "Employee Remittances", description: "Global payroll and salary transfers" },
      ],
    },
    {
      id: "receive",
      title: "Receive",
      color: "from-blue-400 to-blue-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12H3m0 0l7-7m-7 7l7 7" />
        </svg>
      ),
      services: [
        { name: "Local Payment Methods", description: "Accept UPI, Alipay, SEPA, and more" },
        { name: "Credit Card Processing", description: "Visa, Mastercard, and regional cards" },
        { name: "Bank Transfers", description: "Direct bank account collections" },
        { name: "Digital Wallets", description: "PayPal, Apple Pay, Google Pay integration" },
      ],
    },
    {
      id: "convert",
      title: "Convert",
      color: "from-teal-400 to-teal-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      services: [
        { name: "Multi-Currency Wallets", description: "Hold and manage 50+ currencies" },
        { name: "Real-Time FX", description: "Live exchange rates and conversions" },
        { name: "Hedging Tools", description: "Protect against currency fluctuations" },
        { name: "Auto-Convert", description: "Automatic currency conversion rules" },
      ],
    },
  ]

  return (
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Indrapay's capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to build global payment experiences. Hover over each capability to explore our
                services.
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
                  onMouseLeave={() => setHoveredCapability(null)}
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

                    <h3 className="text-2xl font-bold mb-2">{capability.title}</h3>
                    <p
                      className={`text-sm ${hoveredCapability === capability.id ? "text-white/80" : "text-slate-600"}`}
                    >
                      {capability.id === "send" && "Cross-border payments and global payouts"}
                      {capability.id === "receive" && "Accept payments from global customers"}
                      {capability.id === "convert" && "Multi-currency wallets and FX services"}
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
            <div className="relative min-h-[300px]">
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
                                <p className="text-gray-400 text-sm">{service.description}</p>
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
                          {capabilities.find((cap) => cap.id === hoveredCapability)?.title.toLowerCase()} capabilities
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

              {/* Default State */}
              {!hoveredCapability && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Hover over a capability to explore our services</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20 pt-16 border-t border-slate-800">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
                  <div className="text-gray-400">Countries supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">100+</div>
                  <div className="text-gray-400">Payment methods</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime guarantee</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">24/7</div>
                  <div className="text-gray-400">Developer support</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
