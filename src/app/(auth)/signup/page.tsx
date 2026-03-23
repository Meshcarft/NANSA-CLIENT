import Link from "next/link";
import { SignupForm } from "@/features/auth/ui/SignupForm";

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white text-center">회원가입</h2>
      <SignupForm />
      <div className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{" "}
        <Link
          href="/login"
          className="font-semibold text-white transition-opacity hover:opacity-80 underline underline-offset-4"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
