import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  index: number;
  step: number;
  title: string;
  description: string;
  align?: "left" | "right";
}

export default function ProcessStep({
  index,
  step,
  title,
  description,
  align = "left",
}: ProcessStepProps) {
  const isRight = align === "right";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col md:flex-row items-start gap-6 md:gap-10",
        isRight && "md:flex-row-reverse md:text-right"
      )}
    >
      <div className="shrink-0">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface backdrop-blur-md">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-bold text-transparent font-[var(--font-display)]">
            {String(step).padStart(2, "0")}
          </span>
          <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-primary/10 blur-md" />
        </div>
      </div>

      <div
        className={cn(
          "flex-1 rounded-xl border border-border bg-surface p-6 md:p-8 backdrop-blur-md",
          "hover:-translate-y-1 transition-all duration-300"
        )}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text font-[var(--font-display)]">
          {title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      </div>
    </motion.article>
  );
}

<references>
</references>