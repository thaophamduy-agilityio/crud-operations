import type { Meta, StoryObj } from "@storybook/react";

// Components
import ListItems from "./ListItems";

const meta = {
  title: "Components/UseState/ListItems",
  component: ListItems,
  tags: ["autodocs"],
  argTypes: {
    items: [{
      id: { description: "Id of item" },
      name: { description: "Name of item" },
      description: { description: "Description of item" },
    },]
  },
} as Meta<typeof ListItems>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items : [{
      id: 0,
      name: 'Sushi',
      description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
    }, {
      id: 1,
      name: 'Dal',
      description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
    }, {
      id: 2,
      name: 'Pierogi',
      description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
    }, {
      id: 3,
      name: 'Shish kebab',
      description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
    }, {
      id: 4,
      name: 'Dim sum',
      description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
    }]
  },
};
