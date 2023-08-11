import type { Meta, StoryObj } from '@storybook/react';

import { Testimonial } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    testimonials: [
      {
        "id": "1",
        "desc": "Solo makes life easier to me. With Solo you can organize your work and life in seconds. 5 stars!!!",
        "ratingNumber": 5,
        "author": "Jaida Barton",
        "title": "Visual Designer at UI8"
      },
      {
        "id": "2",
        "desc": "Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete.",
        "ratingNumber": 5,
        "author": "Jedidiah Cassin",
        "title": "via. Google Play"
      },
      {
        "id": "3",
        "desc": " I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!",
        "ratingNumber": 5,
        "author": "Fae Schumm",
        "title": "via. Apple Store"
      },
    ],
  },
};
