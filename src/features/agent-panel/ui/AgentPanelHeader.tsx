import { Bot, Maximize2, Minimize2, Sparkles, X } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useAgentStore } from "../model/agent-store";

interface AgentPanelHeaderProps {
  onClose: () => void;
}

export function AgentPanelHeader({ onClose }: AgentPanelHeaderProps) {
  const { isMaximized, toggleMaximize } = useAgentStore();

  return (
    <div className="p-6 border-b border-border flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 agent-gradient rounded-xl flex items-center justify-center shadow-lg animate-pulse">
          <Bot className="text-white w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold leading-none">AI 코칭 에이전트</h2>
          <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1 uppercase tracking-widest italic font-black">
            <Sparkles className="w-3 h-3" /> Live Intelligence
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMaximize}
          className="rounded-full text-muted hover:text-foreground"
          title={isMaximized ? "Restore" : "Maximize"}
        >
          {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
