import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions'

import Input,{InputProps} from './input'

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} onChange={action('123')}></Input>;

export const Primary = Template.bind({});
Primary.args = {
  size:'lg',
  prepend:'www',
};