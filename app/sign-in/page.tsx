"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/animated/scroll-reveal";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import type { JSX } from "react/jsx-runtime";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SocialButton } from "@/components/social-button";

interface SigninForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function SigninPage(): JSX.Element {
  const [formData, setFormData] = useState<SigninForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<SigninForm>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof SigninForm]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SigninForm> = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Welcome back! Redirecting to dashboard...");
    setIsSubmitting(false);
  };

  const handleSocialSignin = (provider: string) => {
    alert(`Signing in with ${provider}...`);
  };

  const features = [
    "Access your global payment dashboard",
    "Manage cross-border transactions",
    "View real-time analytics",
    "Monitor compliance status",
    "Configure payment methods",
    "Download transaction reports",
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
            {/* Left Column - Welcome Back */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="lg:pr-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                  Welcome back to
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                    {" "}
                    Indrapay
                  </span>
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                  Continue managing your global payment operations with the
                  tools trusted by thousands of businesses worldwide.
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4 mb-8"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="bg-slate-800/50 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    New to Indrapay?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Join thousands of businesses processing cross-border
                    payments with ease.
                  </p>
                  <motion.a
                    href="/signup"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Create your free account
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Right Column - Signin Form */}
            <ScrollReveal variants={fadeInRight} delay={0.2}>
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 max-w-md mx-auto w-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Sign in to your account
                  </h2>
                  <p className="text-gray-400">Welcome back</p>
                </div>

                {/* Social Signin Buttons */}
                <div className="space-y-3 mb-6">
                  <SocialButton
                    provider="Google"
                    onClick={() => handleSocialSignin("Google")}
                  >
                    Continue with Google
                  </SocialButton>

                  <SocialButton
                    provider="Twitter"
                    onClick={() => handleSocialSignin("Twitter")}
                  >
                    Continue with Twitter
                  </SocialButton>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-slate-800/50  z-20 text-gray-400">
                      OR
                    </span>
                  </div>
                </div>

                {/* Email Signin Form */}
                <form onSubmit={handleEmailSignin} className="space-y-4">
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

                  <div>
                    <Label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors ${
                        errors.password ? "border-red-500" : "border-slate-600"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.password}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-teal-500 bg-slate-700 border-slate-600 rounded focus:ring-teal-500 focus:ring-2"
                      />
                      <Label
                        htmlFor="rememberMe"
                        className="text-sm text-gray-400"
                      >
                        Remember me
                      </Label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-teal-400 hover:text-teal-300"
                    >
                      Forgot password?
                    </Link>
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
                          Signing in...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Sign in
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </form>

                <p className="text-center text-gray-400 mt-6">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-teal-400 hover:text-teal-300"
                  >
                    Sign up for free
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
