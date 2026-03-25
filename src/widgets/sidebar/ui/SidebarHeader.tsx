"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarHeaderProps {
  isScrolled: boolean;
  isCollapsed: boolean;
  isMobileOpen: boolean;
  toggle: () => void;
  closeMobile: () => void;
}

export function SidebarHeader({ isCollapsed, toggle }: SidebarHeaderProps) {
  return (
    <div className="flex flex-col w-full">
      {/* 🚀 Brand Logo & Collapse Trigger */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-border/10">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xs">
              N
            </div>
            <span className="text-xl font-black tracking-tighter text-foreground uppercase italic px-1">
              Careertrack
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={toggle}
          className="h-8 w-8 rounded-lg bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* 👤 User Profile Section (The image variant) */}
      {!isCollapsed && (
        <div className="flex flex-col items-center py-10 px-6 space-y-4 border-b border-border/10 group">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20 bg-foreground/5 shadow-xl transition-transform group-hover:scale-110">
              <img
                src="/default-avatar.png"
                alt="User Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Jeffrey&background=0066FF&color=fff";
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-primary border-2 border-surface flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm font-black text-foreground tracking-tight underline-offset-4 decoration-primary/30 decoration-dotted">
              Mr. Kiran Patel
            </p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60 italic">
              UI/UX Designer
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
