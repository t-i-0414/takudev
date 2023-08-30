import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from './customViewports';

import '../src/styles/_global-story-book.scss';

const preview: Preview = {
  parameters: {
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
  },
};

export default preview;
