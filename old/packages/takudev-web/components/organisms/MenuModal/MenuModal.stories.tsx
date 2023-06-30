import React from 'react';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import { MenuModal } from '.';
import type { StoryObj, Meta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = StoryObj<typeof MenuModal>;

export default {
  title: 'Organisms/MenuModal',
  component: MenuModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    isClose: { control: 'boolean' },
    ariaLabelledBy: { control: 'text' },
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
    ariaLabelledBy: 'hamburger-button',
  },
} as Meta<typeof MenuModal>;

export const Light: StoryType = {
  parameters: {
    screenshot: {
      delay: 1000,
    },
  },
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
  parameters: {
    screenshot: {
      delay: 1000,
    },
  },
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
