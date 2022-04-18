import { action } from '@storybook/addon-actions';
import React from 'react';

import { CloseButton } from './CloseButton';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from 'storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/CloseButton',
  component: CloseButton,
};

export const Light = () => (
  <LightThemeTemplate>
    <CloseButton ariaLabel='ariaLabel' onClick={action('onClick')} />
  </LightThemeTemplate>
);

export const Dark = () => (
  <DarkThemeTemplate>
    <CloseButton ariaLabel='ariaLabel' onClick={action('onClick')} />
  </DarkThemeTemplate>
);
