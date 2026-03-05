"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Skull, Activity } from "lucide-react";

const stats = [
  {
    label: "Debugging Skill",
    value: 1.2,
    unit: "%",
    icon: Shield,
    color: "text-blue-400",
  },
  {
    label: "Chaos Energy",
    value: 9000,
    unit: "kJ",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    label: "Piano Level",
    value: 2,
    unit: "am",
    icon: Activity,
    color: "text-green-400",
  },
  {
    label: "Sleep Deprivation",
    value: 404,
    unit: "h",
    icon: Skull,
    color: "text-red-400",
  },
];

const cards = [
  {
    title: "Origin Story",
    content:
      "Legend says Duggu was born from a recursive loop in a Commodore 64. He emerged with a piano under one arm and a malfunctioning soldering iron in the other.",
  },
  {
    title: "Powers",
    content:
      "Can center a div in under 3 hours. Able to summon blue screens of death through sheer willpower. Immunity to caffeine.",
  },
  {
    title: "Weaknesses",
    content:
      "Daylight, stable internet connections, and 'well-documented' APIs. Also, cookies (the edible and browser kind).",
  },
  {
    title: "Current Status",
    content:
      "Attempting to compile the universe in TypeScript. Current progress: 0.0000001%. Error: Universe is too large to represent as a type.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-bold mb-16 neon-text"
      >
        WHO IS DUGGU?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl border-cyan-500/20 text-center"
          >
            <stat.icon className={`mx-auto mb-4 ${stat.color}`} size={32} />
            <div className="text-3xl font-bold mb-1">
              {stat.value}
              {stat.unit}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl border-pink-500/20 hover:border-pink-500/50 transition-colors group"
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-400 group-hover:neon-text-pink transition-all">
              {card.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
