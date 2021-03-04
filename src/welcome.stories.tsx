import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'Welcome page',
} as Meta;

const Template: Story = (args) => {
  return (
    <>
      <h1>欢迎来到 omg-view 组件库</h1>
      <h3>安装试试</h3>
      <code>
        npm install img-view --save
      </code>
    </>
  )
};

export const Primary = Template.bind({});
