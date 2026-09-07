import { cn } from "../utils/cn";

export function Badge({ className, children, ...rest }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-mist-300",
        className,
      )}
      {...rest}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-400" />
      {children}
    </span>
  );
}
