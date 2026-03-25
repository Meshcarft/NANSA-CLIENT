"use client";

import { MapPin, Search, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

/**
 * Ultra-Slim Integrated Search Hub (Professional Data-Bar Pattern)
 * Focused on content-first vertical economy.
 */
export function JobFilterBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="w-full space-y-3 animate-in fade-in slide-in-from-top-1 duration-500 select-none font-sans">
      {/* 🔍 ULTRA-SLIM HORIZONTAL BAR (h-12 / 48px) */}
      <div
        className={cn(
          "w-full rounded-xl bg-surface border transition-all duration-300 flex items-center divide-x divide-border/5 overflow-hidden h-12",
          isFocused
            ? "shadow-lg shadow-primary/5 ring-1 ring-primary/20 border-primary/20"
            : "border-border/10 shadow-sm",
        )}
      >
        {/* 1. Keyword Field (Slim & Sharp) */}
        <div
          className={cn(
            "relative flex-1 flex items-center gap-3 px-5 h-full transition-all duration-300",
            isFocused ? "bg-primary/[0.01]" : "bg-transparent hover:bg-foreground/[0.01]",
          )}
        >
          <Search
            className={cn(
              "w-3.5 h-3.5 transition-colors",
              isFocused ? "text-primary" : "text-muted-foreground/30",
            )}
          />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="직무, 기술, 기업명"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold tracking-tight text-foreground placeholder:text-muted-foreground/20"
          />
          {keyword && (
            <button
              type="button"
              onClick={() => setKeyword("")}
              className="text-muted-foreground/30 hover:text-danger flex items-center justify-center p-1 rounded-full hover:bg-danger/5 transition-all"
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* 2. Location Field (Ultra Compact) */}
        <div className="relative flex-[0.7] hidden sm:flex items-center gap-3 px-5 h-full bg-transparent hover:bg-foreground/[0.01] transition-all duration-300">
          <MapPin className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="지역"
            className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold tracking-tight text-foreground placeholder:text-muted-foreground/20"
          />
          {location && (
            <button
              type="button"
              onClick={() => setLocation("")}
              className="text-muted-foreground/30 hover:text-danger flex items-center justify-center p-1 rounded-full hover:bg-danger/5 transition-all"
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* 3. Action Hub (Precision Button) */}
        <div className="px-3 shrink-0 bg-transparent flex items-center h-full">
          <button
            type="button"
            className="h-8 px-5 rounded-lg bg-primary text-white font-black text-[11px] shadow-sm flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all uppercase tracking-widest"
          >
            <span>Search</span>
            <Sparkles size={12} className="animate-pulse hidden md:block" />
          </button>
        </div>
      </div>

      {/* Micro Status Line */}
      <div className="flex items-center gap-2 px-1 opacity-20 hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-primary/40 rounded-full" />
        <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">
          AI-Enhanced Discovery Mode &bullet;{" "}
          <span className="text-primary/60">Filtered Stream</span>
        </p>
      </div>
    </div>
  );
}
