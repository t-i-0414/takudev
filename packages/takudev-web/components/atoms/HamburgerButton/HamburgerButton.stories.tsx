import React from 'react';
import { HamburgerButton } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    onClick: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = args => (
  <div style={{ backgroundColor: 'var(--header-color)' }}>
    <HamburgerButton {...args} />
  </div>
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
        hover: 'button.hamburger-button',
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
        hover: 'button.hamburger-button',
      },
    },
  },
};
