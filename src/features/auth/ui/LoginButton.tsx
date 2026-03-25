import { Button } from "@/shared/ui/button";

interface LoginButtonProps {
  isLoading: boolean;
  label?: string;
  loadingLabel?: string;
}

export function LoginButton({
  isLoading,
  label = "이메일로 로그인",
  loadingLabel = "로그인 중...",
}: LoginButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      // className="w-full" // 가득 차게 설정하는 경우가 많으므로 추가
    >
      {isLoading ? loadingLabel : label}
    </Button>
  );
}
