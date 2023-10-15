import React from 'react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '../../../../.storybook/ColorThemeTemplates';
import { HamburgerButton } from '.';
import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof HamburgerButton>;

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
} as Meta<typeof HamburgerButton>;

export const DarkBackground: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.hamburger-button',
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
          hover: 'button.hamburger-button',
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
