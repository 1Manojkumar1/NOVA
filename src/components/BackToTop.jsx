import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { scrollToHash } from "../hooks/useLenis";
import { useScrolled } from "../hooks/useScrolled";

export function BackToTop() {
  const visible = useScrolled(600);

  function handleClick() {
    if (scrollToHash("#top")) {
      window.history.pushState(null, "", "#top");
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileTap={{ scale: 0.88 }}
          className="fixed right-5 bottom-5 z-40 flex size-11 items-center justify-center rounded-full border border-white/10 bg-ink-800/90 text-mist-100 shadow-card backdrop-blur transition-colors duration-200 hover:bg-ink-700 hover:text-white"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
