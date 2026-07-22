import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-bg to-bg">
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 to-transparent" />
      </div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-[float_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-[float_4s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-surface border border-border backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted tracking-wide">
              Bespoke Homes for the Discerning
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-text leading-[1.05]"
          >
            Where Vision Becomes{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Timeless Craft
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
          >
            Maison Élite designs and builds exceptional custom homes tailored to
            the individuals who inhabit them. Every detail considered, every
            residence unrepeatable.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              View Our Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-surface border border-border backdrop-blur-md text-text font-semibold cursor-pointer hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Begin a Conversation
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-10"
          >
            {[
              { value: "150+", label: "Homes Delivered" },
              { value: "25", label: "Years of Craft" },
              { value: "40+", label: "Design Awards" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary font-[var(--font-display)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}