import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DisplayGrid: Story = {
  args: {
    className: 'btn btn-display-grid',
  },
};

export const DisplayList: Story = {
  args: {
    className: 'btn btn-display-list',
  },
};

export const CloseModal: Story = {
  args: {
    className: 'btn btn-close-modal',
  },
};

export const CloseMenu: Story = {
  args: {
    className: 'btn btn-close-menu',
  },
};

export const Hamburger: Story = {
  args: {
    className: 'btn btn-hamburger',
  },
};
