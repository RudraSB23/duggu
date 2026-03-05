"use client";

import { motion } from "framer-motion";
import { StatsBar } from "./StatsBar";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-8 pt-20">
      {/* System Health Widget */}
      <div className="absolute top-32 right-8 hidden lg:block">
        <div className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest text-right">
          System Health
        </div>
        <div className="space-y-1 w-48">
          <div className="h-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-accent"
            />
          </div>
          <div className="h-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="h-full bg-accent/60"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
            Engine Status: Operational
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-[120px] font-bold leading-[0.9] tracking-tighter mb-6"
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
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Professional{" "}
          <span className="text-white font-bold">Chaos Engineer</span> creating
          digital entropy through clean code and heavy caffeine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="cyan-btn px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all">
            Enter the Matrix
          </button>
          <button className="outline-btn px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all">
            View Source
          </button>
        </motion.div>
      </div>

      {/* Stats Bar Integrated at bottom of hero */}
      <div className="mt-auto pb-12">
        <StatsBar />
      </div>

      {/* Background visual detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}
