"use client";

import type { ReactNode } from "react";
import { AgentPanel } from "@/features/agent-panel";
import { FloatingChatWidget } from "@/features/chat/ui/FloatingChatWidget";
import { useSidebarStore } from "@/features/sidebar/model/sidebar-store";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

interface LayoutContentProps {
  children: ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const isSidebarCollapsed = useSidebarStore((state) => state.isCollapsed);
  const sidebarWidth = isSidebarCollapsed ? 80 : 280;

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Primary Sidebar (Dashboard Hub) */}
      <Sidebar />

      <div
        style={{ paddingLeft: sidebarWidth }}
        className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out"
      >
        <Header />

        <main className="flex-1 pt-24 pb-20 w-full overflow-x-hidden min-h-screen">
          {/* 🌊 FLUID WIDE LAYOUT (Increased from 1440px to Full Width with optimized padding) */}
          <div className="w-full px-6 md:px-12 lg:px-16 2xl:px-24 transition-all duration-300">
            {children}
          </div>
        </main>
      </div>

      <AgentPanel />
      <FloatingChatWidget />
    </div>
  );
}
