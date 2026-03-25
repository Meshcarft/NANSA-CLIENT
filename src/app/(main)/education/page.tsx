"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, Play, Search, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { CourseList } from "@/widgets/education/ui/CourseList";

export default function EducationPage() {
  const categories = ["전체", "개발", "디자인", "데이터", "비즈니스", "마케팅"];

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
        className="flex-1 w-full py-16 space-y-24"
      >
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[3rem] bg-foreground px-8 py-20 md:px-20 md:py-32 flex flex-col lg:flex-row items-center gap-16 border border-border/10 shadow-3xl shadow-primary/10 group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-40 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-success/10 rounded-full blur-[100px] opacity-20" />

          <div className="relative z-10 flex-1 space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground text-xs font-black uppercase tracking-widest italic animate-pulse">
                <GraduationCap size={16} />
                Nansa Education Academy
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                FUEL YOUR <span className="text-primary italic text-glow">CAREER</span> GROWTH
              </h1>
              <p className="text-lg md:text-2xl font-medium text-white/60 max-w-2xl leading-relaxed">
                실무 밀착형 커리큘럼으로 당신의 커리어 패스를 업그레이드 하세요. 현직 전문가들이
                직접 전하는 노하우를 만나보세요.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button
                size="lg"
                className="rounded-full h-16 px-10 text-lg shadow-2xl shadow-primary/40 group hover:scale-105 transition-transform bg-primary text-primary-foreground border-none"
              >
                무료 코스 둘러보기{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 text-white/50 text-sm font-bold uppercase tracking-widest">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-foreground bg-surface overflow-hidden relative"
                    >
                      <Image
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                        alt="user"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>12,000+ Students Joined Today</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative z-10 hidden lg:block w-[400px] h-[500px] rounded-[2rem] border-4 border-white/5 overflow-hidden shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
            >
              {/* <source src="/promo.mp4" type="video/mp4" /> */}
            </video>
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">
                  Live: Career Workshop
                </span>
              </div>
              <h4 className="text-white font-bold leading-tight">
                주니어 개발자를 위한 이직 성공 핵심 전략 7가지
              </h4>
              <Button
                size="sm"
                variant="outline"
                className="h-9 rounded-full bg-white/10 border-white/20 text-white text-[11px] font-black uppercase tracking-widest italic flex items-center gap-2"
              >
                <Play size={10} fill="currentColor" /> Watch Now
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Categories Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-center justify-between gap-12"
        >
          <div className="flex items-center gap-6 overflow-x-auto pb-4 no-scrollbar flex-1">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  i === 0
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 ring-4 ring-primary/10"
                    : "bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-80">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="관심 분야를 입력하세요"
                className="pl-12 h-14 bg-surface/50 border-border/40 text-foreground text-sm rounded-2xl focus:ring-primary shadow-sm hover:border-primary/50 transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Content / Courses */}
        <motion.div variants={itemVariants} className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/20 pb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase italic">
                FEATURED <span className="text-primary italic">COURSES</span>
              </h2>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] opacity-60">
                TOP-RATED BY INDUSTRY EXPERTS
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-40">
                  Total Courses
                </p>
                <p className="text-2xl font-black text-foreground italic tracking-tighter">420+</p>
              </div>
              <div className="w-px h-10 bg-border/20" />
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-40">
                  Active Students
                </p>
                <p className="text-2xl font-black text-foreground italic tracking-tighter">1.5M</p>
              </div>
            </div>
          </div>

          <CourseList />
        </motion.div>

        {/* Why Choose Education Section */}
        <motion.div
          variants={itemVariants}
          className="bg-surface/30 rounded-[3rem] p-12 md:p-24 border border-border/20 grid grid-cols-1 lg:grid-cols-2 gap-24 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase italic leading-[0.9]">
                TRUSTED BY <span className="text-primary italic">WORLD-CLASS</span> PROFESSIONALS
              </h2>
              <p className="text-muted-foreground font-medium leading-[1.8] text-lg">
                나우앤사 아카데미는 단순한 지식 전달을 넘어, 여러분이 실무에서 즉시 활용 가능한 전문
                역량을 갖추도록 돕습니다. 최고의 강사진과 함께 여러분의 커리어를 재창조 하세요.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 bg-surface rounded-3xl border border-border/20 group hover:border-primary/40 transition-colors">
                <CheckCircle2 className="text-primary w-8 h-8" />
                <h4 className="font-bold text-xl uppercase tracking-tight italic">
                  실무 중심 커리큘럼
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  현업에서 바로 쓰이는 최신 기술 스택을 기반으로 커리큘럼을 설계하여, 교육 후 바로
                  실전 투입이 가능합니다.
                </p>
              </div>
              <div className="space-y-4 p-6 bg-surface rounded-3xl border border-border/20 group hover:border-primary/40 transition-colors">
                <CheckCircle2 className="text-primary w-8 h-8" />
                <h4 className="font-bold text-xl uppercase tracking-tight italic">
                  전문가 1:1 피드백
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  강의 중 궁금한 점은 언제든 강사진에게 실시간 피드백을 받을 수 있는 밀착 관리
                  시스템을 운영합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto h-full rounded-[2.5rem] overflow-hidden border border-border/10 shadow-3xl shadow-primary/5">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Education"
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            <div className="absolute top-8 right-8 bg-white p-6 rounded-3xl shadow-2xl space-y-2 animate-bounce-slow">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 italic">
                98% Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
