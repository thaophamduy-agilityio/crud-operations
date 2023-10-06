import type { Meta, StoryObj } from '@storybook/react';

import { ListCoreValue } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/ListCoreValue',
  component: ListCoreValue,
  tags: ['autodocs'],
} satisfies Meta<typeof ListCoreValue>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    coreValues : [
      {
        id: "1",
        imageSrc: "/src/assets/images/core-value/core-value-protect.svg",
        title: "Protect Your Data",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "2",
        imageSrc: "/src/assets/images/core-value/core-value-search.svg",
        title: "Super Smart Search",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "3",
        imageSrc: "/src/assets/images/core-value/core-value-control.svg",
        title: "Control everything in one place",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "4",
        imageSrc: "/src/assets/images/core-value/core-value-work-together.svg",
        title: "Work better together",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "5",
        imageSrc: "/src/assets/images/core-value/core-value-support.svg",
        title: "24/7 Live Customer Support",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "6",
        imageSrc: "/src/assets/images/core-value/core-value-project-management.svg",
        title: "Project Management",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "7",
        imageSrc: "/src/assets/images/core-value/core-value-work-flow.svg",
        title: "Workflow builder",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
      {
        id: "8",
        imageSrc: "/src/assets/images/core-value/core-value-team.svg",
        title: "Bring your team in channels",
        desc: "4,729 curated design resources to energize your creative workflow",
      },
    ],
  },
};
