import { motion } from "framer-motion";
import { Leaf, Building2, Compass } from "lucide-react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Compass,
    title: "End-to-End Ownership",
    text: "One accountable partner across acquisition, design, delivery and management.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    text: "Environmental performance engineered in from the first feasibility model.",
  },
  {
    icon: Building2,
    title: "Urban Transformation",
    text: "Developments that elevate communities and the value of the cities around them.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-bone-100 py-24 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src="/images/file-1 (2).jpg"
                    alt="Tubudis architectural detail"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden border-4 border-bone-100 sm:block lg:-right-10">
                  <img
                    src="/images/file-1 (3).jpg"
                    alt="Tubudis architecture project"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <Eyebrow number="( 01 )">Our Philosophy</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] text-balance">
                Realizing creative projects requires a unique combination of{" "}
                <span className="italic text-gold">drive, ambition, skill</span> and technical know-how.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-warm lg:text-lg">
                At Tubudis Ltd we aim for only excellence and hire the best to ensure we provide a turnkey solution for our clients that is both realistic and extraordinary! Tubudis Ltd prides itself on turning in projects on-time and within budget, you could contact some of our past clients and we are sure you would hear nothing but ringing endorsement.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-warm lg:text-lg">
                We care about each and every client and will work our hardest to design a safe and exciting development that completely suits your needs. We also follow best practices in the areas of ergonomic home planning and environmentally-friendly design to make home efficient and save you money.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px border-t border-charcoal/10 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.08}>
                  <div className="pt-7 pr-5">
                    <p.icon size={22} className="text-gold" strokeWidth={1.4} />
                    <h3 className="mt-4 font-display text-lg text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
