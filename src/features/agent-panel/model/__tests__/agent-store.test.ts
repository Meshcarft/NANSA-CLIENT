import { beforeEach, describe, expect, it } from "vitest";
import { useAgentStore } from "../agent-store";

describe("Agent Store", () => {
  beforeEach(() => {
    // Reset state before each test
    useAgentStore.setState({ isOpen: false });
  });

  it("should have initial state isOpen as false", () => {
    expect(useAgentStore.getState().isOpen).toBe(false);
  });

  it("should open the panel", () => {
    useAgentStore.getState().open();
    expect(useAgentStore.getState().isOpen).toBe(true);
  });

  it("should close the panel", () => {
    // Open first
    useAgentStore.setState({ isOpen: true });

    useAgentStore.getState().close();
    expect(useAgentStore.getState().isOpen).toBe(false);
  });

  it("should toggle the panel state", () => {
    useAgentStore.getState().toggle();
    expect(useAgentStore.getState().isOpen).toBe(true);

    useAgentStore.getState().toggle();
    expect(useAgentStore.getState().isOpen).toBe(false);
  });
});
