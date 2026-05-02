"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ScrollIndicator } from "./ui/ScrollIndicator";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -160]);

  return (
    <section className="grain-overlay relative min-h-screen overflow-hidden px-6 pb-10 pt-24 md:px-12 lg:px-20">
      <motion.svg
        aria-hidden
        style={{ y }}
        viewBox="0 0 1200 700"
        className="absolute inset-0 h-full w-full opacity-55"
      >
        <path d="M0 80 C280 140 460 40 760 86 C980 120 1040 96 1200 130 L1200 220 L0 220 Z" fill="#c9a96e" />
        <path d="M0 240 C260 280 460 224 760 262 C980 300 1080 268 1200 312 L1200 410 L0 410 Z" fill="#8a857c" />
        <path d="M0 430 C320 470 520 410 780 462 C960 500 1080 478 1200 520 L1200 700 L0 700 Z" fill="#4a5d6b" />
      </motion.svg>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between gap-20">
        <div className="max-w-4xl pt-16 md:pt-24">
          <p className="mono-label text-xs text-basalt/65">
            Earth&apos;s Continuous Reinvention Of Stone
          </p>
          <h1 className="mt-5 max-w-3xl text-left text-basalt">The Rock Cycle</h1>
          <p className="mt-8 max-w-2xl text-[1.0625rem] text-basalt/85">
            The rock cycle is not a tidy loop. It is a branching geologic network where
            tectonics, climate, and time push material through many possible states. Follow the
            pathways and discover how a single grain can be melted, buried, uplifted, and remade.
          </p>
        </div>
        <div className="flex justify-center pb-2 md:justify-start">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
