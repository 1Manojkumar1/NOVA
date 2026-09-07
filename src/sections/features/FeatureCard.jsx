import { motion } from "motion/react";
import { fadeUpCard, hoverLift, viewportCard } from "../../motion/variants";

export function FeatureCard({ icon: Icon, title, description, detail, index }) {
  return (
    <motion.article
      variants={fadeUpCard}
      custom={(index % 4) * 0.07}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
      whileHover={hoverLift}
      className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand-500/40 hover:shadow-card"
    >
      <span className="flex size-10 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-4 text-[15px] font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-500">{description}</p>
      <p className="mt-4 border-t border-white/5 pt-3 text-xs font-medium text-mist-300">
        {detail}
      </p>
    </motion.article>
  );
}
