/* eslint-disable react/jsx-key */
import { type Meta, type StoryObj } from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react'
import { TextInput, type TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Digite seu enredeço de e-mail" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Digite seu endereço de e-mail" />
  }
}
