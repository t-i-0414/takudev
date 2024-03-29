import React from 'react';
import { colorPaletteMapKeyList } from '~/consts';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '../../../../.storybook/ColorThemeTemplates';
import { SnsIconList } from '.';
import type { StoryObj, Meta } from '@storybook/react';

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
