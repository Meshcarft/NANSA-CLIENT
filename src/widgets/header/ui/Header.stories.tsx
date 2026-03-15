import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scrolled: Story = {
  parameters: {
    docs: {
      description: {
        story: "스크롤이 20px 이상 되었을 때의 Glassmorphism 상태입니다.",
      },
    },
  },
  render: () => (
    <div className="h-[200vh] bg-surface/20">
      <Header />
      <div className="pt-32 p-10">
        <p className="text-white">아래로 스크롤하여 GNB의 변화를 확인하세요.</p>
      </div>
    </div>
  ),
};
