import { Meta, StoryObj } from '@storybook/react'
import SigninForm from './index'

export default {
  title: 'Organisms/SigninForm',
  argTypes: {
    onSignin: {
      description: '로그인 버튼을 클릭했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof SigninForm>

type Template = StoryObj<typeof SigninForm>;

const Default: Template = {
  render: (args) => (
  <SigninForm {...args} />
)
}

export const Form: Template = {
  ...Default,
}