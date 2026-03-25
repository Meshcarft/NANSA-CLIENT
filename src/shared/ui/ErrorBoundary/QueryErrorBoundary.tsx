"use client";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import type { ErrorInfo, ReactNode } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

interface Props {
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

/**
 * ErrorBoundary integrated with React Query's error reset.
 * "Try again" resets both the component state and any failed queries.
 *
 * Use this inside QueryProvider-wrapped trees where throwOnError: true.
 */
export function QueryErrorBoundary({ children, onError }: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} onError={onError}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
