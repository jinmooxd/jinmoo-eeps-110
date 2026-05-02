export type Process = {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  context: string;
};

export const processes: Process[] = [
  {
    id: "weathering",
    name: "Weathering",
    shortLabel: "Surface Breakdown",
    description:
      "Weathering physically fractures and chemically alters exposed rock through frost wedging, root action, hydrolysis, oxidation, and dissolution.",
    context: "It prepares material for transport and controls sediment chemistry before erosion begins.",
  },
  {
    id: "erosion",
    name: "Erosion",
    shortLabel: "Transport",
    description:
      "Water, wind, ice, and gravity entrain weathered particles and move them across landscapes from uplands into basins.",
    context: "Particle size and sorting reflect transport energy and distance.",
  },
  {
    id: "deposition",
    name: "Deposition",
    shortLabel: "Settling",
    description:
      "When transport energy drops, sediment settles into river bars, floodplains, deltas, shelves, and deep basins.",
    context: "Depositional architecture preserves ancient environments and climate shifts.",
  },
  {
    id: "compaction-cementation",
    name: "Compaction & Cementation",
    shortLabel: "Lithification",
    description:
      "Burial squeezes grains together while mineral-rich fluids precipitate cements that bind sediment into sedimentary rock.",
    context: "Porosity declines with depth, changing permeability and fluid storage.",
  },
  {
    id: "heat-pressure",
    name: "Heat & Pressure",
    shortLabel: "Burial Conditions",
    description:
      "Tectonic burial and crustal thickening raise temperature and confining stress, driving metamorphic reactions and recrystallization.",
    context: "In continental crust, geothermal gradients average roughly 25°C per kilometer.",
  },
  {
    id: "melting",
    name: "Melting",
    shortLabel: "Partial Fusion",
    description:
      "At sufficient temperature, decompression, or volatile addition, portions of rock melt to generate magma.",
    context: "Subduction zones and rifts are major melt-producing tectonic settings.",
  },
  {
    id: "cooling-crystallization",
    name: "Cooling & Crystallization",
    shortLabel: "Solidification",
    description:
      "As magma cools, minerals crystallize in sequence, locking in textures that reveal cooling rate and composition.",
    context: "Slow cooling underground yields large crystals; rapid eruption forms fine or glassy textures.",
  },
  {
    id: "metamorphism",
    name: "Metamorphism",
    shortLabel: "State Change",
    description:
      "Solid rock transforms into new mineral assemblages under new pressure-temperature-fluid conditions without becoming fully molten.",
    context: "Progressive metamorphism can track tectonic history from slate to gneiss.",
  },
];
