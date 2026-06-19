import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { METRICS } from "../lib/data";

export default function Impact() {
  return (
    <section id="impact" className="relative bg-bone-50 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="( 05 )">Impact & Credibility</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] text-balance">
              Numbers built on delivered conviction.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-t border-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <div className="pt-8 sm:pr-6">
                <div className="font-display text-5xl font-light tracking-tight text-ink lg:text-7xl">
                  <Counter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                </div>
                <div className="mt-4 h-px w-12 bg-gold" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-slate-warm">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
