import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
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
    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_20px_oklch(45%_0.2_260_/_0.3)] hover:shadow-[0_0_30px_oklch(45%_0.2_260_/_0.5)] hover:brightness-110",
    secondary: "bg-surface text-foreground border border-white/10 hover:bg-white/5",
    ghost: "hover:bg-white/5 text-muted hover:text-foreground",
    outline: "border border-primary/50 text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-8 text-base",
    icon: "h-11 w-11",
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
