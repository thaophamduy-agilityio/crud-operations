import type { Meta, StoryObj } from "@storybook/react";

// Components
import Avatar from "./Avatar";

const meta = {
  title: "Components/Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { description: "Width & Height of avatar" },
    person: {
      name: "Alt of avatar",
      imageId: "Source of avatar"
    },
  },
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarSmall: Story = {
  args: {
    size: 40,
    person: { 
      name: 'Lin Lanying',
      imageId: '1bX5QH6'
    }
  },
};

export const AvatarMedium: Story = {
  args: {
    size: 80,
    person: { 
      name: 'Aklilu Lemma', 
      imageId: 'OKS67lh'
    }
  },
};

export const AvatarLarge: Story = {
  args: {
    size: 160,
    person: { 
      name: 'Katsuko Saruhashi', 
      imageId: 'YfeOqp2'
    }
  },
};
