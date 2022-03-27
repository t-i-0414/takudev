import React from 'react';

import { PageHeader } from './PageHeader';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Organisms/PageHeader',
  component: PageHeader,
};

export const Light = () => (
  <LightThemeTemplate>
    <PageHeader hrefToHome='#' />
  </LightThemeTemplate>
);

export const Dark = () => (
  <DarkThemeTemplate>
    <PageHeader hrefToHome='#' />
  </DarkThemeTemplate>
);
