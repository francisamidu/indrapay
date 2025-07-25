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
import { Button } from "@/components/ui/button";
import { SocialButton } from "@/components/social-button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignupForm {
  email: string;
  agreeToTerms: boolean;
}

export default function SignupPage(): JSX.Element {
  const [formData, setFormData] = useState<SignupForm>({
    email: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<SignupForm>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    if (!formData.email.trim()) newErrors.email = "Work email is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(
      "Account created successfully! Check your email for verification instructions."
    );
    setIsSubmitting(false);
  };

  const handleSocialSignup = (provider: string) => {
    alert(`Signing up with ${provider}...`);
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
      className="bg-dotted text-gray-300 antialiased min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left Column - Benefits */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="lg:pr-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Start accepting payments
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                    {" "}
                    globally
                  </span>
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                  Join thousands of businesses that trust Indrapay for their
                  cross-border payment processing needs.
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
              </div>
            </ScrollReveal>

            {/* Right Column - Signup Form */}
            <ScrollReveal variants={fadeInRight} delay={0.2}>
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 max-w-md mx-auto w-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Create your Indrapay account
                  </h2>
                  <p className="text-gray-400">Get started in seconds</p>
                </div>

                {/* Social Signup Buttons */}
                <div className="space-y-3 mb-6">
                  <SocialButton
                    provider="Google"
                    onClick={() => handleSocialSignup("Google")}
                  >
                    Sign up with Google
                  </SocialButton>

                  <SocialButton
                    provider="Twitter"
                    onClick={() => handleSocialSignup("Twitter")}
                  >
                    Sign up with Twitter
                  </SocialButton>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-slate-800/50 text-gray-400">
                      OR
                    </span>
                  </div>
                </div>

                {/* Email Signup Form */}
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Work email
                    </Label>
                    <Input
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

                  <div className="flex items-start space-x-3">
                    <Input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-teal-500 bg-slate-700 border-slate-600 rounded focus:ring-teal-500 focus:ring-2"
                    />
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-sm text-gray-400"
                    >
                      By signing up, you acknowledge that you have read and
                      understood, and agree to Indrapay's{" "}
                      <Link
                        href="/terms"
                        className="text-teal-400 hover:text-teal-300 underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-teal-400 hover:text-teal-300 underline"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
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
                          Continue
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </form>

                <p className="text-center text-gray-400 mt-6">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-teal-400 hover:text-teal-300"
                  >
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
