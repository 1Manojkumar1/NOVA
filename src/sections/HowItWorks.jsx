import { motion } from "motion/react";
import { Reveal } from "../motion/Reveal";
import { fadeUpCard, viewportCard } from "../motion/variants";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "Plug in GitHub, Slack, Figma and 40+ tools in minutes. NOVA imports your context automatically.",
  },
  {
    number: "02",
    title: "Let NOVA automate",
    description:
      "Turn repeats into rules. Standups, triage and follow-ups start running themselves.",
  },
  {
    number: "03",
    title: "Move work forward",
    description:
      "One live view of priorities for the whole team. Ship faster with fewer meetings.",
  },
];

export function HowItWorks() {
  return (
    <section aria-label="How it works" className="border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From scattered to shipped in three steps"
            description="Get set up in an afternoon. Feel the difference by Monday."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-6 w-px bg-white/10 md:hidden"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="h-full w-full origin-top bg-brand-500/60"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute top-6 right-[17%] left-[17%] hidden h-px bg-white/10 md:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full w-full origin-left bg-brand-500/60"
            />
          </div>

          <ol className="grid min-w-0 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                variants={fadeUpCard}
                custom={index * 0.15}
                initial="hidden"
                whileInView="show"
                viewport={viewportCard}
                className="relative flex min-w-0 gap-5 md:block md:text-center"
              >
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/30 bg-ink-900 text-sm font-bold tracking-wider text-brand-300 tabular-nums md:mx-auto"
                >
                  {step.number}
                </span>
                <span className="block min-w-0 flex-1 md:mt-5">
                  <h3 className="text-[15px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">
                    {step.description}
                  </p>
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
