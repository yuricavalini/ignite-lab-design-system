import { type Meta, type StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Criar conta'
  },
  argTypes: { }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
