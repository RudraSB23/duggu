import ThreeBackground from "@/components/layout/ThreeBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import PianoSection from "@/components/sections/Piano";
import TerminalSection from "@/components/sections/Terminal";
import SecretOverlay from "@/components/ui/SecretOverlay";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Layer */}
      <ThreeBackground />

      {/* HUD Layer */}
      <Navbar />
      <SecretOverlay />

      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <PianoSection />
        <TerminalSection />

        {/* Footer */}
        <footer className="py-20 text-center text-gray-600 font-hacker text-sm">
          <p>© 2026 DC DUGGU. ALL RIGHTS RESERVED BY THE CHAOS ENGINE.</p>
          <p className="mt-2 text-xs">
            MADE WITH TOO MUCH COFFEE AND 2AM REGRETS.
          </p>
        </footer>
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </main>
  );
}
