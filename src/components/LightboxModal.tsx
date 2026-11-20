"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

export interface ActiveGallery {
  title: string;
  images: string[];
  currentIndex: number;
}

interface LightboxModalProps {
  gallery: ActiveGallery | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export function LightboxModal({
  gallery,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  useEffect(() => {
    if (!gallery) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onChangeIndex(
          (gallery.currentIndex - 1 + gallery.images.length) %
            gallery.images.length
        );
      } else if (e.key === "ArrowRight") {
        onChangeIndex((gallery.currentIndex + 1) % gallery.images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gallery, onClose, onChangeIndex]);

  return (
    <AnimatePresence>
      {gallery && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery.title} gallery preview`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#141311]/96 backdrop-blur-md p-4 md:p-8 text-[#F5F2EB]"
          onClick={onClose}
        >
          {/* Top bar */}
          <div
            className="w-full max-w-6xl flex items-center justify-between pb-4 border-b border-white/12"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="font-serif text-xl md:text-2xl tracking-[-0.01em] text-[#F5F2EB]">
                {gallery.title}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#A8A298] mt-1">
                {String(gallery.currentIndex + 1).padStart(2, "0")} /{" "}
                {String(gallery.images.length).padStart(2, "0")}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="w-10 h-10 rounded-full border border-white/15 text-[#F5F2EB] hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
            </button>
          </div>

          {/* Main image canvas */}
          <div
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {gallery.images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={() =>
                  onChangeIndex(
                    (gallery.currentIndex - 1 + gallery.images.length) %
                      gallery.images.length
                  )
                }
                className="absolute left-2 md:left-4 z-20 w-11 h-11 rounded-full bg-[#141311]/80 border border-white/20 text-[#F5F2EB] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
              </button>
            )}

            <motion.div
              key={gallery.currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="h-full max-h-[72vh] w-full flex items-center justify-center px-10 md:px-16"
            >
              <img
                src={gallery.images[gallery.currentIndex]}
                alt={`${gallery.title} — ${gallery.currentIndex + 1}`}
                className="max-h-full max-w-full object-contain border border-white/10"
              />
            </motion.div>

            {gallery.images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={() =>
                  onChangeIndex(
                    (gallery.currentIndex + 1) % gallery.images.length
                  )
                }
                className="absolute right-2 md:right-4 z-20 w-11 h-11 rounded-full bg-[#141311]/80 border border-white/20 text-[#F5F2EB] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Thumbnail strip */}
          {gallery.images.length > 1 && (
            <div
              className="w-full max-w-4xl overflow-x-auto flex gap-2.5 py-2 justify-start md:justify-center no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {gallery.images.map((img, idx) => (
                <button
                  type="button"
                  key={img}
                  onClick={() => onChangeIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                  className={cn(
                    "relative h-14 w-20 shrink-0 overflow-hidden border transition-all cursor-pointer",
                    gallery.currentIndex === idx
                      ? "border-[var(--accent)] opacity-100"
                      : "border-white/15 opacity-45 hover:opacity-85"
                  )}
                >
                  <img
                    src={img}
                    alt={`${gallery.title} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
