import { CloseButton } from '.';

import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof CloseButton>;

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
} as Meta<typeof CloseButton>;

export const Default: StoryType = {
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.close-button',
        },
      },
    },
  },
};
