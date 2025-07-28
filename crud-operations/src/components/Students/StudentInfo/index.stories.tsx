// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import StudentInfo from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Common/StudentInfo',
    component: StudentInfo,
    tags: ['autodocs'],
    argTypes: {
        fullName: { description: "full name of student" },
        role: { description: "role of student" },
        avatarUrl: { description: "avatar image url of student" },
        size: { description: "size of avatar image" },
        additionalClasses: { description: "class custom style of student info" },
    },

} satisfies Meta<typeof StudentInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        fullName: "Karthi Madesh",
        role: "Admin",
        avatarUrl: "https://i.pravatar.cc/150?img=12",
        size: {
            width: 128,
            height: 128,
        },
    },
};
