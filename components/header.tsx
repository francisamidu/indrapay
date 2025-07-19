"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LogoIcon, MenuIcon } from "./icons";
import { Button } from "./ui/button";
import { slideInFromTop } from "../lib/animations";

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <motion.header
      className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50"
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <LogoIcon className="text-teal-500" />
            </motion.div>
            <span className="text-2xl font-bold text-white">Indrapay</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: "#solutions", label: "Solutions" },
            { href: "#pricing", label: "Pricing" },
            { href: "#developers", label: "Developers" },
            { href: "#about", label: "About" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/signin"
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              Sign In
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" className="px-4 py-2" asChild>
              <Link href="/signup">Create Account</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MenuIcon />
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden px-6 pb-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { href: "#solutions", label: "Solutions" },
              { href: "#pricing", label: "Pricing" },
              { href: "#developers", label: "Developers" },
              { href: "#about", label: "About" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="border-t border-slate-700 pt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/signin"
                className="block text-white font-medium hover:text-gray-200 transition-colors"
              >
                Sign In
              </Link>
              <Button
                variant="default"
                className="block w-full text-center py-2"
                asChild
              >
                <Link href="/signup">Create Account</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
