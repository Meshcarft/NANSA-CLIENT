"use client";

import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { HEADER_NAV_ITEMS } from "../config/navigation";

export function HeaderNav() {
  return (
    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-surface/50 p-1 rounded-2xl border border-border backdrop-blur-md z-10">
      {HEADER_NAV_ITEMS.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <Link href={item.href}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-foreground/5 transition-all group">
              <item.icon
                className={cn(
                  "w-4 h-4 transition-transform group-hover:scale-110",
                  item.type === "primary"
                    ? "text-primary"
                    : "text-muted group-hover:text-foreground",
                )}
              />
              <span
                className={cn(
                  "text-sm font-semibold transition-colors",
                  item.type === "primary"
                    ? "text-foreground"
                    : "text-muted group-hover:text-foreground",
                )}
              >
                {item.label}
              </span>
            </div>
          </Link>
          {index < HEADER_NAV_ITEMS.length - 1 && <div className="w-px h-4 bg-border/50 mx-1" />}
        </div>
      ))}
    </nav>
  );
}
