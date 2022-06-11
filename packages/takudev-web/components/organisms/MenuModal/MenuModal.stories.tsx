import React from 'react';

import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';

import { MenuModal } from '.';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/MenuModal',
  component: MenuModal,
} as ComponentMeta<typeof MenuModal>;

const Template: ComponentStory<typeof MenuModal> = () => (
  <>
    <div id={MENU_MODAL_ROOT_ELEMENT_ID} />
    <MenuModal />
  </>
);

export const Light: ComponentStory<typeof MenuModal> = Template.bind({});
Light.decorators = [
  Story => (
    <LightThemeTemplate>
      <Story />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof MenuModal> = Template.bind({});
Dark.decorators = [
  Story => (
    <DarkThemeTemplate>
      <Story />
    </DarkThemeTemplate>
  ),
];
