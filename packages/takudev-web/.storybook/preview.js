import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from './customViewports';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
  },
  layout: 'fullscreen',
};
