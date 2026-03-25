import { Bot, Building2, Globe, Heart, MessageSquare, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const COMPANIES = [
  {
    id: 1,
    name: "Toss",
    description: "대한민국 대표 핀테크 서비스",
    employees: "2,500+",
    openPositions: 15,
    logo: "bg-blue-600",
    insight: "최근 3개월간 이직자의 만족도가 4.8/5.0으로 매우 높습니다.",
    salary: "상위 1% (업계 최고 수준)",
  },
  {
    id: 2,
    name: "Line",
    description: "글로벌 메신저 & 플랫폼 기업",
    employees: "5,000+",
    openPositions: 22,
    logo: "bg-emerald-600",
    insight: "복지 혜택 및 유연 근무제 만족도가 전반적으로 높습니다.",
    salary: "시니어급 우대 정책 활발",
  },
  {
    id: 3,
    name: "Karrot",
    description: "지역 기반 중고거래 & 커뮤니티 플랫폼",
    employees: "600+",
    openPositions: 8,
    logo: "bg-orange-500",
    insight: "동료들 간의 협업 문화가 매우 수평적인 것으로 분석됩니다.",
    salary: "성장 잠재력 기반 인센티브 강화",
  },
];

export default function InterestedCompaniesPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-2xl font-bold tracking-tight">관심 기업</h2>
        <p className="text-sm text-muted-foreground mt-2 font-medium opacity-60">
          팔로우한 기업의 새 소식과 AI 분석 리포트를 확인하세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {COMPANIES.map((company) => (
          <Card
            key={company.id}
            className="group p-8 rounded-[2.5rem] bg-surface/50 border-border/10 hover:border-primary/40 transition-all space-y-6 relative overflow-hidden"
          >
            <div
              className={`w-16 h-16 rounded-3xl ${company.logo} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform`}
            >
              <Building2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{company.name}</h3>
                <button type="button" className="text-rose-500">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
              <p className="text-sm font-medium text-muted-foreground/80 leading-relaxed">
                {company.description}
              </p>
            </div>

            {/* AI Insight Card */}
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2 text-primary">
                <Bot size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Nansa AI Insight
                </span>
              </div>
              <p className="text-xs font-semibold leading-relaxed text-foreground/80">
                "{company.insight}"
              </p>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground">
                  <TrendingUp size={12} /> 연봉 수준: {company.salary}
                </div>
                <Badge
                  variant="outline"
                  className="text-[8px] font-bold border-primary/20 text-primary uppercase"
                >
                  Reliable Info
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 p-4 rounded-2xl bg-foreground/5 items-center justify-center">
                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/40">
                  EMPLOYEES
                </span>
                <span className="text-sm font-bold flex items-center gap-2 mt-1">
                  <Users size={14} className="text-primary/60" /> {company.employees}
                </span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-2xl bg-foreground/5 items-center justify-center">
                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/40">
                  OPEN JOBS
                </span>
                <span className="text-sm font-bold flex items-center gap-2 mt-1">
                  <Globe size={14} className="text-primary/60" /> {company.openPositions}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-4 rounded-2xl bg-foreground/10 text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} /> 기업 상세 리포트 보기
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
