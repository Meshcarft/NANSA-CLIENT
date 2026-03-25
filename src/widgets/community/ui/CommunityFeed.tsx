import { Plus } from "lucide-react";
import { PostCard } from "@/entities/post/ui/PostCard";
import { Button } from "@/shared/ui/button";

const MOCK_POSTS = [
  {
    id: "1",
    author: {
      name: "김민수",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Minsu",
      role: "Junior Frontend Developer",
    },
    category: "Q&A",
    title: "Next.js 15 App Router에서 병렬 라우팅 질문입니다.",
    content:
      "이번 프로젝트에서 대시보드를 구현하면서 병렬 라우팅을 사용하고 있는데, 특정 모달 상태에서 새로고침을 하면 404가 뜨는 이슈가 있네요. 혹시 비슷한 경험 해보신 분 계신가요?",
    likes: 24,
    comments: 12,
    views: 156,
    createdAt: "2시간 전",
    tags: ["nextjs", "approuter", "frontend"],
  },
  {
    id: "2",
    author: {
      name: "이혜진",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hyejin",
      role: "UI/UX Designer",
    },
    category: "INSIGHT",
    title: "2024년 상반기 디자인 트렌드: Glassmorphism은 끝났을까요?",
    content:
      "최근 해외 아티클들을 보니 글래스모피즘 대신 좀 더 정제된 벤토 그리드(Bento Grid) 스타일이 대세가 되어가고 있는 것 같습니다. 여러분은 어떻게 생각하시나요?",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    likes: 42,
    comments: 8,
    views: 312,
    createdAt: "5시간 전",
    tags: ["design", "trend", "uidesign"],
  },
  {
    id: "3",
    author: {
      name: "박준형",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Junhyung",
      role: "Senior Backend Developer",
    },
    category: "CAREER",
    title: "이직 준비하며 느낀 기술 면접의 중요성",
    content:
      "최근 네카라쿠배 중 한 곳으로 이직을 성공하며 느낀 점들을 정리해봤습니다. 알고리즘도 중요하지만, CS 기초와 본인이 사용한 기술의 내부 원리를 파악하는 게 정말 중요하더라고요.",
    likes: 89,
    comments: 34,
    views: 1205,
    createdAt: "어제",
    tags: ["career", "interview", "backend"],
  },
];

export function CommunityFeed() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">
            COMMUNITY <span className="text-primary italic">FEED</span>
          </h2>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest opacity-60">
            Join the conversation with other professionals
          </p>
        </div>
        <Button className="rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          <Plus className="mr-2 h-4 w-4" /> 커뮤니티 글쓰기
        </Button>
      </div>

      <div className="grid gap-6">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="py-12 flex justify-center">
        <Button variant="outline" className="rounded-full px-8">
          더 보기
        </Button>
      </div>
    </div>
  );
}
