import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Navigation',
  component: Navigation,
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    links: [
      { id: "downloads", label: "Downloads", url: "/downloads" },
      { id: "pricing", label: "Pricing", url: "/pricing" },
      { id: "features", label: "Features", url: "/features" },
      { id: "aboutUs", label: "About Us", url: "/about-us" },
      { id: "contact", label: "Contact", url: "/contact" },
    ],
  },
};
