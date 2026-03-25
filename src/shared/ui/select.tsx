"use client";

import { ChevronDown } from "lucide-react";
import { type SelectHTMLAttributes, useId } from "react";
import { cn } from "@/shared/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className, id, ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id || generatedId;

  return (
    <div className="flex flex-col space-y-1.5 w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative group">
        <select
          id={selectId}
          className={cn(
            "w-full h-12 bg-foreground/5 border border-border/50 rounded-xl px-4 appearance-none cursor-pointer",
            "text-sm font-medium text-foreground outline-none transition-all duration-300",
            "focus:ring-2 focus:ring-primary/20 focus:border-primary/50 hover:bg-foreground/10",
            error && "border-destructive focus:ring-destructive/20",
            className,
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none transition-transform group-focus-within:rotate-180" />
      </div>
      {error && <p className="text-[0.7rem] font-medium text-destructive ml-1">{error}</p>}
    </div>
  );
}
