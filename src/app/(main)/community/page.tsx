"use client";

import { motion } from "framer-motion";
import { ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { CommunityFeed } from "@/widgets/community/ui/CommunityFeed";
import { CommunitySidebar } from "@/widgets/community/ui/CommunitySidebar";

export default function CommunityPage() {
  const categories = ["전체", "Q&A", "Career", "Insight", "Feedback", "Study"];

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
        className="flex-1 w-full py-16 space-y-12"
      >
        {/* Breadcrumb or Search Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-border/20"
        >
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-60">
              <span>Main</span>
              <ChevronRight size={12} />
              <span className="text-primary italic">Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tighter uppercase italic">
              NANSA <span className="text-primary italic text-glow">TALK</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="관심 분야나 기술 스택을 검색해보세요"
                className="pl-12 h-14 bg-surface/50 border-border/40 text-foreground text-sm rounded-2xl focus:ring-primary shadow-sm hover:border-primary/50 transition-colors"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-2xl border-border/40 shrink-0 bg-surface/50 hover:bg-surface transition-colors"
            >
              <SlidersHorizontal size={20} className="text-muted-foreground" />
            </Button>
          </div>
        </motion.div>

        {/* Categories Bar */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={`whitespace-nowrap px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                i === 0
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/40 ring-2 ring-primary/20 scale-105"
                  : "bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
          {/* Main Feed */}
          <motion.main variants={itemVariants} className="space-y-12 h-full">
            <CommunityFeed />
          </motion.main>

          {/* Sidebar */}
          <motion.aside
            variants={itemVariants}
            className="hidden lg:block h-full border-l border-border/20 pl-12"
          >
            <CommunitySidebar />
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
}
