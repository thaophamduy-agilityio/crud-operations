// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import MenuBar from "./";

// Mocks
import { menuBarList } from "@mocks/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Section/MenuBar',
  component: MenuBar,
  tags: ['autodocs'],
  argTypes: {
    menuBarList: { description: "list items of MenuBar" },
  },

} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuBarList: menuBarList,
  },
};
