import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filter: Story = {
  args: {
    className: 'btn-filter',
    label: 'Filter',
  },
};

export const SortAlphabet: Story = {
  args: {
    className: 'btn-sort',
    label: 'Alphabetical Order',
  },
};

export const SortOrder: Story = {
  args: {
    className: 'btn-sort',
    label: 'Release Year',
  },
};

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    className: 'btn-secondary',
    label: 'Button',
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: 'primary-outline',
    label: 'Button',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'secondary-outline',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: 'Button',
  },
};
