"use client";

import { motion } from "framer-motion";
import { Share2, Plus } from "lucide-react";

const experiments = [
  {
    title: "Project: Void Shader",
    description:
      "An experimental GPU program designed to reduce heat levels efficiently and produce zero point outputs.",
    tags: ["GLSL", "RENDER"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Chaos-Monkey v.1",
    description:
      "A high-performance system test that randomly induces pressures to test developer resilience.",
    tags: ["SYSTEM", "TEST"],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
            Coding Experiments
          </h2>
          <p className="text-gray-500 text-sm max-w-md">
            A collection of digital artifacts, chaos prototypes, and theoretical
            architecture.
          </p>
        </div>
        <button className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2 hover:underline">
          View All Directory <Plus size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group block overflow-hidden"
          >
            <div className="relative aspect-video bg-white/5 mb-6 overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] to-transparent opacity-60" />
            </div>

            <div className="flex gap-2 mb-4">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-accent/10 text-accent font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter group-hover:text-accent transition-colors">
              {exp.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
              {exp.description}
            </p>

            <div className="flex items-center gap-6">
              <button className="text-[10px] font-bold text-gray-500 flex items-center gap-2 uppercase tracking-widest hover:text-white transition-colors">
                <Share2 size={14} /> 124
              </button>
              <button className="text-[10px] font-bold text-gray-500 flex items-center gap-2 uppercase tracking-widest hover:text-white transition-colors">
                <Plus size={14} /> 2
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
