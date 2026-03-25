"use client";

interface SidebarFooterProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
}

export function SidebarFooter({ isCollapsed }: SidebarFooterProps) {
  if (isCollapsed) return null;

  return (
    <div className="p-6 mt-auto">
      {/* 📧 JOB ALERTS WIDGET (The image variant) */}
      <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 space-y-4 shadow-inner">
        <div className="space-y-1">
          <p className="text-[13px] font-black text-foreground tracking-tight">Save Job Alerts</p>
          <p className="text-[10px] font-bold text-muted-foreground leading-relaxed opacity-60">
            Increase an opportunity to get chance for new jobs.
          </p>
        </div>
        <div className="space-y-2">
          <input
            placeholder="Type Your Email"
            className="w-full h-10 px-4 bg-surface border border-border/10 rounded-lg text-[11px] font-bold outline-none focus:border-primary transition-all placeholder:text-muted-foreground/20"
          />
          <button
            type="button"
            className="w-full h-10 bg-primary text-white text-[11px] font-black rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest"
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  );
}
