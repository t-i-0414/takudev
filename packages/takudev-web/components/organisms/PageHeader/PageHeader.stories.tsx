import React from 'react';

import { PageHeaderPresentation } from './PageHeaderPresentation';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/PageHeader',
  component: PageHeaderPresentation,
  argTypes: {
    hrefToHome: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PageHeaderPresentation>;

const Template: ComponentStory<typeof PageHeaderPresentation> = args => (
  <PageHeaderPresentation {...args} />
);

export const Light: ComponentStory<typeof PageHeaderPresentation> =
  Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof PageHeaderPresentation> =
  Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
