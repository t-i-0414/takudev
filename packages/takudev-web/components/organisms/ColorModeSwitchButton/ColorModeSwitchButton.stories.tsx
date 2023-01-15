import React from 'react';
import { ColorModeSwitchButton } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof ColorModeSwitchButton>;

export default {
  title: 'Organisms/ColorModeSwitchButton',
  component: ColorModeSwitchButton,
} as ComponentMeta<typeof ColorModeSwitchButton>;

export const Light: StoryType = {
  decorators: [
    Story => (
      <LightThemeTemplate>
        <div style={{ backgroundColor: 'var(--header-color)' }}>
          <Story />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: StoryType = {
  decorators: [
    Story => (
      <DarkThemeTemplate>
        <div style={{ backgroundColor: 'var(--header-color)' }}>
          <Story />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
