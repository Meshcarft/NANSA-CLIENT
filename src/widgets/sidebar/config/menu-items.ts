import { CheckCircle2, Heart, HelpCircle, LayoutDashboard, Search, Settings } from "lucide-react";

export const MENU_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Search, label: "Search", href: "/" },
  { icon: CheckCircle2, label: "Jobs Applied", href: "/applied" },
  { icon: Heart, label: "Saved Jobs", href: "/saved" },
  { icon: Settings, label: "Setting", href: "/settings" },
  { icon: HelpCircle, label: "Help Center", href: "/help" },
];
