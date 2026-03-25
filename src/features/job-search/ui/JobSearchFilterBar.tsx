"use client";

import { MapPin, Search, XCircle } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface JobSearchFilterBarProps {
  onSearch?: (term: string) => void;
}

export function JobSearchFilterBar({ onSearch }: JobSearchFilterBarProps) {
  return (
    <div className="w-full bg-white dark:bg-foreground/5 rounded-3xl p-3 border border-border/50 shadow-2xl flex flex-col md:flex-row items-center gap-3 animate-slide-down">
      {/* Job Title Input Section */}
      <div className="relative group flex-[1.5] w-full border-r border-border/50 pr-2">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="UI/UX Designer"
          className="pl-14 h-14 bg-transparent border-none text-base rounded-2xl focus:ring-0 focus:bg-transparent"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-0 group-focus-within:opacity-50 transition-all cursor-pointer hover:opacity-100" />
      </div>

      {/* Location Input Section */}
      <div className="relative group flex-1 w-full border-r border-border/50 pr-2">
        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="Location"
          className="pl-14 h-14 bg-transparent border-none text-base rounded-2xl focus:ring-0 focus:bg-transparent"
        />
        <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-0 group-focus-within:opacity-50 transition-all cursor-pointer hover:opacity-100" />
      </div>

      {/* Final Action Section */}
      <div className="w-full md:w-auto p-1">
        <Button className="h-12 px-10 rounded-2xl shadow-xl hover:scale-[1.02] bg-primary text-black hover:bg-primary/90 transition-all active:scale-95">
          Search job
        </Button>
      </div>
    </div>
  );
}
