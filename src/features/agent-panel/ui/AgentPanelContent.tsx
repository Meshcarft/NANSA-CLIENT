export function AgentPanelContent() {
  const steps = [
    "프로필 벡터 분석 완료",
    "유사 기술 스택 기업 127곳 필터링",
    "연봉 매칭 구간 산출 중",
    "문화 적합성 딥러닝 분석 예약됨",
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-6">
      <div className="bg-foreground/5 border border-border rounded-2xl p-4 animate-agent-reveal">
        <p className="text-sm leading-relaxed text-foreground/90">
          안녕하세요! 당신의 성향과 기술 스택을 기반으로 **자동 매칭**을 시작했습니다. 인간의 개입
          없이 제가 직접 최고의 기업들을 선별해 드릴게요.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted tracking-wider uppercase">
          현재 작업 상태
        </h3>
        <div className="space-y-2">
          {steps.map((text) => (
            <div key={text} className="flex items-center gap-3 group">
              <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              <span className="text-sm text-foreground/70">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
