import React from 'react';
import { Dropdown } from './ui/index.jsx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};



const defaultItems = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Archive', value: 'archive' },
  { label: 'Delete', value: 'delete', disabled: true },
];

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: defaultItems,
  label: 'Choose action',
};

export const Customizable = Template.bind({});
Customizable.args = {
  items: [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
    { label: 'Fourth', value: 'fourth' },
  ],
  label: 'Custom label',
};
Customizable.argTypes = {
  items: {
    control: 'object',
    description: 'Array of dropdown items',
  },
  label: {
    control: 'text',
    description: 'Button label',
  },
};
