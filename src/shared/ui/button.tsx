import type React from "react";
import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "google" | "kakao" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

    const variants = {
      primary: "bg-white text-black hover:bg-white/90 shadow-lg",
      secondary:
        "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-white border border-border/50",
      outline: "border border-input bg-transparent hover:bg-accent/50 text-white",
      google: "bg-[#fff] text-[#757575] border border-[#dadce0] hover:bg-[#f8f9fa] shadow-sm",
      kakao: "bg-[#FEE500] text-[#000000] hover:bg-[#FEE500]/90",
      ghost: "bg-transparent hover:bg-foreground/5 text-muted-foreground hover:text-white",
    };

    const sizes = {
      default: "h-12 px-6 w-full",
      sm: "h-9 px-3 text-xs",
      lg: "h-14 px-8 text-base",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
