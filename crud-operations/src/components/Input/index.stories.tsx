import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Common/Input',
  component: Input,
  tags: ['autodocs'],
  } satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Email',
    name: 'email',
    id: 'email',
    value: '',
    placeholder: 'Enter your email',
    additionalClasses: 'input input-default',
    type: 'text',
  },
};

export const Search: Story = {
  args: {
    name: 'search',
    id: 'search',
    value: '',
    placeholder: 'Search...',
    additionalClasses: 'input input-search',
    type: 'search',
  },
};

export const Checkbox: Story = {
  args: {
    label: 'Remember me',
    name: 'checkbox',
    id: 'checkbox',
    value: '',
    type: 'checkbox',
  },
};

export const Radio: Story = {
  args: {
    label: 'Select option',
    name: 'radio',
    id: 'radio',
    value: '',
    type: 'radio',
  },
};
