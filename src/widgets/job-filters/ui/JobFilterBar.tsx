"use client";

import { Hash, Search, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

/**
 * Ultra-Slim Global Search Bar (Tag-Centric Variant)
 * Replaced Location input with a modern Tag/Hashtag search field.
 */
export function JobFilterBar() {
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");
  const [tag, setTag] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", keyword, tag);
  };

  return (
    <div className="w-full space-y-3 animate-in fade-in duration-500 select-none font-sans">
      {/* 🔍 ULTRA-SLIM BAR (h-12 / 48px) with TAG-DRIVEN MATRIX */}
      <div
        className={cn(
          "w-full rounded-xl bg-surface border transition-all duration-300 flex items-center overflow-hidden h-12 shadow-sm",
          isFocused
            ? "ring-1 ring-primary/40 border-primary/40 bg-primary/[0.005]"
            : "border-border/30",
        )}
      >
        {/* 1. KEYWORD HUB (직무, 기술명 통합) */}
        <div
          className={cn(
            "relative flex-[1.5] flex items-center gap-3 px-5 h-full transition-all duration-300",
            isFocused === "key" ? "bg-primary/[0.02]" : "hover:bg-foreground/[0.01]",
          )}
        >
          <Search
            className={cn(
              "w-3.5 h-3.5 transition-colors",
              isFocused === "key" ? "text-primary" : "text-muted-foreground/50",
            )}
          />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="직무, 기술, 기업명을 검색하세요"
            onFocus={() => setIsFocused("key")}
            onBlur={() => setIsFocused(null)}
            className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold tracking-tight text-foreground placeholder:text-muted-foreground/30 font-sans"
          />
          {keyword && (
            <button
              type="button"
              onClick={() => setKeyword("")}
              className="text-muted-foreground/40 hover:text-danger flex items-center justify-center transition-all bg-foreground/5 rounded-full p-0.5"
            >
              <X size={10} />
            </button>
          )}
        </div>

        {/* 🏛 THE BOLD/VISIBLE DIVIDER (Solid Architecture) */}
        <div className="w-[2px] h-5 bg-border/60 shrink-0 mx-1" />

        {/* 2. TAG SEARCH FIELD (Replacing Location) */}
        <div
          className={cn(
            "relative flex-1 hidden sm:flex items-center gap-3 px-5 h-full transition-all duration-300",
            isFocused === "tag" ? "bg-primary/[0.02]" : "hover:bg-foreground/[0.01]",
          )}
        >
          <Hash
            className={cn(
              "w-3.5 h-3.5 transition-colors",
              isFocused === "tag" ? "text-primary" : "text-muted-foreground/50",
            )}
          />
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="태그 검색 (#재택, #워라밸)"
            onFocus={() => setIsFocused("tag")}
            onBlur={() => setIsFocused(null)}
            className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold tracking-tight text-foreground placeholder:text-muted-foreground/30 font-sans"
          />
          {tag && (
            <button
              type="button"
              onClick={() => setTag("")}
              className="text-muted-foreground/40 hover:text-danger flex items-center justify-center transition-all bg-foreground/5 rounded-full p-0.5"
            >
              <X size={10} />
            </button>
          )}
        </div>

        {/* 3. COMPACT SEARCH HUB */}
        <div className="px-3 shrink-0 bg-transparent flex items-center h-full">
          <button
            type="button"
            onClick={handleSearch}
            className="h-8 px-6 rounded-lg bg-primary text-white font-black text-[11px] flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all uppercase tracking-[0.1em] shadow-lg shadow-primary/20"
          >
            <Search size={12} className="shrink-0" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Precision Intelligence Line (Micro Context) */}
      <div className="flex items-center gap-2 px-1 opacity-20 hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-primary/60 rounded-full" />
        <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest leading-none">
          AI Tag-Parsing Engine Active &bullet;{" "}
          <span className="text-primary/60 font-black">Dynamic Multi-Search</span>
        </p>
      </div>
    </div>
  );
}
