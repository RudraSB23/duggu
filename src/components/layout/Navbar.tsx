"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [ping, setPing] = useState(8);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * (15 - 5 + 1) + 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "STATS", href: "#stats" },
    { label: "EXPERIMENTS", href: "#projects" },
    { label: "SHELL", href: "#terminal" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 flex items-center justify-between border-b border-white/5 bg-black/80 backdrop-blur-md"
      >
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-sm overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform">
            <img
              src="/icon.png"
              alt="DD Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-orbitron font-bold tracking-tighter text-sm uppercase group-hover:text-accent transition-colors">
            DC DUGGU
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">
              PING: {ping}ms
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent transition-colors p-1"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0a0f12] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold tracking-[0.3em] text-gray-400 hover:text-accent transition-colors uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
