"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "DEBUGGING",
    value: "99%",
    status: "OPTIMIZED",
    color: "text-accent",
  },
  {
    label: "PIANO FLUENCY",
    value: "8000+",
    status: "MAINTAINED",
    color: "text-accent",
  },
  {
    label: "CHAOS ENERGY",
    value: "CRITICAL",
    status: "MODULATING",
    color: "text-accent",
  },
  {
    label: "SLEEP",
    value: "INFINITE",
    status: "RECOVERING",
    color: "text-accent",
  },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-8 max-w-7xl mx-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 bg-white/5 border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-colors"
        >
          <div className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-[0.2em]">
            {stat.label}
          </div>
          <div className="text-3xl font-orbitron font-bold tracking-tighter mb-1 uppercase">
            {stat.value}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
              {stat.status}
            </span>
          </div>

          {/* Subtle accent line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/20 group-hover:bg-accent transition-colors" />
        </motion.div>
      ))}
    </div>
  );
}
