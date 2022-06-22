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
  argTypes: {
    href: { control: 'text', defaultValue: '#', table: { disable: true } },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => (
  <div style={{ backgroundColor: 'var(--header-color)' }}>
    <Logo {...args} />
  </div>
);

export const Light: ComponentStory<typeof Logo> = Template.bind({});
Light.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.logo',
        },
      },
    },
  },
};

export const Dark: ComponentStory<typeof Logo> = Template.bind({});
Dark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.logo',
        },
      },
    },
  },
};
