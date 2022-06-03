import React from 'react';

import { PageHeaderView } from './PageHeaderView';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/PageHeader',
  component: PageHeaderView,
  argTypes: {
    hrefToHome: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PageHeaderView>;

const Template: ComponentStory<typeof PageHeaderView> = args => (
  <PageHeaderView {...args} />
);

export const Light: ComponentStory<typeof PageHeaderView> = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof PageHeaderView> = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
