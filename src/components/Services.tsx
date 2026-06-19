import { motion } from "framer-motion";
import {
  Landmark,
  LineChart,
  PencilRuler,
  HardHat,
  Megaphone,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { SERVICES } from "../lib/data";

const icons = [Landmark, LineChart, PencilRuler, HardHat, Megaphone, Briefcase];

export default function Services() {
  return (
    <section id="services" className="relative bg-bone-50 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow number="( 02 )">Core Services</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-3xl font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] text-balance">
                A complete development capability, under one roof.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-slate-warm lg:text-right">
                Six integrated disciplines that move a project from raw opportunity to managed,
                income-producing asset.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col bg-bone-50 p-8 transition-colors duration-500 hover:bg-ink lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={30}
                    strokeWidth={1.2}
                    className="text-gold transition-transform duration-500 group-hover:-translate-y-1"
                  />
                  <span className="font-mono text-xs text-stone transition-colors duration-500 group-hover:text-gold-soft">
                    {service.index}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-xl leading-snug text-ink transition-colors duration-500 group-hover:text-bone-50 lg:text-[1.4rem]">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-warm transition-colors duration-500 group-hover:text-bone-200/70">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-clay opacity-0 transition-all duration-500 group-hover:text-gold-soft group-hover:opacity-100">
                  Discover
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
