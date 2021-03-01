import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from '@storybook/addon-actions'

import Button,{ ButtonProps,ButtonType,ButtonSize } from './button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} onClick={action('123')}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  className: 'test1',
  btnType: ButtonType.Primary,
  disabled:false,
  size:ButtonSize.Large,
  href:'',
};