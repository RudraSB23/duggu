"use client";

import { motion } from "framer-motion";
import { Box, Workflow, Zap } from "lucide-react";

const blueprints = [
  {
    title: "The Creator",
    content:
      "Student, Developer, and YouTuber. Crafting digital experiences across Roblox, Discord, and Telegram.",
    icon: Box,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Musical Pulse",
    content:
      "Music producer and audio editor. Finding harmony in code and melody on the piano and guitar.",
    icon: Workflow,
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Chaos Lab",
    content:
      "Experimenting with local AI models, Raspberry Pi servers, and automated cloud workflows.",
    icon: Zap,
    color: "from-green-500/20 to-transparent",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex items-center gap-6 mb-20">
        <div className="w-10 h-px bg-accent" />
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-[0.3em] uppercase"
        >
          The Blueprint: <span className="text-gray-500">Origins & Powers</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blueprints.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[400px] md:h-[500px] bg-white/5 border border-white/5 overflow-hidden flex flex-col justify-end p-8 md:p-10 hover:border-accent/30 transition-all"
          >
            {/* Mock "Image" area */}
            <div
              className={`absolute inset-0 bg-linear-to-b ${item.color} -z-10`}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 opacity-20 group-hover:opacity-40 transition-opacity">
              <item.icon
                size={120}
                strokeWidth={0.5}
                className="text-accent md:size-[160px]"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 uppercase tracking-tighter group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-mono uppercase tracking-wider">
                {item.content}
              </p>
            </div>

            {/* Corner detail */}
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
