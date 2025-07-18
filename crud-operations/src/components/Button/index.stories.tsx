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
        onClick: () => console.log('Buton clicked'),
    },
};

export const PrimaryOutline: Story = {
    args: {
        label: 'Button',
        variant: 'outline',
        onClick: () => console.log('Buton clicked'),
    },
};

export const Small: Story = {
    args: {
        label: 'Button',
        size: 'small',
        onClick: () => console.log('Buton clicked'),
    },
};

export const Large: Story = {
    args: {
        label: 'Button',
        size: 'large',
        onClick: () => console.log('Buton clicked'),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Button',
        isDisabled: true,
        onClick: () => console.log('Buton clicked'),
    },
};