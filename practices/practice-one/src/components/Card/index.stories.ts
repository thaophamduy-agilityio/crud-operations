import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    loading: 'lazy',
    width: 200,
    viewBook: 'item',
    book: {
      title: 'Angels and demons',
      description: 'Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum.',
      author: 'Stuart Matt',
      imageSmall: 'https://picsum.photos/200/200',
      imageMedium: 'https://picsum.photos/400/400',
      published: '2021',
      publishers: 'Hollman',
    },
  },
};
