import Link from "next/link";
import { Hero } from "@/components/Hero";
import { RockCycleDiagram } from "@/components/RockCycleDiagram";
import { RockTypeCard } from "@/components/RockTypeCard";
import { ProcessCard } from "@/components/ProcessCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { rockTypes } from "@/data/rockTypes";
import { processes } from "@/data/processes";

export default function Home() {
  return (
    <div className="grain-overlay bg-bone text-basalt">
      <main className="relative z-10">
        <Hero />
        <RockCycleDiagram />

        <section id="rock-types" className="mx-auto max-w-7xl px-6 py-16 md:px-12">
          <p className="mono-label text-xs text-basalt/60">Rock Types</p>
          <h2 className="mt-2">Igneous, Sedimentary, Metamorphic</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rockTypes.map((rock) => (
              <RockTypeCard key={rock.id} rock={rock} />
            ))}
          </div>
        </section>

        <section id="processes" className="mx-auto max-w-7xl px-6 py-16 md:px-12">
          <p className="mono-label text-xs text-basalt/60">Geological Processes</p>
          <h2 className="mt-2">How rock changes state over geologic time</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processes.map((process) => (
              <ProcessCard key={process.id} process={process} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <div className="rounded-3xl border border-basalt/15 bg-white/55 p-10 text-center">
            <p className="mx-auto max-w-4xl text-4xl leading-tight md:text-6xl">
              Follow a single grain of rock through 200 million years.
            </p>
            <Button href="/journey" className="mt-8">
              Begin The Journey
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <nav
        className="fixed right-4 top-6 z-20 hidden rounded-full border border-basalt/20 bg-bone/90 px-4 py-2 text-xs md:block"
        aria-label="Section links"
      >
        <div className="flex gap-4">
          <Link href="#diagram" className="mono-label text-[0.6rem] text-basalt/65 hover:text-basalt">
            Diagram
          </Link>
          <Link href="#rock-types" className="mono-label text-[0.6rem] text-basalt/65 hover:text-basalt">
            Types
          </Link>
          <Link href="#processes" className="mono-label text-[0.6rem] text-basalt/65 hover:text-basalt">
            Processes
          </Link>
        </div>
      </nav>
    </div>
  );
}
