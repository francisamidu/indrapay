"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ScrollReveal } from "./animated/scroll-reveal";
import { fadeInLeft, fadeInRight } from "../lib/animations";
import type { JSX } from "react"; // Declare the JSX variable
import Link from "next/link";

export function DeveloperSection(): JSX.Element {
  return (
    <section id="developers" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variants={fadeInLeft}>
            <div className="pr-0 lg:pr-12">
              <span className="text-teal-400 font-semibold">
                Developer First
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Powerful APIs, Simple Integration
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                We obsess over the developer experience. Our RESTful API is
                designed to be predictable and intuitive, with clear
                documentation, client libraries, and a sandbox for easy testing.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block"
              >
                <Button variant="secondary" asChild>
                  <Link href="/docs">Read API Docs →</Link>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={fadeInRight} delay={0.2}>
            <motion.div
              className="relative bg-slate-800 rounded-xl p-4 pt-12 shadow-2xl before:content-[''] before:absolute before:top-4 before:left-4 before:w-3 before:h-3 before:rounded-full before:bg-red-500 before:shadow-[1.25rem_0_0_#f59e0b,2.5rem_0_0_#10b981]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <pre className="text-sm overflow-x-auto">
                <code>
                  <motion.span
                    className="text-purple-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    const
                  </motion.span>{" "}
                  indrapay ={" "}
                  <motion.span
                    className="text-yellow-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    require
                  </motion.span>
                  (<span className="text-green-400">'indrapay-node'</span>)(
                  <span className="text-green-400">'sk_test_...'</span>);
                  {"\n\n"}
                  <motion.span
                    className="text-purple-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    const
                  </motion.span>{" "}
                  charge = <span className="text-purple-400">await</span>{" "}
                  indrapay.charges.
                  <span className="text-yellow-300">create</span>(
                  {`{
  amount: `}
                  <span className="text-blue-400">2000</span>
                  {`,
  currency: `}
                  <span className="text-green-400">'usd'</span>
                  {`,
  source: `}
                  <span className="text-green-400">'tok_mastercard'</span>
                  {`,
  description: `}
                  <span className="text-green-400">
                    'Charge for jenny.rosen@example.com'
                  </span>
                  {`
}`}
                  );
                  {"\n\n"}
                  <motion.span
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    // Charge successful!
                  </motion.span>
                </code>
              </pre>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
