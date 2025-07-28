// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Text from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Common/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        children: { description: "content of text" },
        type: { description: "tag of text" },
        size: { description: "size of text" },
        additionalClasses: { description: "class custom style of text" },
  },

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SM: Story = {
    args: {
        children: 'Karthi Madesh',
        type: 'p',
        size: 'sm',
    },
};

export const MD: Story = {
    args: {
        children: 'Karthi Madesh',
        type: 'p',
        size: 'md',
    },
};

export const lg: Story = {
    args: {
        children: 'Karthi Madesh',
        type: 'p',
        size: 'lg',
    },
};

export const XL: Story = {
    args: {
        children: 'Karthi Madesh',
        type: 'p',
        size: 'xl',
    },
};

export const XXL: Story = {
    args: {
        children: 'Karthi Madesh',
        type: 'p',
        size: '2xl',
    },
};

export const XXXL: Story = {
    args: {
        children: 'Karthi Madesh',
        type: 'p',
        size: '3xl',
    },
};
