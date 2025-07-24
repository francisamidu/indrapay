"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Finance-related SVG icons
const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const CurrencyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

const TransferIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M21 12H3" />
    <path d="M17 8l4 4-4 4" />
    <path d="M7 16l-4-4 4-4" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const WalletIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
);

const NetworkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
);

interface FloatingElement {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

export function AnimatedFinanceBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const icons = [
      CreditCardIcon,
      CurrencyIcon,
      TransferIcon,
      ChartIcon,
      ShieldIcon,
      WalletIcon,
      NetworkIcon,
    ];

    const generateElements = () => {
      const newElements: FloatingElement[] = [];

      for (let i = 0; i < 25; i++) {
        newElements.push({
          id: i,
          icon: icons[Math.floor(Math.random() * icons.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 10,
          scale: 0.3 + Math.random() * 0.4,
        });
      }

      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgb(20 184 166) 1px, transparent 0),
            linear-gradient(90deg, rgb(71 85 105 / 0.1) 1px, transparent 1px),
            linear-gradient(rgb(71 85 105 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px",
        }}
      />

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(20 184 166)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(20 184 166)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(20 184 166)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated flowing lines */}
        <motion.path
          d="M0,100 Q200,50 400,100 T800,100"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 2,
          }}
        />

        <motion.path
          d="M0,300 Q150,250 300,300 T600,300"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 4,
          }}
        />
      </svg>

      {/* Floating Finance Icons */}
      {elements.map((element) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={element.id}
            className="absolute text-teal-500/8"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `scale(${element.scale})`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <IconComponent className="w-8 h-8" />
          </motion.div>
        );
      })}

      {/* Pulsing Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-teal-500/10 rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.01] via-transparent to-slate-500/[0.01]" />

      {/* Data Flow Animation */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: "50%",
            }}
            animate={{
              x: [0, 200, 400, 600],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
