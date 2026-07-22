import { motion } from "framer-motion";
import { Gem, Ruler, Hammer, ShieldCheck, Sparkles, Home } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Bespoke Design",
    description:
      "Every residence begins as a blank canvas, tailored precisely to your vision, lifestyle, and land.",
  },
  {
    icon: Ruler,
    title: "Architectural Precision",
    description:
      "Award-winning architects translate ideas into blueprints of enduring beauty and function.",
  },
  {
    icon: Hammer,
    title: "Master Craftsmanship",
    description:
      "Old-world artisanship meets modern engineering, executed by our finest builders.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description:
      "Only the finest materials, rigorously sourced and inspected at every stage of construction.",
  },
  {
    icon: Sparkles,
    title: "Curated Finishes",
    description:
      "Hand-selected fixtures and details that elevate each space into a work of art.",
  },
  {
    icon: Home,
    title: "Lifetime Partnership",
    description:
      "A dedicated concierge team supporting you long after the keys are handed over.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeatureSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-bg to-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
            The Maison Élite Standard
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-[var(--font-display)]">
            Crafted for the Discerning
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            We orchestrate every detail of the building journey — from first
            sketch to final flourish — so your home becomes a singular expression
            of who you are.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={item}
                className="group bg-surface border border-border rounded-xl backdrop-blur-md p-8 hover:-translate-y-1 transition-all duration-300 hover:border-primary/40"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-text font-[var(--font-display)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}