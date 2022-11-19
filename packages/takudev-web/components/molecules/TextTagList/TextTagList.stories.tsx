import React from 'react';
import { TextTagList } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof TextTagList>;

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
} as ComponentMeta<typeof TextTagList>;

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
