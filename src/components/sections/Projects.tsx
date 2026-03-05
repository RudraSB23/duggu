"use client";

import { motion } from "framer-motion";
import { Share2, Plus } from "lucide-react";

const experiments = [
  {
    title: "PROJECT NEXUS",
    tag: "BETA",
    progress: 47,
    desc: "Neural bridge between Discord and remote APIs.",
    details: "Discord Bots & Automation Ecosystem",
  },
  {
    title: "VOID_CORE",
    tag: "STABLE",
    progress: 82,
    desc: "Decentralized automation for Telegram workflows.",
    details: "Telegram Bot Framework & Cloud Lab",
  },
  {
    title: "AEGIS_PROTO",
    tag: "BETA",
    progress: 12,
    desc: "Lua-based multiplayer interaction cores.",
    details: "Roblox Multiplayer Tycoons & Systems",
  },
  {
    title: "SYNTH_VM",
    tag: "BETA",
    progress: 66,
    desc: "Virtualized AI infrastructure and edge nodes.",
    details: "Cloud, AI & Raspberry Pi Cloud Infrastructure",
  },
];

const hiddenAssets = [
  { label: "REPO:", value: "/black-mirror-api" },
  { label: "REPO:", value: "/ghost-shell-v2" },
  { label: "INVITE:", value: "Private Discord Node" },
  { label: "FILE:", value: "encrypted_manifest.vault" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-accent/10"
    >
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-accent uppercase tracking-[0.3em] flex items-center gap-4">
          <span className="w-8 h-[2px] bg-accent" />
          WIP_PROJECTS.LOG
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-black border border-accent/20 relative group hover:border-accent/60 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-accent font-black text-base uppercase tracking-tighter">
                {exp.title}
              </h3>
              <span className="text-[8px] border border-accent/40 bg-accent/5 text-accent px-1.5 font-bold rounded-sm">
                {exp.tag}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-[8px] font-bold text-accent/50 mb-1 uppercase tracking-widest">
                <span>PROGRESS</span>
                <span>{exp.progress}%</span>
              </div>
              <div className="h-[3px] bg-accent/10 w-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${exp.progress}%` }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.5 + i * 0.1,
                  }}
                  className="h-full bg-accent"
                />
              </div>
            </div>

            <p className="text-[10px] text-accent/70 font-mono leading-relaxed h-12 overflow-hidden mb-2">
              {exp.desc}
            </p>
            <p className="text-[8px] text-accent/40 font-mono italic">
              {exp.details}
            </p>

            <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-accent/20" />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          {/* Terminal-like status box */}
          <div className="p-6 bg-accent/5 border border-accent/20 rounded-sm font-mono text-[11px] leading-relaxed text-accent/80 relative overflow-hidden group">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="ml-2 text-[9px] text-accent/40 uppercase tracking-widest">
                SYSTEM_LOG_v4.0.2
              </span>
            </div>

            <div className="space-y-1">
              <p>[2026.03.01] Initializing Sanctuary protocols...</p>
              <p className="text-yellow-500/80">
                WARNING: Unauthorized access attempt detected from 192.168.1.184
              </p>
              <p>
                [2026.03.02] Security layers patched. Matrix background
                optimized.
              </p>
              <p>
                [2026.03.04] Began refactoring Nexus project. Dependency hell
                resolved.
              </p>
              <p>
                [2026.03.05] Fixed webhook integration for production
                environments.
              </p>
              <p>
                [2026.03.06] Purging cached data. space grotesque font
                initialized.
              </p>
              <p className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                SUCCESS: Sanctuary deployment successful. Standing by...
              </p>
              <p className="text-[9px] text-accent/20">
                AUTH_TOKEN_ENCRYPTED: 7RUE_CH405
              </p>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-accent align-middle ml-1"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="p-6 bg-black border border-accent/20 h-full relative group hover:border-accent/40 transition-colors">
            <h4 className="text-xs font-black text-accent text-center uppercase tracking-[0.4em] mb-6 decoration-accent/20 underline underline-offset-8">
              HIDDEN_ASSETS
            </h4>

            <div className="space-y-4">
              {hiddenAssets.map((asset, i) => (
                <div
                  key={asset.value}
                  className="flex gap-3 text-[10px] font-mono leading-tight"
                >
                  <span className="text-accent/40 whitespace-nowrap">
                    {asset.label}
                  </span>
                  <span className="text-accent/80 hover:text-white transition-colors cursor-pointer break-all">
                    {asset.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-accent/10 text-center">
              <span className="text-[8px] font-bold text-accent/40 uppercase tracking-[0.2em] animate-pulse">
                DUGGU_ONLINE_SYSTEM ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
