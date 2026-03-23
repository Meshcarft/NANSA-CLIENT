import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { useAgentStore } from "../model/agent-store";
import { AgentPanel } from "./AgentPanel";

const meta = {
  component: AgentPanel,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const open = useAgentStore((state) => state.open);
      useEffect(() => {
        open();
      }, [open]);
      return <Story />;
    },
  ],
} satisfies Meta<typeof AgentPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Resized: Story = {
  decorators: [
    (Story) => {
      const setWidth = useAgentStore((state) => state.setWidth);
      useEffect(() => {
        setWidth(600);
      }, [setWidth]);
      return <Story />;
    },
    ...(meta.decorators || []),
  ],
};
