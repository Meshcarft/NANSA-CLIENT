import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "plain";
  size?: "sm" | "md" | "lg" | "icon" | "none";
  children?: ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "rounded-xl font-medium bg-primary text-white shadow-[0_0_20px_oklch(45%_0.2_260_/_0.3)] hover:shadow-[0_0_30px_oklch(45%_0.2_260_/_0.5)] hover:brightness-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50",
    secondary:
      "rounded-xl font-medium bg-surface text-foreground border border-white/10 hover:bg-white/5 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50",
    ghost:
      "rounded-xl font-medium hover:bg-white/5 text-muted hover:text-foreground active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50",
    outline:
      "rounded-xl font-medium border border-primary/50 text-primary hover:bg-primary/10 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary/50",
    plain: "",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-8 text-base",
    icon: "h-11 w-11",
    none: "",
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
