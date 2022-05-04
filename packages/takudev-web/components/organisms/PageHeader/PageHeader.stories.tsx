import React from 'react';

import { PageHeader } from '.';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  argTypes: {
    hrefToHome: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = args => (
  <PageHeader {...args} />
);

export const Light: ComponentStory<typeof PageHeader> = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof PageHeader> = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
