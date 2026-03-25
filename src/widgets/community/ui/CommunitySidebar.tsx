import { Flame, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";

export function CommunitySidebar() {
  const trendingTags = ["Next.js", "React", "Design", "JobKorea", "Frontend", "Career"];
  const popularPosts = [
    { title: "네카라쿠배 합격 후기 공유", comments: 156 },
    { title: "2024년 주니어 연봉 협상 팁", comments: 84 },
    { title: "테일윈드 CSS vs CSS-in-JS", comments: 92 },
  ];

  return (
    <div className="space-y-6 sticky top-24">
      <Card className="p-6 bg-surface/50 backdrop-blur-md border-border/40 space-y-4">
        <div className="flex items-center space-x-2 text-primary">
          <TrendingUp size={20} />
          <h3 className="font-bold uppercase tracking-tight">실시간 인기 태그</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer py-1 px-3"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-surface/50 backdrop-blur-md border-border/40 space-y-4">
        <div className="flex items-center space-x-2 text-orange-500">
          <Flame size={20} />
          <h3 className="font-bold uppercase tracking-tight">주간 HOT 게시물</h3>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, i) => (
            <div key={post.title} className="group cursor-pointer">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {i + 1}. {post.title}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1 font-medium opacity-60 italic">
                {post.comments}명이 이야기 중
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 space-y-4 relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 text-primary opacity-10 group-hover:scale-110 transition-transform duration-500">
          <Users size={120} />
        </div>
        <div className="relative z-10 space-y-2">
          <h3 className="font-bold text-foreground">커뮤니티 가이드라인</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            나우앤사의 커뮤니티는 서로를 존중하며 성장을 공유하는 공간입니다. 따뜻한 말과 매너를
            지켜주세요.
          </p>
          <button type="button" className="text-xs font-bold text-primary hover:underline">
            자세히 보기 →
          </button>
        </div>
      </Card>
    </div>
  );
}
