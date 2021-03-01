import '../src/styles/index.scss'
import {withInfo} from '@storybook/addon-info'
import {addDecorator} from '@storybook/react'

addDecorator(withInfo)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}