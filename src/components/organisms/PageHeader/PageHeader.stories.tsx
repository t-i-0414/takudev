import React from 'react';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '../../../../.storybook/ColorThemeTemplates';
import { PageHeader } from '.';
import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof PageHeader>;

export default {
  title: 'Organisms/PageHeader',
  component: PageHeader,
} as Meta<typeof PageHeader>;

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
