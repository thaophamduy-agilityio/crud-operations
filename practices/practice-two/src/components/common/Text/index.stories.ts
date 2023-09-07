import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const XSmall: Story = {
  args: {
    size: 'xs',
    text: 'The best way to organize your work.'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    text: 'The best way to organize your work.'
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    text: 'The best way to organize your work.'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    text: 'The best way to organize your work.'
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    text: 'The best way to organize your work.'
  },
};

export const XXLarge: Story = {
  args: {
    size: 'xxl',
    text: 'The best way to organize your work.'
  },
};

export const XXXLarge: Story = {
  args: {
    size: 'xxxl',
    text: 'The best way to organize your work.'
  },
};
