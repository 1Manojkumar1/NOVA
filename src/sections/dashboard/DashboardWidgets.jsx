import { motion } from "motion/react";
import { cn } from "../../utils/cn";

const toneDot = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  brand: "bg-brand-400",
  cyan: "bg-accent-400",
};

const badgeTones = {
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  brand: "border-brand-400/25 bg-brand-400/10 text-brand-300",
};

const avatarTones = {
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  brand: "bg-brand-500",
  cyan: "bg-accent-500",
};

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return (
    <p className="text-[10px] font-semibold tracking-[0.14em] text-mist-500 uppercase">
      {children}
    </p>
  );
}

export function StatusBadge({ label, tone = "emerald" }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap",
        badgeTones[tone],
      )}
    >
      <span aria-hidden="true" className={cn("size-1 rounded-full", toneDot[tone])} />
      {label}
    </span>
  );
}

export function ProgressBar({ value, tone = "brand", delay = 0 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={cn("h-full w-full origin-left rounded-full", toneDot[tone])}
        />
      </div>
      <span className="w-8 shrink-0 text-right text-[10px] font-semibold text-mist-300 tabular-nums">
        {value}%
      </span>
    </div>
  );
}

export function Avatar({ initials, tone = "brand", className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white",
        avatarTones[tone],
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function MiniBars({ bars }) {
  const max = Math.max(...bars.map((bar) => bar.value));

  return (
    <div className="flex h-20 items-stretch gap-1.5">
      {bars.map((bar, index) => (
        <div
          key={`${bar.day}-${index}`}
          className="flex min-w-0 flex-1 flex-col items-center justify-end gap-1"
        >
          <div className="flex h-full min-h-0 w-full items-end">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.06,
                ease: "easeOut",
              }}
              style={{ height: `${bar.value}%` }}
              className={cn(
                "w-full origin-bottom rounded-sm",
                bar.value === max ? "bg-accent-400/80" : "bg-brand-500/50",
              )}
            />
          </div>
          <span className="text-[9px] font-medium text-mist-500">{bar.day}</span>
        </div>
      ))}
    </div>
  );
}
