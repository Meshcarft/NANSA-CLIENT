"use client";

import { motion } from "framer-motion";
import { Calendar, Filter, Grid, List as ListIcon, Search, TrendingUp } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { EventList } from "@/widgets/events/ui/EventList";

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const categories = ["전체", "컨퍼런스", "웨비나", "스터디 모임", "네트워킹", "워크샵"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col font-sans overflow-x-hidden pt-20 px-6 md:px-12 lg:px-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 w-full py-16 space-y-16"
      >
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-border/20 relative">
          <div className="absolute -top-12 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-20 -z-10" />

          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-[0.4em] italic animate-pulse"
            >
              <Calendar size={18} />
              Networking & Growth
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter uppercase italic leading-[0.9]"
            >
              NANSA <span className="text-primary italic text-glow">EVENTS</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-medium text-muted-foreground/80 max-w-2xl leading-relaxed"
            >
              함께 배우고, 나누며, 성장하는 특별한 시간을 경험하세요. 나우앤사의 다양한 온/오프라인
              이벤트를 만나보세요.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="flex items-center gap-6 p-2 bg-surface/50 rounded-2xl border border-border/40 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted hover:text-foreground"}`}
              >
                <ListIcon size={18} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted hover:text-foreground"}`}
              >
                <Grid size={18} />
              </button>
            </div>
            <Button
              size="lg"
              className="h-16 px-10 rounded-full bg-foreground text-surface hover:scale-105 transition-transform font-black uppercase tracking-widest italic shadow-xl shadow-foreground/10 border-none"
            >
              내 이벤트 관리 →
            </Button>
          </motion.div>
        </div>

        {/* Categories & Search */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center justify-between gap-12"
        >
          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar flex-1">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  i === 0
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 ring-4 ring-primary/10 italic scale-105"
                    : "bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-96">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="이벤트 제목이나 내용을 검색해보세요"
                className="pl-12 h-14 bg-surface/50 border-border/40 text-foreground text-sm rounded-2xl focus:ring-primary shadow-sm hover:border-primary/50 transition-colors"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-2xl border-border/40 shrink-0 bg-surface/50 hover:bg-surface transition-colors"
            >
              <Filter size={18} className="text-muted-foreground" />
            </Button>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-20">
          {/* Main List */}
          <motion.main variants={itemVariants} className="space-y-12 h-full">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight italic">
                UPCOMING <span className="text-primary">EVENTS</span> (4)
              </h2>
            </div>
            <EventList />
            <div className="py-12 flex justify-center">
              <Button
                variant="outline"
                className="h-14 px-12 rounded-full border-border/40 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                과거 이벤트 더 보기
              </Button>
            </div>
          </motion.main>

          {/* Right Sidebar */}
          <motion.aside variants={itemVariants} className="space-y-12">
            {/* Trending / Hot Sidebar Item */}
            <div className="bg-surface/50 rounded-[2.5rem] p-8 border border-border/20 space-y-8 backdrop-blur-md">
              <div className="flex items-center gap-3 text-orange-500">
                <TrendingUp size={24} />
                <h3 className="text-xl font-black uppercase tracking-tighter italic">
                  HOT MOMENTS
                </h3>
              </div>

              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/20">
                      <Image
                        src={`https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop&seed=${i}`}
                        alt="event"
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[9px] text-white px-3 py-1 rounded-full font-black uppercase tracking-widest whitespace-nowrap">
                        Recap: 2024.03.10
                      </div>
                    </div>

                    <h4 className="font-bold text-foreground leading-tight group-hover:text-primary transition-colors italic uppercase tracking-tight">
                      AI 해커톤 2024 현장 스케치 및 우수작 발표
                    </h4>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="w-full h-14 rounded-2xl bg-foreground/5 text-muted-foreground text-xs font-black uppercase tracking-widest hover:bg-foreground hover:text-surface transition-all duration-300"
              >
                이벤트 후기 전체보기
              </button>
            </div>

            {/* Newsletter or Ad */}
            <div className="bg-gradient-to-br from-primary to-primary/60 rounded-[2.5rem] p-10 text-white space-y-6 relative overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Calendar size={180} fill="white" />
              </div>
              <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
                NEVER MISS <br />
                AN EVENT.
              </h3>
              <p className="text-white/60 text-xs font-medium leading-relaxed uppercase tracking-widest">
                나우앤사의 새로운 이벤트 소식을 가장 먼저 받아보세요. 매주 선별된 네트워킹 정보를
                보내드립니다.
              </p>
              <div className="space-y-2">
                <Input
                  placeholder="EMAIL ADDRESS"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-2xl h-14 px-6 border-none"
                />
                <Button className="w-full h-14 rounded-2xl bg-white text-primary font-black uppercase tracking-widest italic hover:scale-[1.02] transition-transform border-none">
                  SUBSCRIBE NOW
                </Button>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
}
