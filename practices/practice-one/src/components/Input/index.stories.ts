import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Search: Story = {
  args: {
    search: true,
    type: 'text',
    placeholder: 'Search books',
    required: false,
  },
};

export const Default: Story = {
  args: {
    labelName: 'Input name',
    type: 'text',
    placeholder: 'text',
    required: false,
  },
};

export const Upload: Story = {
  args: {
    labelName: 'Upload Photo',
    type: 'file',
  },
};
