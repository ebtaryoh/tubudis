import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-obsidian">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/file-1.jpg"
          alt="Modern architectural tower at dusk"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-20 pt-36 lg:px-12 lg:pb-28">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gold" />
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gold-pale">
              Development-Led Real Estate
            </span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-light leading-[1.04] tracking-tight text-bone-50 sm:text-6xl lg:text-[5.2rem] text-balance">
            {["Building the Future", "of Urban Living Through", "Intelligent Development"].map(
              (line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease, delay: 0.55 + i * 0.12 }}
                  >
                    {i === 2 ? (
                      <>
                        Intelligent <span className="italic text-gold-soft">Development</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-bone-200/80 lg:text-lg"
          >
            Tubudis Ltd is an architecture & property development company. We focus on changing the urban landscape of human space with sustainable architectural design and innovative real estate projects to quell housing problems in Nigeria and the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.2 }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 bg-bone-50 px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-gold hover:text-bone-50"
            >
              Explore Projects
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 border border-bone-50/30 px-8 py-4 text-sm font-medium text-bone-50 transition-colors duration-300 hover:border-gold hover:bg-gold/10"
            >
              Partner With Us
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 1.5 }}
          className="mt-16 grid grid-cols-2 gap-px border-t border-bone-50/15 pt-8 sm:grid-cols-4 lg:mt-20"
        >
          {[
            ["₦2.4B+", "Assets Managed"],
            ["38+", "Projects Delivered"],
            ["17+", "Communities"],
            ["100%", "Lifecycle Coverage"],
          ].map(([num, label]) => (
            <div key={label} className="pr-6">
              <div className="font-display text-2xl text-bone-50 lg:text-3xl">{num}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-bone-200/50">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 lg:right-12 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-bone-200/50 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-bone-50/20">
          <span className="absolute inset-0 origin-top animate-scroll-line bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
