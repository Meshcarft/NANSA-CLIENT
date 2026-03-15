import { beforeEach, describe, expect, it } from "vitest";
import { useSidebarStore } from "../sidebar-store";

describe("Sidebar Store", () => {
  beforeEach(() => {
    useSidebarStore.setState({ isCollapsed: false, isMobileOpen: false });
  });

  it("should have initial state correctly", () => {
    expect(useSidebarStore.getState().isCollapsed).toBe(false);
    expect(useSidebarStore.getState().isMobileOpen).toBe(false);
  });

  it("should collapse the sidebar", () => {
    useSidebarStore.getState().collapse();
    expect(useSidebarStore.getState().isCollapsed).toBe(true);
  });

  it("should toggle the sidebar state", () => {
    useSidebarStore.getState().toggle();
    expect(useSidebarStore.getState().isCollapsed).toBe(true);
  });

  it("should toggle mobile drawer state", () => {
    useSidebarStore.getState().toggleMobile();
    expect(useSidebarStore.getState().isMobileOpen).toBe(true);

    useSidebarStore.getState().toggleMobile();
    expect(useSidebarStore.getState().isMobileOpen).toBe(false);
  });

  it("should close mobile drawer", () => {
    useSidebarStore.setState({ isMobileOpen: true });
    useSidebarStore.getState().closeMobile();
    expect(useSidebarStore.getState().isMobileOpen).toBe(false);
  });
});
