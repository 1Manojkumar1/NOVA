import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "../data/faqs";
import { cn } from "../utils/cn";
import { Reveal } from "../motion/Reveal";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

function FaqItem({ faq, index, open, onToggle }) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={cn(
        "min-w-0 rounded-2xl border transition-colors duration-200",
        open
          ? "border-brand-500/40 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20",
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left"
        >
          <span className="min-w-0 text-[15px] font-semibold text-white">
            {faq.question}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
              open
                ? "border-brand-500/40 bg-brand-500/15 text-brand-300"
                : "border-white/10 bg-white/5 text-mist-300",
            )}
          >
            <Plus aria-hidden="true" className="size-4" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-mist-500">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything you need to know before getting started. Still curious? Reach out any time."
          />
        </Reveal>

        <div className="mx-auto mt-12 w-full max-w-3xl min-w-0 space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={index}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
