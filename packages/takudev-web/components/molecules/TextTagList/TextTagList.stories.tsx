import React from 'react';
import { TextTagList } from '.';
import type { StoryObj, Meta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = StoryObj<typeof TextTagList>;

export default {
  title: 'Molecules/TextTagList',
  component: TextTagList,
  argTypes: {
    tagList: {
      control: 'object',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
  },
  args: {
    tagList: ['one', 'two', 'three', 'four', 'five'],
  },
} as Meta<typeof TextTagList>;

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
