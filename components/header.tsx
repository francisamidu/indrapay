"use client";

import type React from "react";

import { type JSX, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LogoIcon, MenuIcon } from "./icons";
import { Button } from "./ui/button";
import { slideInFromTop } from "../lib/animations";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

export function Header(): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProductsOpen, setIsProductsOpen] = useState<boolean>(false);
  const [isDevelopersOpen, setIsDevelopersOpen] = useState<boolean>(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(false);

  const productsDropdown: DropdownSection[] = [
    {
      title: "Infrastructure",
      items: [
        {
          title: "Cross-Border Payments",
          description: "Send money globally with competitive rates",
          href: "/products/cross-border-payments",
          icon: (
            <svg
              className="w-5 h-5"
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
        },
        {
          title: "Multi-Currency Wallets",
          description: "Hold and manage 50+ currencies",
          href: "/products/multi-currency-wallets",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
            </svg>
          ),
        },
        {
          title: "Local Payment Methods",
          description: "Accept M-Pesa, Airtel Money, SEPA, and more",
          href: "/products/local-payment-methods",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          ),
        },
        {
          title: "FX & Currency Exchange",
          description: "Real-time rates and instant conversion",
          href: "/products/fx-currency-exchange",
          icon: (
            <svg
              className="w-5 h-5"
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
        },
      ],
    },
    {
      title: "Solutions",
      items: [
        {
          title: "Global Businesses",
          description: "Enterprise payment infrastructure",
          href: "#",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          ),
        },
        {
          title: "Fintech Platforms",
          description: "White-label payment solutions",
          href: "#",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806-1.946 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 013.138 3.138z"
              />
            </svg>
          ),
        },
        {
          title: "Marketplaces",
          description: "Split payments and escrow services",
          href: "#",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          ),
        },
        {
          title: "Digital Banks",
          description: "Banking-as-a-Service infrastructure",
          href: "#",
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  const developersDropdown: DropdownItem[] = [
    {
      title: "API Documentation",
      description: "Comprehensive guides and references",
      href: "/developers/api-documentation",
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
    },
    {
      title: "SDKs & Libraries",
      description: "Official libraries for popular languages",
      href: "/developers/sdk-libraries",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Sandbox Environment",
      description: "Test your integration safely",
      href: "/developers/sandbox",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const companyDropdown: DropdownItem[] = [
    {
      title: "About Us",
      description: "Learn about our mission and values",
      href: "/about",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Careers",
      description: "Join our team and build the future",
      href: "company/careers",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2"
          />
        </svg>
      ),
    },
    {
      title: "News & Press",
      description: "Latest updates and announcements",
      href: "company/news",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/contact",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.header
      className="bg-transparent backdrop-blur-sm sticky top-0 z-50"
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <LogoIcon className="text-teal-500" />
            </motion.div>
            <span className="text-2xl font-bold text-white">Indrapay</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              className={`flex items-center ${
                pathname.startsWith("/products")
                  ? "text-teal-400 font-bold"
                  : "text-gray-300 hover:text-teal-400"
              } transition-colors !text-sm`}
            >
              Products
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 -translate-x-1/4"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {productsDropdown.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.href}
                              className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${
                                pathname.startsWith(item.href)
                                  ? "text-teal-400 font-bold"
                                  : "text-gray-300 hover:text-teal-400"
                              }`}
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-200 transition-colors">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/products"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group"
                    >
                      View all products
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
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing Link */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/pricing"
              className={`text-gray-300 hover:text-teal-400 transition-colors ${
                pathname.startsWith("/pricing")
                  ? "text-teal-400 font-bold"
                  : "text-gray-300 hover:text-teal-400"
              } !text-sm`}
            >
              Pricing
            </Link>
          </motion.div>

          {/* Developers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDevelopersOpen(true)}
            onMouseLeave={() => setIsDevelopersOpen(false)}
          >
            <button
              className={`flex items-center ${
                pathname.startsWith("/developers")
                  ? "text-teal-400 font-bold"
                  : "text-gray-300 hover:text-teal-400"
              } transition-colors !text-sm`}
            >
              Developers
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isDevelopersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 -translate-x-1/4"
                >
                  <div className="space-y-3">
                    {developersDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${
                          pathname.startsWith(item.href)
                            ? "text-teal-400 font-bold"
                            : "text-gray-300 hover:text-teal-400"
                        }`}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-200 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link
                      href="/developers"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group"
                    >
                      Developer hub
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
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button
              className={`flex items-center ${
                pathname.startsWith("/company")
                  ? "text-teal-400 font-bold"
                  : "text-gray-300 hover:text-teal-400"
              } transition-colors !text-sm`}
            >
              Company
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isCompanyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 -translate-x-1/4"
                >
                  <div className="space-y-3">
                    {companyDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group ${
                          pathname.startsWith(item.href)
                            ? "text-teal-400 font-bold"
                            : "text-gray-300 hover:text-teal-400"
                        }`}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-200 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link
                      href="/about"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group"
                    >
                      Learn more
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
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/sign-in"
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              Sign In
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" className="px-4 py-2" asChild>
              <Link href="/sign-up">Create Account</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MenuIcon />
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden px-6 pb-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { href: "/products", label: "Products" },
              { href: "/pricing", label: "Pricing" },
              { href: "/developers", label: "Developers" },
              { href: "/about", label: "Company" },
            ].map((item, index) => {
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block transition-colors text-gray-300 hover:text-teal-400`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              className="border-t border-slate-700 pt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/sign-in"
                className="block text-white font-medium hover:text-gray-200 transition-colors"
              >
                Sign In
              </Link>
              <Button
                variant="default"
                className="block w-full text-center py-2"
                asChild
              >
                <Link href="/sign-up">Create Account</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
