import { useRef } from "react";
import { useInView } from "motion/react";
import { stats } from "../data/stats";
import { Container } from "../components/Container";
import { StatCard } from "./stats/StatCard";

export function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-label="NOVA in numbers"
      className="border-t border-white/5 bg-white/[0.02]"
    >
      <Container className="py-14 sm:py-20">
        <div
          ref={ref}
          className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} index={index} start={inView} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
