"use client";

import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { HEADER_NAV_ITEMS } from "../config/navigation";

export function HeaderNav() {
  return (
    <div className="hidden lg:flex flex-1 justify-center px-4 overflow-hidden">
      <nav className="flex items-center gap-1 bg-surface/50 p-1 rounded-2xl border border-border backdrop-blur-md max-w-full overflow-x-auto no-scrollbar scroll-smooth">
        {HEADER_NAV_ITEMS.map((item, index) => (
          <div key={item.label} className="flex items-center shrink-0">
            <Link href={item.href}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-foreground/5 transition-all group">
                <item.icon
                  className={cn(
                    "w-4 h-4 transition-transform group-hover:scale-110",
                    item.type === "primary"
                      ? "text-primary font-bold"
                      : "text-muted group-hover:text-foreground",
                  )}
                />
                <span
                  className={cn(
                    "text-[13px] font-bold transition-colors whitespace-nowrap tracking-tight",
                    item.type === "primary"
                      ? "text-foreground"
                      : "text-muted group-hover:text-foreground",
                  )}
                >
                  {item.label}
                </span>
              </div>
            </Link>
            {index < HEADER_NAV_ITEMS.length - 1 && (
              <div className="w-px h-4 bg-border/50 mx-1 shrink-0" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
