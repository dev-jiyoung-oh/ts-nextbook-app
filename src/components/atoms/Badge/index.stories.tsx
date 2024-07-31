import { Meta, StoryObj } from '@storybook/react'
import Badge from './index'

export default {
  title: 'Atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '배지 테스트',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배지 색상',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof Badge>

type Template = StoryObj<typeof Badge>;

const Default: Template = {
  render: (args) => <Badge {...args} />,
};

export const Orange:Template = {
  ...Default,
  args: { content: '1', backgroundColor: '#ed9f28' }
}

export const Green:Template = {
  ...Default,
  args: { content: '2', backgroundColor: '#32bf00' }
}

export const Red:Template = {
  ...Default,
  args: { content: '10', backgroundColor: '#d4001a' }
}