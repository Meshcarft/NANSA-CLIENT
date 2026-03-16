import { AlertCircle, RotateCcw } from "lucide-react";
import type { FallbackProps } from "react-error-boundary";
import { Button } from "@/shared/ui/button";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center glass rounded-3xl border border-destructive/20 animate-in fade-in zoom-in duration-300">
      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-destructive" />
      </div>

      <h2 className="text-2xl font-bold mb-2 tracking-tight">문제가 발생했습니다</h2>
      <p className="text-muted mb-8 max-w-sm leading-relaxed">
        {error instanceof Error
          ? error.message
          : "요청을 처리하는 중에 예상치 못한 에러가 발생했습니다. 다시 시도해 주세요."}
      </p>

      <Button
        variant="outline"
        onClick={resetErrorBoundary}
        className="gap-2 px-6 hover:bg-destructive/10 hover:border-destructive/30 transition-colors"
      >
        <RotateCcw className="w-4 h-4" /> 다시 시도
      </Button>
    </div>
  );
}
