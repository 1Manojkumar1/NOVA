import { motion } from "motion/react";
import {
  EASE,
  REVEAL_DISTANCE,
  REVEAL_DURATION,
  viewportSection,
} from "./variants";

// One-shot scroll reveal for section headers and content blocks.
// Respects reduced motion globally via MotionConfig in App.
export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: REVEAL_DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSection}
      transition={{ duration: REVEAL_DURATION, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
