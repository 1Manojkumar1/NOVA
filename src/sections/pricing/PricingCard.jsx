import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { scrollToHash } from "../../hooks/useLenis";
import { cn } from "../../utils/cn";
import { fadeUpCard, hoverLift, viewportCard } from "../../motion/variants";
import { Button } from "../../components/Button";

export function PricingCard({ plan, billing, index }) {
  const price = billing === "annual" ? plan.annual : plan.monthly;
  const savings =
    plan.monthly > 0
      ? Math.round((1 - plan.annual / plan.monthly) * 100)
      : 0;

  // Temporary target until the signup phase lands.
  function handleCta(event) {
    event.preventDefault();
    if (scrollToHash("#top")) {
      window.history.pushState(null, "", "#top");
    }
  }

  return (
    <motion.article
      variants={fadeUpCard}
      custom={index * 0.1}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
      whileHover={hoverLift}
      className={cn(
        "relative flex min-w-0 flex-col rounded-2xl border p-6 transition-[border-color,box-shadow] duration-200 sm:p-7",
        plan.featured
          ? "border-brand-500/50 bg-brand-500/[0.06] shadow-glow"
          : "border-white/10 bg-white/[0.03] hover:border-brand-500/40 hover:shadow-card",
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold tracking-[0.12em] whitespace-nowrap text-white uppercase">
          Most popular
        </span>
      )}

      <h3 className="text-sm font-semibold tracking-[0.14em] text-mist-300 uppercase">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm text-mist-500">{plan.tagline}</p>

      <div className="mt-5 flex min-h-[3.75rem] items-end gap-1.5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={billing}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="text-5xl font-bold tracking-tight text-white tabular-nums"
          >
            ${price}
          </motion.span>
        </AnimatePresence>
        {price > 0 && (
          <span className="pb-1.5 text-sm text-mist-500">/month</span>
        )}
      </div>

      <div className="mt-1 flex min-h-6 items-center gap-2">
        <p className="text-xs text-mist-500">
          {price === 0
            ? "Free forever"
            : billing === "annual"
              ? "Per month, billed annually"
              : "Per month, billed monthly"}
        </p>
        <AnimatePresence>
          {billing === "annual" && savings > 0 && (
            <motion.span
              key="save"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-bold text-emerald-300"
            >
              Save {savings}%
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <Button
        variant={plan.featured ? "primary" : "secondary"}
        size="lg"
        href="#top"
        onClick={handleCta}
        className="mt-6 w-full"
      >
        {plan.cta}
      </Button>

      <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-mist-300">
            <Check
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-emerald-300"
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
