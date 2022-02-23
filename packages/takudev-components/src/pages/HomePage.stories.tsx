import * as React from 'react';

import { HomePage } from './HomePage';

import { ColorThemeTemplate } from '~/../.storybook/ColorThemeTemplate';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
};

export const Light = () => (
  <ColorThemeTemplate colorMode='light'>
    <HomePage />
  </ColorThemeTemplate>
);

export const Dark = () => (
  <ColorThemeTemplate colorMode='dark'>
    <HomePage />
  </ColorThemeTemplate>
);
