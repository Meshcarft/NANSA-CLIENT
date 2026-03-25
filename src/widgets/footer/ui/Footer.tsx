"use client";

import { Github, Instagram, Twitter, Youtube } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Branding & Copy (Compact) */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white font-black text-[10px]">
                N
              </div>
              <span className="text-sm font-black tracking-tighter text-foreground uppercase italic pb-0.5">
                Nansa
              </span>
            </div>
            <div className="w-px h-3 bg-border/20 hidden md:block" />
            <p className="text-[10px] font-mono font-bold text-muted-foreground/30 uppercase tracking-[0.2em]">
              © 2026 NANSA CO. ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Center: Quick Links (Micro) */}
          <div className="flex items-center gap-6 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">
              Jobs
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Team
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Support
            </a>
          </div>

          {/* Right: Socials & Status (Micro) */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-sm shadow-primary opacity-40" />
              <span className="text-[9px] font-mono font-black text-primary/40 tracking-[0.2em] uppercase">
                SYSTEM OPTIMAL
              </span>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-muted-foreground/20 hover:text-primary transition-all"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
