// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Button from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Common/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { description: "lable of button" },
        variant: { description: "variant of button" },
        isDisabled: { description: "set button disabled or not" },
        onClick: { description: "call to submit" },
    },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        onClick: () => {},
    },
};

export const PrimaryOutline: Story = {
    args: {
        label: 'Button',
        variant: 'outline',
        onClick: () => {},
    },
};

export const Small: Story = {
    args: {
        label: 'Button',
        size: 'small',
        onClick: () => {},
    },
};

export const Large: Story = {
    args: {
        label: 'Button',
        size: 'large',
        onClick: () => {},
    },
};

export const Disabled: Story = {
    args: {
        label: 'Button',
        isDisabled: true,
        onClick: () => {},
    },
};