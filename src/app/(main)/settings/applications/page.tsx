import { Briefcase, Building2, Calendar, ChevronRight, Clock } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const APPLICATIONS = [
  {
    id: 1,
    company: "Google Korea",
    role: "Senior Frontend Engineer",
    status: "Interview",
    date: "2024.03.20",
    description: "2차 기술 면접 전형 진행 중",
    color: "bg-blue-500",
  },
  {
    id: 2,
    company: "Toss",
    role: "Core Web Developer",
    status: "Review",
    date: "2024.03.18",
    description: "서류 검토 중",
    color: "bg-orange-500",
  },
  {
    id: 3,
    company: "Line Plus",
    role: "React Specialist",
    status: "Accepted",
    date: "2024.03.10",
    description: "최종 합격 - 처우 협의 중",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    company: "Kakao Business",
    role: "Frontend Team Lead",
    status: "Rejected",
    date: "2024.03.05",
    description: "전형 종료",
    color: "bg-rose-500",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-3xl font-bold tracking-tight">
          Application <span className="text-primary">Status</span>
        </h2>

        <p className="text-sm text-muted-foreground font-medium mt-3 opacity-60">
          지원하신 공고의 진행 상태를 실시간으로 확인하고 관리합니다.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { id: "total", label: "전체 지원", value: "12" },
          { id: "ongoing", label: "진행 중", value: "5", active: true },
          { id: "hired", label: "최종 합격", value: "1", color: "text-emerald-500" },
          { id: "failed", label: "불합격", value: "3", opacity: "opacity-40" },
        ].map((stat) => (
          <div
            key={stat.id}
            className="p-6 rounded-[2rem] bg-foreground/5 border border-border/10 flex flex-col justify-between h-32"
          >
            <span className="text-xs font-semibold text-muted-foreground">{stat.label}</span>
            <span
              className={`text-4xl font-bold tracking-tight ${stat.color || "text-foreground"} ${stat.opacity || ""}`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Application List */}
      <div className="space-y-4">
        {APPLICATIONS.map((app) => (
          <Card
            key={app.id}
            className="group relative overflow-hidden bg-surface/50 border-border/10 hover:border-primary/40 transition-all rounded-[2.5rem] p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <Building2 className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{app.company}</h3>
                  <Badge
                    variant="outline"
                    className={`rounded-full px-4 border-none text-white font-bold text-[10px] ${app.color}`}
                  >
                    {app.status}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Briefcase size={14} className="text-primary" /> {app.role}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {app.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} /> {app.description}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 group-hover:bg-primary group-hover:text-white transition-all self-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Hover Accent Line */}
            <div
              className={`absolute top-0 left-0 bottom-0 w-1 ${app.color} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
