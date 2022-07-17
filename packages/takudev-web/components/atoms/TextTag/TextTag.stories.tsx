import React from 'react';
import { TextTag } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/TextTag',
  component: TextTag,
  argTypes: {
    text: {
      control: 'text',
    },
  },
  args: {
    text: 'TextTag',
  },
} as ComponentMeta<typeof TextTag>;

const Template: ComponentStory<typeof TextTag> = args => (
  <div style={{ display: 'flex', padding: '16px' }}>
    <TextTag {...args} />
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
