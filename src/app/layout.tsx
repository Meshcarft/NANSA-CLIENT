import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";

export const metadata: Metadata = {
  title: "NANSA | Autonomous Agent-Based Career Matching",
  description: "AI-driven career matching platform with zero human intervention.",
};

import { QueryProvider } from "@/shared/providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="nansa-theme"
        >
          <QueryProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
