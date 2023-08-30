import React from 'react';

import { ProfileIcon } from '.';

import type { StoryObj, Meta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/ProfileIcon',
  component: ProfileIcon,
} as Meta<typeof ProfileIcon>;

type StoryType = StoryObj<typeof ProfileIcon>;

export const Light: StoryType = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
};
