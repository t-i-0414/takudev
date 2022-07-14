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
    color: {
      control: {
        type: 'color',
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
  <div style={{ backgroundColor: 'var(--header-color)' }}>
    <HamburgerButton {...args} />
  </div>
);

export const Light: ComponentStory<typeof HamburgerButton> = Template.bind({});
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
          hover: 'button.hamburger-button',
        },
      },
    },
  },
};

export const Dark: ComponentStory<typeof HamburgerButton> = Template.bind({});
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
          hover: 'button.hamburger-button',
        },
      },
    },
  },
};
