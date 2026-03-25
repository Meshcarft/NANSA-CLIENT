"use client";

import { Bell, Bot, MessageSquare, Search } from "lucide-react";
import { UserMenu } from "@/features/auth/ui/UserMenu";
import { useChatStore } from "@/features/chat/model/chat-store";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface HeaderActionsProps {
  isAgentOpen: boolean;
  onToggleAgent: () => void;
}

export function HeaderActions({ isAgentOpen, onToggleAgent }: HeaderActionsProps) {
  const { openMessages, openNotifications } = useChatStore();

  return (
    <div className="flex items-center gap-2 md:gap-3 ml-auto relative z-20 font-sans">
      {/* Search Bar - Desktop */}
      <div className="hidden lg:flex items-center relative group mr-2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
          className="w-48 xl:w-64 bg-foreground/5 dark:bg-foreground/[0.02] border border-border/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all focus:w-64 xl:focus:w-80 font-medium"
        />
      </div>

      {/* Search Button - Mobile/Tablet */}
      <Button variant="ghost" size="icon" className="lg:hidden text-muted">
        <Search className="w-5 h-5" />
      </Button>

      {/* Messages Icon (Toggles Widget) */}
      <Button
        onClick={openMessages}
        variant="ghost"
        size="icon"
        className="text-muted hover:text-primary relative group shrink-0"
      >
        <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full border border-background shadow-lg" />
      </Button>

      {/* Notifications Icon (Toggles Widget) */}
      <Button
        onClick={openNotifications}
        variant="ghost"
        size="icon"
        className="text-muted hover:text-primary relative group shrink-0"
      >
        <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-background shadow-lg" />
      </Button>

      {/* AI Agent Toggle */}
      <Button
        onClick={onToggleAgent}
        variant={isAgentOpen ? "primary" : "secondary"}
        size="icon"
        className={cn(
          "relative overflow-hidden group border-border/50 shrink-0",
          isAgentOpen && "shadow-[0_0_20px_oklch(45%_0.2_260_/_0.5)]",
        )}
      >
        <Bot
          className={cn(
            "w-6 h-6 transition-transform duration-500",
            isAgentOpen ? "rotate-[360deg] scale-110" : "group-hover:scale-110",
          )}
        />
        {isAgentOpen && <span className="absolute inset-0 bg-white/20 animate-pulse" />}
      </Button>

      {/* 로그인 상태 기반 유저 메뉴 */}
      <UserMenu />
    </div>
  );
}
