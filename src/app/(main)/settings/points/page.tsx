import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Coins,
  Gift,
  History,
  Sparkles,
  Trophy,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const POINT_HISTORY = [
  { id: 1, action: "이력서 업데이트 완료", points: +500, date: "2024.03.24", type: "earn" },
  { id: 2, action: "AI 가상 면접 1회 완료", points: +1200, date: "2024.03.22", type: "earn" },
  {
    id: 3,
    action: "스타벅스 아이스 아메리카노 교환",
    points: -4500,
    date: "2024.03.15",
    type: "spend",
  },
  { id: 4, action: "출석 체크 보너스", points: +100, date: "2024.03.14", type: "earn" },
];

export default function CareerPointsPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-2xl font-bold tracking-tight">커리어 포인트</h2>
        <p className="text-sm text-muted-foreground mt-2 font-medium opacity-60">
          커리어 성장을 위한 활동을 하고 포인트를 쌓으세요. 다양한 혜택으로 교환할 수 있습니다.
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/60 text-white border-none shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Trophy size={160} />
          </div>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-white/80">
              <Coins size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Available Points</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-5xl font-bold tracking-tighter">
                8,450 <span className="text-xl opacity-60">P</span>
              </h3>
              <p className="text-sm font-medium text-white/60">이번 달 총 1,800P 획득</p>
            </div>
            <button
              type="button"
              className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-sm shadow-xl hover:scale-[1.03] active:scale-95 transition-all"
            >
              포인트 상점 가기
            </button>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          {[
            { label: "전체 랭킹", value: "TOP 5%", icon: BarChart3, color: "bg-blue-500" },
            { label: "누적 획득", value: "45,200 P", icon: Gift, color: "bg-emerald-500" },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="p-6 rounded-3xl bg-surface/50 border-border/10 flex items-center justify-between group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${stat.color} bg-opacity-10 flex items-center justify-center text-primary`}
                >
                  <stat.icon size={20} className={stat.color.replace("bg-", "text-")} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold tracking-tight">{stat.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground/20 group-hover:text-primary transition-colors"
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Point Missions */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Sparkles size={18} className="text-primary" /> 포인트 적립 미션
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { task: "AI 면접 연습", reward: "1,200 P", status: "Ongoing" },
            { task: "프로필 완성도 100%", reward: "2,000 P", status: "Done" },
            { task: "첫 제안 수락", reward: "3,000 P", status: "Ongoing" },
          ].map((mission) => (
            <Card
              key={mission.task}
              className="p-6 rounded-3xl bg-surface/50 border-border/10 space-y-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-bold">{mission.task}</p>
                <p className="text-xl font-bold text-primary">{mission.reward}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Badge
                  variant={mission.status === "Done" ? "success" : "outline"}
                  className="rounded-full px-3 py-1 font-bold text-[10px] border-none"
                >
                  {mission.status === "Done" ? (
                    <CheckCircle2 size={12} className="inline mr-1" />
                  ) : (
                    ""
                  )}{" "}
                  {mission.status}
                </Badge>
                <button
                  type="button"
                  className="text-[10px] font-bold text-muted-foreground underline underline-offset-4"
                >
                  상세보기
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent History */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <History size={18} className="text-muted-foreground" /> 최근 내역
        </h3>
        <Card className="rounded-3xl border-border/10 overflow-hidden bg-surface/30">
          <div className="divide-y divide-border/10">
            {POINT_HISTORY.map((log) => (
              <div
                key={log.id}
                className="p-6 flex items-center justify-between hover:bg-foreground/5 transition-colors group"
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold">{log.action}</p>
                  <p className="text-xs text-muted-foreground">{log.date}</p>
                </div>
                <div
                  className={cn(
                    "text-lg font-bold tracking-tight",
                    log.type === "earn" ? "text-emerald-500" : "text-rose-500",
                  )}
                >
                  {log.type === "earn" ? "+" : ""}
                  {log.points.toLocaleString()} <span className="text-xs opacity-60">P</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
