import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorFallback } from "./ErrorFallback";

const meta: Meta<typeof ErrorBoundary> = {
  title: "Shared/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <ErrorBoundary>
        <div className="p-4 bg-surface rounded-xl border border-border">정상적인 콘텐츠입니다.</div>
      </ErrorBoundary>
    </div>
  ),
};

const ThrowError = ({ message }: { message: string }) => {
  throw new Error(message);
};

export const ErrorState: Story = {
  render: () => (
    <div className="w-[500px]">
      <ErrorBoundary>
        <ThrowError message="데이터를 불러오는 중 404 에러가 발생했습니다." />
      </ErrorBoundary>
    </div>
  ),
};
