// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ListStudent from ".";

// Mocks
import { studentsList } from 'mocks/index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Section/ListStudent',
  component: ListStudent,
  tags: ['autodocs'],
  argTypes: {
    studentList: { description: "list items of Student" },
  },

} satisfies Meta<typeof ListStudent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    studentList: studentsList,
    onEditItem: () => {},
    onDeleteItem: () => {},
  }
};
