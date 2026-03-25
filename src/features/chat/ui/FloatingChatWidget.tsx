"use client";

import {
  Bell as BellIcon,
  CheckCircle2 as CheckIcon,
  Mail as MailIcon,
  MessageSquare as MsgIcon,
  Search as SearchIcon,
  Send as SendIcon,
  Sparkles as SparkleIcon,
  User as UserIcon,
  X as XIcon,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { useChatStore } from "../model/chat-store";

const MINI_CHATS = [
  {
    id: 1,
    name: "Kim Min-ji",
    role: "HR Manager @ Toss",
    preview: "커피챗 일정을 제안드려요.",
    time: "11:20 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Steve Jobs",
    role: "CTO @ Apple",
    preview: "Great project depth.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Park Ji-sung",
    role: "Lead Engineer @ Line",
    preview: "연락드리겠습니다.",
    time: "Mar 20",
    unread: false,
  },
];

const NOTIFICATIONS = [
  {
    id: 1,
    type: "offer",
    icon: MailIcon,
    title: "프리미엄 채용 제안",
    text: "Meta Korea Core팀 제안!",
    time: "10분 전",
    isNew: true,
  },
  {
    id: 2,
    type: "message",
    icon: MsgIcon,
    title: "새로운 메시지",
    text: "Kim Min-ji 매니저님의 일정 제안",
    time: "1시간 전",
    isNew: true,
  },
  {
    id: 3,
    type: "status",
    icon: CheckIcon,
    title: "전형 결과 안내",
    text: "Google Korea 서류 합격!",
    time: "어제",
    isNew: false,
    color: "text-emerald-500",
  },
];

export function FloatingChatWidget() {
  const {
    isMessagesOpen,
    closeMessages,
    isNotificationsOpen,
    closeNotifications,
    activeChatId,
    openChat,
    isVisible,
  } = useChatStore();

  const [searchQuery, setSearchQuery] = useState("");

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 right-10 flex items-end gap-10 z-[100] font-sans h-0 overflow-visible select-none">
      {/* 🟢 MESSAGES MODAL */}
      {isMessagesOpen && (
        <div className="w-[840px] h-[640px] bg-white dark:bg-zinc-900 border border-border/20 shadow-[-30px_30px_100px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500 mb-[initial] self-end border-b-8 border-b-primary/10 transition-all origin-bottom-right">
          <div className="p-6 border-b border-border/10 flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/60 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm shadow-primary/20">
                <MsgIcon size={20} />
              </div>
              <div>
                <h2 className="text-base font-bold tracking-tight">커뮤니케이션</h2>
                <p className="text-[10px] font-bold text-muted-foreground opacity-50 tracking-widest uppercase">
                  Direct Messages
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group hidden sm:block">
                <SearchIcon
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors"
                />
                <input
                  placeholder="대화 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 bg-foreground/5 border-none rounded-2xl py-2 pl-9 pr-4 text-[11px] font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all focus:w-64"
                />
              </div>
              <button
                type="button"
                onClick={closeMessages}
                className="p-2 hover:bg-foreground/10 rounded-2xl transition-colors"
              >
                <XIcon size={20} className="text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className="w-[30%] border-r border-border/10 bg-zinc-50/50 dark:bg-black/20 overflow-y-auto no-scrollbar">
              {MINI_CHATS.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() => openChat(chat.id)}
                  className={cn(
                    "w-full text-left p-6 flex gap-4 cursor-pointer hover:bg-white dark:hover:bg-zinc-800 transition-all border-b border-border/5 relative group",
                    activeChatId === chat.id
                      ? "bg-white dark:bg-zinc-800 shadow-sm z-10 scale-[1.02]"
                      : "opacity-70 grayscale-[0.5] hover:opacity-100 hover:grayscale-0",
                  )}
                >
                  {activeChatId === chat.id && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full" />
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform">
                    <UserIcon size={22} className="text-muted-foreground/60" />
                    {chat.unread && (
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <p className="text-xs font-bold truncate">{chat.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate font-medium">
                      {chat.preview}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 shadow-inner relative">
              {activeChatId ? (
                <div className="flex flex-col h-full overflow-hidden">
                  <div className="p-5 px-8 border-b border-border/5 flex items-center justify-between bg-zinc-50/20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm">
                        K
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">Kim Min-ji</h3>
                        <p className="text-[10px] font-bold text-muted-foreground/50 tracking-wider">
                          CAREER MANAGER @ TOSS
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-10 overflow-y-auto space-y-8 no-scrollbar bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-from)_0%,transparent_30%)] from-primary/5">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                        <UserIcon size={16} className="opacity-30" />
                      </div>
                      <div className="bg-foreground/5 p-4 rounded-3xl rounded-tl-none text-sm font-medium max-w-[80%] leading-relaxed shadow-sm border border-border/5">
                        안녕하세요 유저님! 제안 수락해주셔서 감사합니다. 티타임 일정 함께
                        조율해보아요.
                      </div>
                    </div>
                    <div className="flex gap-4 flex-row-reverse">
                      <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <UserIcon size={16} />
                      </div>
                      <div className="bg-primary text-white p-4 rounded-3xl rounded-tr-none text-sm font-bold ml-auto max-w-[80%] leading-relaxed shadow-2xl shadow-primary/20">
                        네 좋습니다! 다음 주 중으로 일정 편하신 시간 말씀해주시면 제가
                        맞춰보겠습니다.
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-3 bg-primary/5 flex items-center justify-between border-t border-primary/10 mx-6 mb-4 rounded-2xl shadow-inner border border-primary/10">
                    <div className="flex items-center gap-3">
                      <SparkleIcon size={14} className="text-primary animate-pulse" />
                      <p className="text-[10px] font-bold text-primary tracking-tight">
                        AI 에이전트: "다음 주 목요일 14:00가 일정상 가장 여유롭습니다."
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[8px] font-bold border-primary/20 text-primary px-3 py-0.5 rounded-full"
                    >
                      AI Suggestion
                    </Badge>
                  </div>

                  <div className="p-6 pt-2 bg-white dark:bg-zinc-900 border-t border-border/10">
                    <div className="relative group">
                      <input
                        placeholder="답장 메시지를 입력하세요..."
                        className="w-full h-16 bg-foreground/5 border-none rounded-2xl px-8 text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none pr-16 shadow-inner transition-all hover:bg-foreground/[0.08]"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                      >
                        <SendIcon size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-12 space-y-4 opacity-30 select-none grayscale cursor-default">
                  <div className="w-24 h-24 rounded-[2rem] bg-foreground/5 flex items-center justify-center shadow-inner">
                    <MsgIcon size={48} className="text-muted-foreground" />
                  </div>
                  <p className="text-sm font-bold text-muted-foreground">
                    대화 상대를 선택하여 프리미엄 전문 매칭을 시작하세요.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 🔴 NOTIFICATIONS MODAL */}
      {isNotificationsOpen && (
        <div className="w-[480px] h-[640px] bg-white dark:bg-zinc-900 border border-border/20 shadow-[-30px_30px_100px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500 mb-[initial] self-end border-b-8 border-b-rose-500/10 transition-all origin-bottom-right">
          <div className="p-6 border-b border-border/10 flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/60 backdrop-blur-xl shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 shadow-sm shadow-rose-500/20">
                <BellIcon size={20} />
              </div>
              <div>
                <h2 className="text-base font-bold tracking-tight">알림 센터</h2>
                <p className="text-[10px] font-bold text-rose-500 opacity-70 tracking-widest uppercase">
                  Activity Center
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeNotifications}
              className="p-2 hover:bg-foreground/10 rounded-2xl transition-colors"
            >
              <XIcon size={20} className="text-muted-foreground" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 p-6 bg-white dark:bg-zinc-900/50">
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-widest">
                Recently Updates
              </span>
              <button
                type="button"
                className="text-[10px] font-bold text-rose-500 hover:underline underline-offset-4"
              >
                모두 읽음 처리
              </button>
            </div>

            <div className="space-y-4">
              {NOTIFICATIONS.map((notif) => (
                <div
                  key={notif.id}
                  className={cn(
                    "group p-6 rounded-[2rem] bg-white dark:bg-zinc-800 shadow-sm border border-border/10 hover:border-rose-500/30 transition-all flex gap-5 items-start relative overflow-hidden",
                    notif.isNew && "bg-rose-500/[0.02] border-l-4 border-l-rose-500",
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform",
                      notif.color || "text-rose-500/70",
                    )}
                  >
                    <notif.icon size={26} />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1 content-center h-14">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-foreground leading-snug truncate">
                        {notif.title}
                      </p>
                      {notif.isNew && (
                        <Badge className="bg-rose-500 text-[10px] font-bold px-2 py-0.5 border-none rounded-full shrink-0">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground/70 font-medium truncate opacity-90">
                      {notif.text}
                    </p>
                    <span className="text-[9px] text-muted-foreground/30 font-bold block pt-1">
                      {notif.time}
                    </span>
                  </div>
                </div>
              ))}

              <div className="py-12 flex flex-col items-center opacity-30 select-none">
                <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                  <CheckIcon size={32} className="text-muted-foreground" />
                </div>
                <p className="text-[11px] font-bold text-muted-foreground/50 tracking-widest uppercase">
                  All Activity Processed
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
