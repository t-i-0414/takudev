import React from 'react';

import { Logo } from './Logo';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

export const Light = () => (
  <LightThemeTemplate>
    <Logo href='#' />
  </LightThemeTemplate>
);

export const Dark = () => (
  <DarkThemeTemplate>
    <Logo href='#' />
  </DarkThemeTemplate>
);
