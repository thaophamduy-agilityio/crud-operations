import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    showModal: false,
    closeModal: () => {
      ('');
    },
    toggleThemeModal: () => {
      ('');
    },
    isThemeModal: false,
    book: {
      title: 'Angels and demons',
      description:
        'Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Incididunt quis mollit elit commodo cillum eiusmod reprehenderit labore irure.',
      author: 'Stuart Matt',
      image: 'https://picsum.photos/200/200',
      published: '2021',
      publishers: 'Hollman',
    },
    children: 'Modal content here!',
  },
};
