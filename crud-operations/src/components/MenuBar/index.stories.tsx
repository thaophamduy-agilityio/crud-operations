// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import { MenuBar } from "./";

// Icons
import { HomeIcon, CourseIcon, StudentIcon, PaymentIcon, ReportIcon, SettingIcon } from '@components/Icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Common/MenuBar',
  component: MenuBar,
  tags: ['autodocs'],
  argTypes: {
    menuBarList: { description: "list items of MenuBar" },
  },

} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuBarList: [
      {
        id: 1,
        name: "Home",
        icon: <HomeIcon />,
        onClick: () => {
          console.log("Home menu clicked");
        }
      },
      {
        id: 2,
        name: "Course",
        icon: <CourseIcon />,
        onClick: () => {
          console.log("Course menu clicked");
        }
      },
      {
        id: 3,
        name: "Students",
        icon: <StudentIcon />,
        onClick: () => {
          console.log("Students menu clicked");
        }
      },
      {
        id: 4,
        name: "Payment",
        icon: <PaymentIcon />,
        onClick: () => {
          console.log("Payment menu clicked");
        }
      },
      {
        id: 5,
        name: "Report",
        icon: <ReportIcon />,
        onClick: () => {
          console.log("Report menu clicked");
        }
      },
      {
        id: 6,
        name: "Settings",
        icon: <SettingIcon />,
        onClick: () => {
          console.log("Settings menu clicked");
        }
      }
    ],
  },
};
