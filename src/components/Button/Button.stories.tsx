// Button.stories.ts | Button.stories.tsx

import { Story, Meta } from '@storybook/react';
import {Button, Buttonprops } from '.';


export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<Buttonprops> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};