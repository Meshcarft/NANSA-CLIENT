"use client";

import { useLogin } from "../api/use-login";

const TEST_ACCOUNTS = [
  { label: "일반 유저", email: "test@nansa.com", password: "nansa1234" },
  { label: "관리자", email: "admin@nansa.com", password: "nansa1234" },
];

export function TestCredentialBanner() {
  const { mutate, isPending } = useLogin();

  return (
    <div className="rounded-xl border border-dashed border-border bg-foreground/[0.03] p-4 space-y-3">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        테스트 계정
      </p>

      <div className="space-y-2">
        {TEST_ACCOUNTS.map((account) => (
          <div key={account.email} className="flex items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5 min-w-0">
              <p className="font-semibold text-foreground">{account.label}</p>
              <p className="text-muted-foreground truncate">
                {account.email} · {account.password}
              </p>
            </div>
            <button
              type="button"
              onClick={() => mutate({ email: account.email, password: account.password })}
              disabled={isPending}
              className="shrink-0 rounded-lg border border-border/60 bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-foreground/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "..." : "바로 로그인"}
            </button>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground/60">
        개발 환경 전용 · 실제 서비스에서는 노출되지 않습니다
      </p>
    </div>
  );
}
