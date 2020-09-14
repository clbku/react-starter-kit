import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, IconButton } from '../components/utils/Button';
import AlarmIcon from '@material-ui/icons/Alarm';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const ButtonTemplate: Story<{}> = (args) => <Button {...args}>Button</Button>;
const IconButtonTemplate: Story<{}> = (args) => (
  <IconButton {...args}>
    <AlarmIcon></AlarmIcon>
  </IconButton>
);
export const MainButton = ButtonTemplate.bind({});
MainButton.args = {};
export const MainIconButton = IconButtonTemplate.bind({});
MainIconButton.args = {};
