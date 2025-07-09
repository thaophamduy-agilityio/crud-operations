// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { Logo } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Common/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    label: { description: "lable of logo" },
    size: { description: "size of logo" },
    additionalClasses: { description: "class custom style of modal" },
  },

} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Students Dashboard',
  },
};

export const Large: Story = {
  args: {
    label: 'Students Dashboard',
    size: 'large',
  },
};
