import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg to-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-surface border border-border rounded-3xl backdrop-blur-md px-6 py-16 md:px-16 md:py-24 text-center overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative">
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
              Begin Your Journey
            </span>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Craft the home
              </span>{" "}
              <span className="text-text">that reflects your legacy</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted max-w-2xl mx-auto">
              From the first sketch to the final finish, we partner with a select
              few clients each year to create residences of uncommon distinction.
              Let us bring your vision to life.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                Request a Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+18005550100"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-text font-semibold backdrop-blur-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <Phone className="h-5 w-5 text-primary" />
                +1 (800) 555-0100
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}