// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import IconButton from "./";
import { HomeIcon, CourseIcon, StudentIcon, PaymentIcon, ReportIcon, SettingIcon, LogoutIcon, BackIcon, NotificationIcon, SortIcon, EditIcon, DeleteIcon, CloseIcon } from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    children: { description: "lable & icon or icon of button" },
    additionalClasses: { description: "class custom style of icon button" },
    onClick: { description: "call to submit" },
  },

} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {  
  args: {
    children: (
      <div className="icon-container">
        <HomeIcon />
        <span>Home</span>
      </div>
    ),
    additionalClasses: 'icon',
    onClick: () => {},
  },
};

export const Course: Story = {
  args: {
    children: (
      <div className="icon-container">
        <CourseIcon />
        <span>Course</span>
      </div>
    ),
    additionalClasses: 'icon',
    onClick: () => {},
  },
};

export const Students: Story = {
  args: {
    children: (
      <div className="icon-container">
        <StudentIcon />
        <span>Student</span>
      </div>
    ),
    onClick: () => {},
    additionalClasses: 'icon selected',
  },
};

export const Payment: Story = {
  args: {
    children: (
      <div className="icon-container">
        <PaymentIcon />
        <span>Payment</span>
      </div>
    ),
    additionalClasses: 'icon',
    onClick: () => {},
  },
};

export const Report: Story = {
  args: {
    children: (
      <div className="icon-container">
        <ReportIcon />
        <span>Report</span>
      </div>
    ),
    additionalClasses: 'icon',
    onClick: () => {},
  },
};

export const Settings: Story = {
  args: {
    children: (
      <div className="icon-container">
        <SettingIcon />
        <span>Setting</span>
      </div>
    ),
    additionalClasses: 'icon',
    onClick: () => {},
  },
};

export const Logout: Story = {
  args: {
    children: (
      <div className="icon-container right">
        <LogoutIcon />
        <span>Logout</span>
      </div>
    ),
    additionalClasses: 'icon',
    onClick: () => {},
  },
};

export const Back: Story = {
  args: {
    children: (
      <BackIcon />
    ),
    additionalClasses: 'icon-back',
    onClick: () => {},
  },
};

export const Notification: Story = {
  args: {
    children: (
      <NotificationIcon />
    ),
    additionalClasses: 'icon-notification',
    onClick: () => {},
  },
};

export const Sort: Story = {
  args: {
    children: (
      <SortIcon />
    ),
    additionalClasses: 'icon-sort',
    onClick: () => {},
  },
};

export const Edit: Story = {
  args: {
    children: (
      <EditIcon />
    ),
    additionalClasses: 'icon-edit',
    onClick: () => {},
  },
};

export const Delete: Story = {
  args: {
    children: (
      <DeleteIcon />
    ),
    additionalClasses: 'icon-delete',
    onClick: () => {},
  },
};

export const Close: Story = {
  args: {
    children: (
      <CloseIcon />
    ),
    additionalClasses: 'icon-close',
    onClick: () => {},
  },
};