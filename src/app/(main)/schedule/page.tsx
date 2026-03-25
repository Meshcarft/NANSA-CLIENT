"use client";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Heart,
  Plus,
  Sparkles,
  Target,
  Trophy,
  Video,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Toss 커피챗",
    time: "11:00 AM",
    date: "03.27",
    type: "coffee",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Apple 코테 마감",
    time: "11:59 PM",
    date: "03.28",
    type: "deadline",
    color: "bg-rose-500",
  },
  {
    id: 3,
    title: "Line 기술 면접",
    time: "02:00 PM",
    date: "03.30",
    type: "interview",
    color: "bg-emerald-500",
  },
];

const PREPARATION_RESOURCES = [
  { id: 1, title: "Toss 기출 질문", category: "Interview", duration: "1.5h", icon: BookOpen },
  { id: 2, title: "React 동시성 핵심", category: "Technical", duration: "45m", icon: Sparkles },
];

export default function SchedulePage() {
  const [currentMonth, _setCurrentMonth] = useState("2026년 3월");

  return (
    <div className="max-w-[1600px] mx-auto p-6 md:p-10 font-sans space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/10">
        <div className="space-y-1">
          <Badge className="bg-primary/10 text-primary border-none text-[9px] font-bold tracking-widest uppercase mb-2 px-3 py-1">
            Personal Command Center
          </Badge>
          <h1 className="text-4xl font-black tracking-tighter">나의 커리어 여정</h1>
        </div>
        <button
          type="button"
          className="h-14 px-8 rounded-[2rem] bg-primary text-white font-black shadow-2xl shadow-primary/20 flex items-center gap-3 hover:scale-[1.05] active:scale-95 transition-all"
        >
          <Plus size={20} /> 일정 최적화 추가
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 📊 FAR LEFT: Stats & Goals */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="p-8 rounded-[2.5rem] bg-surface/50 border-border/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-muted-foreground/40 uppercase tracking-widest flex items-center gap-2">
                <BarChart3 size={14} className="text-primary" /> Activity Trend
              </h3>
              <Badge
                variant="outline"
                className="text-[9px] font-bold border-emerald-500/20 text-emerald-500"
              >
                +12%
              </Badge>
            </div>
            <div className="h-24 flex items-end gap-2 px-2 group">
              {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                <div
                  key={`trend-bar-${i}`}
                  className="flex-1 bg-primary/10 hover:bg-primary transition-all rounded-lg relative group/bar"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[8px] px-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                    {h}%
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold text-muted-foreground leading-relaxed text-center opacity-70 italic">
              "수요일과 목요일에 학습 집중도가 가장 높게 기록되었습니다."
            </p>
          </Card>

          <Card className="p-8 rounded-[2.5rem] bg-zinc-900 border-none text-white shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="flex items-center gap-3 text-primary">
              <Target size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80">
                Monthly Goals
              </span>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-bold">
                  <span>커피챗 달성</span>
                  <span className="text-primary">3 / 5</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[60%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-bold">
                  <span>기술 리포트 완료</span>
                  <span className="text-primary">8 / 12</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%]" />
                </div>
              </div>
            </div>
          </Card>

          <section className="space-y-4">
            <h3 className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em] px-2 italic">
              Quick Focus
            </h3>
            <div className="space-y-3">
              {["이력서 키워드 정비", "포트폴리오 영상 업로드"].map((task) => (
                <div
                  key={`quick-task-${task}`}
                  className="p-5 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-2 h-2 rounded-full border border-primary group-hover:bg-primary transition-colors" />
                  <span className="text-[11px] font-bold text-muted-foreground/80 group-hover:text-foreground">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 📅 CENTER: Calendar */}
        <div className="lg:col-span-6 space-y-8">
          <Card className="p-8 rounded-[3.5rem] bg-surface/50 border-border/10 shadow-2xl overflow-hidden relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black flex items-center gap-3">
                <CalendarIcon size={24} className="text-primary" /> {currentMonth}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="p-2 hover:bg-foreground/5 rounded-xl transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="px-5 py-2 font-black text-[10px] bg-foreground/5 rounded-xl uppercase tracking-tighter"
                >
                  Today
                </button>
                <button
                  type="button"
                  className="p-2 hover:bg-foreground/5 rounded-xl transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 mb-4">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <div
                  key={`day-label-${day}`}
                  className="text-center text-[10px] font-bold text-muted-foreground/20 tracking-widest"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-px border border-border/10 rounded-3xl overflow-hidden shadow-inner">
              {Array.from({ length: 35 }).map((_, i) => {
                const day = i - 0;
                const isToday = day === 25;
                const hasEvent = [27, 28, 30].includes(day);
                return (
                  <div
                    key={`cal-day-${i}`}
                    className={cn(
                      "h-28 p-3 flex flex-col transition-all hover:bg-foreground/[0.02] group relative",
                      isToday ? "bg-primary/[0.05]" : "bg-white dark:bg-zinc-950/20",
                    )}
                  >
                    <span
                      className={cn(
                        "text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity mb-2",
                        isToday && "text-primary opacity-100",
                      )}
                    >
                      {day > 0 && day <= 31 ? day : ""}
                    </span>
                    {hasEvent && (
                      <div className="flex flex-col gap-1">
                        <div
                          className={cn(
                            "w-full h-5 rounded-md flex items-center justify-center shadow-sm",
                            day === 27
                              ? "bg-blue-500"
                              : day === 28
                                ? "bg-rose-500"
                                : "bg-emerald-500",
                          )}
                        >
                          {day === 27 && <Coffee size={10} className="text-white" />}
                          {day === 28 && <Sparkles size={10} className="text-white" />}
                          {day === 30 && <Video size={10} className="text-white" />}
                        </div>
                      </div>
                    )}
                    {isToday && (
                      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PREPARATION_RESOURCES.map((res) => (
              <button
                key={`prep-res-${res.id}`}
                type="button"
                className="w-full text-left group p-6 rounded-[2rem] bg-zinc-50 dark:bg-zinc-800 border border-border/10 hover:border-primary/40 transition-all flex gap-4 items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-border/5 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <res.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-black text-primary/60 uppercase tracking-widest">
                    {res.category}
                  </p>
                  <p className="text-xs font-bold text-foreground truncate">{res.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 🕒 RIGHT: Timeline & AI */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="p-8 rounded-[3rem] bg-primary text-white border-none shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-80 text-white/70">
                  AI Focus
                </span>
              </div>
              <h3 className="text-lg font-bold leading-tight">
                "내일 애플 리포트 마감에 집중하세요."
              </h3>
              <button
                type="button"
                className="w-full py-4 bg-white text-primary rounded-2xl font-black text-xs shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                바로가기
              </button>
            </div>
          </Card>

          <section className="space-y-4">
            <h3 className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.2em] px-2 italic">
              Timeline
            </h3>
            <div className="space-y-4">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={`upcoming-${event.id}`}
                  className="p-5 rounded-[2rem] bg-surface/50 border border-border/10 hover:border-primary/10 transition-all flex gap-4 items-center group"
                >
                  <div className={cn("w-1.5 h-10 rounded-full shrink-0", event.color)} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-foreground group-hover:text-primary transition-colors truncate">
                      {event.title}
                    </p>
                    <p className="text-[9px] font-bold text-muted-foreground/50 uppercase">
                      {event.date} • {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Card className="p-6 rounded-2xl bg-foreground/5 space-y-3">
            <div className="flex items-center gap-2 text-rose-500">
              <Heart size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Health</span>
            </div>
            <p className="text-[10px] font-bold text-muted-foreground leading-relaxed italic opacity-70">
              "수면 패턴이 불규칙하게 기록되었습니다. 금일은 정시 퇴근 후 휴식을 권장합니다."
            </p>
          </Card>

          {/* Unused icons hidden to fix warning but kept for reference if needed */}
          <div className="hidden">
            <ArrowRight />
            <BookOpen />
            <Clock />
            <Trophy />
          </div>
        </div>
      </div>
    </div>
  );
}
