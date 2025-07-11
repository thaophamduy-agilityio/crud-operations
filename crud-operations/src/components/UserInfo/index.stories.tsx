// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { UserInfo } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Common/UserInfo',
  component: UserInfo,
  tags: ['autodocs'],
  argTypes: {
    fullName: { description: "full name of user" },
    role: { description: "role of user" },
    avatarUrl: { description: "avatar image url of user" },
    size: { description: "size of avatar image" },
    additionalClasses: { description: "class custom style of user info" },
  },

} satisfies Meta<typeof UserInfo>;

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
