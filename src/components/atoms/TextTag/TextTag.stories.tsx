import React from 'react';

import { TextTag } from '.';

import type { StoryObj, Meta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

type StoryType = StoryObj<typeof TextTag>;

export default {
  title: 'Atoms/TextTag',
  component: TextTag,
  argTypes: {
    text: {
      control: 'text',
    },
  },
  args: {
    text: 'TextTag',
  },
} as Meta<typeof TextTag>;

export const Light: StoryType = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '16px' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '16px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
