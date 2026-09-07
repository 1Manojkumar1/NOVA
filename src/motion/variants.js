// Single source of truth for motion across the site.
//
// Rules: transform + opacity only, one shared easing, small distances,
// short durations. Anything not listed here is intentionally bespoke
// (hero entrance choreography, timeline draws, carousel direction).

export const EASE = "easeOut";

export const REVEAL_DISTANCE = 24;
export const REVEAL_DURATION = 0.6;

export const transitionSection = { duration: REVEAL_DURATION, ease: EASE };
export const transitionCard = { duration: 0.55, ease: EASE };
export const transitionMicro = { duration: 0.2, ease: EASE };

export const viewportSection = { once: true, margin: "-80px" };
export const viewportCard = { once: true, margin: "-60px" };

export const fadeUp = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  show: { opacity: 1, y: 0, transition: transitionSection },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: transitionSection },
};

export const slideLeft = {
  hidden: { opacity: 0, x: REVEAL_DISTANCE },
  show: { opacity: 1, x: 0, transition: transitionSection },
};

export const slideRight = {
  hidden: { opacity: 0, x: -REVEAL_DISTANCE },
  show: { opacity: 1, x: 0, transition: transitionSection },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: transitionSection },
};

export function staggerContainer(stagger = 0.09, delay = 0.1) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Shared card hover: small lift only. Border/shadow/icon shifts stay in CSS
// (group-hover) so hover never animates layout or paint-heavy properties.
export const hoverLift = {
  y: -4,
  scale: 1.015,
  transition: transitionMicro,
};

// Card entrance with per-card stagger via the `custom` prop:
// <motion.div variants={fadeUpCard} custom={index * 0.08} ... viewport={viewportCard} />
export const fadeUpCard = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...transitionCard, delay },
  }),
};
