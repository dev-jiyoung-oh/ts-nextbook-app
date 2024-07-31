import { Meta, StoryObj } from '@storybook/react'
import RectLoader from './index'

export default {
  title: 'Atoms/RectLoader',
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '세로폭',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
  // defaultValue 대신~
  args: {
    width: 320,
    height: 320,
  },
} as Meta<typeof RectLoader>

type Template = StoryObj<typeof RectLoader>;

const Default: Template = {
  render: (args) => (
    <RectLoader {...args} />
  )
}

export const Normal = {
  ...Default
}