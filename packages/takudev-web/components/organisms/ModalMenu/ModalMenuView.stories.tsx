import React from 'react';

import { MODAL_MENU_ROOT_ELEMENT_ID } from '~/consts';

import { ModalMenu } from '.';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/ModalMenu',
  component: ModalMenu,
} as ComponentMeta<typeof ModalMenu>;

const Template: ComponentStory<typeof ModalMenu> = () => (
  <>
    <div id={MODAL_MENU_ROOT_ELEMENT_ID} />
    <ModalMenu />
  </>
);

export const Light: ComponentStory<typeof ModalMenu> = Template.bind({});
Light.decorators = [
  Story => (
    <LightThemeTemplate>
      <Story />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof ModalMenu> = Template.bind({});
Dark.decorators = [
  Story => (
    <DarkThemeTemplate>
      <Story />
    </DarkThemeTemplate>
  ),
];
