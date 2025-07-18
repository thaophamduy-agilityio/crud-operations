// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import HeaderTable from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Section/HeaderTable',
    component: HeaderTable,
    tags: ['autodocs'],
    argTypes: {
        onToggleSort: { description: "call to sort items" },
        onAdd: { description: "call to add item" },
    },

} satisfies Meta<typeof HeaderTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaule: Story = {
    args: {
        onToggleSort: () => console.log('Handle toggle sort items'),
        onAdd: () => console.log('Handle add item'),
    },
};