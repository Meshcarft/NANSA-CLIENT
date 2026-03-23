"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";

export function ThemeToggle({ collapsed = false }: { collapsed?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-2 p-1 bg-foreground/5 rounded-xl border border-border/50 transition-all duration-300",
        collapsed ? "flex-col" : "flex-row w-full",
      )}
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "flex-1 flex items-center justify-center p-2 rounded-lg transition-all",
          theme === "light" ? "bg-white text-black shadow-lg" : "text-muted hover:text-foreground",
        )}
      >
        <Sun size={18} />
        {!collapsed && <span className="ml-2 text-sm font-medium">Light</span>}
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "flex-1 flex items-center justify-center p-2 rounded-lg transition-all",
          theme === "dark"
            ? "bg-white/10 text-white shadow-lg"
            : "text-muted hover:text-foreground",
        )}
      >
        <Moon size={18} />
        {!collapsed && <span className="ml-2 text-sm font-medium">Dark</span>}
      </button>
    </div>
  );
}
