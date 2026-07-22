import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  location?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export default function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = index !== null && index >= 0 && index < images.length;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  const current = isOpen ? images[index as number] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-surface border border-border text-text backdrop-blur-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border text-text backdrop-blur-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border text-text backdrop-blur-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.figure
            key={index}
            className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[75vh] max-w-[90vw] rounded-xl border border-border object-contain shadow-2xl shadow-primary/10"
            />
            {(current.title || current.location) && (
              <figcaption className="mt-5 text-center">
                {current.title && (
                  <p className="text-lg font-semibold text-text font-[var(--font-display)]">
                    {current.title}
                  </p>
                )}
                {current.location && (
                  <p className="mt-1 text-sm text-muted tracking-wide uppercase">
                    {current.location}
                  </p>
                )}
              </figcaption>
            )}
          </motion.figure>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "h-2 rounded-full cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                  i === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted"
                )}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}