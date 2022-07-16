import React from 'react';
import { colorPaletteMapKeyList } from '~/consts';
import { SnsIconList } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Molecules/SnsIconList',
  component: SnsIconList,
  argTypes: {
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    colorName: 'sublabelColor',
  },
} as ComponentMeta<typeof SnsIconList>;

const Template: ComponentStory<typeof SnsIconList> = args => (
  <div style={{ padding: '20px', width: '300px' }}>
    <SnsIconList {...args} />
  </div>
);

export const Light = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
