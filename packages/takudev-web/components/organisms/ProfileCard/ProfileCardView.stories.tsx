import React from 'react';
import { MENU_MODAL_ROOT_ELEMENT_ID } from '~/consts';
import { ProfileCard } from '.';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => <ProfileCard />;

export const Light: ComponentStory<typeof ProfileCard> = Template.bind({});
Light.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];

export const Dark: ComponentStory<typeof ProfileCard> = Template.bind({});
Dark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
