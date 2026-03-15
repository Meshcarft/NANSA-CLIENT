"use client";

import { Bot, Search, Settings, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface HeaderActionsProps {
  isAgentOpen: boolean;
  onToggleAgent: () => void;
}

export function HeaderActions({ isAgentOpen, onToggleAgent }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3 ml-auto relative z-20">
      {/* Search Bar - Desktop */}
      <div className="hidden lg:flex items-center relative group mr-2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          placeholder="Search..."
          className="w-48 xl:w-64 bg-foreground/5 border border-border/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all focus:w-64 xl:focus:w-80"
        />
      </div>

      {/* Search Button - Mobile/Tablet */}
      <Button variant="ghost" size="icon" className="lg:hidden text-muted">
        <Search className="w-5 h-5" />
      </Button>

      {/* AI Agent Toggle */}
      <Button
        onClick={onToggleAgent}
        variant={isAgentOpen ? "primary" : "secondary"}
        size="icon"
        className={cn(
          "relative overflow-hidden group border-border/50 shrink-0",
          isAgentOpen && "shadow-[0_0_20px_oklch(45%_0.2_260_/_0.5)]",
        )}
      >
        <Bot
          className={cn(
            "w-6 h-6 transition-transform duration-500",
            isAgentOpen ? "rotate-[360deg] scale-110" : "group-hover:scale-110",
          )}
        />
        {isAgentOpen && <span className="absolute inset-0 bg-white/20 animate-pulse" />}
      </Button>

      {/* User Actions */}
      <div className="hidden sm:flex items-center gap-1 ml-1 border-l border-border/50 pl-3">
        <Button variant="ghost" size="icon" className="text-muted shrink-0">
          <User className="w-5 h-5" />
        </Button>

        <Link href="/settings">
          <Button variant="ghost" size="icon" className="text-muted shrink-0">
            <Settings className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
