"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSidebarStore } from "@/features/sidebar/model/sidebar-store";
import { cn } from "@/shared/lib/utils";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";

/**
 * Sidebar Widget
 * FSD: Widgets Layer
 * Role: Assembly of Header, Nav, and Footer parts.
 */
export function Sidebar() {
  const { isCollapsed, toggle, isMobileOpen, closeMobile } = useSidebarStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Sync scroll state with Header for horizontal line alignment
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <SidebarHeader
        isScrolled={isScrolled}
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        toggle={toggle}
        closeMobile={closeMobile}
      />
      <SidebarNav
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        pathname={pathname ?? ""}
        closeMobile={closeMobile}
      />
      <SidebarFooter isCollapsed={isCollapsed} isMobileOpen={isMobileOpen} />
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-[280px] bg-surface z-[60] border-r border-white/10 md:hidden flex flex-col"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        className={cn(
          "hidden md:flex fixed left-0 top-0 h-screen z-40 flex-col",
          "bg-surface/80 border-r border-white/10 backdrop-blur-xl",
          "overflow-hidden transition-all duration-300 ease-in-out",
        )}
      >
        {sidebarContent}
      </motion.aside>
    </>
  );
}
