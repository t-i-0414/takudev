import React from 'react';
import { TextTagList } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Molecules/TextTagList',
  component: TextTagList,
  argTypes: {
    tagList: {
      control: 'object',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
  },
  args: {
    tagList: ['one', 'two', 'three', 'four', 'five'],
  },
} as ComponentMeta<typeof TextTagList>;

const Template: ComponentStory<typeof TextTagList> = args => (
  <div style={{ display: 'flex', padding: '16px' }}>
    <TextTagList {...args} />
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
