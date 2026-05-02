"use client";

import { useState } from "react";
import { Process } from "@/data/processes";

type ProcessCardProps = {
  process: Process;
};

export function ProcessCard({ process }: ProcessCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="rounded-2xl border border-basalt/15 bg-white/55 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="mono-label text-[0.62rem] text-basalt/55">{process.shortLabel}</p>
      <h3 className="mt-2 text-2xl">{process.name}</h3>
      <p className="mt-3 text-sm text-basalt/75">{process.description}</p>
      <svg viewBox="0 0 200 58" className="mt-4 h-10 w-full opacity-75">
        <path d="M2 44 C40 16 78 52 118 28 C152 10 178 36 198 24" fill="none" stroke="#4A5D6B" strokeWidth="1.5" />
      </svg>
      <p
        className={`mt-3 text-sm text-basalt/70 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0 md:opacity-50"}`}
      >
        {process.context}
      </p>
    </article>
  );
}
