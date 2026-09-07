import { motion } from "motion/react";
import { Lock, Sparkles } from "lucide-react";
import { DashboardContent } from "./DashboardContent";
import { DashboardSidebar } from "./DashboardSidebar";

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full min-w-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 bg-[radial-gradient(closest-side,rgba(124,92,255,0.12),transparent)]"
      />

      <div
        role="img"
        aria-label="Preview of the NOVA workspace: project progress, today's tasks, AI insights, team activity and a focus-time chart."
        className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-card"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </span>
          <span className="mx-auto flex min-w-0 max-w-55 items-center justify-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[10px] text-mist-500">
            <Lock aria-hidden="true" className="size-3 shrink-0" />
            <span className="truncate">nova.app/overview</span>
          </span>
          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 min-[380px]:inline-flex">
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        <div className="flex min-w-0">
          <DashboardSidebar />
          <DashboardContent />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.15, ease: "easeOut" }}
        className="absolute -left-5 bottom-10 hidden w-52 rounded-xl border border-white/10 bg-ink-800/95 p-3 shadow-card xl:block"
      >
        <p className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] text-brand-300 uppercase">
          <Sparkles aria-hidden="true" className="size-3" />
          NOVA AI
        </p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-mist-100">
          Rescheduled 3 meetings to protect deep work.
        </p>
      </motion.div>
    </motion.div>
  );
}
