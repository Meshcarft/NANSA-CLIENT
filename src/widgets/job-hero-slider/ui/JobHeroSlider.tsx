"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

const SLIDES = [
  {
    id: 1,
    title: "Find Millions of Jobs Here!",
    description:
      "Explore our newest Jobs opportunities and apply for the top positions available today.",
    tag: "NEW OPPORTUNITY",
  },
  {
    id: 2,
    title: "Discover Your Career Path!",
    description: "AI-powered recommendations tailored to your unique skills and ambitions.",
    tag: "AI MATCHING",
  },
  {
    id: 3,
    title: "Track Your Application Status!",
    description: "Real-time updates and professional feedback from top tech recruiters.",
    tag: "SMART TRACKING",
  },
];

export function JobHeroSlider() {
  const [current, setCurrent] = useState(0);
  const nextSlide = useCallback(() => setCurrent((prev) => (prev + 1) % SLIDES.length), []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[220px] md:h-[280px] overflow-hidden bg-foreground/[0.02] border border-border/10 rounded-2xl flex items-center px-12 md:px-20 group shadow-lg shadow-black/[0.02]">
      <div className="absolute top-0 right-0 w-[400px] h-full bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-30" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 relative z-10 max-w-2xl"
        >
          <div className="text-[10px] font-black tracking-[0.2em] uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full w-fit">
            {SLIDES[current].tag}
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none italic uppercase">
              {SLIDES[current].title}
            </h2>
            <p className="text-sm md:text-base font-bold text-muted-foreground opacity-60 leading-relaxed max-w-xl">
              {SLIDES[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-10 bottom-10 flex items-center gap-6">
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                current === i
                  ? "w-8 bg-primary shadow-sm shadow-primary/40"
                  : "w-1.5 bg-foreground/10",
              )}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2.5px] bg-primary/10 w-full">
        <motion.div
          key={current}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-primary shadow-[0_-2px_8px_var(--primary-color)]"
        />
      </div>
    </section>
  );
}
