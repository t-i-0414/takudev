import React from 'react';
import { Logo } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof Logo>;

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    href: '#',
  },
} as ComponentMeta<typeof Logo>;

export const DarkBackground: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.logo',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div
          style={{ backgroundColor: 'var(--header-color)', height: '100vh' }}
        >
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const LightBackground: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.logo',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div
          style={{ backgroundColor: 'var(--header-color)', height: '100vh' }}
        >
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
