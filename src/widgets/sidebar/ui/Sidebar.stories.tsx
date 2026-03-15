import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta = {
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  decorators: [
    (Story) => {
      // Note: In a real storybook we might need to mock the store or provide a provider
      // For now, this just renders the sidebar.
      return <Story />;
    },
  ],
};
