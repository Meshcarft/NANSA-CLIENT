export default function NotificationSettings() {
  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
          Notifications <span className="text-primary">Alerts</span>
        </h2>
        <p className="text-sm text-muted-foreground font-medium mt-3 opacity-60">
          푸시 알림 및 이메일 수신 설정을 관리합니다.
        </p>
      </div>

      <div className="p-20 border-2 border-dashed border-border/30 rounded-[3rem] text-center space-y-4">
        <div className="text-4xl">🔔</div>
        <p className="text-muted-foreground font-medium italic uppercase tracking-widest text-xs">
          Notification preference controls coming soon.
        </p>
      </div>
    </div>
  );
}
