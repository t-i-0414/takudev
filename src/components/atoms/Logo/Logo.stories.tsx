import React from 'react';

import { Logo } from '.';

import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof Logo>;

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    href: '#',
  },
  decorators: [
    (Story, context) => (
      <div style={{ backgroundColor: '#000', height: '100vh' }}>
        <Story {...context.args} />
      </div>
    ),
  ],
} as Meta<typeof Logo>;

export const Default: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.logo',
        },
      },
    },
  },
};
