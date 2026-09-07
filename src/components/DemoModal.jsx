import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Play, X } from "lucide-react";
import { getLenis, scrollToHash } from "../hooks/useLenis";
import { Button } from "./Button";

const chapters = [
  { time: "0:00", title: "Connect your tools", text: "Import context from 40+ apps in minutes." },
  { time: "0:42", title: "Automate the repeats", text: "Standups, triage and follow-ups run themselves." },
  { time: "1:24", title: "Ship with focus", text: "One live view of priorities for the whole team." },
];

export function DemoModal({ open, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement;
    getLenis()?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      getLenis()?.start();
      document.body.style.overflow = previousOverflow;
      if (restoreRef.current instanceof HTMLElement) {
        restoreRef.current.focus();
      }
    };
  }, [open, onClose]);

  function handleTrial() {
    onClose();
    getLenis()?.start();
    document.body.style.overflow = "";
    if (scrollToHash("#pricing")) {
      window.history.pushState(null, "", "#pricing");
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="demo-overlay"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[80] bg-ink-950/80 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <div
            key="demo-wrap"
            className="pointer-events-none fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          >
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto max-h-[90dvh] w-full max-w-lg min-w-0 overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-card sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
                    Product tour
                  </p>
                  <h2 id="demo-title" className="mt-2 text-xl font-bold text-white">
                    NOVA in 2 minutes
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close demo"
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              </div>

              <div
                aria-hidden="true"
                className="relative mt-5 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(closest-side,rgba(124,92,255,0.22),transparent)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <span className="relative flex size-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow">
                  <Play className="size-5 fill-current" />
                </span>
                <span className="absolute right-3 bottom-3 rounded-md bg-ink-950/80 px-2 py-0.5 text-[11px] font-semibold text-white tabular-nums">
                  2:34
                </span>
              </div>

              <ol className="mt-5 space-y-3">
                {chapters.map((chapter) => (
                  <li
                    key={chapter.time}
                    className="flex min-w-0 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3"
                  >
                    <span className="shrink-0 rounded-md bg-brand-500/15 px-2 py-1 text-[11px] font-bold text-brand-300 tabular-nums">
                      {chapter.time}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">
                        {chapter.title}
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-mist-500">
                        {chapter.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button variant="primary" onClick={handleTrial} className="flex-1">
                  Start free trial
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
                <Button variant="secondary" onClick={onClose} className="flex-1">
                  Close
                </Button>
              </div>
              <p className="mt-3 text-center text-xs text-mist-500">
                Free 14-day Pro trial · No credit card required
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
