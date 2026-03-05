"use client";

import { motion } from "framer-motion";
import { Terminal, Piano, Code, User, Home } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code, label: "Projects", href: "#projects" },
    { icon: Piano, label: "Music", href: "#piano" },
    { icon: Terminal, label: "Terminal", href: "#terminal" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full flex items-center gap-8 border-cyan-500/30"
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="group relative flex items-center justify-center p-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <item.icon size={20} />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 glass rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {item.label}
          </span>
        </Link>
      ))}
    </motion.nav>
  );
}
