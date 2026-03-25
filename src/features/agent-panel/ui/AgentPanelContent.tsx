"use client";

import { motion } from "framer-motion";
import { Bot, Command, MessageSquare, Mic, Send, Sparkles, Target, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import { useAgentStore } from "../model/agent-store";

type Mode = "matching" | "interview";

export function AgentPanelContent() {
  const { isMaximized } = useAgentStore();
  const [mode, setMode] = useState<Mode>("matching");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ role: "bot" | "user"; content: string }[]>([
    {
      role: "bot",
      content:
        "안녕하세요! 무엇을 도와드릴까요? 실시간 기업 매칭 정보를 확인하거나, 면접 코칭을 시작할 수 있습니다.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChat([...chat, { role: "user", content: message }]);

    if (mode === "matching") {
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "매칭 알고리즘을 최적화했습니다. 입력하신 선호도를 반영하여 상위 5개 기업을 재산출합니다.",
          },
        ]);
      }, 1000);
    } else {
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          {
            role: "bot",
            content: "좋은 답변입니다! 추가로 구체적인 사례를 들어 설명해주실 수 있을까요?",
          },
        ]);
      }, 1000);
    }

    setMessage("");
  };

  const steps = [
    "프로필 벡터 분석 완료",
    "유사 기술 스택 기업 127곳 필터링",
    "연봉 매칭 구간 산출 중",
    "문화 적합성 딥러닝 분석 예약됨",
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-background/50 relative">
      {/* Mode Switcher */}
      <div className="flex p-4 gap-2 bg-foreground/5 border-b border-border/50 sticky top-0 z-10 backdrop-blur-md">
        <div className={cn("flex flex-1 gap-2 mx-auto w-full", isMaximized && "max-w-4xl")}>
          <Button
            variant={mode === "matching" ? "primary" : "ghost"}
            size="sm"
            className="flex-1 rounded-xl h-10 gap-2 text-sm font-semibold"
            onClick={() => setMode("matching")}
          >
            <Target size={14} /> Matching Info
          </Button>
          <Button
            variant={mode === "interview" ? "primary" : "ghost"}
            size="sm"
            className="flex-1 rounded-xl h-10 gap-2 text-sm font-semibold"
            onClick={() => setMode("interview")}
          >
            <MessageSquare size={14} /> Interview Coach
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className={cn("p-6 space-y-10 mx-auto w-full", isMaximized && "max-w-4xl")}>
          {mode === "matching" ? (
            <div className="space-y-10 animate-agent-reveal">
              {/* Status Card */}
              <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-8 space-y-6 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Bot size={120} />
                </div>
                <div className="flex items-center gap-3 text-primary relative z-10">
                  <Sparkles size={20} className="animate-pulse" />
                  <span className="text-xs font-bold tracking-tight">Active Intelligence</span>
                </div>

                <p className="text-base leading-relaxed text-foreground font-bold relative z-10">
                  현재 유저님의 <span className="text-primary italic">프로필 벡터</span>를 기반으로
                  최적의 채용 기회를 탐색하고 있습니다. 매칭 정확도를 높이고 싶다면 하단에 추가
                  요구사항을 입력해주세요.
                </p>
              </div>

              {/* Operations */}
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-muted-foreground flex items-center gap-2">
                  <Command size={12} /> System Operations
                </h3>

                <div className="space-y-5">
                  {steps.map((text, i) => (
                    <div key={text} className="flex items-center gap-5 group">
                      <div
                        className={cn(
                          "h-1.5 flex-1 rounded-full overflow-hidden shrink-0 bg-foreground/5",
                        )}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: i < 2 ? "100%" : "40%" }}
                          transition={{ duration: 2, delay: i * 0.2 }}
                          className={cn(
                            "h-full bg-primary",
                            i < 2 ? "opacity-100" : "opacity-30 animate-pulse",
                          )}
                        />
                      </div>
                      <span
                        className={cn(
                          "text-xs font-medium transition-colors w-40",
                          i < 2 ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intelligence Feedback */}
              {chat.length > 1 && (
                <div className="space-y-4 pt-4 border-t border-border/10">
                  <h3 className="text-xs font-bold text-primary">Intelligence Feedback</h3>

                  <div className="space-y-4">
                    {chat
                      .filter((m) => m.role === "bot")
                      .slice(-2)
                      .map((msg, i) => (
                        <div
                          key={`${msg.content}-${i}`}
                          className="bg-surface/30 p-5 rounded-2xl border border-border/50 text-sm font-medium leading-relaxed text-foreground/80"
                        >
                          "{msg.content}"
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6 animate-agent-reveal flex flex-col">
              {chat.map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={cn(
                    "flex gap-4",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row",
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
                      msg.role === "bot"
                        ? "bg-primary text-white"
                        : "bg-foreground/10 text-foreground",
                    )}
                  >
                    {msg.role === "bot" ? <Bot size={20} /> : <User size={20} />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] p-5 rounded-3xl text-sm font-bold leading-relaxed shadow-sm",
                      msg.role === "bot"
                        ? "bg-surface border border-border/50 text-foreground"
                        : "bg-primary text-white",
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Persistent Input Area */}
      <div className="p-6 bg-surface border-t border-border/50 shadow-2xl sticky bottom-0 z-10">
        <div className={cn("mx-auto space-y-4 w-full", isMaximized && "max-w-4xl px-4")}>
          <div className="relative group">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                mode === "matching"
                  ? "매칭 옵션 추가 입력 (예: 재택근무 우대, 연봉 6천 이상...)"
                  : "면접 답변을 입력하세요..."
              }
              className="min-h-[100px] bg-foreground/5 border-none focus-visible:ring-primary rounded-[2rem] p-6 pr-14 text-sm font-bold resize-none shadow-inner transition-all hover:bg-foreground/[0.07]"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button
              size="icon"
              className="absolute right-4 bottom-4 w-12 h-12 rounded-2xl bg-primary text-white hover:scale-105 transition-transform border-none shadow-xl shadow-primary/20"
              onClick={handleSend}
            >
              <Send size={20} />
            </Button>
          </div>
          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                className="h-8 px-3 rounded-xl text-xs font-medium text-muted-foreground hover:text-primary gap-2 bg-foreground/5 border-none"
              >
                <Mic size={12} /> Voice
              </Button>
              <Button
                variant="ghost"
                className="h-8 px-3 rounded-xl text-xs font-medium text-muted-foreground hover:text-primary gap-2 bg-foreground/5 border-none"
              >
                <Command size={12} /> Sync Profile
              </Button>
            </div>

            <p className="text-[10px] text-muted-foreground italic font-medium opacity-30">
              AI system ready for {mode}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
