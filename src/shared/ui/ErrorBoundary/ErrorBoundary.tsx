"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface FallbackProps {
  error: Error;
  reset: () => void;
}

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  FallbackComponent?: (props: FallbackProps) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  private reset = () => {
    this.props.onReset?.();
    this.setState({ error: null });
  };

  public render() {
    const { error } = this.state;
    const { fallback, FallbackComponent, children } = this.props;

    if (error) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} reset={this.reset} />;
      }

      if (fallback) {
        return fallback;
      }

      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">문제가 발생했습니다.</h2>
            <p className="text-sm text-muted-foreground max-w-sm">{error.message}</p>
          </div>
          <button
            type="button"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm transition-colors hover:bg-primary/90"
            onClick={this.reset}
          >
            다시 시도
          </button>
        </div>
      );
    }

    return children;
  }
}
