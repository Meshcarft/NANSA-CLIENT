"use client";

import { ArrowLeft, FileWarning } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useResumeStore } from "@/entities/resume/model/resume-store";
import type { Resume } from "@/entities/resume/model/types";
import { Button } from "@/shared/ui/button";
import { ResumeEditor } from "@/widgets/resume/ui/ResumeEditor";

export default function ResumeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { resumes, updateResume } = useResumeStore();

  const [currentResume, setCurrentResume] = useState<Resume | null>(null);

  useEffect(() => {
    const resume = resumes.find((r) => r.id === params.id);
    if (resume) {
      setCurrentResume({ ...resume });
    }
  }, [params.id, resumes]);

  const handleSave = () => {
    if (params.id && currentResume) {
      updateResume(params.id as string, currentResume);
      // Optional: Show a toast or feedback
      router.push("/resume");
    }
  };

  if (!currentResume) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-6 animate-agent-reveal">
        <div className="p-6 rounded-[2.5rem] bg-foreground/5 text-muted-foreground animate-bounce">
          <FileWarning className="w-12 h-12" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">
            이력서를 찾을 수 없습니다
          </h2>
          <p className="text-muted-foreground font-medium italic opacity-60">
            삭제되었거나 존재하지 않는 이력서입니다.
          </p>
        </div>
        <Link href="/resume">
          <Button variant="outline" className="rounded-xl h-12 px-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> 목록으로 돌아가기
          </Button>
        </Link>
      </div>
    );
  }

  return <ResumeEditor resume={currentResume} onChange={setCurrentResume} onSave={handleSave} />;
}
