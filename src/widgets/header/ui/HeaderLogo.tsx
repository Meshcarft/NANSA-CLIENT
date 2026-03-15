"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

interface HeaderLogoProps {
  onToggleMobileSidebar: () => void;
}

export function HeaderLogo({ onToggleMobileSidebar }: HeaderLogoProps) {
  return (
    <div className="flex items-center gap-4 md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-muted"
        onClick={onToggleMobileSidebar}
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-6 h-6" />
      </Button>

      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 agent-gradient rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">N</span>
        </div>
      </Link>
    </div>
  );
}
