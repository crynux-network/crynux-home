import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-accent dark:hover:text-ink",
  secondary:
    "bg-transparent text-foreground ring-1 ring-inset ring-foreground/15 hover:ring-foreground/35 hover:bg-foreground/[0.03]",
  ghost: "text-foreground/70 hover:text-foreground",
};

// ponytail: all site CTAs are links, so this is just a styled <a>
export default function Button({
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant }) {
  return (
    <a
      className={clsx(base, buttonStyles[variant], className)}
      {...(props.href?.startsWith("http")
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
      {...props}
    />
  );
}
