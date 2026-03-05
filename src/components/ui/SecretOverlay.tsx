"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SecretOverlay() {
  const [active, setActive] = useState(false);
  const [keys, setKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = new Set(keys);
      newKeys.add(e.key.toLowerCase());
      setKeys(newKeys);

      if (newKeys.has("s") && newKeys.has("e") && newKeys.has("c")) {
        setActive(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const newKeys = new Set(keys);
      newKeys.delete(e.key.toLowerCase());
      setKeys(newKeys);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-8 text-center"
        >
          <div className="max-w-xl">
            <h2 className="text-8xl font-bold chaos-gradient mb-8 animate-bounce">
              CHAOS MODE
            </h2>
            <p className="text-2xl text-cyan-400 font-hacker mb-12">
              You found the secret door. Everything you see is a simulation. The
              piano is a lie. The coffee is fake. Continue?
            </p>
            <button
              onClick={() => setActive(false)}
              className="px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors uppercase tracking-widest text-xl"
            >
              Back to Reality
            </button>
          </div>

          {/* Matrix-like falling text or random characters */}
          <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100 }}
                animate={{ y: "150vh" }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
                style={{ left: `${i * 5}%` }}
                className="absolute text-cyan-500 font-mono text-xs whitespace-nowrap"
              >
                {Math.random().toString(36).substring(2, 10).repeat(20)}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
