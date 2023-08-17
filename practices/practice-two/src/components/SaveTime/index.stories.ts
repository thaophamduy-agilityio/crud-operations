import type { Meta, StoryObj } from '@storybook/react';

import { ListSaveTime } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/ListSaveTime',
  component: ListSaveTime,
  tags: ['autodocs'],
} satisfies Meta<typeof ListSaveTime>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    saveTimes : [
      {
        id: "1",
        imageSrc: "/src/assets/images/save-time/save-time-simple-way.svg",
        title: "Use a simple way",
        desc: "We're a growing family of 382,081 designers and makers from around the world",
      },
      {
        id: "2",
        imageSrc: "/src/assets/images/save-time/save-time-productivity.svg",
        title: "A productivity platform",
        desc: "We're a growing family of 382,081 designers and makers from around the world",
      },
      {
        id: "3",
        imageSrc: "/src/assets/images/save-time/save-time.svg",
        title: "Save your time",
        desc: "We're a growing family of 382,081 designers and makers from around the world",
      },
    ],
  },
};
