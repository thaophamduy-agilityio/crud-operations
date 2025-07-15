// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { StudentItem } from ".";

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
        student: {
            "id": 1,
            "firstName": "Karthi",
            "lastName": "Madesh",
            "avatar": "https://i.pravatar.cc/150?img=12",
            "email": "karthi@gmmail.com",
            "phone": 7305477760,
            "enrollNumber": 1234567305477760,
            "dateAdmission": "08-Dec, 2021",
            "role": "Admin"
        },
        onEditItem: () => {
            console.log('handle edit logic here')
        },
        onDeleteItem: () => {
            console.log('handle delete logic here')
        },
    },
};
