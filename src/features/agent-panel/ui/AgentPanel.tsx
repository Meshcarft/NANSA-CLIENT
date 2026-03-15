"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Sparkles, X } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useAgentStore } from "../model/agent-store";

export function AgentPanel() {
  const { isOpen, close } = useAgentStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md glass z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 agent-gradient rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold leading-none">NANSA 매칭 에이전트</h2>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
                    <Sparkles className="w-3 h-3" /> 실시간 분석 중...
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={close} className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-agent-reveal">
                <p className="text-sm leading-relaxed text-foreground/90">
                  안녕하세요! 당신의 성향과 기술 스택을 기반으로 **자동 매칭**을 시작했습니다.
                  인간의 개입 없이 제가 직접 최고의 기업들을 선별해 드릴게요.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted tracking-wider uppercase">
                  현재 작업 상태
                </h3>
                <div className="space-y-2">
                  {[
                    "프로필 벡터 분석 완료",
                    "유사 기술 스택 기업 127곳 필터링",
                    "연봉 매칭 구간 산출 중",
                    "문화 적합성 딥러닝 분석 예약됨",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      <span className="text-sm text-foreground/70">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/10">
              <Button className="w-full">자세한 분석 로그 보기</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
