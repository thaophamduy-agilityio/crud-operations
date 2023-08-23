import type { Meta, StoryObj } from '@storybook/react';

import { FeatureItem } from './';

const meta = {
  title: 'Example/FeatureItem',
  component: FeatureItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const History: Story = {
  args: {
    classItem: "history",
      srcSet: {
        desktop: {
          img: '/src/assets/images/history/history-desktop.webp',
          img2x: '/src/assets/images/history/history-desktop-2x.webp',
        },
        tablet: {
          img: '/src/assets/images/history/history-tablet.webp',
          img2x: '/src/assets/images/history/history-tablet-2x.webp',
        },
      },
      imageSrc: {
        mobile: {
          img: '/src/assets/images/history/history-mobile.webp',
          img2x: '/src/assets/images/history/history-mobile-2x.webp',
        }
      },
      imageSize: {
        width:424,
        height:302
      },
      subTitle: "Easily find what you're looking for",
      title: "History you can see & search",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
      labelButton: "Learn more",
      onClick: () => {},
  },
};
