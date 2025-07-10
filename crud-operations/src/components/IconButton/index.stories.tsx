// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { IconButton } from "./";
import { HomeIcon, CourseIcon, StudentIcon, PaymentIcon, ReportIcon, SettingIcon, LogoutIcon, BackIcon, NotificationIcon, SortIcon, EditIcon, DeleteIcon, CloseIcon } from '@components/Icon';

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
    onClick: () => console.log('Icon button home clicked'),
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
    onClick: () => console.log('Icon button course clicked'),
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
    onClick: () => console.log('Icon buton students clicked'),
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
    onClick: () => console.log('Icon buton payment clicked'),
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
    onClick: () => console.log('Icon buton report clicked'),
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
    onClick: () => console.log('Icon buton settings clicked'),
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
    onClick: () => console.log('Icon buton logout clicked'),
  },
};

export const Back: Story = {
  args: {
    children: (
      <BackIcon />
    ),
    additionalClasses: 'icon-back',
    onClick: () => console.log('Icon buton back clicked'),
  },
};

export const Notification: Story = {
  args: {
    children: (
      <NotificationIcon />
    ),
    additionalClasses: 'icon-notification',
    onClick: () => console.log('Icon buton notification clicked'),
  },
};

export const Sort: Story = {
  args: {
    children: (
      <SortIcon />
    ),
    additionalClasses: 'icon-sort',
    onClick: () => console.log('Icon buton sort clicked'),
  },
};

export const Edit: Story = {
  args: {
    children: (
      <EditIcon />
    ),
    additionalClasses: 'icon-edit',
    onClick: () => console.log('Icon buton edit clicked'),
  },
};

export const Delete: Story = {
  args: {
    children: (
      <DeleteIcon />
    ),
    additionalClasses: 'icon-delete',
    onClick: () => console.log('Icon buton delete clicked'),
  },
};

export const Close: Story = {
  args: {
    children: (
      <CloseIcon />
    ),
    additionalClasses: 'icon-close',
    onClick: () => console.log('Icon buton close clicked'),
  },
};