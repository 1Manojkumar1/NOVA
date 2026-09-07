import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { plans } from "../data/pricing";
import { cn } from "../utils/cn";
import { Reveal } from "../motion/Reveal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PricingCard } from "./pricing/PricingCard";

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Annual" },
];

export function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="border-t border-white/5"
    >
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing that scales with you"
            description="Start free. Upgrade when your team does — every plan includes unlimited viewers."
          />
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {options.map((option) => {
              const active = billing === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setBilling(option.value)}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                    active ? "text-white" : "text-mist-500 hover:text-mist-100",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-brand-500"
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
          <div className="flex min-h-5 items-center" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={billing}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="text-xs text-mist-500"
              >
                {billing === "annual"
                  ? "Annual billing — save up to 21%"
                  : "Monthly billing — switch to annual and save"}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-5xl min-w-0 gap-4 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billing={billing}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
