import React from 'react';

import { HamburgerButton } from './HamburgerButton';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    ariaLabel: {
      table: {
        disable: true,
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = args => (
  <HamburgerButton {...args} />
);

export const Light: ComponentStory<typeof HamburgerButton> = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof HamburgerButton> = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
