import React from 'react';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import { MenuModal } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof MenuModal>;

export default {
  title: 'Organisms/MenuModal',
  component: MenuModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    isClose: { control: 'boolean' },
    onClickCloseButton: {
      action: 'onClickCloseButton',
      table: {
        disable: true,
      },
    },
  },
  args: {
    isOpen: true,
    isClose: false,
  },
} as ComponentMeta<typeof MenuModal>;

export const Light: StoryType = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div
          style={{ width: '100%', height: '100vh', backgroundColor: '#4f4f4f' }}
        >
          <div id={MENU_MODAL_ROOT_ELEMENT_ID} />

          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div
          style={{ width: '100%', height: '100vh', backgroundColor: '#4f4f4f' }}
        >
          <div id={MENU_MODAL_ROOT_ELEMENT_ID} />

          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
