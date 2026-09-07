import { cn } from "../utils/cn";

const variants = {
  primary:
    "bg-brand-500 text-white shadow-glow hover:bg-brand-600 active:bg-brand-700",
  secondary:
    "border border-white/15 bg-white/5 text-mist-50 hover:border-white/25 hover:bg-white/10",
  ghost: "text-mist-300 hover:bg-white/5 hover:text-white",
};

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...rest
}) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:-translate-y-px active:translate-y-0",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...rest}>
      {children}
    </button>
  );
}
