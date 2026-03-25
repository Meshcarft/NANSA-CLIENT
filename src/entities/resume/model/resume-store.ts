"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Resume } from "./types";

interface ResumeStore {
  resumes: Resume[];
  selectedResumeId: string | null;

  // CRUD Actions
  addResume: (resume: Omit<Resume, "id" | "updatedAt">) => void;
  updateResume: (id: string, resume: Partial<Resume>) => void;
  deleteResume: (id: string) => void;
  selectResume: (id: string | null) => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resumes: [
        {
          id: "default-resume-1",
          title: "Senior Frontend Engineer Resume",
          name: "김지훈",
          email: "zhihun.dev@nansa.com",
          phone: "010-1234-5678",
          bio: "사용자 중심의 가치를 실현하는 5년차 프론트엔드 개발자 김지훈입니다.",
          updatedAt: new Date().toISOString(),
          experiences: [
            {
              id: "exp-1",
              company: "NANSA Inc.",
              role: "Senior Frontend Engineer",
              startDate: "2023-01",
              description: "AI 기반 매칭 플랫폼 프론트엔드 아키텍처 설계 및 구현.",
            },
          ],
          educations: [
            {
              id: "edu-1",
              school: "한국대학교",
              major: "컴퓨터공학과",
              degree: "학사",
              startDate: "2015-03",
              endDate: "2021-02",
            },
          ],
          projects: [
            {
              id: "proj-1",
              title: "Project Alpha",
              description: "실시간 대시보드 솔루션.",
              techStack: ["React", "TypeScript", "Tailwind CSS"],
            },
          ],
          certifications: [],
          awards: [],
          activities: [],
        },
      ],
      selectedResumeId: null,

      addResume: (resume) =>
        set((state) => ({
          resumes: [
            ...state.resumes,
            {
              ...resume,
              id: crypto.randomUUID(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),

      updateResume: (id, updatedResume) =>
        set((state) => ({
          resumes: state.resumes.map((r) =>
            r.id === id ? { ...r, ...updatedResume, updatedAt: new Date().toISOString() } : r,
          ),
        })),

      deleteResume: (id) =>
        set((state) => ({
          resumes: state.resumes.filter((r) => r.id !== id),
          selectedResumeId: state.selectedResumeId === id ? null : state.selectedResumeId,
        })),

      selectResume: (id) => set({ selectedResumeId: id }),
    }),
    {
      name: "resume-storage",
    },
  ),
);
