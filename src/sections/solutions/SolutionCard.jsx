import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { scrollToHash } from "../../hooks/useLenis";
import { fadeUpCard, hoverLift, viewportCard } from "../../motion/variants";

export function SolutionCard({ icon: Icon, title, description, link, index }) {
  function handleExplore(event) {
    event.preventDefault();
    if (scrollToHash("#pricing")) {
      window.history.pushState(null, "", "#pricing");
    }
  }

  return (
    <motion.article
      variants={fadeUpCard}
      custom={(index % 2) * 0.08}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
      whileHover={hoverLift}
      className="group flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand-500/40 hover:shadow-card"
    >
      <span className="flex size-10 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-4 text-[15px] font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
        {description}
      </p>
      <a
        href="#pricing"
        onClick={handleExplore}
        aria-label={`${link} — see plans`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors duration-200 hover:text-white"
      >
        {link}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </motion.article>
  );
}
