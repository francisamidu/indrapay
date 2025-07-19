import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "../lib/animations";
import { JSX } from "react";
import Link from "next/link";
import Highlight from "./highlight";

// BackgroundPattern Component: Renders subtle, money-related SVG shapes
function BackgroundPattern(): JSX.Element {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      {/* Container for the SVG pattern, ensuring it fills the space */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice" // Ensures the pattern scales nicely
      >
        <defs>
          {/* Define a subtle linear gradient for the shapes */}
          <linearGradient
            id="gradient-pattern"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.1" />{" "}
            {/* Light purple/blue for subtle glow */}
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.1" />{" "}
            {/* Light green/teal for subtle glow */}
          </linearGradient>
        </defs>

        {/* Example 1: Stylized currency symbol (e.g., dollar sign or generic currency) */}
        <path
          d="M 200 150 C 220 100, 280 100, 300 150 S 320 250, 300 300 C 280 350, 220 350, 200 300 S 180 200, 200 150 Z M 250 170 L 250 280 M 240 225 H 260"
          fill="none"
          stroke="url(#gradient-pattern)"
          strokeWidth="2"
          opacity="0.6"
          transform="translate(100, 50) scale(0.8) rotate(15)"
        />

        {/* Example 2: Abstract network nodes/connections (representing global payments) */}
        <circle
          cx="800"
          cy="200"
          r="10"
          fill="url(#gradient-pattern)"
          opacity="0.7"
        />
        <circle
          cx="950"
          cy="150"
          r="8"
          fill="url(#gradient-pattern)"
          opacity="0.6"
        />
        <circle
          cx="700"
          cy="300"
          r="12"
          fill="url(#gradient-pattern)"
          opacity="0.8"
        />
        <line
          x1="800"
          y1="200"
          x2="950"
          y2="150"
          stroke="url(#gradient-pattern)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="800"
          y1="200"
          x2="700"
          y2="300"
          stroke="url(#gradient-pattern)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="950"
          y1="150"
          x2="700"
          y2="300"
          stroke="url(#gradient-pattern)"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Example 3: Subtle grid lines or circuit board traces */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`grid-h-${i}`}
            x1="0"
            y1={50 + i * 70}
            x2="1440"
            y2={50 + i * 70}
            stroke="#CBD5E1" // slate-300
            strokeWidth="0.5"
            opacity="0.05"
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={`grid-v-${i}`}
            x1={50 + i * 90}
            y1="0"
            x2={50 + i * 90}
            y2="800"
            stroke="#CBD5E1" // slate-300
            strokeWidth="0.5"
            opacity="0.05"
          />
        ))}

        {/* Example 4: Abstract 'coin' or 'chip' like circles */}
        <circle
          cx="100"
          cy="600"
          r="25"
          fill="url(#gradient-pattern)"
          opacity="0.5"
        />
        <circle
          cx="250"
          cy="700"
          r="20"
          fill="url(#gradient-pattern)"
          opacity="0.4"
        />
        <circle
          cx="400"
          cy="550"
          r="30"
          fill="url(#gradient-pattern)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// HeroSection Component: Now includes the BackgroundPattern
export function HeroSection(): JSX.Element {
  return (
    <section className="relative py-20 md:py-32 bg-gray-950">
      {" "}
      {/* Added relative and a dark background for contrast */}
      <BackgroundPattern /> {/* The background pattern component */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {" "}
        {/* z-10 to ensure content is above pattern */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 flex flex-col justify-center items-center"
        >
          <Highlight icon="global-access" title="Cross-Border Payments" />
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Connecting Your Business to the World with
            <motion.span
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
              variants={staggerItem}
            >
              {" "}
              Seamless Payments
            </motion.span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400"
          >
            Indrapay provides a single, powerful platform to accept payments
            from anyone, anywhere. Simple integration, transparent pricing, and
            unparalleled reach.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" asChild>
                <Link href="/signup">Get Started for Free</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" asChild>
                <Link href="/contact-sales">Talk to Sales</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
