import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: () => void;
  className?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  onClick,
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-surface backdrop-blur-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
        className
      )}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title}`}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        <span className="absolute left-4 top-4 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-text backdrop-blur-md">
          {project.category}
        </span>

        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="flex items-center gap-2 text-xs text-muted">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>{project.location}</span>
          <span className="mx-1 text-border">•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-text font-[var(--font-display)]">
          {project.title}
        </h3>
        {project.description && (
          <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2 max-h-0 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
            {project.description}
          </p>
        )}
      </div>
    </motion.article>
  );
}