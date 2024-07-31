import { Meta, StoryObj } from '@storybook/react'
import ScaleImage from './index'

export default {
  title: 'Atoms/ScaleImage',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '이미지 가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '이미지 세로폭',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    containerWidth: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    conatinerHeight: {
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
    containerWidth: 320,
    conatinerHeight: 320,
  },
} as Meta<typeof ScaleImage>

type Template = StoryObj<typeof ScaleImage>;

const Default: Template = {
  render: (args) => (
    <ScaleImage {...args} />
  )
}

export const Normal = {
  ...Default,
  args: { src: '/images/sample/1.jpg'}
}
