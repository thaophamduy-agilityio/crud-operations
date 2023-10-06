import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Try it free',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    isShowLeftButton: true,
    label: 'Watch how it works',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: 'Button',
  },
};
