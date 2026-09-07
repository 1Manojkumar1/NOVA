import { Check } from "lucide-react";
import { Reveal } from "../motion/Reveal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { AlignmentPanel } from "./about/AlignmentPanel";
import { AutomationPanel } from "./about/AutomationPanel";

function Point({ title, text }) {
  return (
    <li className="flex min-w-0 items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300"
      >
        <Check className="size-3.5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-semibold text-white">
          {title}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-mist-500">
          {text}
        </span>
      </span>
    </li>
  );
}

export function ProductAbout() {
  return (
    <section
      id="about"
      aria-label="About NOVA"
      className="border-t border-white/5"
    >
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Product"
            title="One workspace. Infinite momentum."
            description="NOVA quietly handles the busywork so your team spends its hours on work that actually matters."
          />
        </Reveal>

        <div className="mt-14 grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="min-w-0 lg:order-2">
            <ul className="space-y-6">
              <Point
                title="AI organizes your work automatically"
                text="Tasks, docs and deadlines sort themselves into one clear plan — no manual triage, no stale boards."
              />
              <Point
                title="Automations eliminate repetitive work"
                text="Standups, reminders and follow-ups run on rules you set once. NOVA does the chasing."
              />
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="min-w-0 lg:order-1">
            <AutomationPanel />
          </Reveal>
        </div>

        <div className="mt-14 grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="min-w-0">
            <ul className="space-y-6">
              <Point
                title="One workspace keeps everyone aligned"
                text="Goals, progress and people stay in sync in real time — alignment without another status meeting."
              />
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="min-w-0">
            <AlignmentPanel />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
