import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "버튼",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "매칭 시작하기",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "서비스 소개",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "기본 버튼",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "외곽선 버튼",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "커다란 버튼",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "🤖",
  },
};
