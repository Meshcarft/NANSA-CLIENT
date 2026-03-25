import type { Mentor } from "./types";

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "mentor-1",
    name: "AI 커리어 쌤",
    role: "24/7 AI Career Coach",
    company: "NANSA AI Labs",
    rating: 5.0,
    reviews: 1240,
    skills: ["자소서 첨삭", "면접 코칭", "기술 면접 준비"],
    imageUrl:
      "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2070&auto=format&fit=crop",
    isAI: true,
  },
  {
    id: "mentor-2",
    name: "박지성 멘토",
    role: "Senior Engineering Manager",
    company: "Toss Payments",
    rating: 4.9,
    reviews: 85,
    skills: ["커리어 로드맵", "대기업 이직", "리더십"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "mentor-3",
    name: "이유리 멘토",
    role: "Product Design Lead",
    company: "Carrot Market (당근)",
    rating: 4.8,
    reviews: 62,
    skills: ["포트폴리오 리뷰", "UX 리서치", "스타트업 취업"],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "mentor-4",
    name: "최준혁 멘토",
    role: "Senior Backend Developer",
    company: "KakaoBank",
    rating: 4.9,
    reviews: 43,
    skills: ["Java/Spring", "시스템 설계", "알고리즘"],
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];
