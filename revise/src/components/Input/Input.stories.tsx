import type { Meta, StoryObj } from "@storybook/react";

// Components
import Input from "./Input";

const meta = {
  title: "Components/Common/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { description: "Label of Input" },
    value: { description: "Value of Input" },
  },
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "First input",
    value: ""
  },
};
