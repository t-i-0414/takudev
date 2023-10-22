import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from './customViewports';
import { withScreenshot } from 'storycap';

import '../src/styles/_global-story-book.scss';

export const decorators = [withScreenshot];

export const parameters: Preview['parameters'] = {
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
  screenshot: {
    viewports: {
      desktop: {
        width: 1200,
        height: 1080,
      },
      tablet: {
        width: 768,
        height: 1024,
        hasTouch: true,
      },
      mobile: {
        width: 375,
        height: 667,
        isMobile: true,
        hasTouch: true,
      },
    },
    omitBackground: true,
  },
};
