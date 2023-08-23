import { PageFooter } from '.';

import type { StoryObj, Meta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = StoryObj<typeof PageFooter>;

export default {
  title: 'Organisms/PageFooter',
  component: PageFooter,
} as Meta<typeof PageFooter>;

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
