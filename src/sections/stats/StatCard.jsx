import { motion } from "motion/react";
import { useCountUp } from "../../hooks/useCountUp";
import { fadeUpCard, viewportCard } from "../../motion/variants";

export function StatCard({ value, decimals, suffix, label, start, index }) {
  const display = useCountUp(value, {
    decimals,
    delay: index * 0.15,
    start,
  });

  return (
    <motion.div
      variants={fadeUpCard}
      custom={index * 0.08}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
      className="min-w-0 px-2 text-center"
    >
      <p className="text-4xl font-bold tracking-tight text-white tabular-nums sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-mist-500">{label}</p>
    </motion.div>
  );
}
