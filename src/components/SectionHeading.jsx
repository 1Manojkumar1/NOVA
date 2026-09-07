import { cn } from "../utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-h2 text-balance text-white",
          centered && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lead text-pretty text-mist-500">{description}</p>
      ) : null}
    </div>
  );
}
