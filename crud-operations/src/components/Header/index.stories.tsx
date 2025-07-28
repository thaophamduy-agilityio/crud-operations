// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Header from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Common/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        valueSearch: { description: "value of search" },
        onBack: { description: "variant of button" },
        onSearchChange: { description: "set button disabled or not" },
        onToggleNotification: { description: "call to submit" },
    },

} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaule: Story = {
    args: {
        valueSearch: 'Karthi',
        onBack: () => console.log('Handle back clicked'),
        onSearchChange: () => console.log('Handle search change'),
        onToggleNotification: () => console.log('Handle notification toggled'),
    },
};