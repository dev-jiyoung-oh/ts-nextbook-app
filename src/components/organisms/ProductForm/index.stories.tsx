import { Meta, StoryObj } from '@storybook/react'
import ProductForm from './index'

export default {
  title: 'Organisms/ProductForm',
  argTypes: {
    onProductSave: {
      description: '등록 버튼을 클릭했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof ProductForm>

type Template = StoryObj<typeof ProductForm>;

const Default: Template = {
  render: (args) => (
    <ProductForm {...args} />
  )
}

export const Form: Template = {
  ...Default,
}