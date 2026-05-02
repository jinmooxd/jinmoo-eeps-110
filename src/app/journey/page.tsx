"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { JourneyStage } from "@/components/JourneyStage";
import { journeyStages } from "@/data/journeyStages";

export default function JourneyPage() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const depthHeight = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);
  const stageIndex = useTransform(scrollYProgress, (value) =>
    Math.min(journeyStages.length - 1, Math.floor(value * journeyStages.length)),
  );
  const activeColor = useTransform(stageIndex, (value) => journeyStages[value]?.color ?? "#B23A1F");
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.18]);

  return (
    <main className="min-h-screen bg-bone px-6 py-10 text-basalt md:px-10">
      <header className="mx-auto mb-10 flex w-full max-w-7xl items-center justify-between">
        <div>
          <p className="mono-label text-[0.62rem] text-basalt/55">Journey Narrative</p>
          <h1 className="mt-1 text-4xl md:text-6xl">The Journey of a Rock</h1>
        </div>
        <Link href="/" className="mono-label text-[0.62rem] text-basalt/75 hover:text-basalt">
          Return Home
        </Link>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1fr_1.1fr]">
        <div className="sticky top-8 h-[70vh] rounded-3xl border border-basalt/15 bg-white/55 p-6">
          <div className="relative h-full overflow-hidden rounded-2xl border border-basalt/10 bg-basalt/6">
            <motion.div className="absolute inset-0" style={{ backgroundColor: activeColor }} />
            <motion.div
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/45 bg-white/25 backdrop-blur-[1px]"
              style={{ scale }}
            />
            <div className="absolute bottom-6 left-6 w-16 rounded-full border border-white/45 bg-black/10 p-1">
              <motion.div className="w-full rounded-full bg-white/80" style={{ height: depthHeight }} />
            </div>
            <p className="mono-label absolute right-6 top-6 text-[0.62rem] text-white/80">
              Scroll-Driven State
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-basalt/20" />
          <div className="space-y-14 pr-8">
            {journeyStages.map((stage, index) => (
              <JourneyStage key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
