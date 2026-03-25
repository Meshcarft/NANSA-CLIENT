import { Bot, MoreVertical, Send, Sparkles, User } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Textarea } from "@/shared/ui/textarea";

const MESSAGE_LIST = [
  {
    id: 1,
    name: "Kim Min-ji",
    role: "HR Manager @ Toss",
    preview: "안녕하세요 유저님! 제안 수락 감사합니다.",
    time: "11:20 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Steve Jobs",
    role: "CTO @ Apple",
    preview: "Next week would be great for a technical interview.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Park Ji-sung",
    role: "Lead Engineer @ Line",
    preview: "그럼 일정이 확정되는 대로 다시 연락드리겠습니다.",
    time: "Mar 20",
    unread: false,
  },
];

export default function MessagesPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-4 md:p-10 font-sans">
      <div className="h-[calc(100vh-200px)] flex border border-border/10 rounded-[2.5rem] bg-surface/50 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Sidebar - Conversations */}
        <div className="w-80 border-r border-border/10 flex flex-col bg-foreground/5">
          <div className="p-6 border-b border-border/10">
            <h2 className="text-xl font-bold">전체 메시지</h2>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {MESSAGE_LIST.map((chat) => (
              <div
                key={chat.id}
                className={cn(
                  "p-5 flex gap-4 cursor-pointer hover:bg-foreground/5 transition-colors group",
                  chat.unread && "bg-primary/5 border-l-4 border-primary",
                )}
              >
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center shrink-0">
                  <User size={20} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-sm truncate">{chat.name}</p>
                    <span className="text-[10px] text-muted-foreground">{chat.time}</span>
                  </div>
                  <p className="text-[10px] text-primary/70 font-bold uppercase tracking-wide truncate">
                    {chat.role}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{chat.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-background/50 relative">
          {/* Chat Header */}
          <div className="p-6 border-b border-border/10 flex items-center justify-between bg-surface/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                K
              </div>
              <div>
                <h3 className="text-sm font-bold">Kim Min-ji</h3>
                <p className="text-[10px] font-semibold text-muted-foreground">HR Manager · Toss</p>
              </div>
            </div>
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-8 overflow-y-auto space-y-6 no-scrollbar">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-xl bg-foreground/10 flex items-center justify-center shrink-0">
                <User size={16} />
              </div>
              <div className="bg-foreground/5 p-4 rounded-2xl rounded-tl-none text-sm font-medium max-w-[70%] leading-relaxed">
                안녕하세요 유저님! 등록해주신 포트폴리오(Nansa-UI-System)를 매우 인상 깊게
                보았습니다. Toss Core팀에서 합류 제안을 드리고 싶은데, 혹시 가벼운 커피챗
                가능하실까요?
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <User size={16} />
              </div>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none text-sm font-medium max-w-[70%] leading-relaxed">
                안녕하세요 매니저님! 좋게 봐주셔서 감사합니다. 네, 커피챗 제안 감사히
                수락하겠습니다. 다음 주 중으로 시간 괜찮으실까요?
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-xl bg-foreground/10 flex items-center justify-center shrink-0">
                <User size={16} />
              </div>
              <div className="bg-foreground/5 p-4 rounded-2xl rounded-tl-none text-sm font-medium max-w-[70%] leading-relaxed">
                네 좋습니다! 화요일 오전 10시 혹은 목요일 오후 2시 어떠신가요? 편하신 시간
                말씀해주세요.
              </div>
            </div>
          </div>

          {/* AI Agent Assist Bar */}
          <div className="px-6 py-4 bg-primary/5 border-t border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <p className="text-[10px] font-bold text-primary">
                AGENT RECOMMENDATION: "유저님의 일정상 목요일 오후 14:00가 가장 여유롭습니다."
              </p>
            </div>
            <Badge
              variant="default"
              className="text-[9px] font-bold border-none rounded-full px-3 py-1"
            >
              AI Recommendation
            </Badge>
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-surface/90 border-t border-border/10 backdrop-blur-md">
            <div className="relative">
              <Textarea
                placeholder="메시지를 입력하세요..."
                className="min-h-[50px] bg-foreground/5 border-none focus-visible:ring-primary rounded-2xl p-4 pr-12 text-sm font-medium resize-none shadow-inner"
              />
              <button
                type="button"
                className="absolute right-3 bottom-3 text-primary hover:scale-110 transition-transform"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Insight */}
        <div className="w-64 border-l border-border/10 p-6 space-y-8 bg-surface/40 hidden lg:block">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Recruitment Role
            </h4>
            <div>
              <p className="text-sm font-bold tracking-tight">Senior Frontend Engineer</p>
              <p className="text-xs text-muted-foreground">Core Product Team</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              AI Company Insight
            </h4>
            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Bot size={14} />
                <span className="text-[10px] font-bold">Nansa Intelligence</span>
              </div>
              <p className="text-[10px] font-medium leading-relaxed">
                해당 포지션 이직자의 평균 만족도는 4.8/5.0으로 매우 높습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
