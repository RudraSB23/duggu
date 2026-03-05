"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "STATS", href: "#stats" },
    { label: "EXPERIMENTS", href: "#projects" },
    { label: "SKILL", href: "#terminal" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between border-b border-white/5 bg-[#0a0f12]/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center text-black font-bold text-xs">
          DD
        </div>
        <span className="font-orbitron font-bold tracking-tighter text-sm uppercase">
          DC DUGGU
        </span>
      </div>

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
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            PING: 8ms
          </span>
        </div>
        <button className="hidden sm:block text-[10px] font-bold px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-black transition-all">
          LOG IN
        </button>
      </div>
    </motion.nav>
  );
}
