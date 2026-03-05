"use client";

import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward, Info } from "lucide-react";
import { useState } from "react";

export default function PianoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="piano"
      className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#0a0f12]/50"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold uppercase tracking-[0.4em] mb-4"
        >
          Nocturnal Frequency
        </motion.h2>
        <div className="w-12 h-[1px] bg-accent mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Central Visualizer Card */}
        <div className="p-12 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden mb-12">
          <div className="flex items-end justify-center gap-1.5 h-48">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                animate={
                  isPlaying
                    ? {
                        height: [
                          "10%",
                          `${Math.random() * 80 + 20}%`,
                          `${Math.random() * 60 + 10}%`,
                          "15%",
                        ],
                      }
                    : { height: "10%" }
                }
                transition={{
                  duration: 0.6 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 bg-accent/40 rounded-full"
              />
            ))}
          </div>

          {/* Subtle scanning line over visualizer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse" />
        </div>

        {/* Controls and Track Info */}
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">
              NOW PLAYING
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">
              Midnight Armor - UNPATCHED
            </h3>
          </div>

          <div className="flex items-center gap-12">
            <button className="text-gray-500 hover:text-white transition-colors">
              <SkipBack size={24} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-black hover:scale-105 transition-all shadow-lg shadow-accent/20"
            >
              {isPlaying ? (
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-6 bg-black" />
                  <div className="w-1.5 h-6 bg-black" />
                </div>
              ) : (
                <Play size={28} className="ml-1" />
              )}
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
