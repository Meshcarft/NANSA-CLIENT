"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Banknote,
  Bookmark,
  Check,
  Clock,
  Cpu,
  GripVertical,
  MapPin,
  Monitor,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { useJobs } from "@/entities/job";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";

const LIST_TABS = [
  { id: "all", label: "전체", icon: Search, color: "primary" },
  { id: "new", label: "신입/인턴", icon: Monitor, color: "emerald-500" },
  { id: "hot", label: "공채/인기", icon: TrendingUp, color: "amber-500" },
  { id: "head", label: "헤드헌팅", icon: Cpu, color: "rose-500" },
  { id: "ssam", label: "SSAM 추천", icon: Rocket, color: "violet-600" },
];

/**
 * 🍱 Dark Grip-Style Slide-to-Apply Component
 * Optimized for Wanted-style card layout with LIGHT-GRAY BALANCED TEXT.
 */
function SlideToApply({ onApply }: { onApply: () => void }) {
  const [isApplied, setIsApplied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const textOpacity = useTransform(x, [0, 150], [1, 0]);
  const progressWidth = useTransform(x, [0, 240], ["0%", "100%"]);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 200) {
      if (!isApplied) {
        setIsApplied(true);
        onApply();
      }
    } else {
      x.set(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-11 rounded-xl overflow-hidden transition-all duration-500 shadow-xl group/slider",
        isApplied
          ? "bg-emerald-600 ring-1 ring-emerald-500/50"
          : "bg-zinc-950 border border-white/5 active:bg-zinc-900",
      )}
    >
      {!isApplied && (
        <motion.div
          style={{ width: progressWidth }}
          className="absolute inset-y-0 left-0 bg-primary/30"
        />
      )}

      {/* SWIPE HINT TEXT (Balanced Light Gray) */}
      {!isApplied && (
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center pl-10"
        >
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap">
            Swipe to Apply
          </span>
        </motion.div>
      )}

      {isApplied && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-[10px] font-black text-white uppercase tracking-widest">
            Applied Successfully
          </span>
        </motion.div>
      )}

      <motion.div
        drag={isApplied ? false : "x"}
        dragConstraints={{ left: 0, right: 230 }}
        dragElastic={0.05}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className={cn(
          "absolute left-1 top-1 bottom-1 w-11 rounded-lg flex items-center justify-center cursor-grab active:cursor-grabbing transition-all duration-300 z-10",
          isApplied
            ? "bg-white/10 text-white left-auto right-1 scale-90"
            : "bg-primary text-white shadow-lg shadow-primary/40 group-hover/slider:scale-105 active:scale-95",
        )}
      >
        {isApplied ? (
          <Check size={16} strokeWidth={4} />
        ) : (
          <GripVertical size={16} strokeWidth={2.5} />
        )}
      </motion.div>
    </div>
  );
}

export function JobList() {
  const { data: jobs, isPending } = useJobs();
  const [activeTab, setActiveTab] = useState("all");

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`skeleton-${i.toString()}`} className="h-[240px] bg-foreground/5 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full space-y-10 animate-in fade-in duration-500 font-sans">
      {/* 🚀 BRANDED TABS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-3 border-b border-border/10">
        <div className="flex flex-wrap items-center gap-1.5 active:scale-95 transition-transform duration-500">
          {LIST_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "group px-6 py-2.5 rounded-xl flex items-center gap-3 transition-all relative overflow-hidden",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105 z-10"
                  : "hover:bg-primary/[0.04] text-muted-foreground/50 hover:text-primary hover:shadow-sm",
              )}
            >
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-white/10 animate-pulse" />
              )}
              <tab.icon
                size={14}
                className={cn(
                  "transition-all duration-300",
                  activeTab === tab.id
                    ? "text-white scale-110"
                    : "text-muted-foreground/30 group-hover:text-primary",
                )}
              />
              <span
                className={cn(
                  "text-[13px] font-black uppercase tracking-tighter transition-all duration-300",
                  activeTab === tab.id
                    ? "font-black"
                    : "font-bold opacity-70 group-hover:opacity-100",
                )}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground/15 tracking-[0.2em] uppercase">
          Results: <span className="text-foreground/30">{jobs.length} Found</span>
        </div>
      </div>

      {/* 📦 WANTED-STYLE SPLIT CARDS (Top Thumbnail / Bottom Content) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className="group relative border border-border/10 bg-surface hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-3xl hover:-translate-y-3 animate-slide-up"
          >
            {/* 📸 TOP: THUMBNAIL AREA */}
            <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-40">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,var(--primary-color)_0%,transparent_60%)] opacity-20"
                  style={{ "--primary-color": "hsl(220, 100%, 50%)" } as React.CSSProperties}
                />
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/20 blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* 🗓 D-DAY BADGE (Premium Purple Variant) */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-xl border border-white/10 text-white flex items-center gap-2 group-hover:scale-105 group-hover:bg-violet-600 group-hover:border-violet-400/30 transition-all duration-300 shadow-2xl">
                  <Clock size={11} className="opacity-50" />
                  <span className="text-[10px] font-black tracking-widest uppercase truncate leading-none">
                    D-14
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <span className="text-zinc-950 font-black text-lg">{job.company[0]}</span>
                </div>
                <Badge className="bg-white/10 backdrop-blur-md text-white border-none text-[8px] font-bold px-2 py-1 rounded-lg">
                  VERIFIED
                </Badge>
              </div>

              <button
                type="button"
                className="absolute top-4 right-4 h-10 w-10 bg-white/10 backdrop-blur-md text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-violet-600 z-10"
              >
                <Bookmark size={15} />
              </button>
            </div>

            {/* 💼 BOTTOM: CONTENT AREA */}
            <CardContent className="p-6 flex flex-col flex-1 space-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                  {job.company}
                </p>
                <h3 className="text-base font-black text-foreground group-hover:text-primary transition-colors leading-[1.3] line-clamp-2 uppercase tracking-tight h-[42px]">
                  {job.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-muted-foreground/60 font-black tracking-tighter pb-2 border-b border-border/5">
                <div className="flex items-center gap-1.5">
                  <MapPin size={10} className="text-primary/40 shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Banknote size={10} className="text-primary/40 shrink-0" />
                  <span className="text-foreground/80">{job.salary}</span>
                </div>
              </div>

              {/* 🚀 ACTION AREA */}
              <div className="pt-2 mt-auto">
                <SlideToApply onApply={() => console.log(`Applying ${job.title}`)} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 🔮 FLUID BOTTOM CTA */}
      <Card className="p-16 rounded-2xl bg-zinc-950 text-white border-none shadow-3xl relative overflow-hidden group/cta mt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover/cta:scale-125 transition-transform duration-1000" />
        <div className="relative text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            EXPLORE NEXT{" "}
            <span className="text-primary underline decoration-primary underline-offset-[16px]">
              LEVEL
            </span>{" "}
            CAREER
          </h2>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="px-12 py-4 bg-white text-zinc-950 font-black text-[12px] rounded-xl hover:scale-105 transition-all shadow-2xl uppercase tracking-[0.2em]"
            >
              More Jobs
            </button>
            <button
              type="button"
              className="px-12 py-4 bg-zinc-800 text-white font-black text-[12px] rounded-xl border border-white/10 hover:bg-zinc-700 transition-all uppercase tracking-[0.2em]"
            >
              Alerts Hub
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
