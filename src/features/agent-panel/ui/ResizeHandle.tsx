import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface ResizeHandleProps {
  width: number;
  setWidth: (width: number) => void;
  minWidth?: number;
  maxWidth?: number;
}

export function ResizeHandle({
  width,
  setWidth,
  minWidth = 200,
  maxWidth = 600,
}: ResizeHandleProps) {
  const isResizing = useRef(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      }
    },
    [setWidth, minWidth, maxWidth],
  );

  const stopResizing = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopResizing);
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }, [handleMouseMove]);

  const startResizing = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isResizing.current = true;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", stopResizing);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [handleMouseMove, stopResizing],
  );

  // Cleanup event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
  }, [handleMouseMove, stopResizing]);

  return (
    <Button
      variant="plain"
      size="none"
      tabIndex={0}
      aria-label="에이전트 패널 크기 조절"
      onMouseDown={startResizing}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setWidth(Math.min(maxWidth, width + 10));
        if (e.key === "ArrowRight") setWidth(Math.max(minWidth, width - 10));
      }}
      className={cn(
        "absolute left-0 top-0 bottom-0 w-1.5 cursor-col-resize z-[80] group flex items-center justify-center",
        "invisible sm:visible hover:bg-primary/10 transition-colors focus:outline-none focus:bg-primary/20",
      )}
    >
      <div className="w-[1px] h-8 bg-border group-hover:bg-primary group-hover:h-full transition-all duration-300" />
    </Button>
  );
}
