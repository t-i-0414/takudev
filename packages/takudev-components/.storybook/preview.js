import * as React from 'react';
import { Parameters } from '@storybook/addons';
import { ColorTheme } from '../src/themes';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <ColorTheme>
      <Story />
    </ColorTheme>
  ),
];
