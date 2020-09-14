// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button } from '../components/utils/Button';
import Switch from '../components/utils/Switch';

export default {
  title: 'Switch',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<{}> = (args) => <Switch {...args} />;

export const SwitchON = Template.bind({});
SwitchON.args = {
  checked: true,
  name: 'checked',
};

export const SwitchOFF = Template.bind({});
SwitchOFF.args = {
  checked: false,
  name: 'unchecked',
};
