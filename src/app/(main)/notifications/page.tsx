import { Calendar, CheckCircle2, Mail, MessageSquare, Sparkles, Trophy } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "offer",
    icon: Mail,
    title: "Meta Korea에서 새로운 제안이 도착했습니다.",
    content: "Senior Software Engineer 포지션에 대한 프리미엄 제안을 확인해보세요.",
    time: "10분 전",
    isNew: true,
  },
  {
    id: 2,
    type: "message",
    icon: MessageSquare,
    title: "Kim Min-ji 매니저님이 메시지를 보냈습니다.",
    content: "커피챗 일정을 확인해주실 수 있을까요? 화요일 오전 10시 어떠신가요?",
    time: "1시간 전",
    isNew: true,
  },
  {
    id: 3,
    type: "status",
    icon: CheckCircle2,
    title: "Google Korea 지원 결과가 발표되었습니다.",
    content: "서류 전형에 합격하셨습니다! 다음 전형인 코딩 테스트 일정을 확인하세요.",
    time: "어제",
    isNew: false,
    color: "text-emerald-500",
  },
  {
    id: 4,
    type: "points",
    icon: Trophy,
    title: "커리어 포인트 500P가 적립되었습니다.",
    content: "이력서 업데이트 미션을 완료하셨습니다. 누적 포인트를 확인해보세요.",
    time: "2일 전",
    isNew: false,
    color: "text-amber-500",
  },
  {
    id: 5,
    type: "trend",
    icon: Sparkles,
    title: "이번 주 핫한 기술 트렌드가 업데이트되었습니다.",
    content: "Next.js 19와 AI 통합 개발 가이드가 업로드되었습니다. 지금 바로 확인하세요.",
    time: "3일 전",
    isNew: false,
    color: "text-primary",
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 font-sans space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="pb-8 border-b border-border/20 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">알림 센터</h2>
          <p className="text-sm text-muted-foreground font-medium opacity-60">
            커리어 활동과 관련된 중요한 소식들을 실시간으로 알려드립니다.
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-bold text-primary hover:underline underline-offset-4"
        >
          모든 알림 읽음 처리
        </button>
      </div>

      <div className="space-y-4">
        {NOTIFICATIONS.map((notif) => (
          <Card
            key={notif.id}
            className={cn(
              "relative group p-6 rounded-3xl bg-surface/50 border-border/10 hover:border-primary/40 transition-all flex items-start gap-5",
              notif.isNew && "border-l-4 border-l-primary bg-primary/[0.02]",
            )}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0 shadow-sm",
                notif.color || "text-muted-foreground",
              )}
            >
              <notif.icon size={22} />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold text-foreground pr-8 leading-snug">
                  {notif.title}
                </h3>
                {notif.isNew && (
                  <Badge className="rounded-full bg-primary text-white text-[9px] font-bold px-2 py-0.5 border-none shrink-0">
                    NEW
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground/80 font-medium leading-relaxed">
                {notif.content}
              </p>
              <span className="text-xs text-muted-foreground/40 font-bold block pt-1">
                {notif.time}
              </span>
            </div>

            <button
              type="button"
              className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 transition-opacity"
            >
              <CheckCircle2 size={16} />
            </button>
          </Card>
        ))}
      </div>

      <div className="pt-10 flex flex-col items-center gap-4">
        <p className="text-xs text-muted-foreground font-medium opacity-40">이전 알림 더보기</p>
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
        >
          <Calendar size={18} className="text-muted-foreground/60" />
        </button>
      </div>
    </div>
  );
}
