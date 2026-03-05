"use client";

import { motion } from "framer-motion";
import { music } from "@/lib/data";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import { useState } from "react";

export default function PianoSection() {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  return (
    <section id="piano" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold neon-text"
        >
          2AM CONCERT
        </motion.h2>
        <p className="text-gray-400 font-hacker max-w-sm text-right">
          Recorded in total darkness with 0% logic and 100% feeling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visualizer Mock */}
        <div className="glass rounded-3xl p-8 aspect-video flex items-end justify-between gap-1 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
            <Music size={200} className="animate-spin-slow" />
          </div>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying !== null
                  ? {
                      height: [
                        "10%",
                        `${Math.random() * 80 + 20}%`,
                        `${Math.random() * 50 + 10}%`,
                        "10%",
                      ],
                    }
                  : { height: "10%" }
              }
              transition={{
                duration: 0.5 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full bg-cyan-400/50 rounded-full"
            />
          ))}
        </div>

        {/* Tracks List */}
        <div className="space-y-4">
          {music.map((track) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`p-6 rounded-2xl glass border-white/5 flex items-center gap-6 group transition-all ${isPlaying === track.id ? "border-cyan-500/50" : ""}`}
            >
              <button
                onClick={() =>
                  setIsPlaying(isPlaying === track.id ? null : track.id)
                }
                className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black hover:scale-110 transition-transform flex-shrink-0"
              >
                {isPlaying === track.id ? (
                  <Pause size={24} />
                ) : (
                  <Play size={24} className="ml-1" />
                )}
              </button>

              <div className="flex-grow">
                <h3 className="font-bold text-lg mb-1">{track.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-1">
                  {track.description}
                </p>
              </div>

              <div className="text-gray-500 font-hacker text-sm">
                {track.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
