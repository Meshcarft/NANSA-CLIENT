"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, RefreshCw, SlidersHorizontal } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";

const FILTER_GROUPS = [
  {
    title: "Job Type",
    items: [
      { label: "Full Time Jobs", count: 23 },
      { label: "Part Time Jobs", count: 12 },
      { label: "Internship", count: 5 },
    ],
  },
  {
    title: "Salary Range",
    items: [
      { label: "$0 - $50k", count: 24 },
      { label: "$50k - $100k", count: 23 },
    ],
  },
];

interface JobSidebarFilterProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export function JobSidebarFilter({ isExpanded, onToggle }: JobSidebarFilterProps) {
  return (
    <div className="relative flex h-full">
      {/* The Actual Filter Content (Slide in/out) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-full border-l border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col"
          >
            <div className="p-6 space-y-8 min-w-[300px]">
              <div className="flex items-center justify-between pb-4 border-b border-border/20">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  Detailed Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-[10px] text-muted-foreground hover:text-primary"
                >
                  <RefreshCw className="w-3 h-3 mr-1" /> Clear
                </Button>
              </div>

              <div className="space-y-8">
                {FILTER_GROUPS.map((group) => (
                  <div key={group.title} className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
                      {group.title}
                    </h4>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <Checkbox
                          key={item.label}
                          label={item.label}
                          count={item.count}
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button (Attached to Main Sidebar edge) */}
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "absolute -right-3 top-24 z-[70] w-6 h-12 bg-primary flex items-center justify-center rounded-r-lg shadow-lg hover:scale-110 active:scale-95 transition-all text-black",
          isExpanded && "-right-0 rotate-180 rounded-l-lg rounded-r-none",
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
