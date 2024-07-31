import { Meta, StoryObj } from '@storybook/react'
import ShapeImage from './index'
export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '이미지 형태',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '가로폭',
      defaultValue : 320, // 동작 안함
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '세로폭',
      defaultValue: 320, // 동작 안함
      table: {
        type: { summary: 'number' },
      },
    },
  },
  // defaultValue 대신~
  args: {
    shape: 'square',
    width: '320',
    height: '320',
  },
} as Meta<typeof ShapeImage>

type Template = StoryObj<typeof ShapeImage>;

const Default: Template = {
  render: (args) => (
    <ShapeImage {...args} />
  )
}

export const Circle = {
  ...Default,
  args: { src: '/images/sample/1.jpg', shape: 'circle'},
}

export const Square = {
  ...Default,
  args: { src: '/images/sample/1.jpg', shape: 'square' },
}

export const Test = {
  args:{
    src:"/images/sample/1.jpg",
    shape:"square",
    width:320,
    height:320
  },

  ...Default
};
