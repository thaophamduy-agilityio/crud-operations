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
    value: '',
    placeholder: 'Search books',
    className: 'input input-search',
    type: 'text',
    isRequire: false,
  },
};

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'text',
    className: 'input input-default',
    labelName: 'Input name',
    type: 'text',
    isRequire: false,
  },
};

export const Upload: Story = {
  args: {
    value: '',
    className: 'input',
    labelName: 'Upload Photo',
    type: 'file',
  },
};
