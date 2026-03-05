"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const COMMAND_RESPONSES: Record<string, string | string[]> = {
  help: [
    "Available modules:",
    "  whois_duggu      - Reveal biological interface stats",
    "  projects         - List current builds",
    "  status           - Display system health",
    "  access_sanctuary - [RESTRICTED ACCESS]",
    "  clear            - Wipe the buffer",
  ],
  whois_duggu:
    "Student, Developer, and Content Creator. Specializing in bots, games, and digital chaos.",
  projects:
    "Directing to #projects: Discord Bots, Telegram Ecosystem, Roblox Games, Cloud Lab.",
  status: "CORE: STABLE. CAFFEINE: CRITICAL. CHAOS: NOMINAL.",
  access_sanctuary: "INITIALIZING SANCTUARY PROTOCOLS... ACCESS GRANTED.",
  clear: "Buffer cleared.",
};

interface TerminalSectionProps {
  onSanctuaryAccess?: () => void;
}

export default function TerminalSection({
  onSanctuaryAccess,
}: TerminalSectionProps) {
  const [history, setHistory] = useState<string[]>([
    "DUGGU OS v.4.0.2 - CORE INITIALIZED",
    "Welcome to the DC DUGGU Universe Interface.",
    "Type 'help' to access specific data modules.",
    " ",
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = input.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).map((a) => a.toLowerCase());
    const newHistory = [...history, `USER@DUGGU:~$ ${input}`];

    if (cmd === "clear") {
      setHistory(["DUGGU OS v.4.0.2 - BUFFER RESET", " "]);
    } else if (cmd === "access_sanctuary") {
      if (args.includes("7rue_ch405")) {
        newHistory.push("INITIALIZING SANCTUARY PROTOCOLS... ACCESS GRANTED.");
        setHistory(newHistory);
        if (onSanctuaryAccess) {
          setTimeout(onSanctuaryAccess, 1000);
        }
      } else {
        newHistory.push(
          "PERMISSION DENIED: Access token required.",
          "Hint: Search for the blueprint logs.",
          "Format: access_sanctuary [TOKEN]",
        );
        setHistory(newHistory);
      }
    } else if (COMMAND_RESPONSES[cmd]) {
      const response = COMMAND_RESPONSES[cmd];
      if (Array.isArray(response)) {
        newHistory.push(...response);
      } else {
        newHistory.push(response);
      }
      setHistory(newHistory);
    } else if (input !== "") {
      newHistory.push(`ERR: Module '${input}' not found. Try 'help'.`);
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
    <section
      id="terminal"
      className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-[#050505] rounded-sm overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[500px]"
      >
        <div className="bg-white/5 px-6 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
          </div>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
            Duggu-Shell-v4.0.2 — bash
          </span>
          <div className="w-10" />
        </div>

        <div
          ref={scrollRef}
          className="p-4 md:p-8 overflow-y-auto font-mono text-[13px] md:text-base selection:bg-accent selection:text-black grow"
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={`mb-1.5 leading-relaxed ${line.startsWith("USER") ? "text-white" : "text-accent/80"}`}
            >
              {line}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex mt-6 group">
            <span className="text-gray-500 mr-3">➜</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none grow text-white caret-accent"
              spellCheck={false}
              placeholder="..."
            />
          </form>
        </div>
      </motion.div>
    </section>
  );
}
