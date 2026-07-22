import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Compass, Gem, Home as HomeIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";

const features = [
  {
    icon: Gem,
    title: "Bespoke Design",
    description:
      "Every residence is conceived from a blank canvas, tailored precisely to your vision and lifestyle.",
  },
  {
    icon: Award,
    title: "Master Craftsmanship",
    description:
      "Our artisans bring generations of expertise, ensuring impeccable detail in every finish.",
  },
  {
    icon: Compass,
    title: "Curated Locations",
    description:
      "We build on the most coveted sites, marrying architecture with its natural surroundings.",
  },
  {
    icon: HomeIcon,
    title: "Turnkey Delivery",
    description:
      "From concept to completion, we manage every stage with discretion and precision.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      <HeroSection />

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              The Maison Élite Difference
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Crafted Without Compromise
            </h2>
            <p className="mt-6 text-muted text-base leading-relaxed">
              We create homes that transcend the ordinary — sanctuaries of design,
              engineering, and enduring luxury.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((f) => (
              <motion.article
                key={f.title}
                variants={item}
                className="bg-surface border border-border rounded-xl backdrop-blur-md p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-bg to-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
                Selected Works
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-text">
                Signature Residences
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-primary font-medium cursor-pointer hover:text-accent transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featured.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialSection />

      <CTASection />
    </main>
  );
}