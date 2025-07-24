"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "./icons";

interface TabData {
  id: string;
  title: string;
  code: string;
  description: string;
  features: string[];
}

const tabsData: TabData[] = [
  {
    id: "cross-border-payment",
    title: "Process cross-border payments",
    code: `await indrapay.payments.create({
  amount: 50000,
  currency: "USD",
  destination_currency: "EUR",
  recipient: {
    name: "Acme Europe Ltd",
    country: "DE",
    bank_code: "DEUTDEFF",
    account_number: "DE89370400440532013000"
  },
  sender: {
    name: "Tech Startup Inc",
    country: "US"
  },
  purpose: "software_licensing",
  reference: "INV-2024-001"
});`,
    description: "Send money across borders with competitive exchange rates",
    features: [
      "Real-time FX rates",
      "50+ currencies supported",
      "Transparent fees",
      "Same-day settlement",
    ],
  },
  {
    id: "multi-currency-wallet",
    title: "Create multi-currency wallets",
    code: `await indrapay.wallets.create({
  customer_id: "cust_global_business_001",
  currencies: ["USD", "EUR", "GBP", "JPY", "SGD"],
  wallet_type: "business",
  auto_convert: {
    enabled: true,
    base_currency: "USD",
    threshold: 10000
  },
  compliance: {
    kyb_verified: true,
    jurisdiction: "US"
  }
});`,
    description: "Hold and manage multiple currencies in one wallet",
    features: [
      "50+ currencies",
      "Auto-conversion rules",
      "Real-time balances",
      "Compliance ready",
    ],
  },
  {
    id: "fx-conversion",
    title: "Convert currencies instantly",
    code: `await indrapay.fx.convert({
  from_currency: "USD",
  to_currency: "EUR",
  amount: 100000,
  rate_type: "market", // or "locked"
  wallet_id: "wallet_multi_curr_001",
  execution: "immediate",
  metadata: {
    purpose: "supplier_payment",
    reference: "PO-2024-Q1-001"
  }
});`,
    description: "Convert between currencies at competitive rates",
    features: [
      "Live market rates",
      "Rate locking available",
      "Instant execution",
      "Bulk conversions",
    ],
  },
  {
    id: "local-payment-methods",
    title: "Accept local payment methods",
    code: `await indrapay.paymentMethods.create({
  country: "IN",
  method: "upi",
  customer: {
    phone: "+91-9876543210",
    upi_id: "customer@paytm"
  },
  amount: 250000, // INR
  currency: "INR",
  auto_settle: {
    currency: "USD",
    account: "settlement_usd_001"
  }
});`,
    description: "Accept payments via local methods worldwide",
    features: [
      "UPI, Alipay, SEPA, PIX",
      "Local currency collection",
      "Auto-settlement",
      "Regional compliance",
    ],
  },
  {
    id: "compliance-screening",
    title: "Screen transactions for compliance",
    code: `await indrapay.compliance.screen({
  transaction_id: "txn_cross_border_001",
  screening_type: "comprehensive",
  checks: [
    "sanctions_list",
    "pep_screening", 
    "adverse_media",
    "country_restrictions"
  ],
  customer_data: {
    name: "Global Trading Corp",
    country: "SG",
    business_type: "import_export"
  }
});`,
    description: "Automated compliance screening for all transactions",
    features: [
      "AML/KYC automation",
      "Sanctions screening",
      "PEP checks",
      "Real-time monitoring",
    ],
  },
  {
    id: "settlement-rails",
    title: "Route via optimal settlement rails",
    code: `await indrapay.settlement.route({
  amount: 75000,
  from_country: "US",
  to_country: "BR",
  currency_pair: "USD/BRL",
  priority: "cost_optimized", // or "speed_optimized"
  rails: {
    preferred: ["swift", "pix", "correspondent"],
    exclude: ["crypto"]
  },
  settlement_time: "T+1"
});`,
    description: "Intelligent routing through global payment networks",
    features: [
      "SWIFT network",
      "Local rails (PIX, UPI)",
      "Cost optimization",
      "Speed optimization",
    ],
  },
  {
    id: "global-payouts",
    title: "Send bulk global payouts",
    code: `await indrapay.payouts.createBatch({
  batch_id: "payout_batch_q1_2024",
  total_amount: 500000,
  base_currency: "USD",
  recipients: [
    {
      name: "Freelancer India",
      country: "IN",
      amount: 50000,
      currency: "INR",
      method: "bank_transfer"
    },
    {
      name: "Supplier Europe",
      country: "DE", 
      amount: 25000,
      currency: "EUR",
      method: "sepa_instant"
    }
  ],
  schedule: "immediate"
});`,
    description: "Send payments to multiple recipients globally",
    features: [
      "Bulk processing",
      "Mixed currencies",
      "Scheduled payouts",
      "Delivery tracking",
    ],
  },
];

export function FinancialPrimitivesSection() {
  const [activeTab, setActiveTab] = useState("cross-border-payment");
  const activeTabData =
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  const highlightCode = (code: string) => {
    return code
      .replace(
        /\b(await|const|let|var|function|return|if|else|for|while|try|catch)\b(?![^<]*>)/g,
        '<span class="text-purple-400 font-medium">$1</span>'
      )
      .replace(
        /\b(indrapay)\./g,
        '<span class="text-blue-400 font-medium">$1</span><span class="text-gray-300">.</span>'
      )
      .replace(
        /\.(create|convert|screen|route|createBatch)\(/g,
        '<span class="text-gray-300">.</span><span class="text-yellow-400 font-medium">$1</span><span class="text-gray-300">(</span>'
      )
      .replace(/"([^"]+)"/g, '<span class="text-green-400">"$1"</span>')
      .replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
      .replace(
        /([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
        '<span class="text-cyan-300">$1</span><span class="text-gray-300">:</span>'
      )
      .replace(/\{/g, '<span class="text-gray-300">{</span>')
      .replace(/\}/g, '<span class="text-gray-300">}</span>')
      .replace(/\[/g, '<span class="text-gray-300">[</span>')
      .replace(/\]/g, '<span class="text-gray-300">]</span>')
      .replace(/,/g, '<span class="text-gray-300">,</span>')
      .replace(/;/g, '<span class="text-gray-300">;</span>');
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Global payment infrastructure
              <br />
              <span className="text-gray-400">for modern businesses</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl">
              Build cross-border payment solutions with our comprehensive API.
              Accept local payments, convert currencies, and send global payouts
              with ease.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Tabs */}
            <div className="space-y-3">
              {tabsData.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-teal-500 text-white font-medium shadow-lg shadow-teal-500/25"
                      : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                  whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.title}
                </motion.button>
              ))}

              {/* Documentation Link */}
              <div className="pt-8">
                <motion.a
                  href="/docs"
                  className="flex items-center justify-between w-full px-6 py-4 border border-slate-700 rounded-lg text-white hover:border-teal-500 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border border-current rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-sm" />
                    </div>
                    <span className="font-medium">Read our documentation</span>
                  </div>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
            </div>

            {/* Right Side - Code and Features */}
            <div className="space-y-6">
              {/* Code Block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-sm font-mono">
                      indrapay-api.js
                    </span>
                  </div>
                  <pre className="text-sm overflow-x-auto font-mono">
                    <code className="text-gray-300">
                      {activeTabData.code.split("\n").map((line, index) => (
                        <div key={index} className="flex font-firaCode">
                          <span className="text-gray-600 mr-4 select-none w-6 text-right font-mono">
                            {index + 1}
                          </span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: highlightCode(line),
                            }}
                          />
                        </div>
                      ))}
                    </code>
                  </pre>
                </motion.div>
              </AnimatePresence>

              {/* Features */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-features`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm"
                >
                  <p className="text-white font-medium mb-4 text-lg">
                    {activeTabData.description}
                  </p>
                  <ul className="space-y-3">
                    {activeTabData.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckIcon />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <motion.a
                      href="/docs"
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read our documentation</span>
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
