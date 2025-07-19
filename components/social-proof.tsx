"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "./animated/scroll-reveal";
import { staggerContainer, staggerItem } from "../lib/animations";
import { JSX } from "react";

interface CompanyLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function SocialProof(): JSX.Element {
  const companies: CompanyLogo[] = [
    {
      src: "/placeholder.svg?height=40&width=120&text=FutureCo",
      alt: "FutureCo Logo",
      width: 120,
      height: 40,
    },
    {
      src: "/placeholder.svg?height=40&width=120&text=Innovate",
      alt: "Innovate Logo",
      width: 120,
      height: 40,
    },
    {
      src: "/placeholder.svg?height=40&width=120&text=Quantum",
      alt: "Quantum Logo",
      width: 120,
      height: 40,
    },
    {
      src: "/placeholder.svg?height=40&width=120&text=Apex",
      alt: "Apex Logo",
      width: 120,
      height: 40,
    },
    {
      src: "/placeholder.svg?height=40&width=120&text=Momentum",
      alt: "Momentum Logo",
      width: 120,
      height: 40,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-gray-400 font-medium">
            Trusted by innovative companies worldwide
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={company.src || "/placeholder.svg"}
                  alt={company.alt}
                  width={company.width}
                  height={company.height}
                  className="h-8 w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
