import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/data";

function Logo({ light }: { light?: boolean }) {
  const stroke = light ? "#f4f1ea" : "#1a1916";
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <img src="/logo/file-1.jpg" alt="Tubudis Logo" className="w-8 h-8 object-contain rounded-sm" />
      <span
        className="font-display text-xl tracking-tight leading-none"
        style={{ color: light ? "#f4f1ea" : "#1a1916" }}
      >
        Tubudis
        <span className="text-gold">.</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bone-50/80 backdrop-blur-xl border-b border-charcoal/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 flex items-center justify-between">
          <Logo light={light} />

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  light
                    ? "text-bone-100/80 hover:text-bone-50"
                    : "text-slate-warm hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                light
                  ? "bg-bone-50 text-ink hover:bg-gold hover:text-bone-50"
                  : "bg-ink text-bone-50 hover:bg-gold"
              }`}
            >
              Schedule Consultation
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden p-2 ${light ? "text-bone-50" : "text-ink"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian text-bone-50 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo light />
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col px-6 mt-10 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-display text-4xl py-4 border-b border-bone-50/10"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center px-6 py-4 bg-gold text-ink font-medium"
              >
                Schedule Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
