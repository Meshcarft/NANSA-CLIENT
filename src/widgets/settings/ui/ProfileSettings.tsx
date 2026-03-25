"use client";

import { Camera, Github, Globe, Save, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

export function ProfileSettings() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      {/* 아바타 수정 */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold tracking-tight">프로필 이미지</h3>
        <div className="flex items-center gap-8">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-10">
              <Camera className="text-white w-8 h-8" />
            </div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-foreground/5 relative shadow-xl">
              <Image src="/default-avatar.png" alt="Avatar" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-foreground">이름 앞에 보여질 사진을 설정하세요.</p>
            <p className="text-xs text-muted-foreground font-medium opacity-60">
              JPG, PNG or SVG. Max 1MB.
            </p>
            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                variant="secondary"
                className="h-9 px-4 rounded-xl text-xs font-bold border-none"
              >
                이미지 업로드
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-9 px-4 rounded-xl text-xs font-bold text-destructive hover:bg-destructive/10"
              >
                제거
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 기본 정보 */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-muted-foreground px-1">
              성명 (Full Name)
            </span>
            <Input
              defaultValue="김지훈 (ZHIHUN)"
              className="h-14 bg-foreground/5 border-none focus-visible:ring-primary rounded-2xl font-bold"
            />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-semibold text-muted-foreground px-1">
              현재 직무 (Professional Role)
            </span>
            <Input
              defaultValue="Senior Frontend Engineer"
              className="h-14 bg-foreground/5 border-none focus-visible:ring-primary rounded-2xl font-bold"
            />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-muted-foreground px-1">
            자기소개 (Short Bio)
          </span>
          <Textarea
            placeholder="본인을 한 줄로 소개해주세요."
            className="min-h-[120px] bg-foreground/5 border-none focus-visible:ring-primary rounded-2xl font-bold resize-none leading-relaxed"
            defaultValue="복잡한 문제를 심플하고 우아한 코드로 풀어내는 것을 좋아하는 5년차 프론트엔드 개발자입니다."
          />
        </div>
      </section>

      {/* 소셜 링크 */}
      <section className="space-y-6 p-10 bg-surface/30 rounded-[2.5rem] border border-border/20 shadow-sm relative overflow-hidden">
        <h3 className="text-sm font-bold text-primary relative z-10 flex items-center gap-2">
          Social Connections
        </h3>
        <div className="space-y-5 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input
              defaultValue="https://zhihun.dev"
              className="h-12 bg-white/5 border-none focus-visible:ring-primary rounded-xl font-medium text-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0">
              <Github className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input
              defaultValue="github.com/zhihun"
              className="h-12 bg-white/5 border-none focus-visible:ring-primary rounded-xl font-medium text-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0">
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input
              placeholder="Twitter URL"
              className="h-12 bg-white/5 border-none focus-visible:ring-primary rounded-xl font-medium text-sm"
            />
          </div>
        </div>
      </section>

      {/* 하단 버튼 */}
      <div className="pt-8 flex justify-end">
        <Button className="h-16 px-12 rounded-full bg-primary text-primary-foreground font-bold shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all border-none">
          변경사항 저장하기 <Save className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
