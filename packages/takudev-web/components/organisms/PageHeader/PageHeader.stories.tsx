import React from 'react';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import { PageHeader } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof PageHeader>;

export default {
  title: 'Organisms/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

export const Light: StoryType = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div id={MENU_MODAL_ROOT_ELEMENT_ID} />

        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div id={MENU_MODAL_ROOT_ELEMENT_ID} />

        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
};
