import { ProfileIcon } from '.';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Atoms/ProfileIcon',
  component: ProfileIcon,
} as Meta<typeof ProfileIcon>;

type StoryType = StoryObj<typeof ProfileIcon>;

export const Default: StoryType = {};
