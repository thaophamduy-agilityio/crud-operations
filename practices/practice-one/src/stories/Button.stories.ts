import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filter: Story = {
  args: {
    filter: true,
    sort: false,
    label: 'Filter',
  },
};

export const DisplayGrid: Story = {
  args: {
    filter: false,
    display: 'grid',
    sort: false,
    label: '',
  },
};

export const DisplayList: Story = {
  args: {
    filter: false,
    display: 'list',
    sort: false,
    label: '',
  },
};

export const SortAlphabet: Story = {
  args: {
    filter: false,
    sort: true,
    label: 'Alphabetical Order',
  },
};

export const SortOrder: Story = {
  args: {
    filter: false,
    sort: true,
    label: 'Release Year',
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
