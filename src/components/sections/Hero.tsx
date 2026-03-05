"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sentences = [
  "Coding weird things",
  "Playing piano at 2am",
  "Breaking software accidentally",
  "Building random electronics",
  "Professional Chaos Engineer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === sentences[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % sentences.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    setText(sentences[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-tighter">
          <span className="chaos-gradient">DC</span> DUGGU
        </h1>

        <div className="h-8 md:h-12 flex items-center justify-center">
          <p className="text-xl md:text-3xl font-hacker text-cyan-400 opacity-80">
            {text}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <div className="w-1 h-12 bg-cyan-500/50 rounded-full animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Background glitchy elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>
    </section>
  );
}
