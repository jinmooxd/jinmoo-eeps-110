export type JourneyStage = {
  id: string;
  title: string;
  yearsLabel: string;
  depth: string;
  narrative: string;
  color: string;
  shapeScale: number;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "magma-chamber",
    title: "Magma Chamber",
    yearsLabel: "0 Myr",
    depth: "6 km depth",
    narrative:
      "You begin as molten silicate melt pooled above a subduction zone. Pressure is immense and crystals are only just nucleating.",
    color: "#B23A1F",
    shapeScale: 1,
  },
  {
    id: "intrusive-cooling",
    title: "Intrusive Cooling",
    yearsLabel: "8 Myr",
    depth: "5.5 km depth",
    narrative:
      "Heat leaks slowly into surrounding crust. Large interlocking crystals grow, and you solidify into a coarse-grained granite.",
    color: "#E76F3C",
    shapeScale: 0.96,
  },
  {
    id: "tectonic-uplift",
    title: "Tectonic Uplift",
    yearsLabel: "42 Myr",
    depth: "2 km depth",
    narrative:
      "Mountain building thickens and then exhumes the crust. Over tens of millions of years, you rise toward daylight.",
    color: "#6B7F4A",
    shapeScale: 0.92,
  },
  {
    id: "weathering",
    title: "Weathering Front",
    yearsLabel: "58 Myr",
    depth: "surface",
    narrative:
      "Frost, rain, and root growth pry apart fractures. Chemical weathering weakens minerals until your crystal fabric starts to crumble.",
    color: "#C9A96E",
    shapeScale: 0.88,
  },
  {
    id: "erosion-transport",
    title: "River Transport",
    yearsLabel: "75 Myr",
    depth: "surface channels",
    narrative:
      "You are now sand-sized and swept downstream in pulses of floodwater, colliding and rounding as energy fluctuates.",
    color: "#4A5D6B",
    shapeScale: 0.82,
  },
  {
    id: "delta-deposition",
    title: "Delta Deposition",
    yearsLabel: "96 Myr",
    depth: "shallow burial",
    narrative:
      "Flow slows at a coastal delta. You settle into layered beds with silt and clay as sea level oscillates.",
    color: "#8A857C",
    shapeScale: 0.8,
  },
  {
    id: "lithification",
    title: "Lithification",
    yearsLabel: "132 Myr",
    depth: "3.5 km depth",
    narrative:
      "Successive burial compacts pore space. Silica-rich fluids precipitate cement, welding grains into durable sandstone.",
    color: "#C9A96E",
    shapeScale: 0.86,
  },
  {
    id: "metamorphism",
    title: "Continental Collision",
    yearsLabel: "178 Myr",
    depth: "11 km depth",
    narrative:
      "Compression raises temperature above 200°C and increases directed stress. Your sandstone recrystallizes into quartzite.",
    color: "#4A5D6B",
    shapeScale: 0.93,
  },
  {
    id: "subduction-return",
    title: "Return to Melt",
    yearsLabel: "210 Myr",
    depth: "deep subduction",
    narrative:
      "You descend with a tectonic plate into hotter mantle conditions. Partial melting begins again, completing one path through a much larger network.",
    color: "#B23A1F",
    shapeScale: 1,
  },
];
