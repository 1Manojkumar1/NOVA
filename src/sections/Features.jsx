import { features } from "../data/features";
import { Reveal } from "../motion/Reveal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { FeatureCard } from "./features/FeatureCard";

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="border-t border-white/5"
    >
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Powerful features, zero busywork"
            description="One platform that plans the work, does the repetitive parts and shows you what matters next."
          />
        </Reveal>

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} index={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
