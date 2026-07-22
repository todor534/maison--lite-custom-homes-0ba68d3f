import { motion } from "framer-motion";
import { Award, Home, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const stats = [
  { icon: Home, value: "150+", label: "Homes Delivered" },
  { icon: Award, value: "28", label: "Design Awards" },
  { icon: Users, value: "40+", label: "Master Artisans" },
  { icon: Sparkles, value: "25", label: "Years of Craft" },
];

const values = [
  {
    title: "Uncompromising Craftsmanship",
    body: "Every joint, every finish, every material is selected and executed by master artisans who treat each home as a lifelong signature.",
  },
  {
    title: "Bespoke by Design",
    body: "No two Maison Élite homes are alike. We begin with your story and translate it into architecture that lives and breathes your vision.",
  },
  {
    title: "Discreet Partnership",
    body: "We serve a discerning clientele with absolute confidentiality, white-glove service, and a single point of contact from concept to key.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-bg text-text font-[var(--font-body)]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-bg to-bg pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
                Our Story
              </span>
              <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight font-[var(--font-display)]">
                Crafting homes that{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  endure generations
                </span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
                For over two decades, Maison Élite Custom Homes has been the
                quiet name behind the most extraordinary private residences.
                We build not merely houses, but heirlooms — sanctuaries shaped
                entirely around the lives of those who dwell within them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image + narrative */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden border border-border"
            >
              <img
                src=""
                alt="Master artisans at work in the Maison Élite atelier"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-display)]">
                A legacy of{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  quiet excellence
                </span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Founded in 1999, Maison Élite began as a single atelier of
                craftsmen who believed that a home should be as singular as the
                family it shelters. What began as a passion for detail has grown
                into a full architectural and construction house — yet our
                obsession with the handcrafted has never wavered.
              </p>
              <p className="mt-6 text-muted leading-relaxed">
                Today, our collective of architects, interior designers, and
                master builders collaborate as one, delivering residences that
                blend timeless elegance with the finest contemporary living. Each
                project is a private commission, curated with intention.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-surface backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <div className="mt-4 text-4xl md:text-5xl font-bold font-[var(--font-display)]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              What Defines Us
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold font-[var(--font-display)]">
              Principles woven into every home
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-xl backdrop-blur-md p-8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <span className="text-xl font-bold text-primary font-[var(--font-display)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold font-[var(--font-display)]">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{value.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}