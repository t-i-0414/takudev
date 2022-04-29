import React from 'react';

import { CloseButton } from './CloseButton';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      control: { type: 'number', min: 0, max: 48, step: 1 },
    },
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
  args: {
    size: 18,
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => (
  <CloseButton {...args} />
);
Template.argTypes = {
  size: {
    control: { type: 'number', min: 1, max: 48, step: 1 },
  },
};

export const Light: ComponentStory<typeof CloseButton> = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof CloseButton> = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
