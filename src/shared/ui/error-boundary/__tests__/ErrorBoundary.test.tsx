import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ErrorBoundary } from "../ErrorBoundary";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const ThrowError = ({ shouldThrow = true }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test error");
  }
  return <div>Recovered Content</div>;
};

describe("ErrorBoundary", () => {
  it("renders children when no error occurs", () => {
    const queryClient = createTestQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <div>Content</div>
        </ErrorBoundary>
      </QueryClientProvider>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders ErrorFallback when an error is thrown and handles reset", () => {
    const queryClient = createTestQueryClient();
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { rerender } = render(
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      </QueryClientProvider>,
    );

    expect(screen.getByText("문제가 발생했습니다")).toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();

    // Test Reset
    const retryButton = screen.getByText("다시 시도");

    rerender(
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      </QueryClientProvider>,
    );

    fireEvent.click(retryButton);

    expect(screen.getByText("Recovered Content")).toBeInTheDocument();
    expect(screen.queryByText("문제가 발생했습니다")).not.toBeInTheDocument();

    spy.mockRestore();
  });
});
