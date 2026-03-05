"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const COMMAND_RESPONSES: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whois duggu - Reveal the truth",
    "  projects    - List chaos builds",
    "  music       - What's playing?",
    "  secret      - ???",
    "  clear       - Wipe the screen",
  ],
  whois_duggu:
    "A biological interface for translating caffeine into buggy code.",
  projects:
    "Navigate to #projects or try the following: Banana Piano, Chaos Sim, Doom AI.",
  music: "Piano at 2am. It's an aesthetic, not a choice.",
  secret: "ACCESS DENIED. Try pressing 'S + E + C' together.",
  hello: "Greetings, carbon-based lifeform.",
};

export default function TerminalSection() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to DUGGU OS v0.1.0",
    "Type 'help' to begin...",
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim().replace(" ", "_");
    const newHistory = [...history, `> ${input}`];

    if (cmd === "clear") {
      setHistory([]);
    } else if (COMMAND_RESPONSES[cmd]) {
      const response = COMMAND_RESPONSES[cmd];
      if (Array.isArray(response)) {
        newHistory.push(...response);
      } else {
        newHistory.push(response);
      }
      setHistory(newHistory);
    } else if (input !== "") {
      newHistory.push(`Command not found: ${input}. Type 'help' for options.`);
      setHistory(newHistory);
    }

    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="glass rounded-xl overflow-hidden border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
      >
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-gray-500 font-hacker uppercase tracking-widest">
            duggu-os-terminal
          </span>
        </div>

        <div
          ref={scrollRef}
          className="p-6 h-[400px] overflow-y-auto font-mono text-cyan-400/90 text-sm md:text-base selection:bg-cyan-500 selection:text-black"
        >
          {history.map((line, i) => (
            <div key={i} className="mb-1 leading-relaxed">
              {line}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex mt-4">
            <span className="text-pink-400 mr-2">➜</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              className="bg-transparent border-none outline-none flex-grow text-white"
              spellCheck={false}
              placeholder="type here..."
            />
          </form>
        </div>
      </motion.div>
    </section>
  );
}
