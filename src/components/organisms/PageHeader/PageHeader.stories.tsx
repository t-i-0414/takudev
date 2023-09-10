import { PageHeader } from '.';

import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof PageHeader>;

export default {
  title: 'Organisms/PageHeader',
  component: PageHeader,
} as Meta<typeof PageHeader>;

export const Default: StoryType = {};
