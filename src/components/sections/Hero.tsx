"use client";

import { motion } from "framer-motion";
import { StatsBar } from "./StatsBar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-8 pt-20"
    >
      {/* System Health Widget */}
      <div className="absolute top-32 right-8 hidden lg:block">
        <div className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest text-right">
          System Health
        </div>
        <div className="space-y-1 w-48">
          <div className="h-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: "85%" }}
              animate={{
                width: ["85%", "82%", "88%", "85%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full bg-accent"
            />
          </div>
          <div className="h-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: "60%" }}
              animate={{
                width: ["60%", "65%", "55%", "60%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full bg-accent/60"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 pt-32 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
            Status: Student & Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-[120px] font-bold leading-[0.9] tracking-tighter mb-6 px-4"
        >
          DC{" "}
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            DUGGU
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed uppercase font-mono tracking-wider px-6"
        >
          Student, Developer, and Content Creator. Crafting{" "}
          <span className="text-white font-bold">digital chaos</span> through
          bots, games, and code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-8"
        >
          <a
            href="#terminal"
            className="cyan-btn w-full sm:w-auto px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all block text-center"
          >
            Enter the Matrix
          </a>
          <a
            href="https://www.youtube.com/@DC_Duggu"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn w-full sm:w-auto px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all block text-center"
          >
            Visit YouTube
          </a>
        </motion.div>
      </div>

      {/* Stats Bar Integrated at bottom of hero */}
      <div className="mt-auto pb-12">
        <StatsBar />
      </div>

      {/* Background visual detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}
