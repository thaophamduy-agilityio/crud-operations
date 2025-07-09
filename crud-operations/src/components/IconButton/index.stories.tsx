// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { IconButton } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    children: { description: "lable of icon button" },
    additionalClasses: { description: "class custom style of icon button" },
    iconPosition: { description: "set position for icon button" },
    isDisabled: { description: "set icon button disabled or not" },
    onClick: { description: "call to submit" },
  },

} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    children: 'Home',
    onClick: () => console.log('Icon buton home clicked'),
  },
};

export const Course: Story = {
  args: {
    children: 'Course',
    onClick: () => console.log('Icon buton course clicked'),
  },
};

export const Students: Story = {
  args: {
    children: 'Students',
    onClick: () => console.log('Icon buton students clicked'),
  },
};

export const Payment: Story = {
  args: {
    children: 'Payment',
    onClick: () => console.log('Icon buton payment clicked'),
  },
};

export const Report: Story = {
  args: {
    children: 'Report',
    onClick: () => console.log('Icon buton report clicked'),
  },
};

export const Settings: Story = {
  args: {
    children: 'Settings',
    onClick: () => console.log('Icon buton settings clicked'),
  },
};

export const Logout: Story = {
  args: {
    children: 'Logout',
    onClick: () => console.log('Icon buton logout clicked'),
  },
};

export const Back: Story = {
  args: {
    additionalClasses: 'Back',
    onClick: () => console.log('Icon buton back clicked'),
  },
};

export const Notification: Story = {
  args: {
    additionalClasses: 'Notification',
    onClick: () => console.log('Icon buton notification clicked'),
  },
};

export const Sort: Story = {
  args: {
    additionalClasses: 'Sort',
    onClick: () => console.log('Icon buton sort clicked'),
  },
};

export const Edit: Story = {
  args: {
    additionalClasses: 'Edit',
    onClick: () => console.log('Icon buton edit clicked'),
  },
};

export const Delete: Story = {
  args: {
    additionalClasses: 'Delete',
    onClick: () => console.log('Icon buton delete clicked'),
  },
};

export const Close: Story = {
  args: {
    additionalClasses: 'Close',
    onClick: () => console.log('Icon buton close clicked'),
  },
};