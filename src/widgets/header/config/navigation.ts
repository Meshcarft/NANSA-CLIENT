import {
  Briefcase,
  Calendar,
  FileText,
  FolderOpen,
  GraduationCap,
  Layers,
  MessageSquareText,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";

export const HEADER_NAV_ITEMS = [
  {
    label: "채용공고",
    href: "/",
    icon: Briefcase,
    type: "primary",
  },
  {
    label: "스케줄",
    href: "/schedule",
    icon: Calendar,
    type: "primary",
  },
  {
    label: "포트폴리오",
    href: "/portfolio",
    icon: FolderOpen,
    type: "primary",
  },
  {
    label: "이력서",
    href: "/resume",
    icon: FileText,
    type: "primary",
  },
  {
    label: "교육",
    href: "/education",
    icon: GraduationCap,
    type: "primary",
  },
  {
    label: "이벤트",
    href: "/events",
    icon: Calendar,
    type: "primary",
  },
  {
    label: "팀 프로젝트",
    href: "/team-project",
    icon: Rocket,
    type: "primary",
  },
  {
    label: "트렌드",
    href: "/trends",
    icon: TrendingUp,
    type: "primary",
  },
  {
    label: "SSAM",
    href: "/ssam",
    icon: Layers,
    type: "primary",
  },
  {
    label: "커리어 상담",
    href: "/consult",
    icon: MessageSquareText,
    type: "primary",
  },
  {
    label: "커뮤니티",
    href: "/community",
    icon: Users,
    type: "secondary",
  },
];
