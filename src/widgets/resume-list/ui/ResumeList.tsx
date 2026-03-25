"use client";

import { Clock, Edit3, FileText, Plus, Sparkles, Trash2 } from "lucide-react";
import Link from "next/link";
import { useResumeStore } from "@/entities/resume/model/resume-store";
import type { Resume } from "@/entities/resume/model/types";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";

export function ResumeList() {
  const { resumes, addResume, deleteResume } = useResumeStore();

  const handleCreate = () => {
    const newResume: Omit<Resume, "id" | "updatedAt"> = {
      title: "새 이력서",
      name: "",
      email: "",
      phone: "",
      bio: "",
      experiences: [],
      educations: [],
      projects: [],
      certifications: [],
      awards: [],
      activities: [],
    };
    addResume(newResume);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6 sm:px-8 space-y-12 animate-agent-reveal min-h-[80vh]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border/40">
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/5 text-primary rounded-lg px-3 py-1 font-semibold text-xs transition-all hover:bg-primary/10"
          >
            Resume Builder
          </Badge>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
              나의 이력서 관리
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-xl">
              당신의 커리어를 가장 잘 표현할 수 있는 이력서를 작성하고 관리하세요.
            </p>
          </div>
        </div>
        <Button
          type="button"
          onClick={handleCreate}
          className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5 mr-2.5" /> 새 이력서 작성하기
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumes.map((resume) => (
          <Card
            key={resume.id}
            className="group relative flex flex-col h-full bg-background border-border/40 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <Link
              href={`/resume/${resume.id}`}
              className="absolute inset-0 z-10"
              aria-label={`Edit ${resume.title}`}
            />

            <div className="h-1.5 w-full bg-foreground/5 group-hover:bg-primary/20 transition-colors" />

            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center transition-transform group-hover:scale-110">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-foreground/5 px-2 py-1 rounded-md">
                  <Clock className="w-3 h-3" />
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  {resume.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-[2.5rem]">
                  {resume.bio || "자기소개를 작성하고 채용 담당자에게 좋은 첫인상을 남겨보세요."}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between gap-4 relative z-20">
                <div className="flex -space-x-2">
                  {resume.experiences.length > 0 && (
                    <Badge
                      variant="outline"
                      className="bg-background text-[10px] h-6 px-1.5 border-border/60"
                    >
                      XP {resume.experiences.length}
                    </Badge>
                  )}
                  {resume.projects.length > 0 && (
                    <Badge
                      variant="outline"
                      className="bg-background text-[10px] h-6 px-1.5 border-border/60 ml-2"
                    >
                      PROJ {resume.projects.length}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => deleteResume(resume.id)}
                    className="p-2.5 rounded-lg text-muted-foreground hover:text-danger hover:bg-danger/5 transition-all"
                    title="이력서 삭제"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <Link href={`/resume/${resume.id}`}>
                    <div className="p-2.5 rounded-lg text-primary hover:bg-primary/5 transition-all">
                      <Edit3 className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {resumes.length === 0 && (
          <div className="col-span-full py-24 text-center space-y-8 bg-foreground/[0.01] border-2 border-dashed border-border/40 rounded-3xl min-h-[400px] flex flex-col items-center justify-center group hover:bg-foreground/[0.02] transition-all">
            <div className="w-24 h-24 rounded-full bg-primary/5 text-primary/40 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-12 h-12" />
            </div>
            <div className="max-w-md mx-auto space-y-3 px-6">
              <h3 className="text-2xl font-bold text-foreground">작성된 이력서가 없습니다</h3>
              <p className="text-muted-foreground font-medium leading-relaxed italic opacity-80">
                첫 번째 이력서를 작성하고 꿈꾸던 직업에 한 걸음 더 다가가 보세요.
              </p>
            </div>
            <Button
              onClick={handleCreate}
              className="h-14 px-10 rounded-xl bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20 w-auto"
            >
              <Plus className="w-5 h-5 mr-3" /> 첫 이력서 만들기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
