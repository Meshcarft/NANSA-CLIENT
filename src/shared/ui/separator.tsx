import type * as React from "react";
import { cn } from "@/shared/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  label?: React.ReactNode;
}

export function Separator({
  orientation = "horizontal",
  decorative = true,
  label,
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
      className={cn(
        "relative flex items-center justify-center",
        orientation === "horizontal" ? "w-full" : "h-full flex-col",
        className,
      )}
      {...props}
    >
      {/* 실제 선 (Background Line) */}
      <div
        className={cn("bg-muted/20", orientation === "horizontal" ? "h-px w-full" : "w-px h-full")}
      />

      {/* 라벨 (Optional Label) */}
      {label && (
        <span
          className={cn(
            "absolute bg-background px-2 text-xs uppercase text-muted-foreground",
            // 수직일 경우 텍스트 방향이나 위치 조정 로직 추가 가능
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
