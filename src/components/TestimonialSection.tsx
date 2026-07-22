import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-bg to-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Client Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Discerning Clients
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The measure of true craftsmanship lies in the words of those who
            live within our creations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group relative flex flex-col bg-surface border border-border rounded-xl backdrop-blur-md p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" aria-hidden="true" />

              <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-base leading-relaxed text-text flex-1">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <p className="font-semibold text-text">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}