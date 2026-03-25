import { LayoutContent } from "@/shared/ui/LayoutContent";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <LayoutContent>{children}</LayoutContent>;
}
