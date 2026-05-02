"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 text-basalt/55">
      <span className="mono-label text-[0.65rem]">Scroll</span>
      <div className="relative h-10 w-6 rounded-full border border-basalt/35">
        <motion.span
          className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-basalt/60"
          animate={{ y: [0, 14, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
        />
      </div>
    </div>
  );
}
