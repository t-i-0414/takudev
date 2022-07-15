import React from 'react';
import { CloseButton } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      control: { type: 'number', min: 0, max: 48, step: 1 },
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

export const Light = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
Light.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'button.close-button',
      },
    },
  },
};

export const Dark = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
Dark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'button.close-button',
      },
    },
  },
};
