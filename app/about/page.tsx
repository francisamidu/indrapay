"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animated/scroll-reveal";
import { AnimatedCounter } from "@/components/animated/animated-counter";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import type { JSX } from "react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export default function AboutPage(): JSX.Element {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Payments at a leading fintech company. 10+ years in financial services.",
      image: "/placeholder.svg?height=200&width=200&text=Sarah",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with expertise in distributed systems and payment infrastructure.",
      image: "/placeholder.svg?height=200&width=200&text=Marcus",
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      bio: "Product leader with experience building developer tools at scale.",
      image: "/placeholder.svg?height=200&width=200&text=Aisha",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Senior engineer with 8+ years building secure, scalable payment systems.",
      image: "/placeholder.svg?height=200&width=200&text=David",
    },
  ];

  const companyValues: CompanyValue[] = [
    {
      title: "Developer First",
      description:
        "We build tools that developers love to use, with clear documentation and intuitive APIs.",
      icon: "💻",
    },
    {
      title: "Global Reach",
      description:
        "Connecting businesses worldwide with local payment methods and global infrastructure.",
      icon: "🌍",
    },
    {
      title: "Security & Trust",
      description:
        "Bank-grade security and compliance to protect businesses and their customers.",
      icon: "🔒",
    },
    {
      title: "Transparency",
      description:
        "Clear pricing, honest communication, and no hidden fees or surprises.",
      icon: "✨",
    },
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
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
              >
                About
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                  {" "}
                  Indrapay
                </span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400"
              >
                We're on a mission to democratize payments and help businesses
                of all sizes connect with customers worldwide.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  To empower businesses everywhere with simple, secure, and
                  scalable payment solutions. We believe that every business,
                  regardless of size or location, should have access to
                  world-class payment infrastructure.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Founded in 2024, Indrapay was born from the frustration of
                  complex payment integrations and hidden fees. We set out to
                  build the payment platform we wished existed - one that's
                  transparent, developer-friendly, and globally accessible.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Values
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  The principles that guide everything we do
                </p>
              </div>
            </ScrollReveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-lg hover:bg-slate-800/30 transition-colors"
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Meet Our Team
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  Experienced professionals from leading tech and financial
                  companies
                </p>
              </div>
            </ScrollReveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center"
                >
                  <motion.img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-8 text-center"
            >
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <p className="text-gray-400">Countries Supported</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  <AnimatedCounter value={99.9} suffix="%" />
                </div>
                <p className="text-gray-400">Uptime SLA</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-400">Developer Support</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  PCI DSS
                </div>
                <p className="text-gray-400">Level 1 Certified</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Us on Our Journey
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our
                passion for building great products.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild>
                    <Link href="/careers">View Open Positions</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="secondary">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
