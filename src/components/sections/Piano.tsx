"use client";

import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward, Info } from "lucide-react";
import { useState, useRef } from "react";

export default function PianoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback failed:", err);
          setIsPlaying(false);
        });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);
  const onError = (e: any) => {
    console.error("Audio element error:", e);
    setIsPlaying(false);
  };

  return (
    <section
      id="piano"
      className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5 bg-[#0a0f12]/50"
    >
      <audio
        ref={audioRef}
        src="/still_recieving.wav"
        loop
        onPlay={onPlay}
        onPause={onPause}
        onError={onError}
      />
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold uppercase tracking-[0.4em] mb-4 px-4"
        >
          Nocturnal Frequency
        </motion.h2>
        <div className="w-12 h-px bg-accent mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-0">
        {/* Central Visualizer Card */}
        <div className="p-6 md:p-12 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden mb-8 md:mb-12">
          <div className="flex items-end justify-center gap-1 md:gap-1.5 h-32 md:h-48">
            {[...Array(25)].map((_, i) => (
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
                className="w-1 md:w-1.5 bg-accent/40 rounded-full"
              />
            ))}
          </div>

          {/* Subtle scanning line over visualizer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent/5 to-transparent animate-pulse" />
        </div>

        {/* Controls and Track Info */}
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center px-4">
            <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">
              NOW PLAYING
            </div>
            <a
              href="https://www.youtube.com/watch?v=uBR0HpPzLCY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-bold uppercase tracking-tight hover:text-accent transition-colors block leading-tight"
            >
              Still Recieving - DC DUGGU
            </a>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center gap-8 md:gap-12">
              <button className="text-gray-500 hover:text-white transition-colors">
                <SkipBack size={24} />
              </button>
              <button
                onClick={togglePlay}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center text-black hover:scale-105 transition-all shadow-lg shadow-accent/20"
              >
                {isPlaying ? (
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-6 bg-black" />
                    <div className="w-1.5 h-6 bg-black" />
                  </div>
                ) : (
                  <Play size={24} className="ml-1 md:size-[28px]" />
                )}
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                <SkipForward size={24} />
              </button>
            </div>

            {/* Volume Slider */}
            <div className="flex items-center gap-4 w-full max-w-[280px]">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest w-8">
                VOL
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="grow h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] font-mono text-accent/70 w-10 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <a
              href="https://www.youtube.com/watch?v=uBR0HpPzLCY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-accent/30 text-accent/80 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-black transition-all"
            >
              Listen on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
