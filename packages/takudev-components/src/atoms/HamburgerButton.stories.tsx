import { action } from '@storybook/addon-actions';
import React from 'react';

import { HamburgerButton } from './HamburgerButton';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/HamburgerButton',
  component: HamburgerButton,
};

export const Light = () => (
  <LightThemeTemplate>
    <HamburgerButton ariaLabel='ariaLabel' onClick={action('onClick')} />
  </LightThemeTemplate>
);

export const Dark = () => (
  <DarkThemeTemplate>
    <HamburgerButton ariaLabel='ariaLabel' onClick={action('onClick')} />
  </DarkThemeTemplate>
);
