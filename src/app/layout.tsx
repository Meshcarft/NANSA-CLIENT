import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/shared/lib/theme-provider";
import { LayoutContent } from "./ui/LayoutContent";

export const metadata: Metadata = {
  title: "NANSA | Autonomous Agent-Based Career Matching",
  description: "AI-driven career matching platform with zero human intervention.",
};

import { ErrorBoundary } from "@/shared/ui/error-boundary";
import { QueryProvider } from "./providers/QueryProvider";

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
            <ErrorBoundary>
              <LayoutContent>{children}</LayoutContent>
            </ErrorBoundary>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
