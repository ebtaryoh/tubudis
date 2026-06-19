import { Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: ["Philosophy", "Leadership", "Careers", "Press"],
  },
  {
    title: "Services",
    links: ["Acquisition", "Feasibility", "Construction", "Asset Management"],
  },
  {
    title: "Connect",
    links: ["Investor Relations", "Partnerships", "Contact", "Newsletter"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bone-50">
      <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/logo/file-1.jpg" alt="Tubudis Logo" className="w-10 h-10 object-contain rounded-sm" />
              <span className="font-display text-2xl">
                Tubudis<span className="text-gold">.</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-200/60">
              30, Allen Avenue Ikeja,<br />Lagos, Nigeria.
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-bone-200/60">
              <a href="tel:+2347057265038" className="hover:text-gold transition-colors">+234 705 726 5038</a>
            </p>
            <a
              href="mailto:partners@tubudis.com"
              className="group mt-8 inline-flex items-center gap-2 font-display text-2xl text-bone-50 transition-colors hover:text-gold lg:text-3xl"
            >
              partners@tubudis.com
              <ArrowUpRight size={22} className="text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-eyebrow text-gold-soft">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#contact"
                        className="text-sm text-bone-200/60 transition-colors hover:text-bone-50"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-bone-50/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-bone-200/40">
            © {new Date().getFullYear()} Tubudis Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="hidden gap-6 text-xs text-bone-200/40 sm:flex">
              <a href="#" className="transition-colors hover:text-bone-50">Privacy</a>
              <a href="#" className="transition-colors hover:text-bone-50">Terms</a>
              <a href="#" className="transition-colors hover:text-bone-50">Legal</a>
            </div>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center border border-bone-50/15 text-bone-200/60 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
