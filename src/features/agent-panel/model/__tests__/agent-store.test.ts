import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useAgentStore } from "../agent-store";

describe("useAgentStore", () => {
  it("should have initial state", () => {
    const { result } = renderHook(() => useAgentStore());
    expect(result.current.isOpen).toBe(false);
    expect(result.current.width).toBe(448);
  });

  it("should open and close", () => {
    const { result } = renderHook(() => useAgentStore());

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it("should toggle", () => {
    const { result } = renderHook(() => useAgentStore());

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it("should set width", () => {
    const { result } = renderHook(() => useAgentStore());

    act(() => {
      result.current.setWidth(500);
    });
    expect(result.current.width).toBe(500);
  });
});
