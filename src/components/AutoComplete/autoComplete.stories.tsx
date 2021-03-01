import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import AutoComplete,{ AutoCompleteProps } from './autocomplete';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
} as Meta;

 const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ]

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args}></AutoComplete>;

const handleFetch = (query:string) =>{
  return lakersWithNumber.filter(item=>item.value.includes(query))
}

export const Complete = Template.bind({});
Complete.args = {
  value:'',
  fetchSuggestions:handleFetch,
  onSelect:()=>{}
};