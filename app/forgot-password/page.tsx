"use client";

import type React from "react";
import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animated/scroll-reveal";
import { fadeInUp } from "@/lib/animations";

interface ForgotPasswordForm {
  email: string;
}

export default function ForgotPasswordPage(): JSX.Element {
  const [formData, setFormData] = useState<ForgotPasswordForm>({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<ForgotPasswordForm>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ForgotPasswordForm]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ForgotPasswordForm> = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <ScrollReveal variants={fadeInUp}>
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 text-center"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-teal-400"
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
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Check your email
                </h2>
                <p className="text-gray-400 mb-6">
                  We've sent a password reset link to{" "}
                  <strong className="text-white">{formData.email}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <div className="space-y-3">
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ email: "" });
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-teal-600"
                  >
                    Try again
                  </motion.button>
                  <motion.a
                    href="/signin"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center text-gray-400 hover:text-white transition-colors py-2"
                  >
                    Back to sign in
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <ScrollReveal variants={fadeInUp}>
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Reset your password
                </h1>
                <p className="text-gray-400">
                  Enter your email and we'll send you a reset link
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Work email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors ${
                      errors.email ? "border-red-500" : "border-slate-600"
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
                </div>

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
                        Sending reset link...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Send reset link
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>

              <div className="text-center mt-6">
                <motion.a
                  href="/signin"
                  className="text-teal-400 hover:text-teal-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  ← Back to sign in
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
