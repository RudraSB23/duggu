"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-bold mb-16 text-right neon-text"
      >
        CHAOTIC BUILDS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative group h-full rounded-2xl overflow-hidden glass p-1`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}
            />

            <div className="p-8 h-full flex flex-col">
              <span className="text-xs font-hacker text-cyan-400 mb-2 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs glass border-white/10 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.link}
                  className="p-2 glass rounded-full hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
