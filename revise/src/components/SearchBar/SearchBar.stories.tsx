import type { Meta, StoryObj } from "@storybook/react";

// Components
import SearchBar from "./SearchBar";

const meta = {
  title: "Components/UseState/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    query: { description: "value of SearchBar" },
  },
} as Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    query: "Sushi",
    onChange: () => {}
  },
};
