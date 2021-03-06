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

const Template: ComponentStory<typeof MenuModal> = args => (
  <>
    <div id={MENU_MODAL_ROOT_ELEMENT_ID} />
    <MenuModal {...args} />
  </>
);

export const Light = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <div
        style={{ width: '100%', height: '100vh', backgroundColor: '#4f4f4f' }}
      >
        <Story {...context.args} />
      </div>
    </LightThemeTemplate>
  ),
];

export const Dark = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <div
        style={{ width: '100%', height: '100vh', backgroundColor: '#4f4f4f' }}
      >
        <Story {...context.args} />
      </div>
    </DarkThemeTemplate>
  ),
];
