import { JourneyStage as Stage } from "@/data/journeyStages";

type JourneyStageProps = {
  stage: Stage;
  index: number;
};

export function JourneyStage({ stage, index }: JourneyStageProps) {
  return (
    <article id={stage.id} className="mb-10 border-l border-basalt/20 pl-5">
      <p className="mono-label text-[0.62rem] text-basalt/55">
        Stage {index + 1} - {stage.yearsLabel} - {stage.depth}
      </p>
      <h3 className="mt-2 text-3xl">{stage.title}</h3>
      <p className="mt-3 text-basalt/80">{stage.narrative}</p>
    </article>
  );
}
