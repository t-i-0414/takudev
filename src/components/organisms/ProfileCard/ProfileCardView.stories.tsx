import { ProfileCard } from '.';

import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof ProfileCard>;

export default {
  title: 'Organisms/ProfileCard',
  component: ProfileCard,
} as Meta<typeof ProfileCard>;

export const Default: StoryType = {};
