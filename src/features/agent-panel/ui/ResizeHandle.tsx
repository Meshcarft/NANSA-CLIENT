"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/shared/lib/utils";

interface ResizeHandleProps {
  // width: number; // Removed as it was unused
  setWidth: (width: number) => void;
  minWidth?: number;
  maxWidth?: number;
}

export function ResizeHandle({ setWidth, minWidth = 300, maxWidth = 1200 }: ResizeHandleProps) {
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

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
  }, [handleMouseMove, stopResizing]);

  return (
    <button
      type="button"
      aria-label="Resize agent panel"
      onMouseDown={startResizing}
      className={cn(
        "absolute left-0 top-0 bottom-0 w-1.5 cursor-col-resize z-[80] group flex items-center justify-center bg-transparent border-none p-0 outline-none",
        "invisible sm:visible hover:bg-primary/20 transition-colors",
      )}
    >
      <div className="w-[1px] h-8 bg-border group-hover:bg-primary group-hover:h-full transition-all duration-300" />
    </button>
  );
}
