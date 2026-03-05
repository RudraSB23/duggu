"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StatsBar } from "../sections/StatsBar";

interface SanctuaryEasterEggProps {
  onClose: () => void;
}

export default function SanctuaryEasterEgg({
  onClose,
}: SanctuaryEasterEggProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black text-[#00ff00] font-mono overflow-y-auto"
    >
      {/* Local CRT Effects */}
      <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_70%,rgba(0,0,0,0.4)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-[#00ff00]/10 shadow-[0_0_10px_rgba(0,255,0,0.5)]"
        />
      </div>

      <div className="max-w-6xl mx-auto py-20 md:py-32 px-6 md:px-8 flex flex-col items-center relative z-[9999]">
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 md:top-8 md:right-8 p-2 border border-[#00ff00]/20 hover:bg-[#00ff00]/10 transition-colors group bg-black md:bg-transparent rounded-sm"
        >
          <X
            size={20}
            className="md:size-[24px] group-hover:rotate-90 transition-transform"
          />
        </button>

        {/* Large Decorative Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-10 md:mb-12 text-center mt-12 md:mt-0"
        >
          <h1 className="text-5xl sm:text-7xl md:text-[140px] font-black leading-none tracking-tighter text-[#00ff00] drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] uppercase">
            DC DUGGU
          </h1>
        </motion.div>

        {/* Access Granted Banner */}
        <div className="bg-[#00ff00] text-black px-4 py-1.5 md:px-12 md:py-3 mb-8 md:mb-6 flex items-center gap-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
          <span className="text-[10px] sm:text-sm md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
            {">"} ACCESS GRANTED {">"} WELCOME TO THE SANCTUARY
          </span>
        </div>

        {/* System Info Line */}
        <div className="text-[8px] md:text-sm font-bold text-[#00ff00]/60 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-12 flex flex-wrap justify-center gap-3 md:gap-4">
          <span>[ SYSTEM STATUS: SECURE ]</span>
          <span className="hidden md:inline">|</span>
          <span>[ ENCRYPTION: AES-256 ]</span>
        </div>

        {/* Stats Grid - Overridden with green styles locally */}
        <div className="w-full mb-12 md:mb-16 sanctuary-stats scale-[0.8] md:scale-100 origin-center">
          <style jsx global>{`
            .sanctuary-stats .glass-card {
              background: rgba(0, 255, 0, 0.03) !important;
              border-color: rgba(0, 255, 0, 0.2) !important;
              color: #00ff00 !important;
            }
            .sanctuary-stats .neon-glow {
              text-shadow: 0 0 10px #00ff00 !important;
            }
            .sanctuary-stats .text-gray-400 {
              color: rgba(0, 255, 0, 0.5) !important;
            }
          `}</style>
          <StatsBar />
        </div>

        {/* Action Button */}
        <div className="mt-4 text-center pb-20 md:pb-0">
          <button
            onClick={onClose}
            className="bg-[#00ff00] text-black px-8 py-4 md:px-12 md:py-5 font-black text-sm md:text-lg tracking-[0.1em] md:tracking-[0.2em] uppercase hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,0,0.3)] w-full md:w-auto"
          >
            EXIT SANCTUARY
          </button>
          <p className="mt-6 md:mt-4 text-[7px] md:text-[8px] text-[#00ff00]/30 tracking-widest uppercase max-w-xs md:max-w-none mx-auto">
            © 2026 DC DUGGU. ALL RIGHTS RESERVED. NO ADMITTANCE EXCEPT ON PARTY
            BUSINESS.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
