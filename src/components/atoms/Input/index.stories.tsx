import { Meta, StoryObj } from '@storybook/react'
import Input from './index'

export default {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: '보더 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '배리에이션 에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  // defaultValue 대신~
  args: {
    hasBorder: true,
    hasError: false,
  }
} as Meta<typeof Input>

type Template = StoryObj<typeof Input>;

const Default: Template = {
  render: (args) => <Input {...args} />
}

export const Normal: Template = {
  ...Default,
}

export const Error: Template = {
  ...Default,
  args: { hasError: true }
}

/* 책
export const Normal = Template.bind({})

export const Error = Template.bind({})
Error.args = { hasError: true }
*/