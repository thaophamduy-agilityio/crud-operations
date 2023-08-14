import type { Meta, StoryObj } from '@storybook/react';

import { LogoBrand } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/LogoBrand',
  component: LogoBrand,
  tags: ['autodocs'],
} satisfies Meta<typeof LogoBrand>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    logos: [
      {
        id: "1",
        srcSet: "/src/assets/images/brand/logo-rota-show-2x.webp",
        imageSrc: "/src/assets/images/brand/logo-rota-show.webp",
      },
      {
        id: "2",
        srcSet: "/src/assets/images/brand/logo-wares-2x.webp",
        imageSrc: "/src/assets/images/brand/logo-wares.webp",
      },
      {
        id: "3",
        srcSet: "/src/assets/images/brand/logo-rota-show-2x.webp",
        imageSrc: "/src/assets/images/brand/logo-rota-show.webp",
      },
      {
        id: "4",
        srcSet: "/src/assets/images/brand/logo-travelers-2x.webp",
        imageSrc: "/src/assets/images/brand/logo-travelers.webp",
      },
      {
        id: "5",
        srcSet: "/src/assets/images/brand/logo-gold-lines-2x.webp",
        imageSrc: "/src/assets/images/brand/logo-gold-lines.webp",
      },
      {
        id: "6",
        srcSet: "/src/assets/images/brand/logo-velocity-2x.webp",
        imageSrc: "/src/assets/images/brand/logo-velocity-2x.webp",
      },
    ],
  },
};
