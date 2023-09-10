import React from 'react';

import { SnsIconList } from '.';

import type { StoryObj, Meta } from '@storybook/react';

import { colorPaletteMapKeyList } from '~/consts';

type StoryType = StoryObj<typeof SnsIconList>;

export default {
  title: 'Molecules/SnsIconList',
  component: SnsIconList,
  argTypes: {
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    colorName: 'subLabelColor',
  },
  decorators: [
    (Story, context) => (
      <div style={{ padding: '20px', width: '300px' }}>
        <Story {...context.args} />
      </div>
    ),
  ],
} as Meta<typeof SnsIconList>;

export const Default: StoryType = {};
