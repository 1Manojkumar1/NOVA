import { solutions } from "../data/solutions";
import { Reveal } from "../motion/Reveal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { SolutionCard } from "./solutions/SolutionCard";

export function Solutions() {
  return (
    <section
      id="solutions"
      aria-label="Solutions"
      className="border-t border-white/5"
    >
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Solutions"
            title="Built for every kind of team"
            description="From two-person startups to global enterprises, NOVA adapts to how your team already works."
          />
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} index={index} {...solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
