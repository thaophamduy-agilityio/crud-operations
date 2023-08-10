import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Image',
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    imageSrc: 'https://picsum.photos/200/200',
    altText: 'image',
    size: {
      width: 200,
      height: 200
    }
  },
};
