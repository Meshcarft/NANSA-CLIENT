"use client";

import { Check } from "lucide-react";
import type React from "react";
import { useId } from "react";
import { cn } from "@/shared/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  count?: number;
}

export function Checkbox({ label, count, className, id, ...props }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              "peer h-5 w-5 appearance-none rounded-md border border-border/50 bg-foreground/5",
              "checked:bg-foreground checked:border-foreground transition-all duration-200 cursor-pointer",
              className,
            )}
            {...props}
          />
          <Check className="absolute left-1 top-1 h-3 w-3 text-background opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium text-muted-foreground group-hover:text-foreground cursor-pointer transition-colors"
          >
            {label}
          </label>
        )}
      </div>
      {count !== undefined && (
        <span className="text-xs text-muted-foreground opacity-50 font-mono">{count}</span>
      )}
    </div>
  );
}
