export default function AppearanceSettings() {
  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
          Appearance <span className="text-primary">Theme</span>
        </h2>
        <p className="text-sm text-muted-foreground font-medium mt-3 opacity-60">
          다크 모드 및 기본 언어 설정을 관리합니다.
        </p>
      </div>

      <div className="p-20 border-2 border-dashed border-border/30 rounded-[3rem] text-center space-y-4">
        <div className="text-4xl">🎨</div>
        <p className="text-muted-foreground font-medium italic uppercase tracking-widest text-xs">
          Visual theme customization coming soon.
        </p>
      </div>
    </div>
  );
}
