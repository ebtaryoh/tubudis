import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-obsidian py-28 text-bone-50 lg:py-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/file-2.jpg"
          alt="Architectural structure"
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-obsidian" />
      </div>
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gold-pale">
                Schedule Consultation
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl text-balance">
                Let's build the next{" "}
                <span className="italic text-gold-soft">landmark</span> together.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-200/70 lg:text-lg">
                Whether you're deploying capital, seeking a residence, or structuring an institutional
                partnership — the conversation starts here. Contact Tubudis Ltd today.
              </p>
            </Reveal>
            
            <Reveal delay={0.24}>
              <div className="mt-12 flex flex-col gap-6 font-mono text-sm text-bone-200/60">
                <p>
                  <strong className="text-gold-soft uppercase tracking-wider block mb-1">Office</strong>
                  30, Allen Avenue Ikeja,<br />Lagos, Nigeria
                </p>
                <p>
                  <strong className="text-gold-soft uppercase tracking-wider block mb-1">Phone</strong>
                  +234 705 726 5038
                </p>
                <p>
                  <strong className="text-gold-soft uppercase tracking-wider block mb-1">Email</strong>
                  partners@tubudis.com
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="bg-ink/50 backdrop-blur-md border border-bone-50/10 p-8 sm:p-12 lg:p-14">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 size={48} className="text-gold mb-6" />
                  <h3 className="font-display text-3xl mb-4">Request Received</h3>
                  <p className="text-bone-200/70">
                    Thank you for reaching out to Tubudis Ltd. A member of our team will contact you shortly to schedule your consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h3 className="font-display text-2xl mb-2">Send a Message</h3>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-bone-200/50">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name" 
                        className="bg-transparent border-b border-bone-50/20 py-3 text-bone-50 placeholder:text-bone-200/20 focus:outline-none focus:border-gold transition-colors rounded-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-bone-200/50">Email Address</label>
                      <input 
                        required
                        type="email" 
                        id="email" 
                        className="bg-transparent border-b border-bone-50/20 py-3 text-bone-50 placeholder:text-bone-200/20 focus:outline-none focus:border-gold transition-colors rounded-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-bone-200/50">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="bg-transparent border-b border-bone-50/20 py-3 text-bone-50 placeholder:text-bone-200/20 focus:outline-none focus:border-gold transition-colors rounded-none"
                      placeholder="+234 ..."
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-bone-200/50">Project Details</label>
                    <textarea 
                      required
                      id="message" 
                      rows={4}
                      className="bg-transparent border-b border-bone-50/20 py-3 text-bone-50 placeholder:text-bone-200/20 focus:outline-none focus:border-gold transition-colors resize-none rounded-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="group mt-4 inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold-soft disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto self-start"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Submit Request"}
                    <ArrowUpRight size={18} className={`transition-transform duration-300 ${formStatus === "submitting" ? "" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
