import * as React from 'react';

import { PageHeader } from './PageHeader';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/PageHeader',
  component: PageHeader,
};

export const Light = () => (
  <LightThemeTemplate>
    <PageHeader />
  </LightThemeTemplate>
);

export const Dark = () => (
  <DarkThemeTemplate>
    <PageHeader />
  </DarkThemeTemplate>
);
