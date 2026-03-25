"use client";

import {
  Bot,
  Code2,
  Cpu,
  ExternalLink,
  MessageSquare,
  Plus,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const PROJECTS = [
  {
    id: 1,
    title: "Nansa AI Agent Integration",
    description: "LLM을 활용한 구인구직 자동화 에이전트 시스템 구축 프로젝트",
    tags: ["React", "NestJS", "LLM", "Python"],
    members: 4,
    status: "Recruiting",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Crypto-Asset Dashboard",
    description: "실시간 자산 변동 분석 및 예측 대시보드 개발 (Fintech)",
    tags: ["Next.js", "Rust", "Web3"],
    members: 3,
    status: "In Progress",
    color: "bg-emerald-500",
  },
];

export default function TeamProjectPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-12 font-sans space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/20">
        <div className="space-y-1">
          <Badge className="bg-primary/10 text-primary border-none text-[10px] font-bold tracking-widest uppercase mb-2">
            BUILD YOUR TEAM
          </Badge>
          <h1 className="text-4xl font-black tracking-tighter">팀 프로젝트</h1>
          <p className="text-sm text-muted-foreground font-medium opacity-60">
            AI 기반 매칭 시스템으로 유저님의 실력을 극대화할 팀원을 찾으세요.
          </p>
        </div>
        <button
          type="button"
          className="h-14 px-8 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-[1.05] transition-all"
        >
          <Plus size={20} /> 프로젝트 시작하기
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            className="group p-10 rounded-[3rem] bg-surface/50 border-border/10 hover:border-primary/40 transition-all space-y-8 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform",
                  project.color,
                )}
              >
                <Rocket size={28} />
              </div>
              <Badge
                className={cn(
                  "px-3 py-1 font-bold text-[10px] border-none shadow-sm",
                  project.status === "Recruiting"
                    ? "bg-primary text-white"
                    : "bg-emerald-500/10 text-emerald-500",
                )}
              >
                {project.status.toUpperCase()}
              </Badge>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground/80 leading-relaxed truncate-2-lines">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] font-bold border-border/20 px-3"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* AI Match Stats */}
            <div className="p-6 rounded-2xl bg-foreground/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <Bot size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    AI Match Score
                  </span>
                </div>
                <span className="text-lg font-black text-primary">94%</span>
              </div>
              <p className="text-[11px] font-medium text-muted-foreground leading-relaxed">
                "유저님의 최근 LLM 프로젝트 경험이 이 팀의 기술 스택과 매우 유사합니다."
              </p>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-border border-2 border-surface flex items-center justify-center text-[10px] font-bold"
                    >
                      M
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-muted-foreground/40">
                  +{project.members} members
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all"
                >
                  <MessageSquare size={16} />
                </button>
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl bg-primary text-white font-bold text-xs"
                >
                  참여 신청
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* AI Recommendation Section */}
      <Card className="p-12 rounded-[4rem] bg-zinc-900 text-white border-none shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-inner">
                <Cpu size={24} className="text-primary animate-pulse" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] opacity-60">
                AI Team Recommendation
              </span>
            </div>
            <h2 className="text-4xl font-black leading-tight">
              "유저님과 함께라면 시너지가 폭발할
              <br />
              3명의 개발자가 대기 중입니다."
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <Users size={14} className="text-primary" />
                <span className="text-xs font-bold">풀스택 1명</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <Code2 size={14} className="text-emerald-500" />
                <span className="text-xs font-bold">데브옵스 1명</span>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-3 text-sm font-black text-primary hover:translate-x-2 transition-transform"
            >
              AI가 매칭한 팀원 프로필 보기 <ExternalLink size={16} />
            </button>
          </div>
          <div className="relative h-64 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl p-10 flex items-center justify-center overflow-hidden">
            <Sparkles size={80} className="text-primary/20 absolute -bottom-10 -left-10" />
            <div className="text-center space-y-4">
              <Badge className="bg-primary shadow-xl shadow-primary/20 animate-bounce">
                TOP TIER MATCH
              </Badge>
              <p className="text-lg font-bold">98.4% Match Probability</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
