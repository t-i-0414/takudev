import { PageFooter } from '.';

import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof PageFooter>;

export default {
  title: 'Organisms/PageFooter',
  component: PageFooter,
} as Meta<typeof PageFooter>;

export const Default: StoryType = {};
