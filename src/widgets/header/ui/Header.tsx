"use client";

import { useEffect, useState } from "react";
import { useAgentStore } from "@/features/agent-panel/model/agent-store";
import { useSidebarStore } from "@/features/sidebar/model/sidebar-store";
import { cn } from "@/shared/lib/utils";
import { HeaderActions } from "./HeaderActions";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  const toggleAgent = useAgentStore((state) => state.toggle);
  const isAgentOpen = useAgentStore((state) => state.isOpen);
  const isSidebarCollapsed = useSidebarStore((state) => state.isCollapsed);
  const sidebarWidth = isSidebarCollapsed ? 80 : 280;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300", // w-full explicitly via left-0 right-0
        "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-border/10",
        isScrolled ? "h-14 shadow-sm" : "h-16",
      )}
    >
      <div
        className="w-full h-full flex items-center justify-between gap-6 px-6 lg:px-10 transition-all duration-300"
        style={{ paddingLeft: `${sidebarWidth + 24}px` }} // Clear the sidebar + some margin
      >
        {/* Global Navigation Hub (Compact) */}
        <div className="flex-1 flex items-center min-w-0">
          <HeaderNav />
        </div>

        {/* Quick Actions (High-Density) */}
        <div className="flex items-center gap-4 shrink-0 px-2 lg:px-6">
          <HeaderActions isAgentOpen={isAgentOpen} onToggleAgent={toggleAgent} />
        </div>
      </div>
    </header>
  );
}
