"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Lines of Code",
    value: "1,248,392+",
    unit: "",
  },
  {
    label: "Caffeine Consumed",
    value: "482 L",
    unit: "",
  },
  {
    label: "Sleep Debt",
    value: "∞ HRS",
    unit: "",
  },
  {
    label: "System Core",
    value: "99.9%",
    unit: "",
  },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto px-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-6 md:p-8 relative group overflow-hidden"
        >
          <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            {stat.label}
          </div>
          <div className="text-2xl md:text-4xl font-bold tracking-tighter mb-2 neon-glow">
            {stat.value}
          </div>

          <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-accent/20 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-linear-to-b from-transparent via-accent/20 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}
