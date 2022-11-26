import React from 'react';
import { colorPaletteMapKeyList } from '~/consts';
import { SnsIconList } from '.';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

type StoryType = ComponentStoryObj<typeof SnsIconList>;

export default {
  title: 'Molecules/SnsIconList',
  component: SnsIconList,
  argTypes: {
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    colorName: 'subLabelColor',
  },
} as ComponentMeta<typeof SnsIconList>;

export const Light: StoryType = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ padding: '20px', width: '300px' }}>
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
        <div style={{ padding: '20px', width: '300px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
