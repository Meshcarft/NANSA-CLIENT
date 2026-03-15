import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useAgentStore } from "../../model/agent-store";
import { AgentPanel } from "../AgentPanel";

// Mock the store
vi.mock("../../model/agent-store", () => ({
  useAgentStore: vi.fn(),
}));

describe("AgentPanel", () => {
  it("should not render when closed", () => {
    (useAgentStore as any).mockReturnValue({
      isOpen: false,
      close: vi.fn(),
      width: 448,
      setWidth: vi.fn(),
    });

    const { container } = render(<AgentPanel />);
    expect(container.firstChild).toBeNull();
  });

  it("should render when open", () => {
    const closeMock = vi.fn();
    (useAgentStore as any).mockReturnValue({
      isOpen: true,
      close: closeMock,
      width: 448,
      setWidth: vi.fn(),
    });

    render(<AgentPanel />);
    expect(screen.getByText("NANSA 매칭 에이전트")).toBeDefined();
  });

  it("should call close when backdrop is clicked", () => {
    const closeMock = vi.fn();
    (useAgentStore as any).mockReturnValue({
      isOpen: true,
      close: closeMock,
      width: 448,
      setWidth: vi.fn(),
    });

    const { container } = render(<AgentPanel />);
    const backdrop = container.querySelector(".fixed.inset-0");
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(closeMock).toHaveBeenCalled();
    }
  });
});
