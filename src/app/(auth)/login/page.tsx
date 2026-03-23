import Link from "next/link";
import { LoginForm } from "@/features/auth/ui/LoginForm";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <LoginForm />
      <div className="text-center text-sm text-muted-foreground">
        계정이 없으신가요?{" "}
        <Link
          href="/signup"
          className="font-semibold text-white transition-opacity hover:opacity-80 underline underline-offset-4"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
}
