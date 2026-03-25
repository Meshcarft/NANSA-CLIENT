import { Bookmark, Building2, Calendar, MapPin, Search } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";

const BOOKMARKS = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Airbnb Korea",
    location: "서울 강남구 (재택 병행)",
    deadline: "D-5",
    tags: ["UX/UI", "Figma", "Design System"],
  },
  {
    id: 2,
    title: "Core Infrastructure Engineer",
    company: "Coupang",
    location: "서울 송파구",
    deadline: "상시채용",
    tags: ["Go", "Kubernetes", "AWS"],
  },
  {
    id: 3,
    title: "Frontend Developer (React)",
    company: "Woowa Brothers",
    location: "서울 송파구",
    deadline: "D-12",
    tags: ["React", "TypeScript", "Next.js"],
  },
];

export default function BookmarksPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-2xl font-bold tracking-tight">스크랩 공고</h2>
        <p className="text-sm text-muted-foreground mt-2 font-medium opacity-60">
          관심 있는 공고를 저장하고 마감 기한을 놓치지 마세요.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="스크랩한 공고 검색..."
          className="pl-11 h-12 rounded-2xl bg-foreground/5 border-none font-medium"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {BOOKMARKS.map((job) => (
          <Card
            key={job.id}
            className="group p-6 rounded-[2rem] bg-surface/50 border-border/10 hover:border-primary/40 transition-all flex items-start gap-6 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7 text-muted-foreground" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5">
                    {job.company}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 border-primary/20 text-primary font-bold"
                >
                  {job.deadline}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground/60">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 저장일: 2024.03.20
                </span>
              </div>

              <div className="flex gap-2 pt-1">
                {job.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-foreground/5 text-muted-foreground hover:bg-foreground/10 border-none rounded-lg text-[10px] font-bold"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <button type="button" className="absolute top-6 right-6 text-primary">
              <Bookmark className="w-5 h-5 fill-current" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
