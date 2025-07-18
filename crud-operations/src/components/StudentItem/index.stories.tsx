// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import StudentItem from ".";

// Mocks
import { studentsList } from 'mocks/index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Common/StudentItem',
    component: StudentItem,
    tags: ['autodocs'],
    argTypes: {
        student: { description: "Student object containing all student details" },
        onEditItem: { description: "call edit student" },
        onDeleteItem: { description: "call delete student" },
    },

} satisfies Meta<typeof StudentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        student: studentsList[0],
        onEditItem: () => {
            console.log('handle edit logic here')
        },
        onDeleteItem: () => {
            console.log('handle delete logic here')
        },
    },
};
