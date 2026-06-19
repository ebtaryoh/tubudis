import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { PROJECTS } from "../lib/data";

function ProjectCard({
  project,
  className,
}: {
  project: (typeof PROJECTS)[number];
  className?: string;
}) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative block overflow-hidden bg-charcoal ${className}`}
    >
      <img
        src={project.image}
        alt={`${project.name}, ${project.location}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Type tag */}
      <div className="absolute left-5 top-5 z-10">
        <span className="bg-bone-50/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-bone-50 backdrop-blur-sm">
          {project.type}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-gold-pale">
              {project.location} · {project.year}
            </p>
            <h3 className="mt-2 font-display text-2xl text-bone-50 lg:text-[1.7rem]">
              {project.name}
            </h3>
            <p className="mt-1 max-h-0 overflow-hidden text-sm text-bone-200/70 opacity-0 transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100">
              {project.units}
            </p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone-50/30 text-bone-50 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-bone-100 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow number="( 03 )">Featured Projects</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-2xl font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] text-balance">
                A portfolio defined by precision.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
            >
              View Full Portfolio
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Masonry-style grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          <ProjectCard project={PROJECTS[0]} className="lg:row-span-2 aspect-[4/5] lg:aspect-auto" />
          <ProjectCard project={PROJECTS[1]} className="lg:col-span-2 aspect-[16/10] lg:aspect-auto" />
          <ProjectCard project={PROJECTS[3]} className="aspect-[4/3] lg:aspect-auto" />
          <ProjectCard project={PROJECTS[2]} className="lg:row-span-2 aspect-[4/5] lg:aspect-auto" />
          <ProjectCard project={PROJECTS[4]} className="aspect-[4/3] lg:aspect-auto" />
        </div>
      </div>
    </section>
  );
}
