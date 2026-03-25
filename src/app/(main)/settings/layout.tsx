"use client";

import { Bookmark, ClipboardList, Heart, Palette, Settings, Trophy, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

const TABS = [
  { icon: User, label: "프로필", href: "/settings" },
  { icon: ClipboardList, label: "지원 현황", href: "/settings/applications" },
  { icon: Trophy, label: "커리어 포인트", href: "/settings/points" },
  { icon: Bookmark, label: "스크랩 공고", href: "/settings/bookmarks" },
  { icon: Heart, label: "관심 기업", href: "/settings/interested" },
  { icon: Settings, label: "계정", href: "/settings/account" },
  { icon: Palette, label: "테마·언어", href: "/settings/appearance" },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">설정</h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium italic opacity-60">
            계정과 서비스 환경을 관리합니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Side Tabs - Desktop */}
          <nav className="hidden md:flex flex-col gap-1 w-48 shrink-0">
            {TABS.map(({ icon: Icon, label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Horizontal Tabs - Mobile */}
          <nav className="flex md:hidden gap-1 overflow-x-auto pb-1 border-b border-border">
            {TABS.map(({ icon: Icon, label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors shrink-0",
                    isActive
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
