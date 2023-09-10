import React from 'react';

import { TextTagList } from '.';

import type { StoryObj, Meta } from '@storybook/react';

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
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', padding: '16px' }}>
        <Story {...context.args} />
      </div>
    ),
  ],
} as Meta<typeof TextTagList>;

export const Default: StoryType = {};
