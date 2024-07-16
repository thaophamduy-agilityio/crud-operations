import type { Meta, StoryObj } from "@storybook/react";

// Components
import Panel from "./Panel";

const meta = {
  title: "Components/UseState/Panel",
  component: Panel,
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Title of panel" },
    children: { description: "Content of panel" },
    isActive: { description: "Set panel is open" },
    onShow: { description: "Show/Close panel" },
  },
} as Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PanelOpen: Story = {
  args: {
    title: 'About',
    children: `With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.`,
    isActive: true,
    onShow: () => true
  },
};
