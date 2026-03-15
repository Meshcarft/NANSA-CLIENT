"use client";

import { cn } from "@/shared/lib/utils";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";

interface SidebarFooterProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
}

export function SidebarFooter({ isCollapsed, isMobileOpen }: SidebarFooterProps) {
  const isMinimal = isCollapsed && !isMobileOpen;

  return (
    <div className="p-4 space-y-4 border-t border-black/5 dark:border-white/5">
      {/* Appearance Section */}
      <div className="px-2">
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-widest text-muted mb-2",
            isMinimal && "text-center",
          )}
        >
          {isMinimal ? "Thm" : "Appearance"}
        </p>
        <ThemeToggle collapsed={isMinimal} />
      </div>

      {/* Agent Status Card */}
      <div
        className={cn(
          "bg-black/5 dark:bg-white/5 rounded-2xl p-4 flex items-center shrink-0",
          isMinimal ? "justify-center" : "space-x-3",
        )}
      >
        <div className="w-8 h-8 rounded-full bg-agent-gradient animate-pulse shrink-0" />
        {!isMinimal && (
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">Agent Beta</p>
            <p className="text-xs text-muted truncate">Always Online</p>
          </div>
        )}
      </div>
    </div>
  );
}
