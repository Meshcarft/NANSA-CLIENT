"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface ThemeToggleProps {
  collapsed?: boolean;
}

export function ThemeToggle({ collapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        className={cn("w-full h-10 rounded-xl bg-foreground/5", collapsed && "w-10 px-0")}
        disabled
      >
        <div className="w-5 h-5 bg-muted/20 rounded-full" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-full h-10 gap-3 px-3 rounded-xl transition-all duration-300",
        "bg-foreground/5 hover:bg-foreground/10 text-muted hover:text-white overflow-hidden",
        collapsed && "justify-center px-0 w-10",
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
      </div>
      {!collapsed && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-medium whitespace-nowrap"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </motion.span>
      )}
    </Button>
  );
}
