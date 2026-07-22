import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Ruler } from "lucide-react";
import { projects } from "@/data/projects";
import GalleryLightbox from "@/components/GalleryLightbox";
import CTASection from "@/components/CTASection";

const categories = ["All", "Modern", "Estate", "Coastal", "Contemporary"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-bg text-text">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary/10 via-bg to-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4">
              Our Work
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Portfolio
              </span>
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              A curated collection of bespoke residences, each one a testament to
              uncompromising craftsmanship and the singular vision of our
              discerning clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={
                  "px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none " +
                  (filter === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-muted border-border hover:text-text hover:border-primary/40")
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group bg-surface border border-border rounded-xl backdrop-blur-md overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setLightbox({ images: project.gallery, index: 0 })
                }
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-bg/60 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-text" />
                  </div>
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium tracking-wide">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 font-[var(--font-display)]">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-4 h-4 text-accent" />
                      {project.size}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {lightbox && (
        <GalleryLightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  );
}