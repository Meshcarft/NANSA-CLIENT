import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-[420px] space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
            <h1 className="text-4xl font-bold tracking-tight text-white">NANSA</h1>
          </Link>
          <p className="text-sm font-medium text-muted-foreground">
            꿈에 그리던 커리어를 찾는 지름길, 난사(NANSA)
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
