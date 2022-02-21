import * as React from 'react';

import { LightColorThemeTemplate, DarkColorThemeTemplate } from '~/templates';

import { HomePage } from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
};

export const Light = () => (
  <LightColorThemeTemplate>
    <HomePage />
  </LightColorThemeTemplate>
);

export const Dark = () => (
  <DarkColorThemeTemplate>
    <HomePage />
  </DarkColorThemeTemplate>
);
