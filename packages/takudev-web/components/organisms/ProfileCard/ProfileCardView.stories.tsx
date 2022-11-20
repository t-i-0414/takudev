import React from 'react';
import { ProfileCard } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof ProfileCard>;

export default {
  title: 'Organisms/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

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
