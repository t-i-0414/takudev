import * as React from 'react';

import { Typography } from './Typography';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

export const Light = () => (
  <LightThemeTemplate>
    <Typography>Typography</Typography>
  </LightThemeTemplate>
);

export const Dark = () => (
  <DarkThemeTemplate>
    <Typography>Typography</Typography>
  </DarkThemeTemplate>
);
