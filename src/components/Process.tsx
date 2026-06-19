import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { PROCESS } from "../lib/data";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-bone-50 lg:py-36">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow number="( 04 )" dark>
                The Tubudis System
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-3xl font-display text-3xl font-light leading-[1.1] tracking-tight text-bone-50 sm:text-4xl lg:text-[3.25rem] text-balance">
                Not a sequence of steps — a single, continuous system.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-bone-200/70 lg:text-right">
                Each phase feeds the next. Intelligence captured at acquisition informs design;
                design discipline protects construction; delivery insight compounds into
                management. Value is never handed off — it accrues.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* baseline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-[7px] hidden h-px w-full origin-left bg-gradient-to-r from-gold via-clay to-transparent lg:block"
          />

          <div className="grid gap-y-12 lg:grid-cols-6 lg:gap-x-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative lg:pr-4"
              >
                {/* node */}
                <div className="mb-6 flex items-center gap-4 lg:block">
                  <span className="relative z-10 block h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-ink" />
                  <span className="font-mono text-xs text-gold-soft lg:hidden">
                    {step.phase}
                  </span>
                </div>
                <span className="hidden font-mono text-xs text-gold-soft lg:mb-3 lg:block">
                  Phase {step.phase}
                </span>
                <h3 className="font-display text-xl leading-snug text-bone-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-200/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
