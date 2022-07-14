import React from 'react';
import { Logo } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => (
  <div style={{ backgroundColor: 'var(--header-color)' }}>
    <Logo href='#' />
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
        hover: 'a.logo',
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
        hover: 'a.logo',
      },
    },
  },
};
