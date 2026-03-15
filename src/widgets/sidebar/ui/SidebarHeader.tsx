"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

interface SidebarHeaderProps {
  isScrolled: boolean;
  isCollapsed: boolean;
  isMobileOpen: boolean;
  toggle: () => void;
  closeMobile: () => void;
}

export function SidebarHeader({
  isScrolled,
  isCollapsed,
  isMobileOpen,
  toggle,
  closeMobile,
}: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 border-b border-black/10 dark:border-white/10 transition-all duration-300",
        isScrolled ? "h-16" : "h-20",
      )}
    >
      <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
        <div className="w-8 h-8 agent-gradient rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">N</span>
        </div>
        {(!isCollapsed || isMobileOpen) && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            NANSA
          </motion.span>
        )}
      </Link>

      <button
        type="button"
        onClick={isMobileOpen ? closeMobile : toggle}
        className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-muted hover:text-foreground transition-colors md:flex"
      >
        {isMobileOpen ? (
          <X size={20} />
        ) : isCollapsed ? (
          <ChevronRight size={20} />
        ) : (
          <ChevronLeft size={20} />
        )}
      </button>
    </div>
  );
}
