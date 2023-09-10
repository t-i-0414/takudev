import React from 'react';

import { SnsIcon } from '.';

import type { StoryObj, Meta } from '@storybook/react';

import { colorPaletteMapKeyList } from '~/consts';

type StoryType = StoryObj<typeof SnsIcon>;

export default {
  title: 'Atoms/SnsIcon',
  component: SnsIcon,
  argTypes: {
    type: {
      control: 'select',
      options: ['github', 'twitter', 'facebook', 'linkedin', 'rss'],
    },
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    type: 'github',
    colorName: 'subLabelColor',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', padding: '20px' }}>
        <Story {...context.args} />
      </div>
    ),
  ],
} as Meta<typeof SnsIcon>;

export const Github: StoryType = {
  args: {
    type: 'github',
  },
};

export const Twitter: StoryType = {
  args: {
    type: 'twitter',
  },
};

export const Facebook: StoryType = {
  args: {
    type: 'facebook',
  },
};

export const Linkedin: StoryType = {
  args: {
    type: 'linkedin',
  },
};

export const Rss: StoryType = {
  args: {
    type: 'rss',
  },
};
