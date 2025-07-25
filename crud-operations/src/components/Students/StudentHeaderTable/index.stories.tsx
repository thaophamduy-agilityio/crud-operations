// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import StudentHeaderTable from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Section/StudentHeaderTable',
    component: StudentHeaderTable,
    tags: ['autodocs'],
    argTypes: {
        onToggleSort: { description: "call to sort items" },
        onAdd: { description: "call to add item" },
    },

} satisfies Meta<typeof StudentHeaderTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaule: Story = {
    args: {
        onToggleSort: () => {},
        onAdd: () => {},
    },
};