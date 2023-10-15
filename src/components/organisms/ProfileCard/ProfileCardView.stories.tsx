import React from 'react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '../../../../.storybook/ColorThemeTemplates';
import { ProfileCard } from '.';
import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof ProfileCard>;

export default {
  title: 'Organisms/ProfileCard',
  component: ProfileCard,
} as Meta<typeof ProfileCard>;

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
