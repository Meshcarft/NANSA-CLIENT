import { CheckCircle2, Github, Key, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";

export default function AccountSettingsPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-2xl font-bold tracking-tight">계정 설정</h2>
        <p className="text-sm text-muted-foreground mt-2 font-medium opacity-60">
          계정 보안 및 로그인 수단을 관리합니다.
        </p>
      </div>

      {/* Account Verification */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <ShieldCheck size={20} className="text-primary" /> 계정 보안
        </h3>
        <Card className="p-8 rounded-[2rem] bg-surface/50 border-border/10 flex items-center justify-between border-l-4 border-l-primary">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-foreground">이메일 인증 완료</span>
              <CheckCircle2 size={16} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              ji***n@nansa.ai (인증일: 2024.03.10)
            </p>
          </div>
          <Button variant="outline" className="rounded-xl font-bold text-xs h-10 border-border/30">
            재인증
          </Button>
        </Card>
      </section>

      {/* Email & Password */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
              <Mail size={12} /> Email Address
            </h4>
            <div className="flex gap-2">
              <Input
                defaultValue="ji***n@nansa.ai"
                disabled
                className="h-14 bg-foreground/5 border-none rounded-2xl font-bold opacity-60 flex-1"
              />
              <Button
                variant="secondary"
                className="h-14 px-6 rounded-2xl font-bold text-xs border-none"
              >
                변경
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
              <Key size={12} /> Password Change
            </h4>
            <Button
              variant="secondary"
              className="w-full h-14 rounded-2xl font-bold text-xs border-none flex items-center justify-between px-6"
            >
              <span>마지막 변경: 2개월 전</span>
              <span className="text-primary">비밀번호 변경하기</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Linked Accounts */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold">연동된 소셜 계정</h3>
        <div className="space-y-3">
          {[
            {
              id: "kakao",
              label: "KakaoTalk",
              icon: MessageCircle,
              value: "zhihun_kakao",
              color: "text-[#FEE500]",
              bgColor: "bg-[#FEE500]/5",
            },
            {
              id: "github",
              label: "GitHub",
              icon: Github,
              value: "zhihun-dev",
              color: "text-foreground",
              bgColor: "bg-foreground/5",
            },
          ].map((social) => (
            <Card
              key={social.id}
              className="p-6 rounded-3xl bg-surface/50 border-border/10 flex items-center justify-between group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${social.bgColor} flex items-center justify-center shrink-0`}
                >
                  <social.icon size={22} className={social.color} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-foreground">{social.label}</p>
                  <p className="text-sm font-medium text-muted-foreground">{social.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 font-bold text-[10px] bg-foreground/5 border-none"
                >
                  연동됨
                </Badge>
                <button
                  type="button"
                  className="text-xs font-bold text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  해제
                </button>
              </div>
            </Card>
          ))}
          <Button
            variant="ghost"
            className="w-full h-14 border border-dashed border-border/30 rounded-3xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all font-bold text-sm"
          >
            + 새 소셜 계정 연동하기
          </Button>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="pt-12 border-t border-border/20">
        <div className="p-8 bg-rose-500/5 rounded-[2rem] border border-rose-500/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-rose-500">계정 탈퇴</h4>
            <p className="text-sm text-muted-foreground font-medium">
              계정이 삭제되면 모든 매칭 데이터와 프로필 정보가 영구적으로 삭제됩니다.
            </p>
          </div>
          <Button
            variant="ghost"
            className="h-12 px-8 rounded-xl font-bold text-xs text-rose-500 hover:bg-rose-500/10 shrink-0"
          >
            서비스 탈퇴하기
          </Button>
        </div>
      </section>
    </div>
  );
}
