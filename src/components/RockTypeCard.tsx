import { RockType } from "@/data/rockTypes";

type RockTypeCardProps = {
  rock: RockType;
};

export function RockTypeCard({ rock }: RockTypeCardProps) {
  const borderColor = {
    magma: "border-magma",
    sediment: "border-sediment",
    "slate-blue": "border-slate-blue",
  }[rock.signatureColor];

  return (
    <article className={`rounded-2xl border border-basalt/15 border-t-4 ${borderColor} bg-white/55 p-6`}>
      <h3>{rock.name}</h3>
      <p className="mt-3 text-sm text-basalt/80">{rock.formation}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {rock.examples.map((example) => (
          <li key={example.name}>
            <span className="font-medium">{example.name}:</span> {example.description}
          </li>
        ))}
      </ul>
      <ul className="mt-5 space-y-1 text-xs text-basalt/70">
        {rock.characteristics.map((trait) => (
          <li key={trait}>- {trait}</li>
        ))}
      </ul>
      <svg viewBox="0 0 300 80" className="mt-5 h-16 w-full opacity-80">
        <path d="M6 56 C62 20 102 72 156 44 C210 16 244 60 294 28" stroke="#2A2825" strokeWidth="1.8" fill="none" />
      </svg>
    </article>
  );
}
