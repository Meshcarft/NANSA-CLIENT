import { ArrowRight, Calendar as CalendarIcon, MapPin, Video } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

const MOCK_EVENTS = [
  {
    id: "1",
    title: "NANSA Dev Conference 2024: The Future of AI in Development",
    date: "2024.04.15",
    time: "13:00 - 18:00",
    location: "서울 강남구 테헤란로 123, 나우앤사 루프탑",
    type: "Offline",
    category: "컨퍼런스",
    status: "Recruiting",
    attendees: 120,
    limit: 200,
    price: "무료",
  },
  {
    id: "2",
    title: "주니어 디자이너를 위한 포트폴리오 리뷰 세션 (Webinar)",
    date: "2024.04.20",
    time: "19:00 - 21:00",
    location: "Online (Zoom)",
    type: "Online",
    category: "웨비나",
    status: "Recruiting",
    attendees: 45,
    limit: 100,
    price: "무료",
  },
  {
    id: "3",
    title: "기술 면접 스터디 3기: 알고리즘 집중 공략",
    date: "2024.04.25",
    time: "10:00 - 12:00",
    location: "강남 코워킹 스페이스",
    type: "Offline",
    category: "스터디 모임",
    status: "Recruiting",
    attendees: 12,
    limit: 15,
    price: "10,000원",
  },
];

export function EventList() {
  return (
    <div className="space-y-8">
      {MOCK_EVENTS.map((event) => (
        <Card
          key={event.id}
          className="group overflow-hidden border-border/40 hover:border-primary/40 transition-all duration-500 bg-surface/50 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row h-full">
            {/* Date Box */}
            <div className="w-full md:w-48 bg-foreground flex flex-col items-center justify-center p-8 space-y-1">
              <span className="text-primary text-xs font-black uppercase tracking-[0.3em] opacity-80 italic animate-pulse">
                April
              </span>
              <span className="text-white text-5xl font-black italic tracking-tighter leading-none">
                {event.date.split(".")[2]}
              </span>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {event.date.split(".").slice(0, 2).join(".")}
              </span>
            </div>

            {/* Info Box */}
            <div className="flex-1 p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant={event.type === "Online" ? "secondary" : "default"}
                  className="text-[10px] uppercase font-black tracking-widest py-0 px-2 flex items-center gap-1.5 h-6"
                >
                  {event.type === "Online" ? <Video size={10} /> : <MapPin size={10} />}
                  {event.type}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-[10px] uppercase font-black tracking-widest py-0 px-2 h-6 border-border/50 text-muted-foreground"
                >
                  {event.category}
                </Badge>
                <div className="flex items-center gap-1.5 ml-auto text-xs font-bold text-success">
                  <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                  RECRUITING NOW
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter uppercase italic leading-tight group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={16} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-surface bg-surface shadow-sm overflow-hidden relative"
                      >
                        <Image
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + event.id}`}
                          alt="user"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    <span className="text-foreground font-black">{event.attendees}</span>
                    <span className="mx-1">/</span>
                    <span className="opacity-60">{event.limit} 명 신청중</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-40 italic">
                      Participation
                    </p>
                    <p className="text-xl font-black text-foreground italic tracking-tighter">
                      {event.price}
                    </p>
                  </div>
                  <Button
                    type="button"
                    className="h-14 px-8 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform group shrink-0 bg-primary text-primary-foreground border-none"
                  >
                    지금 신청하기{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
