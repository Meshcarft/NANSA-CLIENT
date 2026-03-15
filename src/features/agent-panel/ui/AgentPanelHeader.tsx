import { Bot, Sparkles, X } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface AgentPanelHeaderProps {
  onClose: () => void;
}

export function AgentPanelHeader({ onClose }: AgentPanelHeaderProps) {
  return (
    <div className="p-6 border-b border-border flex items-center justify-between">
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
      <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
}
