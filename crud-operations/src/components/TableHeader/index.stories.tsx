// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { TableHeader } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Section/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    onToggleSort: { description: "call to sort items" },
    onAddItem: { description: "call to add item" },
  },

} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaule: Story = {
  args: {
    onToggleSort: () => console.log('Handle toggle sort items'),
    onAddItem: () => console.log('Handle add item'),
  },
};