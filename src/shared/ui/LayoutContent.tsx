"use client";

import type { ReactNode } from "react";
import { AgentPanel } from "@/features/agent-panel";
import { useSidebarStore } from "@/features/sidebar/model/sidebar-store";
import { cn } from "@/shared/lib/utils";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

interface LayoutContentProps {
  children: ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Navigation Layer */}
      <Sidebar />

      {/* Content Layer */}
      <div
        className={cn(
          "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
          // On mobile, there's no fixed side padding from sidebar.
          // On desktop, it depends on sidebar collapse state.
          "pl-0 md:pl-20",
          !isCollapsed && "md:pl-64",
        )}
      >
        <Header />

        <main className="flex-1 pt-20 px-4 md:px-8 pb-12 w-full max-w-[1600px] mx-auto overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Overlay Layer */}
      <AgentPanel />
    </div>
  );
}
