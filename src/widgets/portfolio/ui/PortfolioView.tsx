import {
  Calendar,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const PROJECTS = [
  {
    title: "Project Alpha: AI 인사이트 플랫폼",
    description:
      "데이터 분석을 통한 비즈니스 인사이트 제공 SaaS 솔루션입니다. 실시간 스트리밍 데이터를 바탕으로 대시보드를 생성합니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    image:
      "https://images.unsplash.com/photo-1551288049-bbda4833effb?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Project Beta: 고성능 E-commerce",
    description:
      "초당 수만 건의 요청을 처리할 수 있는 대규모 커머스 플랫폼의 프론트엔드 아키텍처를 설계했습니다.",
    tech: ["React", "Recoil", "React Query", "Styled Components"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Project Gamma: 실시간 협업 도구",
    description: "WebSocket을 활용한 실시간 동시 편집 기능을 지원하는 디자인 협업 툴입니다.",
    tech: ["Vue.js", "Socket.io", "Canvas API"],
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const SKILLS = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Layout,
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "NestJS", "PostgreSQL", "Redis"],
    icon: Cpu,
    color: "text-emerald-500",
    gradientFrom: "from-emerald-500",
  },
  {
    name: "Design",
    items: ["Figma", "Adobe XD", "UI/UX Design"],
    icon: Palette,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
  },
  {
    name: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Terraform"],
    icon: Code2,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
  },
];

const EXPERIENCES = [
  {
    role: "Senior Frontend Engineer",
    company: "NANSA Inc.",
    period: "2023.01 - Present",
    description:
      "인공지능 기반의 커리어 플랫폼 프론트엔드 총괄. 마이크로 프론트엔드 아키텍처 도입 및 성능 최적화(Lighthouse score 95+ 달성). 대규모 트래픽 처리를 위한 가상화 리스트 및 상태 관리 최적화 주도.",
  },
  {
    role: "Full Stack Developer",
    company: "Tech Startups",
    period: "2021.03 - 2022.12",
    description:
      "다수의 MVP 개발 및 상용화 성공. 클라우드 인프라 구축 및 API 설계 담당. 초기 비즈니스 로직 설계부터 배포 자동화까지 풀스택 업무 수행.",
  },
];

const CONTACT_LINKS = [
  { icon: MapPin, text: "Seoul, Korea", id: "location" },
  { icon: Mail, text: "zhihun.dev@nansa.com", id: "email" },
  { icon: Github, text: "github.com/zhihun", id: "github" },
  { icon: Linkedin, text: "linkedin.com/in/zhihun", id: "linkedin" },
];

export function PortfolioView() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8 space-y-24 animate-agent-reveal">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-success rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/20 bg-surface">
            <Image
              src="/images/profile.png"
              alt="Profile Photo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="space-y-4">
            <Badge variant="success" className="px-4 py-1 text-sm rounded-full mb-2">
              Available for new opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none italic">
              김지훈 <span className="text-primary not-italic">(ZHIHUN)</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Building{" "}
              <span className="text-foreground border-b-4 border-primary/30">
                Seamless Digital Experiences
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            안녕하세요! 복잡한 문제를 심플하고 우아한 코드로 풀어내는 것을 좋아하는{" "}
            <span className="text-foreground font-bold">5년차 프론트엔드 개발자</span>입니다.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-2 border-y border-border/10">
            {CONTACT_LINKS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                <item.icon className="w-4 h-4" />
                {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 h-14 pt-4">
            <button
              type="button"
              className="h-full px-12 rounded-2xl bg-primary text-white font-black text-sm tracking-widest uppercase hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-primary/20"
            >
              Hire Me Now
            </button>
            <button
              type="button"
              className="h-full px-12 rounded-2xl bg-foreground/5 hover:bg-foreground/10 font-black text-xs tracking-widest uppercase transition-all border border-border/20"
            >
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Experience & Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase">
              Work Experience
            </h2>
            <div className="h-1 flex-1 mx-8 bg-gradient-to-r from-primary/50 to-transparent rounded-full opacity-20" />
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className="group relative pl-12 space-y-4">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-primary bg-background z-10 group-hover:scale-125 transition-transform" />
                <div className="absolute left-3 top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary to-transparent opacity-20 group-last:from-transparent" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-foreground">{exp.role}</h3>
                    <p className="text-primary text-lg font-bold">{exp.company}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit h-8 px-4 text-xs font-black tracking-widest uppercase"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-2" /> {exp.period}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-black italic tracking-tighter uppercase text-right">
            Expertise
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {SKILLS.map((skill) => (
              <Card
                key={skill.name}
                className="glass border-border/10 overflow-hidden group hover:border-primary/30 transition-all"
              >
                <div
                  className={cn("h-1 w-full bg-gradient-to-r to-transparent", skill.gradientFrom)}
                />
                <CardHeader className="p-5 flex flex-row items-center gap-4">
                  <div className={cn("p-2 rounded-xl bg-foreground/5", skill.color)}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="m-0 text-xl font-black italic text-foreground">
                    {skill.name.toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="bg-foreground/5 border-none text-[11px] font-bold py-1 px-3"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section className="space-y-12 pb-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
            Selected{" "}
            <span className="text-primary not-italic underline decoration-8 decoration-primary/20 underline-offset-8">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl">
            가장 자부심을 가지고 있는 주요 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden glass border-border/10 hover:border-primary/50 transition-all duration-500 flex flex-col h-full rounded-[2rem]"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-40 z-10",
                    project.color,
                  )}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button
                    type="button"
                    className="w-full h-12 rounded-xl bg-white text-black font-black text-xs tracking-widest uppercase shadow-2xl flex items-center justify-center gap-2"
                  >
                    Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <CardTitle className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardContent className="p-0 text-muted-foreground text-base leading-relaxed flex-1">
                  {project.description}
                </CardContent>
                <div className="flex flex-wrap gap-3 pt-6 border-t border-border/10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-black tracking-widest uppercase text-muted-foreground/60"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center space-y-10 bg-foreground text-background">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/20 blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none">
            READY TO BUILD THE <span className="text-primary">FUTURE</span> TOGETHER?
          </h2>
          <p className="text-background/60 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            "뛰어난 사용자 경험은 우연이 아닙니다."
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
          <button
            type="button"
            className="h-16 px-12 rounded-2xl bg-primary text-white font-black text-sm tracking-widest uppercase hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-primary/40"
          >
            Send Message <Mail className="w-5 h-5 ml-3 inline" />
          </button>
          <button
            type="button"
            className="h-16 px-12 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-sm tracking-widest uppercase transition-all backdrop-blur-md border border-white/10"
          >
            View LinkedIn
          </button>
        </div>
      </section>
    </div>
  );
}
