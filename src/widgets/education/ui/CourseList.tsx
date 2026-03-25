import { Clock, PlayCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

const MOCK_COURSES = [
  {
    id: "1",
    title: "Next.js 15 완벽 마스터: 실무 프로젝트로 배우는 App Router",
    instructor: "김민수",
    category: "개발",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 128,
    students: 1540,
    duration: "12시간 30분",
    level: "중급",
  },
  {
    id: "2",
    title: "디자이너를 위한 Framer Motion 기초부터 심화까지",
    instructor: "이혜진",
    category: "디자인",
    thumbnail:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 86,
    students: 920,
    duration: "8시간 45분",
    level: "초급",
  },
  {
    id: "3",
    title: "기술 면접 합격을 위한 CS 기초 핵심 요약 가이드",
    instructor: "박준형",
    category: "커리어",
    thumbnail:
      "https://images.unsplash.com/photo-1454165833767-027ffea70288?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    reviews: 215,
    students: 2300,
    duration: "5시간 20분",
    level: "입문",
  },
];

export function CourseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {MOCK_COURSES.map((course) => (
        <Card
          key={course.id}
          className="group overflow-hidden border-border/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-surface"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
              <PlayCircle className="text-white w-12 h-12" />
            </div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 backdrop-blur-md text-black border-none font-bold">
                {course.category}
              </Badge>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>

            <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-primary/60" />
                <span>{course.instructor} 강사</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-foreground font-bold">{course.rating}</span>
                <span className="opacity-60">({course.reviews})</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground uppercase tracking-wider font-bold">
                  <Clock size={12} />
                  {course.duration}
                </div>
                <Badge
                  variant="outline"
                  className="text-[10px] uppercase font-black tracking-tighter py-0 px-2 h-5"
                >
                  {course.level}
                </Badge>
              </div>
              <span className="text-sm font-black text-primary italic">LEARN MORE →</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
