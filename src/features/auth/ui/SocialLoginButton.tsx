import { Button } from "@/shared/ui/button";

interface SocialLoginButtonProps {
  provider: "google" | "kakao";
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function SocialLoginButton({
  provider,
  onClick,
  disabled,
  children,
}: SocialLoginButtonProps) {
  const config = {
    google: { label: "Google", variant: "google" },
    kakao: { label: "Kakao", variant: "kakao" },
  } as const;

  return (
    <Button
      variant={config[provider].variant as any}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full"
    >
      {children || config[provider].label}
    </Button>
  );
}
