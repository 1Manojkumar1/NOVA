import { cn } from "../utils/cn";

export function Container({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
