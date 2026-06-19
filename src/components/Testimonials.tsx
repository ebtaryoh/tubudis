import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { TESTIMONIALS, PARTNERS } from "../lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  const go = (dir: number) =>
    setActive((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative bg-bone-100 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow number="( 06 )">Partner Confidence</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] text-balance">
                Trusted by institutional capital.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex items-center gap-3">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-12 w-12 items-center justify-center border border-charcoal/20 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-bone-50"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-12 w-12 items-center justify-center border border-charcoal/20 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-bone-50"
                >
                  <ArrowRight size={18} />
                </button>
                <span className="ml-3 font-mono text-xs text-stone">
                  0{active + 1} / 0{TESTIMONIALS.length}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <Reveal>
              <Quote size={48} className="text-gold/30" strokeWidth={1} />
              <div className="relative mt-4 min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-display text-xl font-light leading-[1.45] text-ink sm:text-2xl lg:text-[2rem] text-balance">
                      "{t.quote}"
                    </p>
                    <footer className="mt-8 flex items-center gap-4">
                      <span className="h-px w-8 bg-gold" />
                      <div>
                        <div className="font-medium text-ink">{t.name}</div>
                        <div className="text-sm text-slate-warm">{t.role}</div>
                      </div>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Partner logos marquee */}
        <Reveal delay={0.1}>
          <div className="mt-24 border-t border-charcoal/10 pt-12">
            <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-eyebrow text-stone">
              Capital & Development Partners
            </p>
            <div className="relative overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-16 lg:gap-24">
                {[...PARTNERS, ...PARTNERS].map((name, i) => (
                  <span
                    key={i}
                    className="font-display text-2xl tracking-tight text-charcoal/30 transition-colors hover:text-charcoal/60 lg:text-3xl"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bone-100 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bone-100 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
