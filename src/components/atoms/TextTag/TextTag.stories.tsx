import React from 'react';

import { TextTag } from '.';

import type { StoryObj, Meta } from '@storybook/react';

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
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', padding: '16px' }}>
        <Story {...context.args} />
      </div>
    ),
  ],
} as Meta<typeof TextTag>;

export const Default: StoryType = {};
