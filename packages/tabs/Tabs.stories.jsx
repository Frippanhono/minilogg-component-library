import React from 'react';
import { Tabs } from './ui/index.jsx';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};


const defaultTabs = [
  { label: 'Tab 1', content: 'Content 1' },
  { label: 'Tab 2', content: 'Content 2' },
  { label: 'Tab 3', content: 'Content 3' },
];

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: defaultTabs,
};

export const Customizable = Template.bind({});
Customizable.args = {
  tabs: [
    { label: 'First', content: 'First content' },
    { label: 'Second', content: 'Second content' },
    { label: 'Third', content: 'Third content' },
  ],
};
Customizable.argTypes = {
  tabs: {
    control: 'object',
    description: 'Array of tab objects',
  },
};
