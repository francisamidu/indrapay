"use client";

import type React from "react";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/animated/scroll-reveal";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  country: string;
  businessType: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function SignupPage(): JSX.Element {
  const [formData, setFormData] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    country: "",
    businessType: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<SignupForm>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof SignupForm]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupForm> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(
      "Account created successfully! Check your email for verification instructions."
    );
    setIsSubmitting(false);
  };

  const benefits = [
    "Accept payments in 50+ countries",
    "No setup or monthly fees",
    "Developer-friendly APIs",
    "24/7 technical support",
    "Advanced fraud protection",
    "Real-time analytics dashboard",
  ];

  return (
    <motion.div
      className="bg-slate-900 text-gray-300 antialiased"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Benefits */}
              <ScrollReveal variants={fadeInLeft}>
                <div className="lg:pr-12">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                    Start accepting payments
                    <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                      {" "}
                      today
                    </span>
                  </h1>
                  <p className="text-lg text-gray-400 mb-8">
                    Join thousands of businesses that trust Indrapay for their
                    payment processing needs.
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4 mb-8"
                  >
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={staggerItem}
                        className="flex items-center"
                      >
                        <CheckIcon />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="bg-slate-800/50 p-6 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">
                      What happens next?
                    </h3>
                    <ol className="space-y-2 text-gray-400">
                      <li>1. Verify your email address</li>
                      <li>2. Complete your business profile</li>
                      <li>3. Get your API keys</li>
                      <li>4. Start accepting payments</li>
                    </ol>
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Right Column - Form */}
              <ScrollReveal variants={fadeInRight} delay={0.2}>
                <motion.div
                  className="bg-slate-800/50 p-8 rounded-2xl"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Create Your Account
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-slate-700"
                          }`}
                        />
                        <AnimatePresence>
                          {errors.firstName && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-400 text-sm mt-1"
                            >
                              {errors.firstName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-slate-700"
                          }`}
                        />
                        <AnimatePresence>
                          {errors.lastName && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-400 text-sm mt-1"
                            >
                              {errors.lastName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Continue with other form fields... */}
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white focus:outline-none focus:border-teal-500 transition-colors ${
                          errors.email ? "border-red-500" : "border-slate-700"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="submitting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            Creating Account...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="submit"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            Create Account
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </form>

                  <p className="text-center text-gray-400 mt-6">
                    Already have an account?{" "}
                    <motion.a
                      href="/signin"
                      className="text-teal-400 hover:text-teal-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Sign in
                    </motion.a>
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
