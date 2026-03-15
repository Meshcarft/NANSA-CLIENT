"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { MENU_ITEMS } from "../config/menu-items";

interface SidebarNavProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  pathname: string;
  closeMobile: () => void;
}

export function SidebarNav({ isCollapsed, isMobileOpen, pathname, closeMobile }: SidebarNavProps) {
  return (
    <nav className="flex-1 py-6 px-3 space-y-1">
      {MENU_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={closeMobile}
            className={cn(
              "group flex items-center px-3 py-3 rounded-xl transition-all relative",
              isActive
                ? "bg-primary/20 text-primary glow-sm"
                : "text-muted hover:bg-foreground/5 hover:text-foreground",
              isCollapsed && !isMobileOpen ? "justify-center" : "space-x-4",
            )}
          >
            <item.icon
              size={22}
              className={cn(
                "shrink-0",
                isActive ? "text-primary" : "group-hover:text-primary transition-colors",
              )}
            />
            {(!isCollapsed || isMobileOpen) && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
            {isActive && (
              <motion.div
                layoutId="sidebar-active-indicator"
                className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
