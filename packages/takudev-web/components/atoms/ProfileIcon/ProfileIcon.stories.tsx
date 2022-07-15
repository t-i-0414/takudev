import React from 'react';
import { ProfileIcon } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/ProfileIcon',
  component: ProfileIcon,
} as ComponentMeta<typeof ProfileIcon>;

const Template: ComponentStory<typeof ProfileIcon> = () => <ProfileIcon />;

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
