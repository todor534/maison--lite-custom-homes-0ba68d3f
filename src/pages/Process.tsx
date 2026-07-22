import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Compass, Hammer, Home, Users, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessStep from "@/components/ProcessStep";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Discovery & Vision",
    description:
      "We begin with an intimate consultation to understand your lifestyle, aspirations, and the story you wish your home to tell. Every detail matters from the very first conversation.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Bespoke Design",
    description:
      "Our master architects translate your vision into meticulously crafted plans, balancing timeless elegance with modern functionality tailored precisely to your desires.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Site & Planning",
    description:
      "We orchestrate every logistical element—permits, surveys, and site preparation—ensuring a seamless foundation for your extraordinary residence.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Artisan Construction",
    description:
      "Skilled craftsmen bring your home to life using the finest materials and uncompromising attention to detail, guided by decades of collective expertise.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous inspections at every milestone guarantee that each element meets our exacting standards of luxury, durability, and refinement.",
  },
  {
    number: "06",
    icon: Home,
    title: "The Grand Reveal",
    description:
      "We present your completed sanctuary—a bespoke masterpiece ready to welcome a lifetime of cherished moments.",
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-bg to-bg py-32 md:py-44">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.3em] text-accent mb-6"
            >
              The Journey
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Process
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-2xl mx-auto text-lg text-muted leading-relaxed"
            >
              From the first spark of inspiration to the final flourish, every
              step is a deliberate act of craftsmanship. Discover how we
              transform visions into enduring architectural legacies.
            </motion.p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, i) => (
                <ProcessStep key={step.number} {...step} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-accent/20 via-bg to-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold">
                  A Partnership Built on{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Trust
                  </span>
                </h2>
                <p className="mt-6 text-muted leading-relaxed">
                  We believe the finest homes are born from genuine
                  collaboration. Throughout every phase, you remain at the heart
                  of the process—informed, involved, and inspired.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Dedicated project concierge from start to finish",
                    "Transparent milestone reporting and budgeting",
                    "Hand-selected artisans and premium materials",
                    "Lifetime craftsmanship guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden border border-border"
              >
                <img
                  src=""
                  alt="Artisan detailing on a luxury custom home"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-surface border border-border rounded-xl backdrop-blur-md p-12 md:p-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Begin Your Journey
              </h2>
              <p className="mt-6 text-muted leading-relaxed max-w-2xl mx-auto">
                Ready to bring your vision to life? Let us craft a home as
                unique as the story you wish to tell within it.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}