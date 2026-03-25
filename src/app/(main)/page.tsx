import { ArrowUpRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { JobFilterBar } from "@/widgets/job-filters/ui/JobFilterBar";
import { JobFilters } from "@/widgets/job-filters/ui/JobFilters";
import { JobHeroSlider } from "@/widgets/job-hero-slider/ui/JobHeroSlider";
import { JobList } from "@/widgets/job-list/ui/JobList";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col font-sans animate-in fade-in duration-700">
      {/* 🚀 1. HERO BANNER (Fluid Scaling) */}
      <section className="w-full pb-14">
        <JobHeroSlider />
      </section>

      {/* 📦 2. THREE-COLUMN FLUID DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr_340px] gap-12 items-start transition-all duration-500">
        {/* LEFT Sidebar: Professional Korean-Style Filters */}
        <aside className="hidden lg:block sticky top-24">
          <JobFilters />
        </aside>

        {/* CENTER Content: Fluid Job Results Area with FULL-WIDTH Search */}
        <div className="space-y-10 min-w-0 flex-1">
          {/* Section Header + Integrated SEARCH (FULL-WIDTH 100%) */}
          <div className="space-y-8 border-b border-border/10 pb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-foreground tracking-tighter uppercase">
                Explore{" "}
                <span className="text-primary underline decoration-primary/20 underline-offset-8 decoration-dotted">
                  120 Premium Opportunities
                </span>
              </h2>
              <div className="hidden sm:flex items-center gap-6">
                <span className="text-[11px] font-bold text-muted-foreground/30 uppercase tracking-[0.2em]">
                  Rank By:
                </span>
                <select className="bg-transparent border-none outline-none font-black text-[12px] text-primary uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer">
                  <option>Smart Matching</option>
                  <option>Newest Listing</option>
                </select>
              </div>
            </div>

            {/* 🔍 COMPACT SEARCH HUB (FULL WIDTH - Spanning 100% of Center Column) */}
            <div className="w-full">
              <JobFilterBar />
            </div>
          </div>

          <JobList />
        </div>

        {/* RIGHT Intelligence Hub (Widened) */}
        <aside className="hidden xl:block space-y-12 sticky top-24">
          {/* Top Hiring Now */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border/10">
              <TrendingUp size={16} className="text-primary scale-110" />
              <h3 className="text-[12px] font-black uppercase tracking-widest tracking-tight">
                Top Hiring Now
              </h3>
            </div>
            <div className="space-y-4">
              {["Kakao", "Naver", "Line", "Coupang", "Toss", "Samsung"].map((co) => (
                <div
                  key={co}
                  className="flex items-center justify-between group cursor-pointer hover:translate-x-1.5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-foreground/[0.03] flex items-center justify-center text-[12px] font-black group-hover:bg-primary/[0.08] group-hover:text-primary transition-all border border-border/5">
                      {co[0]}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-foreground tracking-tight">{co}</p>
                      <p className="text-[10px] font-bold text-muted-foreground/40">
                        Active Jobs: <span className="text-primary opacity-60">12+</span>
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 text-primary transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* AI Career Insight */}
          <div className="p-8 rounded-2xl bg-zinc-950 text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[60px] opacity-40 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative space-y-5">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-primary animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Insight Focus
                </p>
              </div>
              <p className="text-[15px] font-bold leading-relaxed tracking-tight group-hover:text-primary transition-colors">
                "현재{" "}
                <span className="underline decoration-primary/40 underline-offset-4 decoration-dashed">
                  서비스 기획
                </span>{" "}
                분야의 연봉 상승률이 <span className="text-primary">14.8%</span>로 가장 높습니다."
              </p>
              <button
                type="button"
                className="w-full py-3.5 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
              >
                Full Analysis
              </button>
            </div>
          </div>

          {/* Global Quick Stats */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-2">
              <Zap size={16} className="text-muted-foreground/20" />
              <p className="text-[11px] font-black text-muted-foreground/20 uppercase tracking-[0.2em]">
                Global Pulse
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-foreground/[0.02] border border-border/10 rounded-2xl text-center group hover:border-primary/20 transition-all">
                <p className="text-[18px] font-black text-foreground tracking-tighter">4.8k</p>
                <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                  Jobs Sync
                </p>
              </div>
              <div className="p-4 bg-foreground/[0.02] border border-border/10 rounded-2xl text-center group hover:border-primary/20 transition-all">
                <p className="text-[18px] font-black text-emerald-500 tracking-tighter">124</p>
                <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                  Matches
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
