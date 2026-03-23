"use client";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ReactErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
