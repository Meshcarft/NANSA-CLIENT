"use client";

import { motion } from "framer-motion";
import { BarChart3, Briefcase, Star, TrendingUp, Users, Zap } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const SKILL_TRENDS = [
  { name: "Next.js", growth: "+45%", demand: "High", color: "bg-blue-500" },
  { name: "TypeScript", growth: "+38%", demand: "Very High", color: "bg-emerald-500" },
  { name: "Go (Golang)", growth: "+22%", demand: "Rising", color: "bg-cyan-500" },
  { name: "Tailwind CSS", growth: "+30%", demand: "Standard", color: "bg-sky-500" },
  { name: "AI/LLM Integration", growth: "+120%", demand: "Explosive", color: "bg-purple-500" },
];

const SALARY_INSIGHTS = [
  { role: "Junior Developer", min: "3,800", max: "5,200", avg: "4,500" },
  { role: "Senior Developer", min: "7,500", max: "12,000", avg: "9,200" },
  { role: "Product Manager", min: "6,000", max: "10,000", avg: "8,500" },
  { role: "UI/UX Designer", min: "4,200", max: "7,000", avg: "5,800" },
];

export function TrendsView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full min-h-screen bg-background p-6 md:p-12 lg:p-24 pt-20 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Header Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
            <TrendingUp size={16} />
            Market Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hiring <span className="text-primary italic">Trends</span> 2024
          </h1>
          <p className="text-lg md:text-xl font-medium text-muted-foreground/80 max-w-3xl leading-relaxed">
            나우앤사의 방대한 데이터를 바탕으로 분석한 실시간 채용 시장 인사이트입니다. 지금 가장
            뜨거운 기술과 가치 있는 커리어 방향을 확인하세요.
          </p>
        </section>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "seekers",
              icon: Users,
              label: "Active Job Seekers",
              value: "124,502",
              change: "+12%",
            },
            {
              id: "openings",
              icon: Briefcase,
              label: "New Openings",
              value: "8,291",
              change: "+5.4%",
            },
            { id: "skill", icon: Zap, label: "Hot Skill", value: "React 19", change: "Rising" },
            { id: "salary", icon: Star, label: "Avg. Salary", value: "₩5,200", change: "+1.2%" },
          ].map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="p-8 rounded-[2rem] bg-surface/50 border border-border/20 backdrop-blur-md space-y-4 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <stat.icon size={22} />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide opacity-60">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-2xl font-bold tracking-tight leading-none">{stat.value}</h4>
                  <span className="text-xs font-bold text-success uppercase">{stat.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Most Demanded Skills</h2>
              <Badge variant="outline" className="border-primary/20 text-primary">
                Live Updates
              </Badge>
            </div>

            <Card className="rounded-[2.5rem] p-10 bg-surface/30 border-border/10 shadow-sm">
              <div className="space-y-10">
                {SKILL_TRENDS.map((skill, i) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold tracking-tight">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.growth} Growth</span>
                    </div>
                    <div className="h-4 w-full bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${60 + i * 10}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "circOut" }}
                        className={`h-full ${skill.color} relative group rounded-full`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Salary Benchmark</h2>
            <Card className="rounded-[2.5rem] overflow-hidden border-border/10 flex flex-col h-full bg-foreground text-background p-8 space-y-8 shadow-xl">
              <div className="space-y-2">
                <p className="text-xs text-background/40 font-semibold uppercase tracking-wide">
                  Annual Salary (₩/Year)
                </p>
                <h3 className="text-3xl font-bold tracking-tight">Market Average</h3>
              </div>

              <div className="space-y-6 flex-1 pt-4">
                {SALARY_INSIGHTS.slice(0, 3).map((item) => (
                  <div key={item.role} className="space-y-2">
                    <div className="flex justify-between items-center opacity-40 text-xs font-semibold">
                      <span>{item.role}</span>
                      <span>Avg. ₩{item.avg}M</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold opacity-20 whitespace-nowrap">
                        ₩{item.min}
                      </span>
                      <div className="h-1.5 flex-1 bg-background/10 rounded-full relative overflow-hidden">
                        <div className="absolute inset-y-0 left-1/4 right-1/4 bg-primary rounded-full" />
                      </div>
                      <span className="text-[10px] font-bold opacity-20 whitespace-nowrap">
                        ₩{item.max}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="w-full h-14 rounded-2xl bg-white text-black font-bold text-sm tracking-tight hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
              >
                Personalized Report
              </button>
            </Card>
          </motion.div>
        </div>

        {/* Footer Insights */}
        <motion.div
          variants={itemVariants}
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary to-primary/60 text-white relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <BarChart3 size={300} />
          </div>
          <div className="max-w-2xl space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Stay ahead <br />
              of the <span className="text-black/20">Industry</span>
            </h2>
            <p className="text-white/90 font-medium text-lg leading-relaxed">
              매달 업데이트되는 리포트를 통해 트렌드를 놓치지 마세요. 기술 스택 변화에 맞춘 학습
              플랜과 채용 정보를 지금 바로 설정할 수 있습니다.
            </p>
            <div className="flex gap-4">
              <Badge className="bg-white text-primary font-bold rounded-full px-6 py-2.5 shadow-sm">
                March 2024 Issue
              </Badge>
              <Badge
                variant="outline"
                className="border-white/40 text-white font-bold rounded-full px-6 py-2.5 backdrop-blur-sm"
              >
                PDF Download
              </Badge>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
