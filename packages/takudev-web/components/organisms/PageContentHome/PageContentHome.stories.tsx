import React from 'react';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import { PageContentHome } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/PageContentHome',
  component: PageContentHome,
} as ComponentMeta<typeof PageContentHome>;

const Template: ComponentStory<typeof PageContentHome> = () => (
  <PageContentHome />
);

export const Light = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
