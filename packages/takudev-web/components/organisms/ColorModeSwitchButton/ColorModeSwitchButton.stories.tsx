import React from 'react';
import { ColorModeSwitchButton } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/ColorModeSwitchButton',
  component: ColorModeSwitchButton,
} as ComponentMeta<typeof ColorModeSwitchButton>;

const Template: ComponentStory<typeof ColorModeSwitchButton> = () => (
  <div style={{ backgroundColor: 'var(--header-color)' }}>
    <ColorModeSwitchButton />
  </div>
);

export const Light: ComponentStory<typeof ColorModeSwitchButton> =
  Template.bind({});
Light.decorators = [
  Story => (
    <LightThemeTemplate>
      <Story />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof ColorModeSwitchButton> = Template.bind(
  {},
);
Dark.decorators = [
  Story => (
    <DarkThemeTemplate>
      <Story />
    </DarkThemeTemplate>
  ),
];
