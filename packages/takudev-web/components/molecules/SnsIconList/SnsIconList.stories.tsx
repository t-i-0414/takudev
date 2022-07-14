import React from 'react';
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
    color: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof SnsIconList>;

const Template: ComponentStory<typeof SnsIconList> = args => (
  <div style={{ padding: '20px', width: '300px' }}>
    <SnsIconList {...args} />
  </div>
);

export const Light: ComponentStory<typeof SnsIconList> = Template.bind({});
Light.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
};

export const Dark: ComponentStory<typeof SnsIconList> = Template.bind({});
Dark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
};
