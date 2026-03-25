"use client";

import { LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { useLogout } from "../api/use-logout";
import { useAuthStore } from "../model/auth-store";

export function UserMenu() {
  const user = useAuthStore((s) => s.user);
  const { mutate: logout, isPending } = useLogout();

  // 로그아웃 상태
  if (!user) {
    return (
      <div className="hidden sm:flex items-center gap-1 ml-1 border-l border-border/50 pl-3 font-sans">
        <Link href="/login">
          <Button variant="secondary" size="sm" className="h-9 px-4 rounded-xl font-bold">
            로그인
          </Button>
        </Link>
      </div>
    );
  }

  // 로그인 상태
  return (
    <div className="hidden sm:flex items-center gap-1 ml-1 border-l border-border/50 pl-3 font-sans">
      {/* 유저 아바타 */}
      <Link
        href="/settings"
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-foreground/5 border border-border/30 hover:bg-foreground/10 transition-colors cursor-pointer group"
      >
        <div
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 relative overflow-hidden shadow-sm",
            "bg-primary/20 text-primary group-hover:scale-110 transition-transform",
          )}
        >
          <Image
            src={user.imageUrl || "/default-avatar.png"}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-xs font-bold text-foreground hidden xl:block max-w-[80px] truncate group-hover:text-primary transition-colors">
          {user.name}
        </span>
      </Link>

      {/* 설정 */}
      <Link href="/settings">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted shrink-0 h-9 w-9 hover:text-primary"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </Link>

      {/* 로그아웃 */}
      <Button
        variant="ghost"
        size="icon"
        className="text-muted hover:text-destructive shrink-0 h-9 w-9"
        onClick={() => logout()}
        disabled={isPending}
        title="로그아웃"
      >
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
}

// 모바일용 (사이드바 등에서 재사용 가능)
export function UserMenuMobile() {
  const user = useAuthStore((s) => s.user);
  const { mutate: logout, isPending } = useLogout();

  if (!user) {
    return (
      <Link href="/login" className="font-sans">
        <Button variant="secondary" size="sm" className="w-full h-10 rounded-xl font-bold">
          <User className="w-4 h-4 mr-2" /> 로그인
        </Button>
      </Link>
    );
  }

  return (
    <div className="space-y-2 font-sans">
      <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-foreground/5">
        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-black shrink-0 relative overflow-hidden">
          <Image
            src={user.imageUrl || "/default-avatar.png"}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-foreground truncate">{user.name}</p>
          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        className="w-full h-10 rounded-xl text-muted-foreground hover:text-destructive justify-start gap-2"
        onClick={() => logout()}
        disabled={isPending}
      >
        <LogOut className="w-4 h-4" />
        로그아웃
      </Button>
    </div>
  );
}
