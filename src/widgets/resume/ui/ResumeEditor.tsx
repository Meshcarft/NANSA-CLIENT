"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeft,
  Award,
  Briefcase,
  ChevronRight,
  Code2,
  Edit,
  Eye,
  FileCheck,
  FileDown,
  GraduationCap,
  Mail,
  Phone,
  Plus,
  Save,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import type {
  Activity as ActivityType,
  Award as AwardType,
  Certification,
  Education,
  Experience,
  Project,
  Resume,
} from "@/entities/resume/model/types";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";

interface ResumeEditorProps {
  resume: Resume;
  onChange: (resume: Resume) => void;
  onSave: () => void;
}

type SectionType = "basic" | "exp" | "edu" | "proj" | "cert" | "award" | "activity";

// Sub-components defined first to avoid any hoisting ambiguity in TSX
interface ResumePreviewProps {
  resume: Resume;
  onEdit: () => void;
}

function ResumePreview({ resume, onEdit }: ResumePreviewProps) {
  return (
    <div className="bg-white text-slate-900 min-h-[1120px] p-[60px] md:p-[80px] shadow-2xl mx-auto w-full max-w-[900px] font-sans border border-border/20 print:shadow-none print:border-none print:p-0 transition-all duration-500">
      {/* Header section with refined typography */}
      <header className="flex flex-col items-center text-center space-y-8 mb-16 pb-16 border-b-2 border-slate-100">
        <h1 className="text-6xl font-black tracking-tight text-slate-900 mb-2 uppercase italic">
          {resume.name || "이름을 입력해 주세요"}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
          {resume.email && (
            <div className="flex items-center gap-2.5 group">
              <Mail className="w-4.5 h-4.5 text-primary group-hover:scale-110 transition-transform" />
              <span className="border-b border-transparent group-hover:border-slate-300 transition-all cursor-default">
                {resume.email}
              </span>
            </div>
          )}
          {resume.phone && (
            <div className="flex items-center gap-2.5 group">
              <Phone className="w-4.5 h-4.5 text-primary group-hover:scale-110 transition-transform" />
              <span className="border-b border-transparent group-hover:border-slate-300 transition-all cursor-default">
                {resume.phone}
              </span>
            </div>
          )}
        </div>

        {resume.bio && (
          <div className="relative max-w-3xl">
            <div className="absolute -left-6 -top-4 text-primary opacity-20 text-4xl font-serif">
              "
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium italic px-4">
              {resume.bio}
            </p>
            <div className="absolute -right-6 -bottom-4 text-primary opacity-20 text-4xl font-serif">
              "
            </div>
          </div>
        )}
      </header>

      <main className="space-y-16">
        {/* Experience Section */}
        {resume.experiences.length > 0 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4">
              <div className="bg-primary/5 p-3 rounded-2xl">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-slate-900">
                Experience
              </h2>
              <div className="flex-1 h-px bg-slate-100 ml-2" />
            </div>
            <div className="space-y-10 pl-4 border-l-2 border-slate-50">
              {resume.experiences.map((exp) => (
                <div key={exp.id} className="space-y-4 relative">
                  <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-bold tracking-wide uppercase text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">
                      {exp.startDate}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium text-base">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {resume.educations.length > 0 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="flex items-center gap-4">
              <div className="bg-primary/5 p-3 rounded-2xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-slate-900">
                Education
              </h2>
              <div className="flex-1 h-px bg-slate-100 ml-2" />
            </div>
            <div className="grid grid-cols-1 gap-8 pl-4">
              {resume.educations.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start group">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-slate-500 font-bold text-sm tracking-wide">
                      {edu.major} <span className="text-primary mx-2">•</span> {edu.degree}
                    </p>
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-100/50 px-3 py-1 rounded-full">
                    {edu.startDate}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {resume.projects.length > 0 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="flex items-center gap-4">
              <div className="bg-primary/5 p-3 rounded-2xl">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-slate-900">
                Projects
              </h2>
              <div className="flex-1 h-px bg-slate-100 ml-2" />
            </div>
            <div className="space-y-12 pl-4">
              {resume.projects.map((proj) => (
                <div key={proj.id} className="space-y-5">
                  <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight">
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-black px-2.5 py-1 bg-primary/5 text-primary rounded-lg uppercase tracking-widest border border-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium border-l-4 border-slate-100 pl-6 py-1">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications & Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Awards Section */}
          {resume.awards.length > 0 && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="flex items-center gap-4">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-lg font-black uppercase tracking-widest text-slate-900">
                  Awards
                </h2>
              </div>
              <div className="space-y-6">
                {resume.awards.map((award) => (
                  <div key={award.id} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <h3 className="font-extrabold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {award.issuer}
                    </p>
                    {award.description && (
                      <p className="text-sm text-slate-500 leading-relaxed mt-2">
                        {award.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {resume.certifications.length > 0 && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="flex items-center gap-4">
                <FileCheck className="w-6 h-6 text-primary" />
                <h2 className="text-lg font-black uppercase tracking-widest text-slate-900">
                  Certificates
                </h2>
              </div>
              <div className="space-y-6">
                {resume.certifications.map((cert) => (
                  <div key={cert.id} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <h3 className="font-extrabold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Activities Section */}
        {resume.activities.length > 0 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <div className="flex items-center gap-4">
              <div className="bg-primary/5 p-3 rounded-2xl">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-slate-900">
                Activities
              </h2>
              <div className="flex-1 h-px bg-slate-100 ml-2" />
            </div>
            <div className="space-y-8 pl-4">
              {resume.activities.map((act) => (
                <div key={act.id} className="space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {act.title}
                      </h3>
                      <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">
                        {act.organization}
                      </p>
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">
                      {act.startDate}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base font-medium">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Enhanced Footer for Print */}
      <footer className="mt-24 pt-10 border-t border-slate-100 text-center hidden print:block">
        <div className="flex flex-col items-center gap-3">
          <div className="text-xl font-black italic uppercase tracking-tighter text-primary">
            NANSA
          </div>
          <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
            Designed with NANSA Resume Tool • Verified on {new Date().toLocaleDateString()}
          </div>
        </div>
      </footer>

      {/* Return Button for Navigation */}
      <div className="mt-20 flex justify-center print:hidden">
        <Button
          variant="outline"
          onClick={onEdit}
          className="rounded-2xl px-16 h-14 font-black uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg shadow-slate-200"
        >
          편집으로 돌아가기
        </Button>
      </div>
    </div>
  );
}

function BasicInfoSection({
  resume,
  updateField,
}: {
  resume: Resume;
  updateField: <T extends keyof Resume>(field: T, value: Resume[T]) => void;
}) {
  const titleId = useId();
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const bioId = useId();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
          <User className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold">기본 정보</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <div className="space-y-2 col-span-full">
          <label
            htmlFor={titleId}
            className="text-sm font-semibold text-foreground flex items-center gap-1.5"
          >
            이력서 제목 <span className="text-primary">*</span>
          </label>
          <Input
            id={titleId}
            placeholder="예: 성장을 즐기는 프론트엔드 개발자, 김난사입니다."
            value={resume.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="h-12 text-base font-bold rounded-lg border-border/60 focus:border-primary/60 transition-all bg-foreground/[0.02] focus:bg-background"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor={nameId}
            className="text-sm font-semibold text-foreground flex items-center gap-1.5"
          >
            이름 <span className="text-primary">*</span>
          </label>
          <Input
            id={nameId}
            placeholder="홍길동"
            value={resume.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="h-12 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={emailId} className="text-sm font-semibold text-foreground">
            이메일
          </label>
          <Input
            id={emailId}
            placeholder="nansa@example.com"
            value={resume.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="h-12 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={phoneId} className="text-sm font-semibold text-foreground">
            연락처
          </label>
          <Input
            id={phoneId}
            placeholder="010-0000-0000"
            value={resume.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="h-12 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background"
          />
        </div>

        <div className="space-y-2 col-span-full">
          <label htmlFor={bioId} className="text-sm font-semibold text-foreground">
            자기소개
          </label>
          <textarea
            id={bioId}
            placeholder="나를 가장 잘 표현할 수 있는 한 문장 또는 짧은 문단을 입력해 주세요."
            value={resume.bio}
            onChange={(e) => updateField("bio", e.target.value)}
            className="w-full min-h-[160px] p-5 rounded-xl border border-border/60 bg-foreground/[0.02] focus:bg-background transition-all resize-none outline-none focus:ring-1 focus:ring-primary/40 text-base font-medium"
          />
        </div>
      </div>
    </div>
  );
}

function ListSection<T extends { id: string }>({
  title,
  icon: Icon,
  items,
  onAdd,
  onDelete,
  renderItem,
}: {
  title: string;
  icon: LucideIcon;
  items: T[];
  onAdd: () => void;
  onDelete: (id: string) => void;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onAdd}
          className="rounded-lg h-9 px-4 border-primary/20 hover:bg-primary/5 text-primary gap-1.5"
        >
          <Plus className="w-4 h-4" />
          추가
        </Button>
      </div>

      <div className="space-y-6">
        {items.length === 0 ? (
          <button
            type="button"
            className="w-full py-16 text-center bg-foreground/[0.02] rounded-2xl border border-dashed border-border/60 border-spacing-4 group hover:bg-foreground/[0.03] transition-colors cursor-pointer"
            onClick={onAdd}
          >
            <div className="w-14 h-14 rounded-full bg-background border border-border/10 shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-medium">내용을 입력해 주세요.</p>
            <span className="text-primary mt-1 text-xs font-semibold block">
              클릭하여 {title} 추가하기
            </span>
          </button>
        ) : (
          items.map((item, index) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-foreground/[0.01] hover:bg-background hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary/20 rounded-full group-hover:bg-primary transition-colors" />
              <button
                type="button"
                onClick={() => onDelete(item.id)}
                className="absolute top-6 right-6 p-2 rounded-lg text-muted-foreground hover:text-danger hover:bg-danger/5 opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 className="w-4.5 h-4.5" />
              </button>

              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="text-[10px] font-bold text-muted-foreground border-border/40 uppercase"
                >
                  Item #{index + 1}
                </Badge>
              </div>

              {renderItem(item)}
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <Button
          type="button"
          variant="ghost"
          onClick={onAdd}
          className="w-full h-14 rounded-xl border border-dashed border-border/60 hover:bg-foreground/5 hover:border-primary/40 gap-2 font-semibold text-muted-foreground hover:text-primary transition-all"
        >
          <Plus className="w-5 h-5" /> {title} 추가
        </Button>
      )}
    </div>
  );
}

export function ResumeEditor({ resume, onChange, onSave }: ResumeEditorProps) {
  const [activeTab, setActiveTab] = useState<SectionType>("basic");
  const [isPreview, setIsPreview] = useState(false);

  const handleExport = () => {
    window.print();
  };

  const updateField = <T extends keyof Resume>(field: T, value: Resume[T]) => {
    onChange({ ...resume, [field]: value, updatedAt: new Date().toISOString() });
  };

  const addItem = (type: SectionType) => {
    switch (type) {
      case "exp":
        updateField("experiences", [
          ...resume.experiences,
          {
            id: crypto.randomUUID(),
            company: "",
            role: "",
            startDate: "",
            description: "",
          },
        ]);
        break;
      case "edu":
        updateField("educations", [
          ...resume.educations,
          {
            id: crypto.randomUUID(),
            school: "",
            major: "",
            degree: "",
            startDate: "",
          },
        ]);
        break;
      case "proj":
        updateField("projects", [
          ...resume.projects,
          {
            id: crypto.randomUUID(),
            title: "",
            description: "",
            techStack: [],
          },
        ]);
        break;
      case "cert":
        updateField("certifications", [
          ...resume.certifications,
          {
            id: crypto.randomUUID(),
            name: "",
            issuer: "",
            date: "",
          },
        ]);
        break;
      case "award":
        updateField("awards", [
          ...resume.awards,
          {
            id: crypto.randomUUID(),
            title: "",
            issuer: "",
            date: "",
            description: "",
          },
        ]);
        break;
      case "activity":
        updateField("activities", [
          ...resume.activities,
          {
            id: crypto.randomUUID(),
            title: "",
            organization: "",
            startDate: "",
            description: "",
          },
        ]);
        break;
    }
  };

  const deleteItem = (type: SectionType, id: string) => {
    switch (type) {
      case "exp":
        updateField(
          "experiences",
          resume.experiences.filter((e) => e.id !== id),
        );
        break;
      case "edu":
        updateField(
          "educations",
          resume.educations.filter((e) => e.id !== id),
        );
        break;
      case "proj":
        updateField(
          "projects",
          resume.projects.filter((p) => p.id !== id),
        );
        break;
      case "cert":
        updateField(
          "certifications",
          resume.certifications.filter((c) => c.id !== id),
        );
        break;
      case "award":
        updateField(
          "awards",
          resume.awards.filter((a) => a.id !== id),
        );
        break;
      case "activity":
        updateField(
          "activities",
          resume.activities.filter((a) => a.id !== id),
        );
        break;
    }
  };

  const updateItem = <T extends SectionType>(
    type: T,
    id: string,
    field: string,
    value: string | string[],
  ) => {
    if (type === "exp") {
      updateField(
        "experiences",
        resume.experiences.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
      );
    } else if (type === "edu") {
      updateField(
        "educations",
        resume.educations.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
      );
    } else if (type === "proj") {
      updateField(
        "projects",
        resume.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
      );
    } else if (type === "cert") {
      updateField(
        "certifications",
        resume.certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
      );
    } else if (type === "award") {
      updateField(
        "awards",
        resume.awards.map((a) => (a.id === id ? { ...a, [field]: value } : a)),
      );
    } else if (type === "activity") {
      updateField(
        "activities",
        resume.activities.map((a) => (a.id === id ? { ...a, [field]: value } : a)),
      );
    }
  };

  const sections: { id: SectionType; label: string; icon: LucideIcon }[] = [
    { id: "basic", label: "기본 정보", icon: User },
    { id: "exp", label: "경력 사항", icon: Briefcase },
    { id: "edu", label: "학력 사항", icon: GraduationCap },
    { id: "proj", label: "프로젝트", icon: Code2 },
    { id: "cert", label: "자격증", icon: FileCheck },
    { id: "award", label: "수상 경력", icon: Award },
    { id: "activity", label: "대외 활동", icon: Activity },
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4 sm:px-6 lg:py-12 animate-agent-reveal print:p-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/40 print:hidden">
        <div className="flex items-center gap-4">
          <Link
            href="/resume"
            className="p-2 rounded-lg hover:bg-foreground/5 transition-colors text-muted-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">이력서 편집</h1>
            <p className="text-sm text-muted-foreground">{resume.title || "제목 없음"}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setIsPreview(!isPreview)}
            className="h-11 px-4 rounded-lg font-semibold flex items-center gap-2"
          >
            {isPreview ? <Edit className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {isPreview ? "편집하기" : "미리보기"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleExport}
            className="h-11 px-4 rounded-lg font-semibold flex items-center gap-2 border-border/60"
          >
            <FileDown className="w-4 h-4" />
            내보내기
          </Button>

          <Button
            type="button"
            onClick={onSave}
            className="h-11 px-6 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            저장하기
          </Button>
        </div>
      </div>

      {isPreview ? (
        <div className="animate-in fade-in zoom-in-95 duration-300">
          <ResumePreview resume={resume} onEdit={() => setIsPreview(false)} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveTab(section.id)}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 group",
                  activeTab === section.id
                    ? "bg-primary/10 text-primary font-bold shadow-sm"
                    : "hover:bg-foreground/5 text-muted-foreground font-medium",
                )}
              >
                <div className="flex items-center gap-3">
                  <section.icon
                    className={cn(
                      "w-5 h-5",
                      activeTab === section.id
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  <span>{section.label}</span>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-transform",
                    activeTab === section.id
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-40",
                  )}
                />
              </button>
            ))}

            <div className="mt-8 pt-8 border-t border-border/40 px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  상태
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] py-0 h-5 px-1.5 border-primary/20 bg-primary/5 text-primary"
                >
                  작성 중
                </Badge>
              </div>
              <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{
                    width: `${(resume.experiences.length > 0 ? 15 : 0) + (resume.educations.length > 0 ? 15 : 0) + (resume.projects.length > 0 ? 15 : 0) + (resume.certifications.length > 0 ? 15 : 0) + (resume.awards.length > 0 ? 15 : 0) + (resume.activities.length > 0 ? 15 : 0) + 10}%`,
                  }}
                />
              </div>
            </div>
          </aside>

          {/* Content Section */}
          <div className="space-y-6">
            <Card className="border-border/40 shadow-sm bg-background overflow-visible rounded-2xl">
              <CardContent className="p-6 sm:p-10">
                {activeTab === "basic" && (
                  <BasicInfoSection resume={resume} updateField={updateField} />
                )}
                {activeTab === "exp" && (
                  <ListSection
                    title="경력 사항"
                    icon={Briefcase}
                    items={resume.experiences}
                    onAdd={() => addItem("exp")}
                    onDelete={(id) => deleteItem("exp", id)}
                    renderItem={(exp: Experience) => {
                      const companyId = `exp-company-${exp.id}`;
                      const roleId = `exp-role-${exp.id}`;
                      const dateId = `exp-date-${exp.id}`;
                      const descId = `exp-desc-${exp.id}`;

                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label
                              htmlFor={companyId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              회사명
                            </label>
                            <Input
                              id={companyId}
                              placeholder="가고 싶은 상상력"
                              value={exp.company}
                              onChange={(e) => updateItem("exp", exp.id, "company", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={roleId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              직무/직함
                            </label>
                            <Input
                              id={roleId}
                              placeholder="Frontend Developer"
                              value={exp.role}
                              onChange={(e) => updateItem("exp", exp.id, "role", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={dateId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              기간 (예: 2023.01 - 2024.03)
                            </label>
                            <Input
                              id={dateId}
                              placeholder="2023.01 - 2024.03"
                              value={exp.startDate}
                              onChange={(e) =>
                                updateItem("exp", exp.id, "startDate", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={descId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              업무 상세
                            </label>
                            <textarea
                              id={descId}
                              placeholder="수행한 업무와 성과를 입력해 주세요"
                              value={exp.description}
                              onChange={(e) =>
                                updateItem("exp", exp.id, "description", e.target.value)
                              }
                              className="w-full min-h-[120px] p-4 rounded-lg border border-border/60 bg-foreground/[0.02] focus:bg-background transition-all resize-none outline-none focus:ring-1 focus:ring-primary/40 text-sm font-medium"
                            />
                          </div>
                        </div>
                      );
                    }}
                  />
                )}
                {activeTab === "edu" && (
                  <ListSection
                    title="학력 사항"
                    icon={GraduationCap}
                    items={resume.educations}
                    onAdd={() => addItem("edu")}
                    onDelete={(id) => deleteItem("edu", id)}
                    renderItem={(edu: Education) => {
                      const schoolId = `edu-school-${edu.id}`;
                      const majorId = `edu-major-${edu.id}`;
                      const degreeId = `edu-degree-${edu.id}`;
                      const dateId = `edu-date-${edu.id}`;

                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label
                              htmlFor={schoolId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              학교명
                            </label>
                            <Input
                              id={schoolId}
                              placeholder="난사대학교"
                              value={edu.school}
                              onChange={(e) => updateItem("edu", edu.id, "school", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={majorId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              전공
                            </label>
                            <Input
                              id={majorId}
                              placeholder="컴퓨터공학과"
                              value={edu.major}
                              onChange={(e) => updateItem("edu", edu.id, "major", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={degreeId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              학위 (예: 학사, 석사)
                            </label>
                            <Input
                              id={degreeId}
                              placeholder="학사"
                              value={edu.degree}
                              onChange={(e) => updateItem("edu", edu.id, "degree", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={dateId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              기간 (예: 2018.03 - 2022.02)
                            </label>
                            <Input
                              id={dateId}
                              placeholder="2018.03 - 2022.02"
                              value={edu.startDate}
                              onChange={(e) =>
                                updateItem("edu", edu.id, "startDate", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                        </div>
                      );
                    }}
                  />
                )}
                {activeTab === "proj" && (
                  <ListSection
                    title="프로젝트"
                    icon={Code2}
                    items={resume.projects}
                    onAdd={() => addItem("proj")}
                    onDelete={(id) => deleteItem("proj", id)}
                    renderItem={(proj: Project) => {
                      const titleId = `proj-title-${proj.id}`;
                      const techId = `proj-tech-${proj.id}`;
                      const descId = `proj-desc-${proj.id}`;

                      return (
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-1.5">
                            <label
                              htmlFor={titleId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              프로젝트명
                            </label>
                            <Input
                              id={titleId}
                              placeholder="공부하는 커뮤니티, 인프런"
                              value={proj.title}
                              onChange={(e) => updateItem("proj", proj.id, "title", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={techId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              사용 기술 (쉼표로 구분)
                            </label>
                            <Input
                              id={techId}
                              placeholder="React, Next.js, TypeScript"
                              value={proj.techStack.join(", ")}
                              onChange={(e) =>
                                updateItem(
                                  "proj",
                                  proj.id,
                                  "techStack",
                                  e.target.value.split(",").map((s) => s.trim()),
                                )
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={descId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              프로젝트 설명
                            </label>
                            <textarea
                              id={descId}
                              placeholder="수행한 역할과 기여한 부분을 입력해 주세요"
                              value={proj.description}
                              onChange={(e) =>
                                updateItem("proj", proj.id, "description", e.target.value)
                              }
                              className="w-full min-h-[120px] p-4 rounded-lg border border-border/60 bg-foreground/[0.02] focus:bg-background transition-all resize-none outline-none focus:ring-1 focus:ring-primary/40 text-sm font-medium"
                            />
                          </div>
                        </div>
                      );
                    }}
                  />
                )}
                {activeTab === "cert" && (
                  <ListSection
                    title="자격증"
                    icon={FileCheck}
                    items={resume.certifications}
                    onAdd={() => addItem("cert")}
                    onDelete={(id) => deleteItem("cert", id)}
                    renderItem={(cert: Certification) => {
                      const nameId = `cert-name-${cert.id}`;
                      const issuerId = `cert-issuer-${cert.id}`;
                      const dateId = `cert-date-${cert.id}`;

                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={nameId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              자격증명
                            </label>
                            <Input
                              id={nameId}
                              placeholder="SQL Developer (SQLD)"
                              value={cert.name}
                              onChange={(e) => updateItem("cert", cert.id, "name", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={issuerId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              발행처
                            </label>
                            <Input
                              id={issuerId}
                              placeholder="한국데이터산업진흥원"
                              value={cert.issuer}
                              onChange={(e) =>
                                updateItem("cert", cert.id, "issuer", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={dateId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              취득일 (예: 2023.05)
                            </label>
                            <Input
                              id={dateId}
                              placeholder="2023.05"
                              value={cert.date}
                              onChange={(e) => updateItem("cert", cert.id, "date", e.target.value)}
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                        </div>
                      );
                    }}
                  />
                )}
                {activeTab === "award" && (
                  <ListSection
                    title="수상 경력"
                    icon={Award}
                    items={resume.awards}
                    onAdd={() => addItem("award")}
                    onDelete={(id) => deleteItem("award", id)}
                    renderItem={(award: AwardType) => {
                      const titleId = `award-title-${award.id}`;
                      const issuerId = `award-issuer-${award.id}`;
                      const dateId = `award-date-${award.id}`;
                      const descId = `award-desc-${award.id}`;

                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={titleId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              수상명
                            </label>
                            <Input
                              id={titleId}
                              placeholder="제1회 난사 해커톤 대상"
                              value={award.title}
                              onChange={(e) =>
                                updateItem("award", award.id, "title", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={issuerId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              수여 기관
                            </label>
                            <Input
                              id={issuerId}
                              placeholder="NANSA"
                              value={award.issuer}
                              onChange={(e) =>
                                updateItem("award", award.id, "issuer", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={dateId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              수상일 (예: 2023.08)
                            </label>
                            <Input
                              id={dateId}
                              placeholder="2023.08"
                              value={award.date}
                              onChange={(e) =>
                                updateItem("award", award.id, "date", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={descId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              수상 상세 정보
                            </label>
                            <textarea
                              id={descId}
                              placeholder="수상 내용이나 기여한 부분을 입력해 주세요"
                              value={award.description}
                              onChange={(e) =>
                                updateItem("award", award.id, "description", e.target.value)
                              }
                              className="w-full min-h-[80px] p-4 rounded-lg border border-border/60 bg-foreground/[0.02] focus:bg-background transition-all resize-none outline-none focus:ring-1 focus:ring-primary/40 text-sm font-medium"
                            />
                          </div>
                        </div>
                      );
                    }}
                  />
                )}
                {activeTab === "activity" && (
                  <ListSection
                    title="대외 활동"
                    icon={Activity}
                    items={resume.activities}
                    onAdd={() => addItem("activity")}
                    onDelete={(id) => deleteItem("activity", id)}
                    renderItem={(activity: ActivityType) => {
                      const titleId = `activity-title-${activity.id}`;
                      const orgId = `activity-org-${activity.id}`;
                      const dateId = `activity-date-${activity.id}`;
                      const descId = `activity-desc-${activity.id}`;

                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={titleId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              활동명
                            </label>
                            <Input
                              id={titleId}
                              placeholder="구송사 개발자 서포터즈 1기"
                              value={activity.title}
                              onChange={(e) =>
                                updateItem("activity", activity.id, "title", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={orgId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              기관/단체명
                            </label>
                            <Input
                              id={orgId}
                              placeholder="NANSA"
                              value={activity.organization}
                              onChange={(e) =>
                                updateItem("activity", activity.id, "organization", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor={dateId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              기간 (예: 2023.01 - 2023.06)
                            </label>
                            <Input
                              id={dateId}
                              placeholder="2023.01 - 2023.06"
                              value={activity.startDate}
                              onChange={(e) =>
                                updateItem("activity", activity.id, "startDate", e.target.value)
                              }
                              className="h-11 rounded-lg border-border/60 bg-foreground/[0.02] focus:bg-background transition-all"
                            />
                          </div>
                          <div className="space-y-1.5 col-span-full">
                            <label
                              htmlFor={descId}
                              className="text-sm font-medium text-muted-foreground"
                            >
                              활동 상세 내용
                            </label>
                            <textarea
                              id={descId}
                              placeholder="구체적인 활동 내용을 입력해 주세요"
                              value={activity.description}
                              onChange={(e) =>
                                updateItem("activity", activity.id, "description", e.target.value)
                              }
                              className="w-full min-h-[100px] p-4 rounded-lg border border-border/60 bg-foreground/[0.02] focus:bg-background transition-all resize-none outline-none focus:ring-1 focus:ring-primary/40 text-sm font-medium"
                            />
                          </div>
                        </div>
                      );
                    }}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
