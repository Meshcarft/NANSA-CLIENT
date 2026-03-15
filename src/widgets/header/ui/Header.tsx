"use client";

import { useEffect, useState } from "react";
import { useAgentStore } from "@/features/agent-panel/model/agent-store";
import { useSidebarStore } from "@/features/sidebar/model/sidebar-store";
import { cn } from "@/shared/lib/utils";
import { HeaderActions } from "./HeaderActions";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

/**
 * Header Widget
 * FSD: Widgets Layer
 * Role: Assembly of Logo/MobileMenu, Navigation, and Action parts.
 */
export function Header() {
  const toggleAgent = useAgentStore((state) => state.toggle);
  const isAgentOpen = useAgentStore((state) => state.isOpen);
  const { isCollapsed: isSidebarCollapsed, toggleMobile: toggleMobileSidebar } = useSidebarStore();
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync scroll state with Sidebar for horizontal line alignment
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
        "fixed top-0 right-0 z-30 transition-all duration-300",
        "left-0 md:left-64",
        isSidebarCollapsed ? "md:left-20" : "md:left-64",
        "bg-surface/80 backdrop-blur-xl border-b border-border/50 dark:border-border",
        isScrolled ? "h-16" : "h-20",
      )}
    >
      <div className="w-full h-full px-4 md:px-8 flex items-center relative">
        <HeaderLogo onToggleMobileSidebar={toggleMobileSidebar} />

        <HeaderNav />

        <HeaderActions isAgentOpen={isAgentOpen} onToggleAgent={toggleAgent} />
      </div>
    </header>
  );
}
