import React from 'react';
import { SnsIconList } from '.';
import type { StoryObj, Meta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';
import { colorPaletteMapKeyList } from '~/consts';

type StoryType = StoryObj<typeof SnsIconList>;

export default {
  title: 'Molecules/SnsIconList',
  component: SnsIconList,
  argTypes: {
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    colorName: 'subLabelColor',
  },
} as Meta<typeof SnsIconList>;

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
