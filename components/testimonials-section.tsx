"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./animated/scroll-reveal";
import { staggerContainer, staggerItem } from "../lib/animations";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { AnimatedCount } from "@/components/animated-count";
import { Button } from "./ui/button";
import { useWidth } from "@/hooks/use-width";
import { useMemo } from "react";

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    content:
      "Indrapay transformed our international payments. We went from 5-day settlement times to same-day transfers across 15 countries. The API integration was seamless, and their compliance tools saved us months of regulatory work.",
    author: {
      name: "Sarah Cabot",
      role: "CFO",
      company: "TechFlow Global",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    rating: 5,
  },
  {
    id: "2",
    content:
      "The multi-currency wallet feature is a game-changer. We can hold funds in 12 different currencies and convert them instantly when needed. The FX rates are consistently better than our previous provider.",
    author: {
      name: "Marcus Rodriguez",
      role: "Head of Finance",
      company: "Export Solutions Ltd",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    rating: 5,
  },
  {
    id: "3",
    content:
      "Local payment methods integration was exactly what we needed for our Asian expansion. UPI in India, Alipay in China - all through one API. Our conversion rates increased by 40% after implementing Indrapay.",
    author: {
      name: "Aisha Patel",
      role: "VP of Operations",
      company: "Global Commerce Inc",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    rating: 5,
  },
  {
    id: "4",
    content:
      "The compliance screening is incredibly thorough yet fast. We process thousands of cross-border transactions monthly, and Indrapay's AML checks give us complete peace of mind while maintaining speed.",
    author: {
      name: "David Kim",
      role: "Risk Manager",
      company: "International Trade Corp",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    rating: 5,
  },
  {
    id: "5",
    content:
      "Switching to Indrapay reduced our payment processing costs by 35% while improving reliability. The real-time settlement tracking and webhook notifications keep our finance team informed at every step.",
    author: {
      name: "Elena Volkov",
      role: "Finance Director",
      company: "European Logistics",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    rating: 5,
  },
  {
    id: "6",
    content:
      "The developer experience is outstanding. Clear documentation, comprehensive SDKs, and a sandbox that actually works like production. We had our integration running in under a week.",
    author: {
      name: "James Wilson",
      role: "Lead Developer",
      company: "FinTech Innovations",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={staggerItem}
      className="bg-slate-800/50 backdrop-blur-sm md:p-8 p-4 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 h-full flex flex-col justify-around min-w-[280px] md:min-w-[360px] md:max-w-lg max-w-[300px] w-fit"
    >
      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 break-words whitespace-normal">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <motion.img
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/20"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <div>
          <div className="font-semibold text-white">
            {testimonial.author.name}
          </div>
          <div className="text-gray-400 text-wrap text-sm">
            {testimonial.author.role} at {testimonial.author.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const windowWidth = useWidth();

  const buttonText = useMemo(() => {
    if (windowWidth > 768) {
      return "Join thousands of satisfied customers";
    }
    return "Join happy customers";
  }, [windowWidth]);
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Combined Background: Quotes + Faces */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Large Quotes SVGs */}
        <motion.svg
          width="120"
          height="120"
          className="absolute left-8 top-8 opacity-20 text-teal-400"
          aria-hidden="true"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <text
            x="0"
            y="100"
            fontSize="120"
            fontWeight="bold"
            fill="currentColor"
          >
            “
          </text>
        </motion.svg>
        <motion.svg
          width="120"
          height="120"
          className="absolute right-8 bottom-8 opacity-20 text-blue-400"
          aria-hidden="true"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -6, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <text
            x="0"
            y="100"
            fontSize="120"
            fontWeight="bold"
            fill="currentColor"
          >
            ”
          </text>
        </motion.svg>
        {/* Faces Collage */}
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 opacity-30">
          {/* Use testimonial avatars, repeat and scatter for effect */}
          {testimonials.concat(testimonials.slice(0, 3)).map((t, i) => {
            // Each face floats in a slightly different looping pattern
            const floatX = i % 3 === 0 ? 10 : i % 3 === 1 ? -8 : 0;
            const floatY = i % 2 === 0 ? 8 : -8;
            return (
              <motion.img
                key={t.id + "-bg-" + i}
                src={t.author.avatar}
                alt={t.author.name}
                className={
                  `w-16 h-16 rounded-full object-cover grayscale blur-sm border-2 border-white/10 shadow-lg ` +
                  (i % 2 === 0 ? "translate-y-2" : "-translate-y-4")
                }
                style={{
                  position: "absolute",
                  left: `${10 + ((i * 12) % 80)}%`,
                  top: `${15 + ((i * 18) % 60)}%`,
                  zIndex: 0,
                }}
                animate={{
                  x: [0, floatX, 0],
                  y: [0, floatY, 0],
                }}
                transition={{
                  duration: 16 + (i % 5),
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: i * 0.7,
                }}
              />
            );
          })}
        </div>
      </div>
      {/* Optional: Dotted Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
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

      <div className="container mx-auto md:px-6 px-2 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Trusted by businesses
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                    worldwide
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  From startups to enterprises, companies rely on Indrapay to
                  power their global payment operations with speed, security,
                  and simplicity.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Testimonials Marquee */}
          <div className="space-y-30 md:space-y-6 my-3 md:my-10">
            <Marquee direction="left">
              {testimonials.concat(testimonials).map((testimonial, i) => (
                <div
                  key={testimonial.id + "-marquee1-" + i}
                  className="md:mx-4 !w-full md:w-96 max-w-full inline-block align-top mb-3 md:mb-0"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Stats Section */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20 pt-16 border-t border-slate-800">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 text-center"
              >
                <motion.div variants={staggerItem}>
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    <AnimatedCount
                      to={2.5}
                      decimals={1}
                      duration={1.5}
                      prefix="$"
                      suffix="B+"
                    />
                  </div>
                  <div className="text-gray-400">Processed annually</div>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    <AnimatedCount to={50} duration={1.2} suffix="+" />
                  </div>
                  <div className="text-gray-400">Countries supported</div>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    <AnimatedCount
                      to={99.9}
                      decimals={1}
                      duration={1.2}
                      suffix="%"
                    />
                  </div>
                  <div className="text-gray-400">Uptime guarantee</div>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    <AnimatedCount to={1000} duration={1.4} suffix="+" />
                  </div>
                  <div className="text-gray-400">Happy customers</div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.6}>
            <div className="text-center mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button asChild>
                  <Link href="/signup">
                    {buttonText}
                    <svg
                      className="w-5 h-5 ml-2"
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
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
