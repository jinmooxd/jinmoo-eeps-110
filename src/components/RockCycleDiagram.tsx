"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { rockTypes } from "@/data/rockTypes";
import { Modal } from "./ui/Modal";

type Arrow = {
  id: string;
  from: string;
  to: string;
  label: string;
  d: string;
};

const nodes = [
  { id: "igneous", label: "Igneous", x: 170, y: 150, color: "#B23A1F" },
  { id: "sedimentary", label: "Sedimentary", x: 170, y: 340, color: "#C9A96E" },
  { id: "metamorphic", label: "Metamorphic", x: 430, y: 245, color: "#4A5D6B" },
  { id: "magma", label: "Magma / Melt", x: 170, y: 40, color: "#E76F3C" },
];

const arrows: Arrow[] = [
  { id: "i-s", from: "igneous", to: "sedimentary", label: "weathering & erosion", d: "M170 172 C130 230 130 290 170 320" },
  { id: "s-s", from: "sedimentary", to: "sedimentary", label: "re-erosion & redeposition", d: "M140 350 C70 300 70 400 150 372" },
  { id: "s-m", from: "sedimentary", to: "metamorphic", label: "heat & pressure", d: "M205 330 C300 310 350 280 405 258" },
  { id: "m-m", from: "metamorphic", to: "metamorphic", label: "further metamorphism", d: "M450 205 C530 180 560 300 450 285" },
  { id: "m-mag", from: "metamorphic", to: "magma", label: "melting", d: "M410 220 C300 170 250 120 190 66" },
  { id: "mag-i", from: "magma", to: "igneous", label: "cooling & crystallization", d: "M170 62 C170 90 170 110 170 128" },
  { id: "i-m", from: "igneous", to: "metamorphic", label: "heat & pressure (without erosion first)", d: "M206 162 C285 178 335 208 404 236" },
  { id: "m-s", from: "metamorphic", to: "sedimentary", label: "uplift, weathering & erosion", d: "M410 270 C300 340 240 360 188 354" },
];

export function RockCycleDiagram() {
  const [activeArrow, setActiveArrow] = useState<Arrow>(arrows[0]);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const activeNode = useMemo(
    () => rockTypes.find((item) => item.id === activeNodeId) ?? null,
    [activeNodeId],
  );

  return (
    <section id="diagram" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mono-label text-xs text-basalt/65">Interactive Network</p>
          <h2 className="mt-2">A cycle with many valid pathways</h2>
        </div>
        <p className="max-w-sm text-sm text-basalt/70">
          Hover process arrows to inspect transitions. Select a rock node for deeper details.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="rounded-3xl border border-basalt/15 bg-bone/70 p-4 md:p-8">
          <svg
            ref={ref}
            viewBox="0 0 620 430"
            className="hidden w-full md:block"
            role="img"
            aria-label="Interactive rock cycle pathways"
          >
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#2A2825" />
              </marker>
            </defs>
            {arrows.map((arrow, index) => {
              const highlighted = activeArrow.id === arrow.id;
              return (
                <motion.path
                  key={arrow.id}
                  d={arrow.d}
                  fill="none"
                  stroke={highlighted ? "#E76F3C" : "#2A2825"}
                  strokeWidth={highlighted ? 3 : 1.8}
                  strokeOpacity={highlighted ? 1 : 0.55}
                  markerEnd="url(#arrowhead)"
                  onMouseEnter={() => setActiveArrow(arrow)}
                  className="cursor-pointer transition-colors duration-300 ease-out"
                  initial={{ pathLength: reduced ? 1 : 0 }}
                  animate={{ pathLength: inView ? 1 : 0 }}
                  transition={{ duration: reduced ? 0.1 : 0.6, delay: index * 0.15, ease: "easeOut" }}
                />
              );
            })}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="36"
                  fill={node.color}
                  fillOpacity="0.2"
                  stroke={node.color}
                  strokeWidth="1.6"
                  className="cursor-pointer transition-all duration-300 ease-out hover:fill-opacity-30"
                  tabIndex={0}
                  role="button"
                  aria-label={`Open ${node.label} details`}
                  onClick={() => setActiveNodeId(node.id === "magma" ? null : node.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setActiveNodeId(node.id === "magma" ? null : node.id);
                    }
                  }}
                />
                <text x={node.x} y={node.y + 4} textAnchor="middle" className="fill-basalt text-[11px] font-medium">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
          <div className="grid gap-3 md:hidden">
            {arrows.map((arrow) => (
              <button
                key={arrow.id}
                type="button"
                className="rounded-xl border border-basalt/20 bg-white/60 p-3 text-left text-sm transition hover:border-ember/70"
                onClick={() => setActiveArrow(arrow)}
              >
                {arrow.label}
              </button>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-basalt/15 bg-white/50 p-6">
          <p className="mono-label text-[0.65rem] text-basalt/60">Active Process</p>
          <h3 className="mt-2 text-2xl">{activeArrow.label}</h3>
          <p className="mt-3 text-sm text-basalt/75">
            Transition: {activeArrow.from} → {activeArrow.to}. This pathway shows one of many
            valid geologic trajectories controlled by tectonics, surface conditions, and time.
          </p>
        </aside>
      </div>

      <Modal
        open={Boolean(activeNode)}
        title={activeNode?.modal.title ?? ""}
        onClose={() => setActiveNodeId(null)}
      >
        {activeNode && (
          <div className="space-y-4">
            <p>{activeNode.modal.overview}</p>
            <div className="rounded-xl border border-basalt/15 bg-white/55 p-4">
              <p className="mono-label text-[0.62rem] text-basalt/60">{activeNode.modal.svgLabel}</p>
              <svg viewBox="0 0 400 120" className="mt-2 h-24 w-full">
                <rect x="12" y="20" width="130" height="84" fill="#C9A96E66" />
                <rect x="142" y="30" width="118" height="74" fill="#4A5D6B66" />
                <rect x="260" y="16" width="128" height="88" fill="#B23A1F66" />
              </svg>
            </div>
            <p className="text-sm text-basalt/75">{activeNode.detail}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
