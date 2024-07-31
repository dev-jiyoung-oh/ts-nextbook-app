//import { Meta, StoryObj } from '@storybook/react'
import { Meta, StoryObj } from '@storybook/react'
import Button from './index'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      // docs에 표시할 내용을 설정
      description: '버튼 변형',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: '버튼 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabled 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '버튼 세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '버튼 가로폭',
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
    variant: 'primary',
    children: 'Button',
    disabled: false,
  }
} as Meta<typeof Button>

type Template = StoryObj<typeof Button>;

const Default: Template = {
  render: (args) => <Button {...args} />,
};

// Primary 버튼
/* 책 버전
export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Primary Button' }
*/
export const Primary: Template = {
  ...Default,
  args: { variant: 'primary', children: 'Primary Button' }
}

// Secondary 버튼
/* 책 버전
export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', children: 'Secondary Button' }
*/
export const Secondary: Template = {
  ...Default,
  args: { variant: 'secondary', children: 'Secondary Button' }
}

// Disabled 버튼
/* 책 버전
export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: 'Disabled Button' }
*/
export const Disabled: Template = {
  ...Default,
  args: { disabled: true, children: 'Disabled Button' }
}

// https://storybook.js.org/docs/api/csf 참고해서 수정