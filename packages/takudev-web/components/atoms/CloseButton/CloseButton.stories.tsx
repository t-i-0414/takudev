import React from 'react';
import { CloseButton } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof CloseButton>;

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

export const Light: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.close-button',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.close-button',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
};
