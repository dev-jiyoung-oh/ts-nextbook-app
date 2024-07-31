import { Meta, StoryObj } from '@storybook/react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './'

export default {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'text' },
      description: '아이콘 색상',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: '아이콘 크기',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClick 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  // defaultValue 대신~
  args: {
    size: 24,
  }
} as Meta<typeof SearchIcon> // TODO https://velog.io/@oinkpig/Typescript-unknown%EC%9D%98-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%9A%A9%EB%8F%84

type Template = StoryObj<typeof SearchIcon>;

const Default: Template = {
  render: (args) => (
    <>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
    </>
  )
}

export const Normal:Template = {
  ...Default
}
