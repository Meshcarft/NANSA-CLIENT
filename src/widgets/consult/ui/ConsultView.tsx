"use client";

import {
  Award,
  Briefcase,
  Calendar,
  MessageSquareText,
  Search,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { MentorCategory } from "@/entities/mentor";
import { MOCK_MENTORS } from "@/entities/mentor";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";

const CATEGORIES = [
  { id: "all" as MentorCategory, label: "전체 멘토", icon: Users },
  { id: "it" as MentorCategory, label: "IT / 개발", icon: Zap },
  { id: "design" as MentorCategory, label: "디자인", icon: Award },
  { id: "business" as MentorCategory, label: "비즈니스 / 마케팅", icon: Briefcase },
  { id: "ai" as MentorCategory, label: "AI 어드바이저", icon: Sparkles },
];

const HOW_IT_WORKS = [
  {
    id: "search",
    icon: Search,
    title: "Mentor Search",
    desc: "분야별 최고의 멘토들을 탐색하고 당신에게 맞는 상담 스타일을 확인하세요.",
  },
  {
    id: "book",
    icon: Calendar,
    title: "Book Session",
    desc: "편리한 예약 시스템으로 실시간 또는 비대면 상담 일정을 조율하세요.",
  },
  {
    id: "consult",
    icon: MessageSquareText,
    title: "Live Consult",
    desc: "화상 미팅, 채팅형 코칭 등 다양한 방식으로 전문적인 솔루션을 받으세요.",
  },
];

export function ConsultView() {
  const [activeFilter, setActiveFilter] = useState<MentorCategory>("all");

  return (
    <div className="max-w-7xl mx-auto py-12 px-8 space-y-20 animate-agent-reveal">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[4rem] p-12 md:p-24 bg-foreground text-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-success/10 blur-[80px]" />

        <div className="relative z-10 max-w-3xl space-y-8">
          <Badge
            variant="secondary"
            className="px-6 py-2 rounded-full bg-white/10 text-white border-none italic font-black uppercase text-[11px] tracking-widest transition-all hover:bg-white/20 cursor-default"
          >
            NANSA Professional Consultation
          </Badge>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase">
              커리어의{" "}
              <span className="text-primary not-italic underline decoration-8 decoration-primary/30 underline-offset-8">
                답
              </span>
              을<br />
              찾아드리는 <span className="text-success italic">쌤</span>들
            </h1>
            <p className="text-xl md:text-2xl text-background/60 font-medium leading-relaxed italic">
              "방황하는 시기가 아닌, 성장하는 시기가 되도록. 검증된 현직자들과 인공지능이 당신의
              커리어를 함께 설계합니다."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full border-4 border-foreground bg-foreground/20 overflow-hidden shadow-2xl"
                >
                  <Image
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="user"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-foreground bg-primary/20 flex items-center justify-center text-xs font-black italic shadow-2xl">
                +5k
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="text-xs font-bold text-background/40">
                Trusted by thousands of candidates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-black italic uppercase tracking-tighter border-b border-border/10 pb-4">
              Search Mentors
            </h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                placeholder="관심 키워드 검색"
                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-foreground/5 border-none focus:ring-2 focus:ring-primary/50 text-sm font-bold"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black italic uppercase tracking-tighter border-b border-border/10 pb-4">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  className={cn(
                    "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-black text-xs uppercase tracking-widest h-14",
                    activeFilter === cat.id
                      ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                      : "hover:bg-foreground/5 text-muted-foreground",
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="lg:col-span-3 space-y-10">
          <div className="flex items-center justify-between border-b border-border/10 pb-6 uppercase font-black italic tracking-tighter">
            <h2 className="text-3xl">
              Find Your <span className="text-primary">Perfect Match</span>
            </h2>
            <span className="text-muted-foreground opacity-40">Showing 42 mentors</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_MENTORS.map((mentor) => (
              <Card
                key={mentor.id}
                className={cn(
                  "group overflow-hidden rounded-[3rem] border-none glass transition-all duration-500 hover:scale-[1.02] flex flex-col",
                  mentor.isAI
                    ? "ring-2 ring-primary ring-offset-8 ring-offset-background"
                    : "hover:border-primary/20",
                )}
              >
                <div className="relative h-64">
                  <Image
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {mentor.isAI && (
                    <Badge
                      variant="success"
                      className="absolute top-6 left-6 px-4 py-1 rounded-full animate-pulse uppercase font-black text-[10px] tracking-widest"
                    >
                      AI Powered
                    </Badge>
                  )}

                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <h4 className="text-white text-2xl font-black italic uppercase tracking-tighter">
                      {mentor.name}
                    </h4>
                    <p className="text-white/60 text-sm font-bold">{mentor.role}</p>
                  </div>
                </div>

                <CardContent className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 pb-4 border-b border-border/10">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-muted-foreground opacity-40">
                          Company
                        </span>
                        <span className="text-sm font-black">{mentor.company}</span>
                      </div>
                      <div className="h-8 w-[1px] bg-border/20 mx-2" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-muted-foreground opacity-40">
                          Rating
                        </span>
                        <span className="text-sm font-black flex items-center gap-1 text-primary">
                          <Star className="w-3.5 h-3.5 fill-primary" /> {mentor.rating} (
                          {mentor.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {mentor.skills.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="bg-foreground/5 text-muted-foreground border-none font-bold text-[10px] uppercase"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-14 rounded-2xl border-border/20 font-black text-[10px] uppercase tracking-widest italic"
                    >
                      View Profile
                    </Button>
                    <Button
                      type="button"
                      className="h-14 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest italic group-hover:scale-105 transition-transform"
                    >
                      Consult Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-12 text-center">
            <Button
              type="button"
              variant="ghost"
              className="rounded-full h-16 px-12 font-black italic tracking-tighter border border-border/10 hover:bg-foreground/5 uppercase"
            >
              Load More Mentors
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="bg-foreground/5 rounded-[4rem] p-12 md:p-24 space-y-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
            How it{" "}
            <span className="text-primary not-italic underline decoration-8 decoration-primary/20 underline-offset-8">
              works
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl">
            간단한 3단계 과정으로 당신의 커리어 문제를 해결하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center text-center space-y-6 group">
              <div className="relative w-24 h-24 rounded-[2rem] bg-white dark:bg-black flex items-center justify-center shadow-2xl transition-transform group-hover:-translate-y-2">
                <step.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-success text-white flex items-center justify-center font-black text-lg">
                  {i + 1}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black italic tracking-tight uppercase">
                  {step.title}
                </h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
