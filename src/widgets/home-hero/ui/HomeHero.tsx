import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/shared/ui/button";

export function HomeHero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-4xl w-full text-center space-y-8 animate-agent-reveal">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-black/10 dark:border-primary/20 text-primary text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>인간의 개입이 없는 자율형 매칭 엔진 v1.0</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          당신의 커리어를 <br />
          <span className="text-primary text-glow italic">에이전트</span>에게 맡기세요
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          NANSA는 구직자의 데이터와 기업의 요구사항을 수만 개의 차원으로 분석하여 최적의 매칭을
          자율적으로 수행합니다. 복잡한 절차 없이 최고의 오퍼를 받아보세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="w-full sm:w-auto h-14 px-10 gap-2 text-lg">
            매칭 시작하기 <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg">
            서비스 소개
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
    </div>
  );
}
