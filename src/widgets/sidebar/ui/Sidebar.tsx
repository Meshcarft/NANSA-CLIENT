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
 * Standard Workspace Sidebar (Primary)
 * FSD: Widgets Layer
 * Role: Navigation and main app actions.
 */
export function Sidebar() {
  const { isCollapsed, toggle, isMobileOpen, closeMobile } = useSidebarStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-surface">
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

      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-[280px] bg-surface z-[60] border-r border-border md:hidden flex flex-col"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? 80 : 260,
        }}
        className={cn(
          "hidden md:flex fixed left-0 top-0 h-screen z-50 flex-col",
          "bg-surface border-r border-border backdrop-blur-xl",
          "transition-all duration-300 ease-in-out",
        )}
      >
        <div className="flex flex-col h-full w-full">{sidebarContent}</div>
      </motion.aside>
    </>
  );
}
