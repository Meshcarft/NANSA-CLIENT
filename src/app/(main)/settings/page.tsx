import { ProfileSettings } from "@/widgets/settings/ui/ProfileSettings";

export default function SettingsPage() {
  return (
    <div className="space-y-12">
      <div className="pb-8 border-b border-border/20">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
          Profile <span className="text-primary">Details</span>
        </h2>
        <p className="text-sm text-muted-foreground font-medium mt-3 opacity-60">
          다른 사람들에게 보여지는 프로필 정보를 관리합니다.
        </p>
      </div>

      <ProfileSettings />
    </div>
  );
}
