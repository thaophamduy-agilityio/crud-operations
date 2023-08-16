import type { Meta, StoryObj } from '@storybook/react';

import { IntegrationLogo } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/IntegrationLogo',
  component: IntegrationLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof IntegrationLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    imageSrc: '/src/assets/images/integration-logo/logo-google.svg',
    altText: 'Logo Google',
    size: {
      width: 75,
      height: 75
    }
  },
};
